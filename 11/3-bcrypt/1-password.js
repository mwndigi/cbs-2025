import bcrypt from 'bcryptjs';

// Antallet af salt runder (cost factor)
const saltRounds = 10;

// Funktion til at hashe et password
async function hashPassword(plainPassword) {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    console.log("Hashed Password:", hashedPassword);
    return hashedPassword;
}

// Funktion til at verificere et password
async function verifyPassword(plainPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    console.log("Password Match:", isMatch);
    return isMatch;
}

async function exampleUsage() {
    const password = "my_secure_password";
    
    // Hash passwordet
    const hashedPassword = await hashPassword(password);
    
    // Verificer passwordet
    await verifyPassword("my_secure_password", hashedPassword); // skal returnere true
    await verifyPassword("wrong_password", hashedPassword); // skal returnere false
}

exampleUsage(); // Kald funktionen

try {
    const hashed = await bcrypt.hash("password123", saltRounds);
    console.log(hashed);
} catch (error) {
    console.error("Error hashing password:", error);
}