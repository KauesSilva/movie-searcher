import MovieCard from "./MovieCard";
import React from "react";
import IMovie from "../../../types/Movie";

interface MovieListProps {
    movies: IMovie[],
    isLoading: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ movies, isLoading }) => {
    return (
        <>
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie}/>
            ))}
        </>
    );
};

export default MovieList;
