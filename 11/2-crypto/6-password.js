const crypto = require('crypto');

// En salt er en tilfældig værdi som tilføjes til passwordet ved hashing
function generateSalt(length = 16) {
  return crypto.randomBytes(length).toString('hex');
}

// Her kombineres en salt med en hash ad flere gange ved hashing af et password
function hashWithSaltRounds(password, salt, rounds) {
  let hash = password + salt;
  for (let i = 0; i < rounds; i++) {
    hash = crypto.createHash('sha256').update(hash).digest('hex');
  }
  return hash;
}

// Eksempel med password
const password = "minHundHedderTorben1337";
const input = "minHundHedderTorben1337";
const salt1 = generateSalt();
const salt2 = generateSalt();
const rounds = 10;
const hashedPassword = hashWithSaltRounds(password, salt1, rounds);
const inputPassword = hashWithSaltRounds(input, salt1, rounds);

// Output
console.log(password);
console.log(input);
console.log(salt1);
console.log(salt2);
console.log(hashedPassword);
console.log(inputPassword);

// Check om password matcher input
if (hashedPassword === inputPassword) {
  console.log("Korrekt password");
} else {
  console.log("Forkert password");
}

// Øvelse 6 - Kør 6-password.js med rigtig og forkert salt