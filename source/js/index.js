const jwt = require("jsonwebtoken");

const data = {
	id: 8,
	chopCode: "MITKV06"
}

const token = jwt.sign(data, 'secret');

console.log(token);

