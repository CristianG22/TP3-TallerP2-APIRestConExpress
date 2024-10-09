import service from '../service/libros.js'

const obtenerLibros = (req,res) => {
    const { id } = req.params
    const libros = service.obtenerLibros(id)
    res.json(libros)
}

const guardarLibro = (req,res) => {
    const libro = req.body
    const libroGuardado = service.guardarLibro(libro)
    res.json(libroGuardado)
}

const actualizarLibro = (req,res) => {
    const { id } = req.params
    const libro = req.body
    const libroActualizado = service.actualizarLibro(id, libro)
    res.json(libroActualizado)
}

const borrarLibro = (req,res) => {
    const { id } = req.params
    const libroEliminado = service.borrarLibro(id)
    res.json(libroEliminado)
}

export default {
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}