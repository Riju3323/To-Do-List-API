const { model } = require("mongoose");

const getAllTasks = (req,res) => {
  res.send("Get Tasks");
}

const createTask = ((req,res) => {
  res.json(req.body);
});

const getTask = ((req,res) => {
  res.json({id:req.params.id})
});

const updateTask = ((req,res) => {
  res.send('update items'); 
});

const delTask = ((req,res) => {
  res.send('delete items');
}); 

module.exports = {
  getAllTasks, createTask, getTask , updateTask, delTask
};