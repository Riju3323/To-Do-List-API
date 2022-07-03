const express = require('express');
const app = express;

const router = express.Router();


const {getAllTasks, createTask, getTask, updateTask, delTask} = require('../controllers/tasks.js')


// const getAllTask = ((req,res) =>{
//   res.send('get all task items');
// });

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(delTask);

module.exports = router;