const crypto = require('crypto');

// liste med alle krypteringsalgoritmer
// console.log(crypto.getCiphers());

// AES 256-bit er en symmetrisk krypteringsalgoritme
const algorithm = 'aes-256-cbc';

// AES har en nøgle og en blokstørrelse
// en bit er den mindste enhed for data i en computer og en byte er 8 bits
// Nøglen for AES kan være på 128, 192 eller 256 bits som er 16, 24 eller 32 bytes
// For AES er blokstørrelsen altid 128 bit som er 16 bytes
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Krypter data
const cipher = crypto.createCipheriv(algorithm, key, iv);
const encrypted = cipher.update('Min data', 'utf8', 'hex') + cipher.final('hex');

// Dekrypter data
const decipher = crypto.createDecipheriv(algorithm, key, iv);
const decrypted = decipher.update(encrypted, 'hex', 'utf-8') + decipher.final('utf-8');

// Output
console.log(key.toString('hex'))
console.log(iv.toString('hex'))
console.log(encrypted)
console.log(decrypted)

// Øvelse 1 - Kør 1-symmetric.js 