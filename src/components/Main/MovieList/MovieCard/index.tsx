import {
    MovieCardBody,
    MovieCardDescription,
    MovieCardFooter,
    MovieCardImage,
    MovieCardStars,
    MovieCardTitle,
    MovieCardWrapper,
} from "./MovieCard.style";
import { CiStar } from "react-icons/ci";
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
                <MovieCardDescription>
                    {movie.Plot}
                </MovieCardDescription>
            </MovieCardBody>
            <MovieCardFooter>
                <CiStar size={"1.5rem"} color={"#F4F4FF"}></CiStar>
                <MovieCardStars>{movie.imdbRating + " / 10.0"}</MovieCardStars>
            </MovieCardFooter>
        </MovieCardWrapper>
    );
};

export default MovieCard;
