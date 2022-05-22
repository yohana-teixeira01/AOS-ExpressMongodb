import mongoose from "mongoose";

const DadosPessoais = mongoose.model("dadosPessoais", {
    name: String,
    description:String,
    about: String,
    linkLinkedin: String,
    nomeEmpresa: String,
    extra: String,
    situacao: String,
    tipoDeEmprego: String,
    periodo: String,
    nomeInstituicao: String,
    curso: String,
    area: String,
    dataInicio: String,
    dataFim: String,
})


export default DadosPessoais;