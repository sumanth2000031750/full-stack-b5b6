const express = require('express')
const data = require('./data.json')
const app = express()
var cors = require('cors')

app.use(cors())


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/products', function (req, res) {
    res.send(data)
})


app.get('/sum', function (req, res) {
    console.log(req.query);

    let one = req.query.numone;
    let two = req.query.numtwo;


    res.send(one + two)
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})



/*

   GET
   POST
   PUT
   DELETE
   PATCH

*/
