import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import useData from '../hooks/useData';


//Below we are mapping out
const GenreList = () => {
    const {data} = useData<Genre>('/genres');
  return (
    <ul>
        {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
      
    </ul>
  )
}

export default GenreList
