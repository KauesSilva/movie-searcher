import MovieCard from "./MovieCard";
import React from "react";
import IMovie from "../../../types/Movie";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface MovieListProps {
    movies: IMovie[];
    isLoading: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ movies, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <>
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                    <MovieCardSkeleton />
                </>
            ) : (
                <>
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </>
            )}
        </>
    );
};

export default MovieList;
