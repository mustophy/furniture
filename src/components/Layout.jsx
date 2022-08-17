import styled from "styled-components";
import Footer from "./Footer";
import NavBar from "./Navbar";
import Slider from "./Slider";

const Layout = ({ children }) => (
    <LayoutStyled>
        <NavBar />
        {children}
        <Slider />
        <Footer />
    </LayoutStyled>
)

export default Layout;

const LayoutStyled = styled.div`
`