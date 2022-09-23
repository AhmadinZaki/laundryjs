let express = require("express");
let controllers = require("./controllers");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
controllers(app);

// app.get("/", (req, res) => res.json({ message: "halo dunia"}));

const PORT = 3001;

app.listen(PORT);