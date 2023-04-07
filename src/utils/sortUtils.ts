import IMovie from "../types/Movie";

export const sortByNameAsc = (movies: IMovie[]): IMovie[] => {
    return movies.sort((a, b) => a.Title.localeCompare(b.Title));
};

export const sortByNameDesc = (movies: IMovie[]): IMovie[] => {
    return movies.sort((a, b) => b.Title.localeCompare(a.Title));
};

export const sortByNewest = (movies: IMovie[]): IMovie[] => {
    return movies.sort(
        (a, b) => new Date(b.Year).getTime() - new Date(a.Year).getTime()
    );
};

export const sortByOldest = (movies: IMovie[]): IMovie[] => {
    return movies.sort(
        (a, b) => new Date(a.Year).getTime() - new Date(b.Year).getTime()
    );
};
