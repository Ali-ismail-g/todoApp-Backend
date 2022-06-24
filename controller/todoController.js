const Tasks = require("../model/tasks");

exports.addTask = (req, res) => {
  try {
    const {
      body: { id, title, description },
    } = req;
    let newTask = {
      id,
      title,
      description,
    };
    Tasks.push(newTask);
    res.send(Tasks);
  } catch (error) {
    console.error(error.message);
  }
};

exports.getAllTasks = (req, res) => {
  try {
    const data = Tasks.map((task) => task);
    res.json(data);
  } catch (error) {
    console.error(error.message);
  }
};

exports.getTaskById = (req, res) => {
  try {
    const id = req.params.id;
    const data = Tasks.filter((task) => task.id == id);
    res.json(data);
  } catch (error) {
    console.error(error.message);
  }
};

exports.editTask = (req, res) => {
  try {
    const {
      body: { title, description },
    } = req;
    const id = req.params.id;
    let editedTask = {
      id,
      title,
      description,
    };
    let index = Tasks.findIndex((task) => task.id == id);
    if (index !== -1) Tasks.splice(index, 1, editedTask);
    res.send(Tasks);
  } catch (error) {
    console.error(error.message);
  }
};

exports.deleteTask = (req, res) => {
  try {
    let id = req.params.id;
    let index = Tasks.findIndex((task) => task.id == id);
    if (index !== -1) Tasks.splice(index, 1);
    res.send(Tasks);
  } catch (error) {
    console.error(error.message);
  }
};

exports.searchForTask = (req, res) => {
  try {
    const {
      body: { title },
    } = req;
    let targetTask = Tasks.filter((task) => task.title === title);
    res.send(targetTask);
  } catch (error) {
    console.error(error.message);
  }
};
