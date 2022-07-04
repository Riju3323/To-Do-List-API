//basic  
const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect');


app.use(express.json());

//page routes

app.get('/hello',(req,res)=>{
  res.send('Welcome to your Task Manager!!')
});

app.use('/api/v1/tasks',tasks)

//port

const port = 4000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`Server is listening on Port ${port}!!`)) 
  } catch (error) {
    console.log(error);
  }
}

start();