Opgave 3 - bcrypt hashing af passwords

bcrypt.hash() bruges til at kryptere og hashe et password med salt runder, så det kan gemmes sikkert i databasen.

salt runder bestemmer hvor mange gange bcrypt skal køre hash-algoritmen. Jo højere værdi, jo mere sikker (men langsommere).

bcrypt.compare() bruges til at verificere om et plaintext password matcher et hashet password.