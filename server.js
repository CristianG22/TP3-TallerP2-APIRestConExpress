import express from 'express'
import routerLibros from './router/libros.js';

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/libros', routerLibros)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = 8080;
const server = app.listen (PORT)
server.on('listening', () =>{   console.log(`Servidor ApiRestful escuchando en puerto ${server.address().port}`)})
server.on('error', error => {   console.log(`Error al iniciar el servidor`, error.message)})

