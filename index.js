const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 7000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

let task = [];

app.get("/", function (req, res) {
    let tasksToShow = task;

    if (req.query.priority) {
        const selected = req.query.priority;
        tasksToShow = task.filter(item => item.priority === selected);
    }

    res.render("list", { todos: tasksToShow });
});

app.post("/add", function (req, res) {
    const content = req.body.task;
    const level = req.body.priority || "low";

    if (!content.trim()) {
        return res.status(400).send("Task cannot be empty.");
    }

    task.push({
        task: content,
        priority: level,
        date: new Date()
    });

    res.redirect("/");
});

app.put("/edit", function (req, res) {
    const original = req.body.oldTask;
    const updated = req.body.newTask;
    const newLevel = req.body.newPriority;

    if (!updated.trim()) {
        return res.status(400).send("Updated task name is required.");
    }

    for (let index = 0; index < task.length; index++) {
        if (task[index].task === original) {
            task[index].task = updated;
            task[index].priority = newLevel;
            break;
        }
    }

    const levelMap = { low: 1, medium: 2, high: 3 };

    for (let index = 0; index < task.length - 1; index++) {
        for (let j = 0; j < task.length - i - 1; j++) {
            const a = levelMap[task[j].priority];
            const b = levelMap[task[j + 1].priority];

            if (a > b) {
                [task[j], task[j + 1]] = [task[j + 1], task[j]];
            }
        }
    }

    res.redirect("/");
});

app.delete("/delete", function (req, res) {
    const toRemove = req.body.task;
    task = task.filter(item => item.task !== toRemove);
    res.redirect("/");
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});

