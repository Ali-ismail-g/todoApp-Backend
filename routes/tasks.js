const express = require("express");
const taskController = require("../controller/todoController");
const router = express.Router();

//add new tasks
router.post("/add", taskController.addTask);
//get all tasks
router.get("/", taskController.getAllTasks);
//get task by ID
router.get("/:id", taskController.getTaskById);
//edit a task
router.put("/edit/:id", taskController.editTask);
//delete a task
router.delete("/delete/:id", taskController.deleteTask);
//search for a task
router.post("/search", taskController.searchForTask);

module.exports = router;
