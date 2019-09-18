const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

let db

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
app.use(express.static('public'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/comments', (req, res) => {
  const {instanceId} = req.query;
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

app.get('/comments/count', (req, res) => {
  console.log('count');
  const {instanceId} = req.query;
  
  db.collection('comments').find({instanceId}).count(function (e, count) {
    console.log(count)
    res.send({count})
  });
})


app.get('/comments/deleteAll', (req, res) => {
  const {instanceId} = req.query;

  db.collection('comments', {}, function(err, contacts) {
    contacts.remove({instanceId}, function(err, result) {
        if (err) {
            console.log(err)
        }
        console.log(result)
        res.send('ok')
    });
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({name: req.body.name}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('A darth vadar quote got deleted')
  })
})
