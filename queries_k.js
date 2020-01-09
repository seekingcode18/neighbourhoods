const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "875431Ab!",
    database: "neighbourhoods"
  }
});

const getHouses = (req, res) => {
  knex
    .select()
    .from("houses")
    .then(response => res.send(response));
};

const getHouseByID = (req, res) => {
  const id = parseInt(req.params.id);
  knex
    .select()
    .from("houses")
    .where({ id })
    .then(response => res.send(response));
};

const createHouse = (req, res) => {
  const id = parseInt(req.query.id);
  const address_id = parseInt(req.query.address_id);
  const number_of_occupants = parseInt(req.query.number_of_occupants);
  //   const id = 11;
  //   const address_id = 11;
  //   const number_of_occupants = 11;
  knex("houses")
    .insert({
      id: id,
      address_id: address_id,
      number_of_occupants: number_of_occupants
    })
    .then(response => res.send("Houses added"));
};

const updateHouse = (req, res) => {
  const id = parseInt(req.query.id);
  const address_id = parseInt(req.query.address_id);
  const number_of_occupants = parseInt(req.query.number_of_occupants);

  knex("houses")
    .where(id, id)
    .update({
      address_id: address_id,
      number_of_occupants: number_of_occupants
    })
    .then(response => res.send("House updated"));
};

const deleteHouse = (req, res) => {
  const id = parseInt(req.params.id);
  knex("houses")
    .where("id", id)
    .del()
    .then(response => res.send("house deleted"));
};

const getPeople = (req, res) => {
  knex
    .select()
    .from("people")
    .then(response => res.send(response));
};

const getPersonByID = (req, res) => {
  const id = parseInt(req.params.id);
  knex
    .select()
    .from("people")
    .where({ id })
    .then(response => res.send(response));
};

const createPerson = (req, res) => {
  const id = parseInt(req.query.id);
  const name = req.query.name;
  const age = parseInt(req.query.age);
  knex("people")
    .insert({
      id: id,
      name: name,
      age: age
    })
    .then(response => res.send("Person added"));
};

const updatePerson = (req, res) => {
  const id = parseInt(req.query.id);
  const name = req.query.name;
  const age = parseInt(req.query.age);

  knex("people")
    .where(id, id)
    .update({
      id,
      name,
      age
    })
    .then(response => res.send("Person updated"));
};

const deletePerson = (req, res) => {
  const id = parseInt(req.params.id);
  knex("people")
    .where("id", id)
    .del()
    .then(response => res.send("person deleted"));
};

const getAddresses = (req, res) => {
  knex
    .select()
    .from("addresses")
    .then(response => res.send(response));
};

const getAddressByID = (req, res) => {
  const id = parseInt(req.params.id);
  knex("addresses")
    .select()
    .from("addresses")
    .where({ id })
    .then(response => res.send(response));
};

const createAddress = (req, res) => {
  const id = parseInt(req.query.id);
  const flat_number = parseInt(req.query.flat_number);
  const street_number = parseInt(req.query.street_number);
  const building_name = req.query.building_name;
  const street_name = req.query.street_name;
  const postcode = req.query.postcode;

  knex("addresses")
    .insert({
      id: id,
      flat_number: flat_number,
      street_number: street_number,
      building_name: building_name,
      street_name: street_name,
      postcode: postcode
    })
    .then(response => res.send("Address added"));
};

const updateAddress = (req, res) => {
  const id = parseInt(req.query.id);
  const flat_number = parseInt(req.query.flat_number);
  const street_number = parseInt(req.query.street_number);
  const building_name = req.query.building_name;
  const street_name = req.query.street_name;
  const postcode = req.query.postcode;

  knex("addresses")
    .where(id, id)
    .update({
      id,
      flat_number,
      street_number,
      building_name,
      street_name,
      postcode
    })
    .then(response => res.send("address updated"));
};

const deleteAddress = (req, res) => {
  const id = parseInt(req.params.id);
  knex("addresses")
    .where("id", id)
    .del()
    .then(response => res.send("address deleted"));
};

module.exports = {
  getHouses,
  getPeople,
  getAddresses,
  getAddressByID,
  getHouseByID,
  getPersonByID,
  createPerson,
  createAddress,
  createHouse,
  updateHouse,
  updatePerson,
  updateAddress,
  deleteHouse,
  deletePerson,
  deleteAddress
};
