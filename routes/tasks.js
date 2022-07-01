const express = require('express');
const app = express;

const router = express.Router();

const getAllTask = ((req,res) =>{
  res.send('get all task items');
});

const createTask = ((req,res) => {
  res.send('all items');
});

router.route('/').get((req,res)=>{
  res.send('All Items');
});

