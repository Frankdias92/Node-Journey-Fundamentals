## API de Listagem de Filmes com Tags Personalizadas


This documentation describes a custom tagged movie listing API that allows users to organize their movie collection, add personalized tags for easy searching, and edit or delete movie entries.

## Instalação (Installation)

1. Clone this repository and navigate to the `API-MOVIES` directory.
2. Install dependencies:

```bash
npm install
```

3. Run the following command to create database migrations:

```bash
npm run dev
```

This will create the necessary tables in your MySQL database. You can then connect to your database using a tool like Beekeeper Studio.

4. Run the following command to execute the migrations and set up the database:

```bash
npm run migration
```

## Tecnologias (Technologies)

* Node.js: JavaScript development environment.
* Express: Framework for creating RESTful APIs.
* Knex: Library for building SQL queries.
* MySQL: Relational database for data storage.

### Dependências (Dependencies)

| Pacote (Package) | Versão Atual (Latest Version) |
|---|---|
| Node.js | Recomendada versão LTS recente (Recommend a recent LTS version) |
| bcryptjs | 2.4.3 |
| express | 4.19.1 |
| express-async-errors | 3.1.1 |
| knex | 3.1.0 |
| nodemon | 3.1.0 |
| sqlite | 5.1.1 |
| sqlite3 | 5.1.7 |


## Endereços da API (API Endpoints)

* Listar filmes (List movies): `/api/movies`
* Adicionar filme (Add movie): `/api/movies`
* Buscar filme (Search movie):
    * `/api/movies/:id` (por ID / by ID)
    * `/api/filmes/search?nome=NOME` (por nome / by name)
    * `/api/filmes/search?tag=TAG` (por tag / by tag)
* Editar filme (Edit movie): `/api/movies/:id`
* Excluir filme (Delete movie): `/api/movies/:id`

## Requisições (Requests)

* Método HTTP (HTTP Method):
    * GET: Listar, buscar (List, search)
    * POST: Adicionar (Add)
    * PUT: Editar (Edit)
    * DELETE: Excluir (Delete)

* Headers:
    * Content-Type: application/json

* Body:
    * JSON object with movie data (name and tags) to add or edit

## Respostas (Responses)

### Código de Status (Status Code):

* 200: OK
* 201: Created (adicionar filme / add movie)
* 400: Bad Request
* 404: Not Found
* 500: Internal Server Error

### Body:

* JSON object with movie data (or list of movies)

## Exemplos (Examples)

### Listar filmes (List movies):

- **HTTP**
  - GET `/api/movies`

- **Response:**
  - JSON
  ```json
  [
    {
      "nome": "Blade Runner",
      "tags": ["ficção científica", "drama", "viagem no tempo"]
    },
    {
      "name": "Equalizer",
      "tags": ["aventura", "ação"]
    }
  ]
  ```

### Adicionar filme (Add movie):

- **HTTP**
  - POST `/api/movies`
  - Content-Type: application/json
  ```json
  {
    "nome": "Blade Runner",
    "tags": ["ficção científica", "drama", "viagem no tempo"]
  }
  ```

- **Response:**
  - JSON
  ```json
  {
    "nome": "Blade Runner",
    "tags": ["ficção científica", "drama", "viagem no tempo"]
  }
  ```

### Buscar filme por ID (Search movie by ID):

- **HTTP**
  - GET `/api/movies/2`

- **Response:**
  - JSON
  ```json
  {
    "id": 2,
    "name": "The Lion King",
    "tags": ["animação", "aventura", "família"]
  }
  ```

### Editar filme (Edit movie):

- **HTTP**
  - PUT `/api/filmes/2`
  - Content-Type: application/json

  ```json
    {
      "nome": "Equalizer",
      "tags": ["aventura", "ação"]
    }
  ```

- **Response:**
  - JSON

```json
    {
      "nome": "Equalizer",
      "tags": ["aventura", "ação"]
    }
```