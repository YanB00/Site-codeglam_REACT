const express = require('express');
const bcrypt = require('bcrypt'); // Para hashear a senha
const modelRegister = require('../model/modelRegister'); // Importe o modelo do salão

const router = express.Router();

/* ROTA DE REGISTRO DE SALÃO */
router.post('/register', async (req, res) => {
  let { nome, empresa, telefone, email, senha } = req.body;

  try {
    // Verificar se o email já existe
    const salaoExistente = await modelRegister.findOne({ where: { email } });
    if (salaoExistente) {
      return res.status(409).json({
        errorStatus: true,
        mensageStatus: 'Este e-mail já está cadastrado.',
      });
    }

    // Hash da senha antes de salvar no banco de dados
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds);

    const novoSalao = await modelRegister.create({
      nome,
      empresa,
      telefone,
      email,
      senha: senhaHash,
    });

    return res.status(201).json({
      errorStatus: false,
      mensageStatus: 'SALÃO REGISTRADO COM SUCESSO',
      data: {
        id_salao: novoSalao.id_salao,
        nome: novoSalao.nome,
        empresa: novoSalao.empresa,
        email: novoSalao.email,
      },
    });
  } catch (error) {
    console.error('Erro ao registrar salão:', error);
    return res.status(400).json({
      errorStatus: true,
      mensageStatus: 'HOUVE UM ERRO AO REGISTRAR O SALÃO',
      errorObject: error,
    });
  }
});



module.exports = router;