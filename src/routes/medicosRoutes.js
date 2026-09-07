const express = require('express');
const router = express.Router();

// Importamos o Controller (o atendente)
const medicosController = require('../controllers/medicosController');

// Quando alguém pedir a URL de médicos, o Controller responde
router.get('/medicos', medicosController.listarMedicos);

// Quando alguém pedir a URL de especialidades, o Controller responde
router.get('/especialidades', medicosController.listarEspecialidades);

module.exports = router;