import React, { useState } from 'react'
import styled from 'styled-components'
import CategoriasAdd from './CategoriasAdd'
import { CategoriasLista } from './CategoriasLista'

const TituloComponentes = styled.h1`
    margin: 30px;

`


const CategoriasApp = () => {

    const [categorias, setCategorias] = useState([])

    return (
        <div>
            <TituloComponentes className="text-center">Buscador de GIF</TituloComponentes>

            <ol>
                <CategoriasAdd setCategorias={setCategorias} />
                <CategoriasLista categoria={categorias} />
            </ol>

        </div>
    )
}

export default CategoriasApp
