import styled from "styled-components";
import breakpoints from "../../../styles/breackpoints";
import typography from "../../../styles/typography";
import { lightTheme } from "../../../styles/theme"; //fix it later//

export const MovieSearchBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
    width: 100%;
    background-color: ${(props) => props.theme.bgPrimary};;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.border};;
    gap: 1.5rem;

    @media screen and (max-width: ${breakpoints.desktop}) {
        flex-direction: column;
        width: 70%;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 85%;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 90%;
    }
`;

export const MovieSearchInput = styled.input`
    width: 696px;
    height: 48px;
    border-radius: 5px;
    border: none;
    padding-left: 0.75rem;
    background-color: ${(props) => props.theme.bgSecondary};;
    font-size: ${typography.fontSize.md};
    font-family: ${typography.fontFamily.Roboto};
    font-weight: ${typography.fontWeight.regular};
    line-height: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #7c7c8a;

    @media screen and (max-width: ${breakpoints.desktop}) {
        width: 90%;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 80%;
    }
`;

export const MovieSearchButton = styled.button`
    width: 169px;
    height: 48px;
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
        background-color: ${(props) => props.theme.hover.primary};;
    }

    @media screen and (max-width: ${breakpoints.desktop}) {
        width: 90%;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 90%;
    }
`;

export {};
