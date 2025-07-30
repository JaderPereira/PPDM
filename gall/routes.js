const express = require("express")
const routes = express.Router()
const home = require("./src/controllers/home")

routes.get("/", home.home)
routes.post("/registra", home.registra)




module.exports = routes