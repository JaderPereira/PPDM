const express = require("express")
const route = express.Router()
const global = require("./src/controllers/global")

route.get("/", global.index)
route.get("/resultado", global.resultado)


module.exports = route