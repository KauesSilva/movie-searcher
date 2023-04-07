import IMovie from "../types/Movie";

const TMDB_API_KEY = "d33cd8093fa0ca69fec7bee1df86a18e";
const language = navigator.language;

export default async function searchMovie(
    searchValue: string
): Promise<IMovie[] | null> {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${TMDB_API_KEY}&language=${language}`
        );
        const data = await response.json();
        if (data.results) {
            const movies: IMovie[] = [];
            for (const movie of data.results) {
                const plotResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_API_KEY}&language=${language}`
                );
                const plotData = await plotResponse.json();
                if (
                    plotData.title &&
                    plotData.overview &&
                    plotData.poster_path &&
                    plotData.vote_average &&
                    plotData.release_date &&
                    plotData.id
                ) {
                    movies.push({
                        Title: plotData.title,
                        Overview: plotData.overview,
                        Poster: `https://image.tmdb.org/t/p/w500${plotData.poster_path}`,
                        Rating: plotData.vote_average,
                        Year: plotData.release_date,
                        Id: plotData.id,
                    });
                }
            }
            return movies;
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}
