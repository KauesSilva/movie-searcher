import {
    MovieCardSkeletonBody,
    MovieCardSkeletonDescription,
    MovieCardSkeletonFooter,
    MovieCardSkeletonImage,
    MovieCardSkeletonStarIcon,
    MovieCardSkeletonStars,
    MovieCardSkeletonTitle,
    MovieCardSkeletonWrapper,
} from "./MovieCardSkeleton";

const MovieCardSkeleton = () => {
    return (
        <MovieCardSkeletonWrapper>
            <MovieCardSkeletonImage></MovieCardSkeletonImage>
            <MovieCardSkeletonBody>
                <MovieCardSkeletonTitle></MovieCardSkeletonTitle>
                <MovieCardSkeletonDescription></MovieCardSkeletonDescription>
            </MovieCardSkeletonBody>
            <MovieCardSkeletonFooter>
                <MovieCardSkeletonStarIcon></MovieCardSkeletonStarIcon>
                <MovieCardSkeletonStars></MovieCardSkeletonStars>
            </MovieCardSkeletonFooter>
        </MovieCardSkeletonWrapper>
    );
};

export default MovieCardSkeleton;
