import express from "express";
import mongoose from "mongoose";
import Task from "./model/Task.js";

const app = express();

app.use(express.json());

app.post("/task", async (req, res) => {
    const {title, description, done} = req.body

    const task = {title, description, done}

    try {
        await Task.create(task)
        res.status(201).json({message:"Tarefa cadastrada com sucesso!"})
    }catch (error){
        res.status(500).json({error:error})
    }
});

app.get("/task", async (req, res) =>{

    try{
        const tasks = await Task.find()
        res.json(tasks)
    }catch (error){
        res.status(500).json({error:error})
    }
});

mongoose.connect("mongodb+srv://yohanateixeira:3mGc637kDtaZatoD@express-mongodb.usgf9.mongodb.net/Express-Mongodb?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Conectou no Banco!")
        app.listen(3000,() => console.log("Servidor Rodando!"))
    })
    .catch((error)=> console.log(error))
