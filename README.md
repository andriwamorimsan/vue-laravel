# 🧪 Teste Técnico - Desenvolvedor(a) Full Stack (Vue.js + Laravel)

## 📌 Objetivo

Criar um aplicativo web com **Vue.js** no front-end e **Laravel** no back-end, realizando operações CRUD de **usuários** e **produtos**. O foco deste teste é avaliar sua capacidade de construir aplicações modernas com boas práticas de desenvolvimento, organização de código, modelagem de dados e escrita de consultas SQL.

## 📑 Sumário

- [Tecnologias](#tecnologias)
- [Requisitos](#requisitos)
  - [Funcionais](#funcionais)
  - [Técnicos](#técnicos)
- [Requisitos Opcionais](#requisitos-opcionais-diferenciais)
- [Avaliação da Escrita de SQL](#avaliação-da-escrita-de-sql)
- [Entrega](#entrega)
- [Critérios de Avaliação](#critérios-de-avaliação)
- [Dúvidas](#dúvidas)

---

## 🚀 Tecnologias

### Obrigatórias

- **Front-end**
  - Vue.js (versão 2 ou 3)
  - Vuetify
  - Axios

- **Back-end**
  - PHP (versão 7.4+ ou 8+)
  - Laravel (versão 8+)

- **Banco de Dados**
  - PostgreSQL

---

## 📋 Requisitos

### Funcionais

#### 1. CRUD de Usuários
- Operações de **criar**, **listar**, **editar** e **excluir** usuários.
- Interface responsiva utilizando Vuetify.
- Os campos obrigatórios de um usuário são:
  - `nome` (string)
  - `cpf` (formato válido)
  - `email` (formato válido e único)
  - `senha` (mínimo de 6 caracteres)

#### 2. Relacionamento com Produtos
- Crie uma nova entidade **Produto**, com os campos:
  - `nome` (string, obrigatório)
  - `preco` (decimal positivo, obrigatório)
  - `descricao` (opcional)
- Um **usuário pode ter múltiplos produtos** (relação 1:N).
- A interface deve permitir visualizar os produtos relacionados a um usuário específico.

### Técnicos

- Validação de dados no back-end com mensagens claras em caso de erro.
- As respostas devem ser em **JSON** com status HTTP apropriado.
- Utilize **migrations**, **seeders** e **Eloquent Models** corretamente.
- Utilize **Axios** para as chamadas HTTP no front-end.

---

## 💡 Requisitos Opcionais (diferenciais)

Será um grande diferencial para nós avaliarmos algumas habildiades a mais que você possa possuir:

- Criar o projeto com estrutura **dockerizada** usando `docker-compose` (serviços: app, db).
- Testes automatizados (PHPUnit).
- Autenticação básica (Laravel Sanctum, JWT etc).
- Paginação e filtros na listagem de usuários.
- Organização do código com boas práticas (arquitetura, nomenclatura, separação de responsabilidades).

---

## 🧠 Avaliação da Escrita de SQL (Opcional)

Será um grande diferencial para nós avaliarmos sua escrita de SQL, para isso, você pode seguir uma dessas abordagens abaixo:

1. **Mini relatório**  
   - Crie uma rota `GET /relatorio-sql` (**apenas no backend**) que retorne, por exemplo, todos os usuários e seus produtos, junto com a quantidade total de produtos e média de preço dos mesmos.
   - O relatório deve ser criado em **SQL puro** (_raw query_), usando `DB::select(...)`, por exemplo.

2. **Arquivo Separado**  
   - Inclua no projeto um arquivo em `backend/database/consultas.sql` com pelo menos 2 das queries SQL abaixo:
     - Query A: Listar os usuários com mais produtos.
     - Query B: Buscar o produto mais caro por usuário.
     - Query C: Exibir a quantidade de produtos por faixa de preço.

---

## 📦 Entrega

- **Prazo:** até 7 dias corridos após o recebimento.
- **Forma de entrega:** envie o link de um repositório público no GitHub.
- Inclua um arquivo `README.md` com instruções claras para instalação e execução, incluindo:
- Esta é a estrutura de arquivos esperada para a entrega:

```bash
/seu-repositorio
├── frontend/
│ ├── vue.config.js
│ ├── package.json
│ ├── src/
│
├── backend/
│ ├── app/
│ ├── database/
│ ├── routes/
```

---

## ✅ Critérios de Avaliação

- Clareza, organização e estrutura do código
- Cumprimento dos requisitos obrigatórios
- Boas práticas de desenvolvimento (nomenclatura, componentização, etc.)
- Capacidade de modelagem de dados e escrita de SQL
- Criatividade e uso de diferenciais opcionais

---

## ❓Dúvidas

Caso tenha dúvidas sobre o teste, sinta-se a vontade para questionar no contato na qual enviou-lhe este teste. 

Boa sorte! 🍀
