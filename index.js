let express = require("express");
let controller = require("./controllers");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.json({ message: "halo dunia"}));

const PORT = 3001;

app.listen(PORT);