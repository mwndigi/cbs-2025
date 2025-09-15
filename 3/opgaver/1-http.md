# HTTP metoder

GET /user

GET /user/:username

POST /user/create

```javascript
async function createUser() {
  const response = await fetch("/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Hildur",
      password: "hildudigi",
      email: "hil.digi@cbs.dk",
    }),
  });
  const data = await response.json();
  alert(JSON.stringify(data));
}
```

PUT /user/update/:username

DELETE /user/delete/:username