import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartIcon, SearchIcon, UserIcon } from "./Svgs";

const NavBar = () => (
    <NavBarStyled>
        <header>Furniture</header>
        <ul className="nav-links">
            <Link to='/category'>
                <li className="nav-link">Categories</li>
            </Link>
            <Link to='/faq'>
                <li className="nav-link">FAQ</li>
            </Link>
            <Link to='/blog'>
                <li className="nav-link">Blog</li>
            </Link>
            <Link to='/contact'>
                <li className="nav-link">Contact Us</li>
            </Link>
        </ul>
        <div className="icons">
            <UserIcon />
            <SearchIcon />
            <CartIcon />
        </div>
    </NavBarStyled>
)

export default NavBar;

const NavBarStyled = styled.nav`
    display: flex;
    padding: 30px 100px 0;
    justify-content: space-between;
    align-items: center;
    header{
        font-size: 18px;
        color: #2C2E3F;
    }
    a{
        text-decoration: none;
    }
    .nav-links{
        display: flex;
        .nav-link{
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            color: #141517;
            mix-blend-mode: normal;
            opacity: 0.7;
            margin-right: 48px;
        }
    }
    .icons{
        svg{
            margin-left: 72px;
        }
    }
`