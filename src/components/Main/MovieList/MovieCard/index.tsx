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

function MovieCard({ movie }: MovieCardProps): React.ReactElement {
    return (
        <MovieCardWrapper>
            <MovieCardImage poster={movie.Poster}></MovieCardImage>
            <MovieCardBody>
            <MovieCardTitle>{movie.Title} ({new Date(movie.Year).getFullYear()})</MovieCardTitle>
                <MovieCardDescription>{movie.Overview}</MovieCardDescription>
            </MovieCardBody>
            <MovieCardFooter>
                <MovieCardStarIcon size={"1.5rem"}></MovieCardStarIcon>
                <MovieCardStars>{`${parseFloat(movie.Rating).toFixed(
                    1
                )}/10`}</MovieCardStars>
            </MovieCardFooter>
        </MovieCardWrapper>
    );
}

export default MovieCard;
