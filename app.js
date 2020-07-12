const mongoose = require('mongoose');
const db = require('./configs/mongodb').mongoURI;
mongoose.connect(db, 
{ 
useFindAndModify: false, 
useNewUrlParser:true })
.then(()=>console.log('MongoDB connected')).catch(err=>console.log(err));