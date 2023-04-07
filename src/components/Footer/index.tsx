import { FooterText, FooterWrapper } from "./Footer.styled";

function Footer(): React.ReactElement {
    return (
        <FooterWrapper>
            <FooterText href="https://github.com/KauesSilva" target="_blank">Made with ❤️ by Kauê S. Silva</FooterText>
        </FooterWrapper>
    );
}

export default Footer;