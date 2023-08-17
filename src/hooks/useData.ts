import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Axios, AxiosRequestConfig, CanceledError } from "axios";
import { Genre } from "./useGenres";
import { Game } from "./useGames";




  
  // This interface defines the objects
  interface FetchResponse<T> {
    count: number;
    results: T[];
  }


  const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isloading, setIsloading] = useState(false)


  //Remember How to create a useEffect with a dependency
  useEffect(() => {
//AbortController will help us disconnect from the API
    const controller = new AbortController();

    setIsloading(true)


    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: controller.signal,...requestConfig})
      // This references the interfaces
      // This is the promise
      .then((response) => {
        setData(response.data.results)
        setIsloading(false)
      })
       
      
      
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message)
        setIsloading(false)
       });
      return () => controller.abort();
  },deps ? [...deps]:[]);
  //the [] is a dependency
//a useEffect should always have a dependency. The array [] above is our dependency and can pass a usestate

  return {data, error, isloading}
  

}

const useGames = (selectedGenre: Genre | null) =>
useData<Game>("./games", {params:{genres:{genres: selectedGenre?. id}}})

export default useData;
