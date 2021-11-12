import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const Cards = ({ categoria }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        imgGif(categoria).then(imgData => setImages(imgData))
    }, [categoria])

    const imgGif = async (categoria) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=18&api_key=s9vaJgca9RTvWiAtK6gxTJfJ9csknCMH`
        const resp = await fetch(url)
        const { data } = await resp.json()

        const imgData = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return imgData
    }

    return (
        <div>
            <h3>{categoria}</h3>
            <ContainerCards>
                {
                    images.map((img) => (

                        <Card bg="dark" text="light" border="secondary" key={img.id} style={{ width: '430px', height: '500px', margin: '20px'}}>
                            <Card.Img variant="top" src={img.url} />
                            <Card.Body>
                                <Card.Title>{img.title}</Card.Title>
                            </Card.Body>
                        </Card>

                    ))
                }
            </ContainerCards>
        </div>
    )
}
