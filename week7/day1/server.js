const express = require("express");



const app = express();



app.use(express.json());



let tasks = [

    { id: 1, title: "Learn Node.js", completed: false },

    { id: 2, title: "Learn Express", completed: false },

    { id: 3, title: "Build API", completed: true }

];



app.get("/", (req, res) => {

    res.send("<h1>Welcome to Task Management API</h1>");

});



app.get("/tasks", (req, res) => {

    res.json(tasks);

});



app.get("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);



    const task = tasks.find(task => task.id === id);



    if (!task) {

        return res.status(404).json({

            message: "Task not found"

        });

    }



    res.json(task);

});



app.post("/tasks", (req, res) => {

    const { title, completed } = req.body;



    const newTask = {

        id: tasks.length + 1,

        title: title,

        completed: completed ?? false

    };



    tasks.push(newTask);



    res.status(201).json({

        message: "Task created successfully",

        task: newTask

    });

});



app.put("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);



    const task = tasks.find(task => task.id === id);



    if (!task) {

        return res.status(404).json({

            message: "Task not found"

        });

    }



    const { title, completed } = req.body;



    if (title !== undefined) {

        task.title = title;

    }



    if (completed !== undefined) {

        task.completed = completed;

    }



    res.json({

        message: "Task updated successfully",

        task: task

    });

});



app.delete("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);



    const taskExists = tasks.some(task => task.id === id);



    if (!taskExists) {

        return res.status(404).json({

            message: "Task not found"

        });

    }



    tasks = tasks.filter(task => task.id !== id);



    res.json({

        message: "Task deleted successfully"

    });

});



app.listen(5000, () => {

    console.log("Server is listening on port 5000");

});