import {
    MovieSearchBarWrapper,
    MovieSearchInput,
    MovieSearchButton,
} from "./MovieSearchBar.styles";
import { useState } from "react";

interface MovieSearchBarProps {
    onSearch: (searchValue: string) => void;
}

function MovieSearchBar({ onSearch }: MovieSearchBarProps): React.ReactElement {
    const [searchValue, setSearchValue] = useState("");
    return (
        <MovieSearchBarWrapper>
            <MovieSearchInput
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by name..."
            />
            <MovieSearchButton onClick={() => onSearch(searchValue)}>
                SEARCH NOW
            </MovieSearchButton>
        </MovieSearchBarWrapper>
    );
}

export default MovieSearchBar;
