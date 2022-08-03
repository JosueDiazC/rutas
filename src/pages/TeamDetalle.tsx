import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function TeamDetalle() {
    const { obj } = useParams();


    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [change, setChange] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://rickandmortyapi.com/api/character/${obj}`)
            .then(res => res.json())
            .then(data => {
                setName(data.name)
                setIsLoading(false)
            })
    }, [change])

    return (
        <>
            <p>name:</p>
            {
                isLoading ? <p>loading...</p> : <div>{name}</div>
            }
            <button
                onClick={() => setChange(!change)}
            >
                {
                    change ? 'true' : 'false'
                }
            </button>
        </>
    )
}
