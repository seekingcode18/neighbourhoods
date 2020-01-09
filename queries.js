const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "neighbourhoods",
  password: "875431Ab!",
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
  getPersonByID
};
