const fs = require('fs');

const uang = JSON.parse(fs.readFileSync('./base de dados/datauser/uang.json'));
exports.sotoy = sotoy = JSON.parse(fs.readFileSync('./base de dados/data/sotoy.json'))
exports.daily = daily = JSON.parse(fs.readFileSync('./base de dados/data/diario.json'))
exports.prem = prem = JSON.parse(fs.readFileSync('./base de dados/datauser/premium.json'));
exports.ban = ban = JSON.parse(fs.readFileSync('./base de dados/datauser/banned.json'));
exports._level = _level = JSON.parse(fs.readFileSync('./base de dados/datauser/level.json'));
exports._registro = _registro = JSON.parse(fs.readFileSync('./base de dados/datauser/registered.json'));
exports.welcome = welcome = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/welcome.json'));
exports.antiflod = antiflod = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/_antiflod.json'));
exports.viewchat = viewchat = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/viewchat.json'));
exports._leveling = _leveling = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/leveling.json'));
exports.antilink = antilink = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/antilink.json'));
exports.antifaker = antifaker = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/antifaker.json'));
exports.palavrão = palavrão = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/palavrão.json'));
exports.autconversa = autconversa = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/autconversa.json'));
exports.palavra = palavra = JSON.parse(fs.readFileSync('./base de dados/lib/palavras.json'))
exports.totalhit = totalhit = JSON.parse(fs.readFileSync('./base de dados/lib/totalcmd.json'))
exports.outrasVariavel = outrasVariavel = JSON.parse(fs.readFileSync('./base de dados/lib/bot/arquivos/outrasVariavelNãoMexaAqui.js'))
exports.img2 = img2 = fs.readFileSync("./base de dados/lib/bot/fotos/tobi_lolizit.jpg");
exports.img3 = img3 = fs.readFileSync("./base de dados/lib/bot/fotos/login.mp4");

module.exports = { uang }