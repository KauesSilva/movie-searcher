import {
    MovieCardBody,
    MovieCardDescription,
    MovieCardFooter,
    MovieCardImage,
    MovieCardStars,
    MovieCardStarIcon,
    MovieCardTitle,
    MovieCardWrapper,
} from "./MovieCard.style";
import IMovie from "../../../../types/Movie";

interface MovieCardProps {
    movie: IMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <MovieCardWrapper>
            <MovieCardImage poster={movie.Poster}></MovieCardImage>
            <MovieCardBody>
                <MovieCardTitle>{movie.Title}</MovieCardTitle>
                <MovieCardDescription>{movie.Plot}</MovieCardDescription>
            </MovieCardBody>
            <MovieCardFooter>
                <MovieCardStarIcon size={"1.5rem"}></MovieCardStarIcon>
                <MovieCardStars>{movie.imdbRating + " / 10.0"}</MovieCardStars>
            </MovieCardFooter>
        </MovieCardWrapper>
    );
};

export default MovieCard;
