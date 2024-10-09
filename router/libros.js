import express from 'express'

import controller from '../controller/libros.js'

const router = express.Router()

router.get('/:id?', controller.obtenerLibros)
router.post('/', controller.guardarLibro)
router.put('/:id', controller.actualizarLibro)
router.delete('/:id', controller.borrarLibro)

export default router