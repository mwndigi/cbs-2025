const crypto = require('crypto');

// Hashing af password med SHA-256
const password = "lol123";
const hash = crypto.createHash('sha256').update(password).digest('hex');

// Output
console.log(password);
console.log(hash);

// Øvelse 3 - Kør 3-hashing.js, skift passwordet og kør igen
