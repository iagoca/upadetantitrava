
const cheerio = require('cheerio')
const axios = require("axios");

function mundohentai(pesquisa) {
return new Promise(async(resolve, reject) => {
axios.get('https://www.hqdesexo.com/pesquisa/?q=' + pesquisa)
.then(html => {
const $ = cheerio.load(html.data)
let post = []
$(".listamaster").each(function(a, b) {
	

let link = $('.thumb').find('a').attr("href");

let nome = $('.thumb').find('a').attr("title");

let desc = $('.infothumb').find('p').text();

//let dados = `Nome: ${nomePesquisado}\nLink: ${linkDaPagina}\nDescrição: ${descrPesquisado}`

let dados = {
nome: nome, 
link: link,
desc: desc,
}

post.push(dados)

})

resolve({result: post})

})
})
}
/*
mh('minha irmã')
.then(console.log)
*/
module.exports = mundohentai