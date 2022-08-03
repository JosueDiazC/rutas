import { useEffect, useState } from 'react'

export default function Home() {
    

    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://rickandmortyapi.com/api/character/2')
            .then(res => res.json())
            .then(data => {
                setName(data.name)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <p>name:</p>
            {
                isLoading ? <p>loading...</p> : <div>{name}</div>
            }
        </>
    )
}
