const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'KAVIYA-MD~flhmiDhT#Hu6kCLSXBUIaATxZwNA3B805I-QpXv3h4XXHoHHs320g',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgresql://postgres:mQIupvWlkxQkvRlXNphQinHDiUZBRuds@caboose.proxy.rlwy.net:25715/railway',
OWNER_NUMBER: process.env.OWNER_NUMBER || '94779510013', 
PREFIX:  process.env.PREFIX || ['.'] ,
LOGO: process.env.LOGO || `https://imgur.com/a/aRAoEaR`,
OWNER_REACT: process.env.OWNER_REACT || 'true',
AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || "false",
ANTI_CALL: process.env.ANTI_CALL || "true"
};
