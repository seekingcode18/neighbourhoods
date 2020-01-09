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
app.get("/api/v1/createPerson", db.createPerson);
app.get("/api/v1/createHouse", db.createHouse);
app.get("/api/v1/createAddress", db.createAddress);
app.get("/api/v1/updateHouse", db.updateHouse);
app.get("/api/v1/updatePerson", db.updatePerson);
app.get("/api/v1/updateAddress", db.updateAddress);
// app.get("/api/v1/deleteHouse", db.deleteHouse);
// app.get("/api/v1/deletePerson", db.deletPerson);
// app.get("/api/v1/deleteAddress", db.deleteAddress);

app.listen(port, () => console.log("Listening on 8080"));
