const crypto = require('crypto');

// Lav public og private key med RSA krypteringsalgoritme
// RSA-nøglen genereres med en modulus som er 2048 bits lang
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
});

// Den hemmelige besked
const message = "Du skal lufte min hund Torben i parken.";

// Lav en hash af beskeden
const hashedMessage = crypto.createHash('sha256').update(message).digest();

// Lav en signatur for hashen med private key
const signature = crypto.sign('RSA-SHA256', hashedMessage, privateKey);

// Verificer signaturen med public key
const isValid = crypto.verify('RSA-SHA256', hashedMessage, publicKey, signature);

// Output
console.log(publicKey);
console.log(privateKey);
console.log(hashedMessage.toString('hex'));
console.log(signature.toString('base64'));
console.log(isValid);

// Øvelse 4 - Kør 4-signature.js
