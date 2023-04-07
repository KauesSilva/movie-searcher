import styled from "styled-components";
import typography from "../../../styles/typography";

export const SorterWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const SorterLabel = styled.label`
    font-family: ${typography.fontFamily.Roboto};
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize.md};
    color: ${(props) => props.theme.title};
    line-height: 44.8px;
`;

export const SorterSelect = styled.select`
    background-color: ${(props) => props.theme.bgPrimary};
    color: ${(props) => props.theme.title};
    font-size: ${typography.fontSize.md};
    width: 100px;
    height: 25px;
    border-radius: 3px;
`;

export const SorterOption = styled.option`
    background-color: ${(props) => props.theme.bgPrimary};
    color: ${(props) => props.theme.title};
    font-size: ${typography.fontSize.md};
    border-radius: 3px;

    :hover {
        background-color: ${(props) => props.theme.primary};
    }
`;
