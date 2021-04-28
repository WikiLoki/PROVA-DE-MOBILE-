const { body, validationResult } = require("express-validator");
const { validarCPF } = require("../Validations/cpfValidations");

const DoadorValidationRules = () => {
  return [
    body("CPF").notEmpty().withMessage("CPF por favor"),
    body("nomeDoador").notEmpty().withMessage("Nome do doador por favor"),
    body("nomeInstituicao").notEmpty().withMessage("Nome da instituição por favor"),
    body("CPF")
    .custom((value) => {
      if (!validarCPF(value)) throw new Error("CPF é inexistente!");
      return true;
    })
    .withMessage("CPF inválido")
    
  ];
};

module.exports = {
  DoadorValidationRules,
};