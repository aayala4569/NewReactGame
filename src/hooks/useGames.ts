import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// This interface holds the objects
export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: Platform}[]
  }
  
  // This interface defines the objects
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }


const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");


  //Remember How to create a useEffect with a dependency
  useEffect(() => {
//AbortController will help us disconnect from the API
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games", {signal: controller.signal})
      // This references the interfaces
      // This is the promise
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message)});

      return () => controller.abort();
  }, []);
  //the [] is a dependency
//a useEffect should always have a dependency. The array [] above is our dependency and can pass a usestate

  return {games, error}
  

}

export default useGames;