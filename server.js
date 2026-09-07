const app = require('./src/app');

// Definimos em qual "porta" do computador o servidor vai rodar
const PORTA = 3000;

app.listen(PORTA, () => {
  console.log(`🚀 Servidor rodando com sucesso em: http://localhost:${PORTA}`);
  console.log(`👉 Teste os médicos: http://localhost:${PORTA}/medicos`);
  console.log(`👉 Teste as especialidades: http://localhost:${PORTA}/especialidades`);
});