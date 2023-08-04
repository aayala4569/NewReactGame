// on this componet we will fetch and handle our api calls
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react';
// This interface holds the objects
interface Game {
    id: number;
    name: string;
}

// This interface defines the objects
interface FetchGameResponse {
    count: number;
    results: Game[]
}
const GameGrid = () => {

const [games, setGames] = useState<Game[]>([])
const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<FetchGameResponse>('/games')
        // This references the interfaces
        // This is the promise
        .then(response => setGames(response.data.results))
        .catch(error => setError(error.message))

    }, [])
//a useEffect should always have a dependency. The array [] above is our dependency and can pass a usestate 
  
return (
    <ul>
        {error && <Text>{error}</Text>}
      {games.map(game => <li key={game.id}> {game.name}</li>)}
    </ul>
  )
}

export default GameGrid
