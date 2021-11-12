import React, { useState } from 'react'

const CategoriasAdd = ({setCategorias}) => {

    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // setCategorias(categorias=>[search, ...categorias]) //* Agregar demas elementos buscados
        setCategorias([search])
        setSearch('')
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <form className="col-md-2 mx-auto"  onSubmit={handleSubmit}>
                <input
                className="text-center w-100"
                name="search"
                placeholder="Busca aquí tu GIF y presiona Enter"
                value={search}
                onChange={handleInputChange}
                />
            </form>
        </>
    )
}

export default CategoriasAdd
