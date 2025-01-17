const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const rota_item = require("./routes/rota_item")
const rota_principal = require('./routes/rota_inicial')
const rota_todasnoticias = require('./routes/rota_news')
const rota_criarnoticia = require('./routes/rota_criarNoticia')
const rota_criarcomentario = require('./routes/rota_criarComentario')


const { url } = require('inspector')
 
app.set ("view engine", "ejs")
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}))


app.use('/', rota_principal)
app.use('/', rota_item)
app.use('/', rota_todasnoticias)
app.use('/', rota_criarnoticia)
app.use('/', rota_criarcomentario)


app.listen(port,() => {
    console.log("Testando o servidor")
})