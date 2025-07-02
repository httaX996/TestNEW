const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'KAVIYA-MD~bhB2yAqa#qZ4_8jxHHK40o8s2BxrMC_qs1ouGDWdzCB8-KhiycEg',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgresql://postgres:mQIupvWlkxQkvRlXNphQinHDiUZBRuds@caboose.proxy.rlwy.net:25715/railway',
OWNER_NUMBER: process.env.OWNER_NUMBER || '94705310919', 
PREFIX:  process.env.PREFIX || ['.'] ,
LOGO: process.env.LOGO || `https://imgur.com/a/aRAoEaR`,
OWNER_REACT: process.env.OWNER_REACT || 'true',
AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || "true",
ANTI_CALL: process.env.ANTI_CALL || "true"
};
