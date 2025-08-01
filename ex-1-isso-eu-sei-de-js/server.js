const express = require('express')   //pegando o express q eu baixei
const app = express()                //variavel q vai portar o express



//chamando o path pra não ter problema com o caminho dos arquivos, chamando o routes pra fazer o arquivo de rotas e o globalMiddleware pra fazer o middleware global
const path = require('path')
const routes = require('./routes')




//falando pro nosso servidor usar o views para renderizar um html
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.listen(3000, () => {
    console.log('acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})