import { HeaderWrapper, HeaderContent, HeaderTitle, HeaderSpan } from "./Header.styles";

interface HeaderProps {
    children?: React.ReactNode
}

function Header({ children }: HeaderProps) : React.ReactElement {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <HeaderTitle>Find your favorite <HeaderSpan>movies</HeaderSpan> here</HeaderTitle>
                {children}
            </HeaderContent>
        </HeaderWrapper>
    );
};

export default Header;
