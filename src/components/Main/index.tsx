import {
    MainContent,
    MainTitle,
    MainWrapper,
    CardsWrapper,
    MainContentHeader,
} from "./Main.style";
import React from "react";
import Sorter from "./Sorter";

interface MainProps {
    children: React.ReactNode;
    onSortChange: (orderBy: string) => void;
}
function Main({ children, onSortChange }: MainProps): React.ReactElement {
    return (
        <MainWrapper>
            <MainContent>
                <MainContentHeader>
                    <MainTitle>Movies</MainTitle>
                    <Sorter onSortChange={onSortChange} />
                </MainContentHeader>
                <CardsWrapper>{children}</CardsWrapper>
            </MainContent>
        </MainWrapper>
    );
}

export default Main;
