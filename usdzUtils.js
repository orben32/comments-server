const fs = require('fs')
const JSZIP = require('jszip')
const Jimp = require('jimp')

const createFromImage = imageData => Jimp.read(imageData)
  .then(image => image.getBufferAsync(Jimp.MIME_PNG))
  .then(imageData => {
    const zip = new JSZIP()
    zip.file('gugi.usdc', fs.readFileSync('gugi2/gugi.usdc'))
    .file('0/USDLogoLrg.png', imageData)
    .generateAsync({type: 'nodebuffer', compression: 'STORE'})
})

module.exports = {
  createFromImage
}