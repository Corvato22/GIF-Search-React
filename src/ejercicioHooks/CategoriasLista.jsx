import React from 'react'
import { Cards } from './Cards'

export const CategoriasLista = ( {categoria} ) => {

    return (
        <div>
            <h3>Resultados de busqueda:</h3>
            {
                categoria.map((cate, index) => {
                    return (
                        <Cards key={index} categoria={cate}/>
                    )
                })
            }
        </div>
    )
}
