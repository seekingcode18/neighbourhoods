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

const createHouse = (req, res) => {
  const id = parseInt(req.query.id);
  const address_id = parseInt(req.query.address_id);
  const number_of_occupants = parseInt(req.query.number_of_occupants);

  pool.query(
    "INSERT INTO houses (id, address_id, number_of_occupants) VALUES ($1, $2, $3)",
    [id, address_id, number_of_occupants],
    (error, results) => {
      if (error) {
        throw error;
      }
      // res.status(200).send(`User added with ID: ${result.insertId}`);
      res.status(201).send(`House added with id of ${id}! Please visit /api/v1/houses to check!`)
    }
  );
};

const updateHouse = (req, res) => {
  const id = parseInt(req.query.id)
  const address_id = parseInt(req.query.address_id)
  const number_of_occupants = parseInt(req.query.number_of_occupants)

  pool.query("UPDATE houses SET address_id = $2, number_of_occupants = $3 WHERE id = $1", [id, address_id, number_of_occupants], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`House modified with id of ${id}`)
    }
  )
}

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
      res.status(201).send(`Person added with id of ${id}! Please visit /api/v1/people to check!`)
    }
  );
};


const updatePerson = (req, res) => {
  const id = parseInt(req.query.id)
  const name = req.query.name
  const age = parseInt(req.query.age)

  pool.query("UPDATE people SET name = $2, age = $3 WHERE id = $1", [id, name, age], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Person modified with id of ${id}`)
    }
  )
}


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

const createAddress = (req, res) => {
  const id = parseInt(req.query.id);
  const flat_number = parseInt(req.query.flat_number);
  const street_number = parseInt(req.query.street_number);
  const building_name = req.query.building_name;
  const street_name = req.query.street_name;
  const postcode = req.query.postcode;

  pool.query(
    "INSERT INTO addresses (id, flat_number, street_number, building_name, street_name, postcode) VALUES ($1, $2, $3, $4, $5, $6)",
    [id, flat_number, street_number, building_name, street_name, postcode],
    (error, results) => {
      if (error) {
        throw error;
      }
      // res.status(200).send(`User added with ID: ${result.insertId}`);
      res.status(201).send(`Address modified with id of ${id}! Please visit /api/v1/addresses to check!`)
    }
  );
};


const updateAddress = (req, res) => {
  const id = parseInt(req.query.id);
  const flat_number = parseInt(req.query.flat_number);
  const street_number = parseInt(req.query.street_number);
  const building_name = req.query.building_name;
  const street_name = req.query.street_name;
  const postcode = req.query.postcode;


  pool.query("UPDATE addresses SET flat_number = $2, street_number = $3, building_name = $4, street_name = $5, postcode = $6 WHERE id = $1", [id, flat_number, street_number, building_name, street_name, postcode], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Address modified with id of ${id}`)
    }
  )
}


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
  updateAddress
};
