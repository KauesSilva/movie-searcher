import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import MovieList from "../components/Main/MovieList";
import MovieSearchBar from "../components/Header/MovieSearchBar";
import searchMovie from "../services/movieService";
import IMovie from "../types/Movie";
import { AppWrapper } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import Footer from "../components/Footer";

const getSystemTheme = (): "light" | "dark" => {
    const userPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    return userPrefersDark ? "dark" : "light";
};

function App(): React.ReactElement {
    const [movieList, setMovieList] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState(getSystemTheme());
    const [orderBy, setOrderBy] = useState("default");

    const handleSearch = async (searchValue: string) => {
        setLoading(true);
        try {
            const searchedMovies = (await searchMovie(searchValue)) || [];
            setMovieList(searchedMovies);
        } catch (error) {
            console.error(error);
            alert(
                "There was an error while searching for the movies. Please try again later :("
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const handleSystemThemeChange = () => {
            setTheme(getSystemTheme());
        };

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", handleSystemThemeChange);

        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", handleSystemThemeChange);
        };
    }, []);

    const handleSortChange = (orderBy: string) => {
        setOrderBy(orderBy);
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <AppWrapper>
                <Header>
                    <MovieSearchBar onSearch={handleSearch} />
                </Header>
                <Main onSortChange={handleSortChange}>
                    <MovieList
                        movies={movieList}
                        isLoading={loading}
                        orderBy={orderBy}
                    />
                </Main>
                <Footer/>
            </AppWrapper>
        </ThemeProvider>
    );
}

export default App;