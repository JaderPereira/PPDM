const express = require("express")
const app = express()
const routes = require("./routes")
const path = require("path")



app.set(express.urlencoded({extended: true}))

//configurando ejs
app.set('views', path.resolve(__dirname, "src", "views"))
app.set("view engine", "ejs")

//configurando pasta de arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')))

//configurando arquivo de rotas
app.use(routes) 

app.listen(3000, () => console.log("executando na porta 3000 acesse ://localhost:3000/"))
