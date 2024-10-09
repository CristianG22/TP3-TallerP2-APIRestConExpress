const libros = [
    {id: '1', autor: 'Gabriel García Márquez', titulo: 'Cien años de soledad', anio: 1967},
    {id: '2', autor: 'George Orwell', titulo: '1984', anio: 1949},
    {id: '3', autor: 'Jane Austen', titulo: 'Orgullo y prejuicio', anio: 1813},
    {id: '4', autor: 'J.R.R. Tolkien', titulo: 'El Señor de los Anillos', anio: 1954},
    {id: '5', autor: 'Harper Lee', titulo: 'Matar a un ruiseñor', anio: 1960}
]

const obtenerLibros = () => libros;

const obtenerLibro = id => {
    const libro = libros.find(lib => lib.id === id);
    return libro || {}
}

const guardarLibro = libro => {
    
    libro.id = String(parseInt(libros[libros.length-1]?.id || 0) + 1)
    libro.autor = String(libro.autor);
    libro.titulo = String(libro.titulo);
    libro.anio = +libro.anio;

    libros.push(libro)
    return libro    
}

const actualizarLibro = (id, libro) => {
    libro.id = id

    const index = libros.findIndex(lib => lib.id === id)
    if(index != -1) {
        const libroAnt = productos[index]
        const libroAct = { ...libroAnt, ...libro } // Spread Operator + Object Merge
        libros.splice(index, 1, libroAct)

        return libroAct
    }
    else {
        return {}
    }
}

const borrarLibro = id => {
    let libro = {}

    const index = libros.findIndex(lib => lib.id === id)
    if(index != -1) {
        libro = libros.splice(index, 1)[0]
    }

    return libro
}


export default {
    obtenerLibro,
    obtenerLibros,
    guardarLibro,
    actualizarLibro,
    borrarLibro
}

