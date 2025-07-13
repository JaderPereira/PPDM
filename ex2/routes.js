const express = require("express")
const route = express.Router()

//controllers - home
const home = require("./src/controllers/home")

//rotas - home
route.get("/", home.home)
route.get("/saudacao", home.saudacao)


module.exports = route