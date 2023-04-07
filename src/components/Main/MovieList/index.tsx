import MovieCard from "./MovieCard";
import React from "react";
import IMovie from "../../../types/Movie";
import MovieCardSkeleton from "./MovieCardSkeleton";
import {
    sortByNameAsc,
    sortByNameDesc,
    sortByNewest,
    sortByOldest,
} from "../../../utils/sortUtils";

interface MovieListProps {
    movies: IMovie[];
    isLoading: boolean;
    orderBy: string;
}

const MovieList: React.FC<MovieListProps> = ({
    movies,
    isLoading,
    orderBy,
}) => {
    const handleSort = () => {
        let sortedMovies = [...movies];
        switch (orderBy) {
            case "asc":
                sortedMovies = sortByNameAsc(sortedMovies);
                break;
            case "desc":
                sortedMovies = sortByNameDesc(sortedMovies);
                break;
            case "new":
                sortedMovies = sortByNewest(sortedMovies);
                break;
            case "old":
                sortedMovies = sortByOldest(sortedMovies);
                break;
            default:
                // Não fazer nada para "default"
                break;
        }
        return sortedMovies;
    };

    const sortedMovies = handleSort(); // Obter a lista de filmes ordenada

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
                    {sortedMovies.map((movie, id) => (
                        <MovieCard key={id} movie={movie} />
                    ))}
                </>
            )}
        </>
    );
};

export default MovieList;
