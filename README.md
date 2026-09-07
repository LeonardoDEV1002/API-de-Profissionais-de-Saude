# 🩺 API de Profissionais de Saúde

API REST desenvolvida para consulta de disponibilidade de profissionais da clínica de saúde, com leitura de dados locais e suporte a filtros de busca.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** — Ambiente de execução JavaScript.
* **Express.js** — Framework para construção de rotas da API.
* **JSON** — Formato para armazenamento local dos dados dos médicos.

---

## 📁 Estrutura do Projeto

```text
meu-projeto-api/
│
├── data/
│   └── medicos.json          # Arquivo local com os registros dos médicos
│
├── src/
│   ├── controllers/          # Lógica de controle das requisições e respostas
│   │   └── medicosController.js
│   │
│   ├── routes/               # Mapeamento dos endpoints (rotas HTTP)
│   │   └── medicosRoutes.js
│   │
│   ├── services/             # Regras de negócio, leitura de arquivo e filtros
│   │   └── medicosService.js
│   │
│   └── app.js                # Configuração do servidor Express
│
├── README.md                 # Documentação do projeto
├── package.json              # Gerenciador de dependências
└── server.js                 # Ponto de entrada do servidor# API-de-Profissionais-de-Saude
