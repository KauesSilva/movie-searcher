import styled from "styled-components";
import breakpoints from "../../../../styles/breackpoints";
import typography from "../../../../styles/typography";
import { CiStar } from "react-icons/ci";
import { lightTheme } from "../../../../styles/theme";

export const MovieCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 573.18px;
    width: 384px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.bgPrimary};
    border: 1px solid ${(props) => props.theme.border};
    overflow: hidden;

    @media screen and (max-width: ${breakpoints.desktop}) {
        width: 100%;
    }

    @media screen and (max-width: ${breakpoints.smMobile}) {
        width: 85%;
    }
`;

export const MovieCardImage = styled.div<{ poster: string }>`
    width: 100%;
    height: 60%;
    border-radius: 10px 10px 0 0;
    padding-top: 1rem;
    background-image: url(${(props) => props.poster});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const MovieCardBody = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem 0 1rem;
`;

export const MovieCardTitle = styled.h3`
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize.xl};
    font-family: ${typography.fontFamily.Roboto};
    color: ${(props) => props.theme.title};
    line-height: 1.75rem;
`;

export const MovieCardDescription = styled.p`
    font-weight: ${typography.fontWeight.regular};
    font-size: ${typography.fontSize.md};
    font-family: ${typography.fontFamily.Roboto};
    line-height: 1.6rem;
    color: ${(props) => props.theme.text};
    height: 3.25rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
`;

export const MovieCardFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;

export const MovieCardRating = styled.div`
    display: flex;
    gap: 0.5rem
`;

export const MovieCardStars = styled.footer`
    font-family: ${typography.fontFamily.Roboto};
    font-weight: ${typography.fontWeight.regular};
    font-size: ${typography.fontSize.md};
    color: ${(props) => props.theme.text};
    line-height: 1.6rem;
`;

export const MovieCardStarIcon = styled(CiStar)`
    color: ${(props) => props.theme.text};
`;

export const MovieCardButton = styled.button`
    width: 110px;
    height: 40px;
    background-color: ${(props) => props.theme.primary};;
    padding: 0.75 2rem;
    border: none;
    border-radius: 5px;
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize.sm};
    font-family: ${typography.fontFamily.Roboto};
    color: ${lightTheme.bgPrimary}; //fix it later//
    cursor: pointer;
    line-height: 1.5rem;
    transition: all ease-in-out 0.3s;

    :hover {
        background-color: ${(props) => props.theme.hover.primary};
    }
`;