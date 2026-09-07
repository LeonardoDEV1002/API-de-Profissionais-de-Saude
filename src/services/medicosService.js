const fs = require('fs');
const path = require('path');

// Caminho absoluto até o arquivo JSON
const caminhoJson = path.join(__dirname, '../../data/medicos.json');

// Função para ler todos os médicos do arquivo JSON
function buscarTodosMedicos() {
  const dados = fs.readFileSync(caminhoJson, 'utf-8');
  return JSON.parse(dados);
}

// Função para buscar médicos com filtros (nome e especialidade)
function buscarMedicos(filtros = {}) {
  let medicos = buscarTodosMedicos();

  // 1. Filtro por especialidade (se informado na busca)
  if (filtros.especialidade) {
    medicos = medicos.filter(medico =>
      medico.especialidade.toLowerCase().includes(filtros.especialidade.toLowerCase())
    );
  }

  // 2. Filtro por nome (se informado na busca)
  if (filtros.nome) {
    medicos = medicos.filter(medico =>
      medico.nome.toLowerCase().includes(filtros.nome.toLowerCase())
    );
  }

  return medicos;
}

// Função para listar apenas as especialidades únicas (sem repetir)
function buscarEspecialidades() {
  const medicos = buscarTodosMedicos();
  // Pega todas as especialidades e remove duplicadas usando Set
  const especialidades = medicos.map(medico => medico.especialidade);
  return [...new Set(especialidades)];
}

module.exports = {
  buscarMedicos,
  buscarEspecialidades
};