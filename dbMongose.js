
const mongoose = require ('mongoose')

const mongoURI = 'mongodb+srv://matheus:3011@cluster0.qnvbavz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect (mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o mongodB'))
db.once('open', () => {
    console.log('Conectado ao mongo DB')
})

module.exports = mongoose