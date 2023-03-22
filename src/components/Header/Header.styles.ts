import styled from "styled-components";
import typography from "../../styles/typography";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 532px;
    background-color: ${(props) => props.theme.bgSecondary};;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.5rem;
    width: 993px;
    height: 332px;
`;

export const HeaderTitle = styled.h1`
    font-family: ${typography.fontFamily.Roboto};
    font-size: ${typography.fontSize.xxl};
    font-weight: ${typography.fontWeight.bold};
    line-height: 3.75rem;
    color: ${(props) => props.theme.title};;
    text-align: center;
`;

export const HeaderSpan = styled.span`
    color: ${(props) => props.theme.primary};;
`;

export {};
