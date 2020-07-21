const fs = require('fs');
const { getUserMessages } = require('./korlevel.util');

const messageTemplate = fs.readFileSync('./message.txt').toString();
const personData = fs.readFileSync('./cim-adatbazis.txt').toString();

const userMessages = getUserMessages(personData, messageTemplate);
fs.writeFileSync('./newmessage.txt', userMessages, 'utf8');


