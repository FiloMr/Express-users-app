const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});

app.get("/", function (req, res) {
  res.send("hello world");
});

const posts = require('./routes/posts');
app.use('/posts', posts);

app.listen(8080, () => {
  console.log("conncected");
});
