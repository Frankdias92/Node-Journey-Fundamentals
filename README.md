## NodeJS API Study Repository

**Description:**

This repository is dedicated to studying and applying APIs in NodeJS. Here, you will find various projects that explore different functionalities and technologies, such as:

* **Movie Listing API with Custom Tags:** Allows you to manage your favorite movie list, including adding, editing, and searching by name or tag.
* **Comment Management API:** Provides endpoints for creating, reading, updating, and deleting comments, with support for filtering and pagination.
* **Simple CRUD API:** Demonstrates basic CRUD (Create, Read, Update, Delete) operations on a MySQL database.

**Installation:**

Each project within the repository has specific installation instructions. Navigate to the desired API folder and follow the instructions in the README.md file.

**Usage:**

The documentation for each API is available in the README.md file inside the project folder. You will find information on how to use the API, including examples of requests and responses.

**Technologies:**

The APIs in this repository were developed using the following technologies:

* Node.js
* Express
* Nodemon
* sqlite
* sqlite3
* Knex
* bcryptjs

**Contributing:**

This repository is open to contributions! If you wish to collaborate, feel free to submit pull requests with bug fixes, new features, or documentation improvements.

**License:**

All APIs in this repository are distributed under the MIT license.

**Example:**

**Movie Listing API with Custom Tags:**

* **Endpoint:** `/api/movies`
* **Method:** GET
* **Description:** Returns a list of movies, which can be filtered by name or tag.
* **Request Example:**

```
GET /api/movies?nome=Blade%20Runner
```

* **Response Example:**

```json
[
  {
    "nome": "Blade Runner",
    "tags": ["science fiction", "drama", "time travel"]
  },
  ...
]
```

**Other Projects:**

Explore the other projects in this repository to learn more about APIs in NodeJS and different web technologies.

**I hope this repository is useful for your studies and development of APIs in NodeJS!**