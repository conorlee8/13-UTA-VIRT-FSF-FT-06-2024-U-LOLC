# Pokémon Card Retail Backend

## Description
This is a back-end application for a Pokémon card retail site built using Node.js, Express.js, Sequelize, and PostgreSQL.

## Installation
1. Clone the repository.
2. Install dependencies: `npm install`
3. Create a `.env` file with your PostgreSQL credentials.
4. Create the database using the schema: `npm run schema`
5. Seed the database: `npm run seed`
6. Start the server: `npm start`

## Usage
Use Insomnia or another API client to test the routes.

## Walkthrough Video
Attached.

## ERD

+-------------------+           +------------------+
|   PokemonCard     |           |   CardCategory    |
|-------------------|           |------------------|
| PK  id            |<----------| PK  id            |
|     card_name     |           |     category_name |
|     price         |           +------------------+
|     stock         |
| FK  category_id   |                          +---------------+
+-------------------+                          |     Tag        |
           |                                    |---------------|
           |                                    | PK  id         |
           +-----------+                        |     tag_name   |
                       |                        +---------------+
                       |
                       v
+-------------------+
|     CardTag       |
|-------------------|
| PK  id            |
| FK  card_id       |----> Linked to PokemonCard
| FK  tag_id        |----> Linked to Tag
