const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "neighbourhoods",
  password: "gloria85",
  port: 5432
});
const getHouses = (req, res) => {
  pool.query("SELECT * FROM houses", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const getHouseByID = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM houses WHERE id= $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getPeople = (req, res) => {
  pool.query("SELECT * FROM people", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getPersonByID = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM people WHERE id= $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createPerson = (req, res) => {
  const id = parseInt(req.params.id);
  const name = req.params.name;
  const age = parseInt(req.params.age);

  pool.query(
    "INSERT INTO people (id, name, age) VALUES ($1, $2, $3)",
    [id, name, age],
    (error, results) => {
      if (error) {
        throw error;
      }
      // res.status(200).send(`User added with ID: ${result.insertId}`);
      res.status(201).send(`Person added! Please visit /api/v1/people to check!`)
    }
  );
};

const createTest = (req, res) => {
  const id = parseInt(req.query.id);
  const name = req.query.name;
  const age = parseInt(req.query.age);

  pool.query(
    "INSERT INTO people (id, name, age) VALUES ($1, $2, $3)",
    [id, name, age],
    (error, results) => {
      if (error) {
        throw error;
      }
      // res.status(200).send(`User added with ID: ${result.insertId}`);
      res.status(201).send(`Test creation worked?! Please visit /api/v1/people to check... results may vary.`)
    }
  );
};

const getAddresses = (req, res) => {
  pool.query("SELECT * FROM addresses", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getAddressByID = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM addresses WHERE id= $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getHouses,
  getPeople,
  getAddresses,
  getAddressByID,
  getHouseByID,
  getPersonByID,
  createPerson,
  createTest
};
