const { Schema, model } = require("mongoose");

const Todo = model("data", new Schema({ task: String, done: Boolean }));

module.exports = {
  createTodo: async (req, res) => {
    const { task, done } = req.body;
    const newTodo = new Todo({
      task,
      done,
    });
    try {
      const todo = await newTodo.save();
      return res.status(201).json(todo);
    } catch (error) {
      return res.status(500).json({ error: error.message || error });
    }
  },
  getTodo: async (_, res) => {
    try {
      const getir = await Todo.find();
      return res.status(200).json(getir);
    } catch (error) {
      return res.status(500).json({ error: error.message || error });
    }
  },
  getTodoById: async (_, res) => {
    const { id } = _.params;
    try {
      const getirByID = await Todo.findById(id).exec();
      return res.status(200).json(getirByID);
    } catch (error) {
      return res.status(500).json({ error: error.message || error });
    }
  },
  updateTodo: async (_, res) => {
    const { id } = _.params;
    const { task, done } = _.body;
    try {
      const updateByID = await Todo.findByIdAndUpdate(id, {
        task: task,
        done: done,
      }).exec();
      const getir = await Todo.find();

      return res.status(200).json(getir);
    } catch (error) {
      return res.status(500).json({ error: error.message || error });
    }
  },
  deleteTodo: async (_, res) => {
    const { id } = _.params;
    try {
      const deleteByID = await Todo.findByIdAndDelete(id).exec();
      const getir = await Todo.find();
      return res.status(200).json(getir);
    } catch (error) {
      return res.status(500).json({ error: error.message || error });
    }
  },
};
