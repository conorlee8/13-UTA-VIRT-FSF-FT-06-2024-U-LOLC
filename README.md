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
You can watch the demo of the application in the following video:

[Click here to watch the video walkthrough](public/videos/DEMO%20-%2013-UTA-VIRT-FSF-FT-06-2024-U-LOLC.mp4)

Or navigate to the file directly in the repository:
`public/videos/DEMO - 13-UTA-VIRT-FSF-FT-06-2024-U-LOLC.mp4`

## ERD
Here’s an overview of the database schema:

+-------------------+          +------------------+  
| PokemonCard       |          | CardCategory      |  
|-------------------|          |------------------|  
| PK id             |<---------| PK id             |  
| card_name         |          | category_name     |  
| price             |          +------------------+  
| stock             |  
| FK category_id    |  
+-------------------+  
              v  
+-------------------+  
| Tag               |  
|-------------------|  
| PK id             |  
| tag_name          |  
+-------------------+  
              v  
+-------------------+  
| CardTag           |  
|-------------------|  
| PK id             |  
| FK card_id        |  
| FK tag_id         |  
+-------------------+  
