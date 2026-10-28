import { IMovie } from "@/types/app.types";
import { create } from "zustand";
import { MovieStore } from "./movieStore.types";

export const useMovieStore = create<MovieStore>((set, get) => ({
  movies: [],
  addMovies: (movie: IMovie) => {},
  removeMovie: (id: string) => {},
  fetchAllMovies: () => {
    return [];
  },
  fetchMovieByGenre: (genre: string) => {
    return [];
  },
}));
