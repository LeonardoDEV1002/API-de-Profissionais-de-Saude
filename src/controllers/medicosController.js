// Importamos o Service que criamos no passo anterior
const medicosService = require('../services/medicosService');

// Controlador para listar médicos com ou sem filtros
function listarMedicos(req, res) {
  try {
    // Pegamos os filtros que vêm da URL (ex: /medicos?nome=Ana&especialidade=Endocrinologia)
    const { nome, especialidade } = req.query;

    // Chamamos o Service passando os filtros
    const medicos = medicosService.buscarMedicos({ nome, especialidade });

    // Retornamos os médicos encontrados com status 200 (Sucesso)
    return res.status(200).json(medicos);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao buscar médicos." });
  }
}

// Controlador para listar apenas as especialidades
function listarEspecialidades(req, res) {
  try {
    const especialidades = medicosService.buscarEspecialidades();
    return res.status(200).json(especialidades);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro ao buscar especialidades." });
  }
}

module.exports = {
  listarMedicos,
  listarEspecialidades
};