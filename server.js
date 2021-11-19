const express = require("express");
const apiRoutes = require("./Routes/apiRoutes");
const htmlRoutes = require("./Routes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3001;
