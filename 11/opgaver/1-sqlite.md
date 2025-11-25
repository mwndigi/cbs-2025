# Opgave 1 - Express SQLite App

En Express app der bruger SQLite til at opbevare brugerinformation.

[Link til npm](https://www.npmjs.com/package/sqlite3)

[SQLite Viewer som Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer)

Eksempel på SQLite database:

```js 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

/* db.serialize() bruges til at sikre at databaseoperationer udføres sekventielt i den rækkefølge de er skrevet */
db.serialize(() => {

    /* db.run() bruges til at udføre SQL-kommandoer der ikke returnerer data */
    db.run("CREATE TABLE lorem (info TEXT)");

    /* db.prepare() bruges til at forberede et SQL-statement, som du kan genbruge flere gange med forskellige værdier */
    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    /* db.finalize() bruges til at lukke et SQL-statement, når det ikke længere skal bruges og frigiver ressourcer */
    stmt.finalize();

    /* db.each() bruges til at hente og behandle én række ad gangen fra en query */
    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

/* db.close() bruges til at lukke forbindelsen til SQLite databasen og frigive alle ressourcer */
db.close();
```

I 1-express-sqlite kør init_db.js og fjern udkommenteringen af INSERT INTO brugere.

```js
npm install
node init_db.js
```

Hvis du har installeret SQLite Viewer som extension i Visual Studio Code kan du klikke på mydb.sqlite for at se indholdet af databasefilen.

Derefter kan du starte Express appen.

```js
npm start
````

Bemærk i .env den kører på port 4545.

http://localhost:4545
http://localhost:4545/users
http://localhost:4545/users/1