const express = require("express");

const app = express();

app.use(express.static("../fe/public"));

app.listen(1337);