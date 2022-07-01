//basic 
const express = require('express');
const app = express();

//page routes

app.get('/hello',(req,res)=>{
  res.send('Welcome to your Task Manager!!')
});


//port

const port = 4000;

app.listen(port, console.log(`Server is listening on Port ${port}!!`))