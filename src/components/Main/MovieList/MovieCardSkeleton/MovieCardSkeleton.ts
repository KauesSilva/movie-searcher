import styled, { keyframes } from "styled-components";
import breakpoints from "../../../../styles/breackpoints";

const skeleton = keyframes`
    to {
        opacity: 0.5;
    }
`;

export const MovieCardSkeletonWrapper = styled.div`
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

export const MovieCardSkeletonImage = styled.div`
    width: 100%;
    height: 444px;
    background-color: #313131;
    animation: ${skeleton} 1s ease-in-out infinite alternate;
`;

export const MovieCardSkeletonBody = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

export const MovieCardSkeletonTitle = styled.div`
    width: 40%;
    height: 28px;
    background-color: #313131;
    animation: ${skeleton} 1s ease-in-out infinite alternate;
`;

export const MovieCardSkeletonDescription = styled.div`
    width: 100%;
    height: 52px;
    background-color: #313131;
    animation: ${skeleton} 1s ease-in-out infinite alternate;
`;

export const MovieCardSkeletonFooter = styled.footer`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;
`;

export const MovieCardSkeletonStars = styled.div`
    width: 20%;
    height: 26px;
    background-color: #313131;
    animation: ${skeleton} 1s ease-in-out infinite alternate;
`;

export const MovieCardSkeletonStarIcon = styled.div`
    width: 24px;
    height: 24px;
    background-color: #313131;
    animation: ${skeleton} 1s ease-in-out infinite alternate;
`;
