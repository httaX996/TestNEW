/*
Plugin Author: *@DarkYasiya*
Follow Us: *https://whatsapp.com/channel/0029VaaPfFK7Noa8nI8zGg27*
*/

const config = require('../settings');
const { cmd } = require('../lib/command');
const DY_SCRAP = require('@dark-yasiya/scrap');
const dy_scrap = new DY_SCRAP();

function replaceYouTubeID(url) {
    const regex = /(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

cmd({
    pattern: "channel",
    alias: ["ytvoice", "ytauto"],
    react: "🎵",
    desc: "Download YouTube audio as PTT",
    category: "download",
    use: ".voice2 <Text or YT URL>",
    filename: __filename
}, async (conn, m, mek, { from, q, reply }) => {
    try {
        if (!q) return await reply("❌ Please provide a YouTube URL or song name!");

        let id = q.startsWith("https://") ? replaceYouTubeID(q) : null;

        if (!id) {
            const searchResults = await dy_scrap.ytsearch(q);
            if (!searchResults?.results?.length) return await reply("❌ No results found!");
            id = searchResults.results[0].videoId;
        }

        const data = await dy_scrap.ytsearch(`https://youtube.com/watch?v=${id}`);
        if (!data?.results?.length) return await reply("❌ Failed to fetch video!");

        const { url, title, image, timestamp, ago, views } = data.results[0];

        const msgInfo =  `\`〲🎶𝙽𝙾𝚆 𝚄𝙿𝙻𝙾𝙰𝙳𝙸𝙽𝙶...㋞||☝\`

✭ ║𝚄𝚁𝙻     : ${url}
➣ ║𝚃𝙸𝙼𝙴    : ${timestamp || "Unknown"}
✭ ║𝚄𝙿𝙻𝙾𝙰𝙳  : ${ago || "Unknown"}
➣ ║𝚅𝙸𝙴𝚆𝚂◱  : ${views?.toLocaleString() || "Unknown"}

> #ιтz мє кανιуα㋛☚

*ඔයාගෙ ආසම සින්දු අහන්න සෙට් වෙලා ඉන්න...😚💖*
> *нєα∂ρнσηє O𝚗 ƒєєℓ 𝚃𝙷𝙴 яєαℓ 𝚅𝙸𝙱𝙴!*

* \`αℓℓ мυѕι¢ ρℓαу ℓιѕт\`👇
_https://whatsapp.com/channel/0029Vb3mqn5H5JLuJO3s3Z1J/3386_`;

        await conn.sendMessage(from, { image: { url: image }, caption: msgInfo }, { quoted: mek });
        await conn.sendMessage(from, { react: { text: '⬇️', key: mek.key } });

        const response = await dy_scrap.ytmp3(`https://youtube.com/watch?v=${id}`);
        const downloadUrl = response?.result?.download?.url;

        if (!downloadUrl) return await reply("❌ Download link not found!");

        await conn.sendMessage(from, {
            audio: { url: downloadUrl },
            mimetype: "audio/mpeg",
            ptt: true
        }, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        await reply(`❌ *Error occurred:* ${error.message || "Unknown error"}`);
    }
});
