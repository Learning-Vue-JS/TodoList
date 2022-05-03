const router = require("express").Router();

const c = require("./controller");

router.route("/create").post(c.createTodo);
router.route("/get").get(c.getTodo);
router.route("/get/:id").get(c.getTodoById);
router.route("/update/:id").put(c.updateTodo);
router.route("/delete/:id").delete(c.deleteTodo);

module.exports = router;
