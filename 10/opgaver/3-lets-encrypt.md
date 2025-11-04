# Opret SSL/TLS certifikat på Droplet

[Link til dokumentation på DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)

[Link til dokumentation for Let's Encrypt](https://letsencrypt.org/how-it-works/)

Se forklaring af kommandoer på DigitalOcean.

Vi installer certbot til Nginx og vi kigger på konfigurationen for Nginx og sørger for at porte er åbne (HTTPS er port 443).

```bash
sudo apt install certbot python3-certbot-nginx

sudo cat /etc/nginx/sites-available/default

sudo nginx -t

sudo ufw status

sudo ufw allow 'Nginx Full'

sudo ufw delete allow 'Nginx HTTP'

sudo ufw status

sudo systemctl reload nginx
```

Vi kører certbot for at opsætte SSL/TLS certifikat for et domæne.

```bash
sudo certbot --nginx -d example.com -d www.example.com

sudo systemctl status certbot.timer

sudo certbot renew --dry-run
```

Derefter kigger vi i Nginx konfigurationen for at se opdateringer i konfigurationen.

```bash
sudo cat /etc/nginx/sites-available/default
```
