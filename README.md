# Sqlite_NodeJS

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Routes](#routes)
- [Authentication](#authentication)
- [Testing](#testing)
- [Branches](#branches)

## Introduction

This project is based on SQLite and uses the Sequelize package for storing and managing data. It demonstrates the CRUD (Create, Read, Update, Delete) operations for a random scenario. The project includes six routes, each showcasing different CRUD operations. Additionally, it incorporates authentication for one of the routes, utilizing parameters, queries, and request body data.

The project is initially written in JavaScript but includes a separate TypeScript branch for those who prefer TypeScript. It also provides collections for POSTMAN to simplify route testing.

## Features

- Create, Read, Update, and Delete operations
- SQLite database with Sequelize
- Authentication for one of the routes
- JavaScript and TypeScript branches
- POSTMAN collections for route testing

## Getting Started

### Prerequisites

To run this project, you need the following:

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository:

```bash
 git clone https://github.com/ITMsJarvis/Sqlite_NodeJs_CRUD.git
```
2.Change to the project directory: 
```bash
cd Sqlite_NodeJs_CRUD
```
3.Install dependencies:
```bash
npm install
```

## Usage
### Routes
This project includes six routes to showcase CRUD operations:

POST /insert: Create a new record.
DELETE /delete/:id: Delete a record by ID.
GET /details: Retrieve all records.
GET /image: Retrieve user image by ID (query parameter).
GET /details/:id: Update a record by ID.
PUT /update: Update a record using authentication.
POST /login :  Gives a token in the response used for later authentication

## Authentication
Authentication is implemented for one of the routes. You can find details on how to authenticate in the route's documentation.

## Testing
To test the routes, you can use the included POSTMAN collections. Import the collections into POSTMAN, and then send requests to the respective routes.

## Branches
master: The main branch with the JavaScript implementation.
typescript: A branch with the TypeScript implementation.
