const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const fs = require('fs')
const JSZIP = require('jszip')
const fetch = require('node-fetch')

let db

// const zip = new JSZIP()
// zip.file('gugi.usdc', fs.readFileSync('gugi2/gugi.usdc'))
//   .file('0/USDLogoLrg.png', fs.readFileSync('public/usdpython_0/samples/assets/textures/island_bc.png'))
//   .generateAsync({type: 'nodebuffer', compression: 'STORE'})
//   .then(zipped => {
//     console.log(zipped.length)
//     fs.writeFileSync('gugi.usdz', zipped)
//   })

// Remember to change YOUR_USERNAME and YOUR_PASSWORD to your username and password! 
//MongoClient.connect('mongodb://comments-admin:qwer1234@ds047955.mongolab.com:47955/star-wars-quotes', (err, database) => {
MongoClient.connect('mongodb+srv://comments-admin:qwer1234@cluster0-sgcwv.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
  if (err) return console.log(err)
  db = database.db('comments')
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public', {
  setHeaders: function (res, path, stat) {
    if (path.endsWith('.usdz')) {
      res.type('model/vnd.usdz+zip')
    }
  }
}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*") // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/usdz.usdz', (req, res) => {
  fetch('http://www.firstlooksagency.com/wp-content/uploads/2016/10/NJMLSBillboard.png')
    .then(res => res.arrayBuffer())
    .then(imageData => {
      const zip = new JSZIP()
      zip.file('gugi.usdc', fs.readFileSync('gugi2/gugi.usdc'))
      .file('0/USDLogoLrg.png', imageData)
      .generateAsync({type: 'nodebuffer', compression: 'STORE'})
      .then(zipped => {
        res.type('model/vnd.usdz+zip')
        res.send(zipped)
      })
    })
})

app.get('/comments', (req, res) => {
  const {instanceId} = req.query
  const collection = db.collection('comments', {text: 1, createDate: 1})
  const countPromise = collection.count({instanceId})
  const itemsPromise = collection.find({instanceId}).sort({createDate: -1}).limit(10).toArray()
  
  Promise.all([countPromise, itemsPromise])
    .then(([count, items]) => {
      res.send({items, count})
    })
})

app.post('/comments', (req, res) => {
  db.collection('comments').save(req.body)
    .then(() => {
      console.log('saved to database')
      res.sendStatus(200)
  })
})

app.get('/comments/deleteAll', (req, res) => {
  const {instanceId} = req.query

  db.collection('comments', {}, function(err, contacts) {
    contacts.remove({instanceId}, function(err, result) {
        if (err) {
            console.log(err)
        }
        console.log(result)
        res.send('ok')
    })
  })
})
