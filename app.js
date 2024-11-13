const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const rota_item = require("./routes/rota_item")
const rota_principal = require('./routes/rota_inicial')
const rota_todasnoticias = require('./routes/rota_news')

app.set ("view engine", "ejs")
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));


app.use('/', rota_principal)
app.use('/', rota_item)
app.use('/', rota_todasnoticias)


app.listen(port,() => {
    console.log("Testando o servidor")
})