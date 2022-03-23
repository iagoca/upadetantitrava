const cheerio = require('cheerio')
const axios = require("axios");

function mh(pesquisa) {
return new Promise(async(resolve, reject) => {
axios.get('https://www.hqdesexo.com/pesquisa/?q=' + pesquisa)
.then(html => {
const $ = cheerio.load(html.data)
let post = []
$(".listamaster").each(function(a, b) {
let linkDaPagina = $('.thumb').find('a').attr("href");
let nomePesquisado = $('.thumb').find('a').attr("title");
let descrPesquisado = $('.infothumb').find('p').text();
//let dados = `Nome: ${nomePesquisado}\n\nLink: ${linkDaPagina}`
post.push(dados)
})
resolve({result: post})
})
})
}

module.exports = mundohentai