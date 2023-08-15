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
    metacritic: number
  }
  
  // This interface defines the objects
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }


const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isloading, setIsloading] = useState(false)


  //Remember How to create a useEffect with a dependency
  useEffect(() => {
//AbortController will help us disconnect from the API
    const controller = new AbortController();

    setIsloading(true)


    apiClient
      .get<FetchGameResponse>("/games", {signal: controller.signal})
      // This references the interfaces
      // This is the promise
      .then((response) => {
        setGames(response.data.results)
        setIsloading(false)
      })
       
      
      
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message)
        setIsloading(false)
       });
      return () => controller.abort();
  }, []);
  //the [] is a dependency
//a useEffect should always have a dependency. The array [] above is our dependency and can pass a usestate

  return {games, error, isloading}
  

}

export default useGames;