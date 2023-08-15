import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";



// This interface holds the objects
export interface Genre {
    id: number;
    name: string;
    image_background: string;
   
  }
  
  // This interface defines the objects
  interface FetchGenresResponse {
    count: number;
    results: Genre[];
  }


const useGenres = () => useData<Genre>('/genres')

export default useGenres;