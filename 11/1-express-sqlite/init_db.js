const path = require('path');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.join(__dirname, 'mydb.sqlite'));

/* Opret tabel hvis den ikke findes */
db.serialize(() => {
    console.log('Creating database if it doesn\'t exist');
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
    )`);

    console.log('Database initialized');
});

/* Brugere */
const users = [
    { username: 'alice', email: 'alice@example.com', password: 'password1' },
    { username: 'bob', email: 'bob@example.com', password: 'password2' },
    { username: 'carol', email: 'carol@example.com', password: 'password3' },
    { username: 'dave', email: 'dave@example.com', password: 'password4' },
    { username: 'eve', email: 'eve@example.com', password: 'password5' },
    { username: 'frank', email: 'frank@example.com', password: 'password6' },
    { username: 'grace', email: 'grace@example.com', password: 'password7' },
    { username: 'heidi', email: 'heidi@example.com', password: 'password8' },
    { username: 'ivan', email: 'ivan@example.com', password: 'password9' },
    { username: 'judy', email: 'judy@example.com', password: 'password10' }
];

/* Indsæt brugere i databasen */
/*
db.serialize(() => {
    const dbStatement = db.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
    users.forEach(user => {
        dbStatement.run(user.username, user.email, user.password, (err) => {
            if (err) {
                console.error(`Failed to insert ${user.username}:`, err);
            }
        });
    });
    dbStatement.finalize(err => {   
        if (err) {
            console.error('Error finalizing statement:', err);
        } else {
            console.log('All users inserted successfully');
        }
    });
});
*/

db.close();