import { useState } from 'react'

const useCounter = () => {

    const [counter, setCounter] = useState(0)

    const handleSumar = () => setCounter(counter + 1)

    const handleRestar = () => setCounter(counter - 1)

    const handleReset = () => setCounter(0)

    return {
        counter,
        handleSumar,
        handleRestar,
        handleReset
    }
}

export default useCounter
