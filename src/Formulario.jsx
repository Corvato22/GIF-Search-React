import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Formulario = () => {

    const [data, setData] = useState({
        nombre: '',
        email: ''
    })

    const handleonChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        console.log('Se está montando');
        return () => {
            console.log('Se está desmontando')
        }
    }, [])

    return (
        <div>
            <h1>Formulario</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su Correo Electronico" name="email" value={data.email} onChange={handleonChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formulario">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" name="email" value={data.nombre} onChange={handleonChange}/>
                    <Button variant="primary">Enviar</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Formulario
