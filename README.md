Click server_with_mysql
README.md Outline:
# AngularJS with SQL Integration

## Overview
A simple CRUD app demonstrating AngularJS frontend + Node.js/Express backend + MySQL integration.

## Setup
1. Clone the repository:
   git clone https://github.com/<username>/angularjs-sql-integration.git
2. Import SQL scripts:
   mysql -u root -p < sql/schema.sql
3. Start backend:
   cd backend
   npm install
   npm start
4. Launch frontend:
   npx http-server frontend -p 8080
   Open http://localhost:8080
Environment Variables
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=test
PORT=2000
