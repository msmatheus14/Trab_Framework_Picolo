const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const rotaNoticias = require('./routes/rotaNoticias')
const rotaComentarios = require('./routes/rotaComentarios')
const rotaLogs = require('./routes/rotaLogs')


const { url } = require('inspector')
 
app.set ("view engine", "ejs")
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}))

app.use('/', rotaNoticias)
app.use('/', rotaComentarios)
app.use('/', rotaLogs)



app.listen(port,() => {
    console.log("Testando o servidor")
})