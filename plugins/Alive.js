
const { cmd } = require("../lib/command");

cmd(
  {
    pattern: "alive",
    desc: "Check if the bot is active",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      pushname,
      reply,
    }
  ) => {
    try {
      // Alive message with details
      let aliveMessage = `🟢 **ᴋᴀᴠɪʏᴀ ᴍᴅ BOT** is **active**!  
Bot is online and functioning properly.

👤 **Owner**: KAVINDU
📱 **Contact Owner**: wa.me//+94705310919  

📢 **Join our official channels**:

🔹 **Tech Channel**:  
https://whatsapp.com/channel/0029Vb66eTH8qJ006EfBnx16

━━━━━━━━━━━━━━  
Powered by ᴋᴀᴠɪʏᴀ 𝙼𝙳`;

      // Send the Alive message with detailed info
      await robin.sendMessage(from, { text: aliveMessage }, { quoted: m });
    } catch (e) {
      console.log(e);
      reply(`Error: ${e.message}`);
    }
  }
);
