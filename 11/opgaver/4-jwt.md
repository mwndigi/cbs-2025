# Opgave 5 - jsonwebtoken

En JSON Web Token (JWT) er en kompakt og sikker måde at sende information mellem client og server som et JSON objekt. 

Det bruges typisk til autentificering og authorisering i netværksapplikationer.

En JWT består af tre dele adskilt af punktummer. Strukturen er header.payload.signature:

```js 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJBbGljZSJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

Header er metadata for krypteringsalgoritmen, payload er data og signatur er der sikrer imod manipulation.

Et typisk login flow med JWT:

1. Bruger logger ind med brugernavn og password

2. Server verificerer og opretter et JWT

3. Server sender JWT tilbage til klienten

4. Klient gemmer JWT (f.eks. i localStorage)

5. Klient sender JWT med ved hver efterfølgende request

6. Server verificerer JWT og giver adgang

Fordele med JWT er at den er stateless, så serveren behøver ikke at gemme sessions og den er skalerbar og fungerer godt med flere servere.

Gem aldrig selve passwords i en JWT token, vælg en stærk og unik secret key i .env og giv JWT tokens en udløbstid.

Det er meget fint at gemme en JWT token i en HTTP only cookie og alternativt i localStorage, men der er fordele og ulemper.