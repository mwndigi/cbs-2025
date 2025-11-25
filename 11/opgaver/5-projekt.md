# Opgave 4 - Projekt

Implementer en lokal database i en fil med SQLite for en Express app.

Tænk over om du skal lave symmetrisk kryptering af brugernavne og emails i databasen.

Implementer hashing af passwords for brugere i databasen.

bcrypt genererer unikt salt for hver hash og gemmer salt i selve hashen.

Hashing af password bruges ved oprettelse af bruger og login.

Ved login skal der oprettes en jsonwebtoken som gemmes i en HTTP only cookie.

Lav en middleware som verificerer jsonwebtoken i cookie for et beskyttet endpoint.

Redirect til login side hvis jsonwebtoken ikke bliver verificeret.

