import IMovie from "../types/Movie";

export default async function searchMovie(
    searchValue: string
): Promise<IMovie[] | null> {
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?s=${searchValue}&apikey=cd3c3fd1`
        );
        const data = await response.json();
        console.log(data);
        if (data.Search) {
            const movies: IMovie[] = [];
            for (const movie of data.Search) {
                const plotResponse = await fetch(
                    `https://www.omdbapi.com/?i=${movie.imdbID}&plot=short&apikey=cd3c3fd1`
                );
                const plotData = await plotResponse.json();
                movies.push({
                    Title: plotData.Title,
                    Plot: plotData.Plot,
                    Poster: plotData.Poster,
                    imdbRating: plotData.imdbRating,
                });
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
