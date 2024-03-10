import axios from "axios";
import { MovieType } from "./types";

export const fetchAllMovies = async ():Promise<MovieType[] | undefined> => {
    try {
        const response = await axios.get('https://ghibliapi.vercel.app/films');
        return response.data;
    } catch (error){
        console.error(error);
    }
}