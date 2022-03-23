//const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const FormData = require('form-data')
const axios = require("axios")
const cheerio = require("cheerio")
const qs = require('qs')
const fromBuffer = require('file-type')
function upload (media)  {
    return new Promise(async (resolve, reject) => {
    try {
        let { ext } = await fromBuffer(media)
        console.log('Enviando imagem para o servidor telegra.ph')
        let form = new FormData()
        form.append('file', media, 'tmp.' + ext)
        await fetch('https://telegra.ph/upload', {
            method: 'POST',
            body: form
        })
        .then(res => res.json())
        .then(res => {
            if (res.error) return reject(res.error)
            resolve('https://telegra.ph' + res[0].src)
        })
        .catch(err => reject(err))
    } catch (e) {
        return console.log(e)
    }
})
}

module.exports.upload = upload