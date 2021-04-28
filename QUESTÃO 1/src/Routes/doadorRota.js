const { Router, request } = require("express");
const { validate } = require("../Validations/validations");
const { DoadorValidationRules } = require("../Validations/doadorValidations");
const Service = require("../Services/valorDoacaoServices");


const routes = Router();

routes.post("/", DoadorValidationRules(), validate, (request, response) => {
  const {valorDoacao,nomeInstituicao,cpfDoador,nomeDoador} = request.body;
  const Doador = {valorDoacao,nomeInstituicao,cpfDoador,nomeDoador};
  const retornoDoador = Service.ValidacaoDeRegras(Doador);
  return response.status(201).json({ retornoDoador });
});

module.exports = routes;