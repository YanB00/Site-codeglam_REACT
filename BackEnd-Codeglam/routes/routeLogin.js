const express = require('express');
const bcrypt = require('bcrypt');
const modelRegister = require('../model/modelRegister'); 

const router = express.Router();

/* ROTA DE LOGIN */
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verificar se o email existe no banco de dados
    const salao = await modelRegister.findOne({ where: { email } });

    if (!salao) {
      return res.status(401).json({
        errorStatus: true,
        mensageStatus: 'Credenciais inválidas.',
      });
    }

    // Comparar a senha fornecida com a senha hash armazenada
    const senhaCorreta = await bcrypt.compare(senha, salao.senha);

    if (senhaCorreta) {
      return res.status(200).json({
        errorStatus: false,
        mensageStatus: 'Login realizado com sucesso!',
        data: {
          id_salao: salao.id_salao,
          nome: salao.nome,
          empresa: salao.empresa,
          email: salao.email,
        },
      });
    } else {
      return res.status(401).json({
        errorStatus: true,
        mensageStatus: 'Credenciais inválidas.',
      });
    }
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return res.status(500).json({
      errorStatus: true,
      mensageStatus: 'Houve um erro ao realizar o login.',
      errorObject: error,
    });
  }
});

module.exports = router;