const express = require("express")
const routes = express.Router()
const home = require("./src/controllers/home")


routes.get("/", home.homePage)

module.exports = routes