# Conhecendo o NODE JS
** O que é uma API?

** O que é o Node.Js?

v8 engine?

# Criando uma aplicação Node


# SQL
** O que é um banco de dados?

** Estrutura de um banco de dados

** Conectando com o banco de dados



(GET, POST, PUT, DELETE, PATCH)

Como utilizar os Route Params utilizando recursos e parâmetros em nossa Rota

Query Params e como utilizar e qual a diferença dele para o Route Params.



UsersController =>
/* 
   Index - GET para listar vários registros
   show - GET para exibir um registro especifico.
   create - POST para criar um registro
   update - PUT para atualizar um registro
   delete - DELETE para remover um registro 
 */


 utilizando o Middleware

  <!-- linguagem padrão para banco de dados relacionais -->
 # SQL =>
  Um banco de dados relacional armazena os dados em formatos similares a tabelas, com as quais é possível construir relações entre si, facilitando a inserção e a recuperação das informações.

Sistemas de banco de dados que usam SQL:
- Oracle Database
- MySQL
- SQL Server
- PostegreSQL

  SGBD - Sistema Gerenciador de Bancos de Dados
  : beekeeper Studio

comandos DML (Data Manipulation Language)

Vejamos a seguir quais são esses conjuntos com exemplos que apresentam os seus comandos mais utilizados.

DDL - Data Definition Language - Conjunto de comandos que lidam com os objetos, criando bancos de dados, esquemas, tabelas, campos, etc.
CREATE, ALTER, DROP

DML - Data Manipulation Language - Os comandos aqui lidam com os dados.
INSERT, UPDATE, DELETE

## O que é Query Builder ?
De forma resumida: São lib's ou pacotes que executam comandos SQL através de métodos ou funções.

Query Builder são uma alternativa muito interessante, basicamente eles compõem um conjunto de funções escritas em uma linguagem x e que representam os comandos nativos do SQL. No geral o query builder estão um nível a cima na camada de abstração em comparação com o Raw SQL, mas afinal como isso me ajuda 🤔?

### Migration 
A Migration serve para vocẽ gerenciar a estrutura das tabelas do banco de dados da sua aplicação, ou seja, através dela é possível incluir, alterar e excluir tabelas ou campos de determinada tabela, de uma forma organizada, deixando todas essas alterações documentadas e evitando que você a faça manualmente.

Para fazer uma migração é preciso gerar um arquivo migrate, e dentro dele, colocamos uma ou mais alterações que precisam ser feitas no nosso banco de dados, e quando vocẽ rodar essa migração, essas alterações serão feitas automaticamente.

As migrações são enumeradas de forma crescente, e é possível voltar ao número desejado, ou seja, você pode desfazê-la a qualquer momento, e voltar o seu banco de dados ao estado anterior de qualquer migração.

___


bcryptjs

Query Builder => Contrutor de Consulta, Permite a construções
SQL independente do banco de dados utilizado.

Diferença entre usar o NPM e o NPX. Basicamente o NPM é utilizado para instalar pacotes, enquanto o NPX é utilizado para executar pacotes.

Primary key e Foreign key