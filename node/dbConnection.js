/* mongoose.js */
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kimminwoo:1234@cluster0.lnk7l3i.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', ()=>{
  console.log('DB connected');
});

const userSchema = mongoose.Schema({
  id: String,
  pass: Number,
  name : String,
  email : String,
  nickname : String,
  phone : String
});


const user = mongoose.model('users', userSchema);



module.exports = user;

//var silence = new user({ id: 'Silence', pass: 3 });
//silence.save();
//var adam = new user({ id: 'Adam', pass: 1 });
//adam.save();
//var ross = new user({ id: 'Ross', pass: 5 });
//ross.save();