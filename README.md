# 🩺 API de Profissionais de Saúde

API REST desenvolvida para consulta de disponibilidade de profissionais de uma clínica de saúde, com leitura de dados locais em formato JSON e suporte a filtros dinâmicos de busca.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** — Ambiente de execução JavaScript no servidor.
* **Express.js** — Framework web minimalista para criação de rotas e APIs REST.
* **JSON** — Formato para armazenamento local da base de dados de profissionais.

---

## 💻 Como Baixar e Instalar o Projeto

Siga o passo a passo abaixo para clonar o repositório, instalar as dependências e executar o projeto em sua máquina local.

### 1. Pré-requisitos

Certifique-se de ter instalado em seu computador:
* **[Git](https://git-scm.com/)**
* **[Node.js](https://nodejs.org/)** (Versão 18 ou superior)

### 2. Clonar o Repositório

Abra o terminal (Prompt de Comando, PowerShell ou Terminal do VS Code) e execute o comando:

```bash
git clone https://github.com/LeonardoDEV1002/API-de-Profissionais-de-Saude.git
```

### 3. Acessar a Pasta do Projeto

```bash
cd API-de-Profissionais-de-Saude
```

### 4. Instalar as Dependências

Execute o comando abaixo para instalar as bibliotecas necessárias (como o `express`):

```bash
npm install
```

> **Nota:** Se você estiver recriando o projeto do zero sem o arquivo `package.json`, certifique-se de executar `npm init -y` antes do `npm install express`.

---

## 🚀 Como Executar a Aplicação

Com as dependências instaladas, inicie o servidor com o comando:

```bash
node server.js
```

Se tudo estiver correto, você verá no terminal:
```text
🚀 Servidor rodando em: http://localhost:3000
👉 Teste os médicos: http://localhost:3000/medicos
👉 Teste as especialidades: http://localhost:3000/especialidades
```

---

## 📁 Estrutura do Projeto

```text
API-de-Profissionais-de-Saude/
│
├── data/
│   └── medicos.json          # Arquivo local com os 100 registros dos médicos
│
├── src/
│   ├── controllers/          # Trata as requisições HTTP e envia respostas
│   │   └── medicosController.js
│   │
│   ├── routes/               # Mapeamento dos endpoints (caminhos da API)
│   │   └── medicosRoutes.js
│   │
│   ├── services/             # Regras de negócio, leitura de arquivo e lógica de filtros
│   │   └── medicosService.js
│   │
│   └── app.js                # Configuração do servidor Express e middlewares
│
├── .gitignore                # Arquivo para ignorar a pasta node_modules no Git
├── README.md                 # Documentação completa do projeto
├── package.json              # Arquivo de configuração e dependências do Node
└── server.js                 # Ponto de entrada (start) do servidor
```

---

## 📌 Endpoints da API e Como Testar

### 1. Listar Médicos e Aplicar Filtros
* **Rota:** `GET /medicos`
* **Descrição:** Retorna a lista completa de médicos ou aplica filtros dinâmicos via parâmetros de busca (`query params`).

| Parâmetro (`Query`) | Tipo | Descrição | Exemplo de URL |
| :--- | :--- | :--- | :--- |
| *Nenhum* | - | Lista todos os 100 médicos | `http://localhost:3000/medicos` |
| `nome` | `string` | Busca por nome parcial do médico | `http://localhost:3000/medicos?nome=Ana` |
| `especialidade` | `string` | Filtra por especialidade | `http://localhost:3000/medicos?especialidade=Endocrinologia` |

* **Exemplo de busca combinada (Nome + Especialidade):**
  ```text
  http://localhost:3000/medicos?especialidade=Endocrinologia&nome=Ana
  ```

---

### 2. Listar Especialidades
* **Rota:** `GET /especialidades`
* **Descrição:** Retorna uma lista contendo todas as especialidades médicas cadastradas, sem repetições.
* **Exemplo de URL:** `http://localhost:3000/especialidades`

---

## 📋 Funcionalidades Implementadas

- [x] **Leitura de arquivo local:** Leitura assíncrona/síncrona do arquivo `medicos.json`.
- [x] **Listagem de profissionais e especialidades:** Exibição completa de dados e agrupamento de especialidades sem duplicatas.
- [x] **Filtros avançados:** Busca case-insensitive por nome parcial e por especialidade.

---

## 👤 Autor

Desenvolvido por **Leonardo** — Estudante de Análise e Desenvolvimento de Sistemas (ADS).
* GitHub: [@LeonardoDEV1002](https://github.com/LeonardoDEV1002)
