import { IMovie } from "@/types/app.types";

type MovieStore = {
  movies: IMovie[];
  addMovies: (movie: IMovie) => void;
  removeMovie: (id: string) => void;
  fetchAllMovies: () => IMovie[];
  fetchMovieByGenre: (genre: string) => IMovie[];
};
