# Øvelse 1 – Self-signed certifikat med openssl

openssl er installeret på macOS og link til Windows: https://openssl-library.org/source

Hent ´Øvelse 10 – SSL TLS for HTTPS´ fra GitHub eller Canvas

Åben Terminal eller kommandoprompt i mappen ´1-self-signed-https´ for at lave certifikater

´openssl version -a´ for at se version af openssl i Terminalen

```bash
openssl version -a
```

Opret certifikater.

```bash
openssl genrsa -out privkey.pem 1024

openssl req -new -key privkey.pem -out certreq.csr

openssl x509 -req -days 3650 -in certreq.csr -signkey privkey.pem -out newcert.pem

openssl req -text -noout -verify -in certreq.csr
```

Åben certifikater i ´1-self-signed-https´ for at se indholdet:

- certreq.csr
- newcert.pem
- privkey.pem

[Link til dokumentation om at arbejde med openssl og SSL/TLS på DigitalOcean.](https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs)

