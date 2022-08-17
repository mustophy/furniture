import styled from "styled-components";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./Svgs";
import { PrimaryButton, TextInput } from "./Utils";

const Footer = () => (
    <FooterStyled>
        <div className="flex">
            <section className="links">
                <p className="header">Helpful Links</p>
                <div className="row">
                    <ul className="footer-links">
                        <li>About us</li>
                        <li>Delivery and Returns policy</li>
                        <li>Help & FAQ</li>
                        <li>Service for professionals</li>
                    </ul>
                </div>
            </section>
            <section className="contact">
                <p className="header">Contact Info</p>
                <div className="row">
                    <div>
                        <p className="subhead">Oxford (UK)</p>
                        <span className="address">1-3 Abbey Street, <br /> Eynsham Oxford OX29 4TB
                        </span>
                    </div>
                </div>
            </section>
            <section className="sign-up">
                <p className="header">Sign Up Now</p>
                <TextInput placeholder="Name" />
                <TextInput placeholder="Email" inputType="e-mail" />
                <PrimaryButton>SIGN UP NOW</PrimaryButton>
            </section>
        </div>
        <div className="hr"></div>
        <div className="social-media">
            <p>&#169; 2022</p>
            <div className="icons">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
            </div>
        </div>
    </FooterStyled>
)

export default Footer;

const FooterStyled = styled.div`
    padding: 0 100px;
    margin-top: 100px;
    margin-bottom: 50px;
    .flex{
        display: flex;
        justify-content: space-between;
        section{
            width: 33%;
            margin-right: 30px;
        }
        .header{
            font-weight: 600;
            margin-bottom: 50px;
            font-size: 18px;
            letter-spacing: -0.103636px;
        color: #2C2E3F;
        }
        .row{
            display: flex;
            justify-content: space-between;
        }
        .links{
            .footer-links{
                margin-right: 60px;
                li{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 40px;
                    color: rgba(44, 46, 63, 0.697549);
                }
            }
        }
        .contact{
            .subhead{
                margin-bottom: 20px;
            }
            .address{
                font-weight: 400;
                font-size: 14px;
                line-height: 28px;
                color: rgba(44, 46, 63, 0.697549);
            }
        }
        .sign-up{
            margin-right: 0;
        }
    }
    .hr{
        margin: 30px 0;
        height: 0.3px;
        background: #2C2E3F;
    }
    .social-media{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icons{
            padding-right: 20px;
            svg{
                margin-left: 16px;
            }
        }
    }
`