import styled from "styled-components";
import breakpoints from "../../styles/breackpoints";
import typography from "../../styles/typography";

export const MainWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 532px - 3rem);
    background-color: ${(props) => props.theme.bgPrimary};
`;

export const MainContent = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100%;

    @media screen and (max-width: ${breakpoints.desktop}) {
        width: 90%;
    }
`;

export const MainTitle = styled.h2`
    font-family: ${typography.fontFamily.Roboto};
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize.lg};
    color: ${(props) => props.theme.title};
    line-height: 44.8px;
`;

export const CardsWrapper = styled.div`
    display: grid;
    justify-content: center;
    place-items: center;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(3, minmax(384px, 1fr));
    gap: 40px 40px;
    padding-bottom: 1rem;

    @media screen and (min-width: xxlDesktop) {
        grid-template-columns: repeat(4, minmax(384px, 1fr));
    }

    @media screen and (max-width: ${breakpoints.lgDesktop}) {
        grid-template-columns: repeat(2, minmax(384px, 1fr));
    }

    @media screen and (max-width: ${breakpoints.laptop}) {
        grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
    }
`;
