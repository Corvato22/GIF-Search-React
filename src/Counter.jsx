import React from 'react'
import { Button } from 'react-bootstrap'
import useCounter from './CounterCustomHook'

const Counter = () => {

    const { counter, handleSumar, handleReset, handleRestar } = useCounter()

    const mostrarDatos = (...datos) => {              //* Ejemplo de Spread y Rest
        console.log(datos)
    }

    const datos = ['Hola', 'como', 'estas', 'dev']
    
    mostrarDatos(...datos)

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <Button variant="outline-warning" onClick={handleSumar}>Sumar</Button>
            <Button variant="outline-danger" onClick={handleReset}>Reset</Button>
            <Button variant="outline-warning" onClick={handleRestar}>Restar</Button>
        </div>
    )
}

export default Counter
