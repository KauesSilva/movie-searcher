import styled from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 100%;
    transition: width & height all ease-in-out 1s;
    background-color: ${(props) => props.theme.bgPrimary};
`;

export {};
