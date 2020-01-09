const express = require("express");
const app = express();
const port = 8080;
const db = require("./queries");

app.get("/", (req, res) => res.send("Home page!"));
app.get("/api/v1/houses", db.getHouses);
app.get("/api/v1/people", db.getPeople);
app.get("/api/v1/addresses", db.getAddresses);
app.get("/api/v1/address/:id", db.getAddressByID);
app.get("/api/v1/person/:id", db.getPersonByID);
app.get("/api/v1/house/:id", db.getHouseByID);

app.listen(port, () => console.log("Listening on 8080"));
