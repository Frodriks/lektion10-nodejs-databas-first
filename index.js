/* 
    To start a new project
    npm init -y
    npm install better-sqlite3
*/

// 1. Import database driver
const dataBaseDriver = require('better-sqlite3');

// 2. Connect to the database
const db = dataBaseDriver('bands.sqlite3');

/* 
    Prepare a staement, execute statement
*/

// 3. Send our first query
let statement = db.prepare('SELECT * FROM bands');

// 4. Execute statement, recive results
let results = statement.all();

// 5. Check the results
//console.log(results);

// 6. Using parameters
let statement2 = db.prepare(`
    SELECT * FROM bands WHERE genre = ?
`);

let results2 = statement2.all ('METAL');

//console.log(results2);

// Using named parameters
let staement3 = db.prepare(`
    SELECT * FROM bands WHERE genre = :genre
`);

let results3 = staement3.all({
    genre: 'ROCK'
});

//console.log(results3);
let table = 'bands';
// Insert something into the databse
let insertStatement = db.prepare (`
    INSERT INTO ${table} (name, genre) VALUES (:name, :genre)
`);

let resultOfInstert = insertStatement.run ({
    name: 'Bathory',
    genre: 'METAL'
});

console.log(resultOfInstert);