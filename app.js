//basic 
require("./db/connect")
const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');

app.use(express.json());

//page routes

app.get('/hello',(req,res)=>{
  res.send('Welcome to your Task Manager!!')
});

app.use('/api/v1/tasks',tasks)

//port

const port = 4000;

app.listen(port, console.log(`Server is listening on Port ${port}!!`))  