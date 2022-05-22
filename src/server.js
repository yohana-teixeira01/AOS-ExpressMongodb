import express from "express";
import mongoose from "mongoose";
import Extras from "./model/Extras.js";

import 'dotenv/config'
import DadosPessoais from "./model/DadosPessoais.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/dadosPessoais", async (req, res) => {
    const {name,description,about,linkLinkedin,nomeEmpresa,extra,situacao,tipoDeEmprego,periodo,nomeInstituicao,curso,area,dataInicio,dataFim} = req.body

    const dadosPessoais = {name,description,about,linkLinkedin,nomeEmpresa,extra,situacao,tipoDeEmprego,periodo,nomeInstituicao,curso,area,dataInicio,dataFim}

    try {
        await DadosPessoais.create(dadosPessoais)
        res.status(201).json({dadosPessoais})
    }catch (error){
        res.status(500).json({error:error})
    }
});

app.get("/dadosPessoais", async (req, res) =>{

    try{
        const dadosPessoais = await DadosPessoais.find()
         return res.json(dadosPessoais)
    }catch (error){
        res.status(500).json({error:error})
    }
});

app.post("/Extras", async (req, res) => {
    const {title, local, area, initialDate, endDate, description, tag} = req.body

    const extras = {title, local, area, initialDate, endDate, description, tag}

    try {
        await Extras.create(extras)
        res.status(201).json({extras})
    }catch (error){
        res.status(500).json({error:error})
    }
});

app.get("/Extras", async (req, res) =>{

    try{
        const extras = await Extras.find()
        res.json(extras)
    }catch (error){
        res.status(500).json({error:error})
    }
});

<<<<<<< HEAD
mongoose.connect(process.env.MONGO_URI)
=======
mongoose.connect("mongodb+srv://yohanateixeira:3mGc637kDtaZatoD@express-mongodb.usgf9.mongodb.net/Express-Mongodb?retryWrites=true&w=majority")
>>>>>>> 0a30826650f01d666eb8f752c669da04199b2631
    .then(()=>{
        console.log("Conectou no Banco!")
        app.listen(3000,() => console.log("Servidor Rodando!"))
    })
    .catch((error)=> console.log(error))
