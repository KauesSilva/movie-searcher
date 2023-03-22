import { MainContent, MainTitle, MainWrapper, CardsWrapper } from "./Main.style";
import React from "react";

interface MainProps {
    children: React.ReactNode
}
const Main = ({ children }: MainProps) : React.ReactElement => {
    return (
        <MainWrapper>
            <MainContent>
                <MainTitle>Movies</MainTitle>
                <CardsWrapper>
                    {children}
                </CardsWrapper>
            </MainContent>
        </MainWrapper>
    );
};

export default Main;
