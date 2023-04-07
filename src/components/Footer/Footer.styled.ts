import styled from "styled-components";
import typography from "../../styles/typography";

export const FooterWrapper = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.bgSecondary};
    
`;

export const FooterText = styled.a`
    font-weight: ${typography.fontWeight.regular};
    font-size: ${typography.fontSize.md};
    font-family: ${typography.fontFamily.Roboto};
    color: ${(props) => props.theme.text};
    cursor: pointer;
`;