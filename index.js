const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let todos = [];
app.get("/", function(req, res){
    let filteredTodos = todos;
    if (req.query.priority) {
        filteredTodos = todos.filter(todo => todo.priority === req.query.priority);
    }
    res.render("list", { todos: filteredTodos });
});


app.post("/add", function(req, res){
    const task = req.body.task;
    const priority = req.body.priority || "low";

    if (!task) return res.status(400).send("Task name required");

    todos.push({
        task,
        priority,
        date: new Date()
    });

    res.redirect("/");
});

app.post("/delete", function(req, res){
    const taskToDelete = req.body.task;
    todos = todos.filter(todo => todo.task !== taskToDelete);
    res.redirect("/");
});

app.post("/edit", function(req, res){
    const oldTask = req.body.oldTask;
    const newTask = req.body.newTask;
    const newPriority = req.body.newPriority;

    if (!newTask) return res.status(400).send("Task name required");

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].task === oldTask) {
            todos[i].task = newTask;
            todos[i].priority = newPriority;
            break;
        }
    }

    res.redirect("/");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});
