const express = require('express');
const app = express();
const port = 5000;

const config = require('./config/key');
const { User } = require("./models/User");

app.use(express.urlencoded({extended: true})); // application/x-www-form-urlencoded
app.use(express.json()); //application/json

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

