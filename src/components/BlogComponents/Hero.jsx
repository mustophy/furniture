import styled from "styled-components";
import { SearchIcon } from "../Svgs";
import { ArrowButton } from "../Utils";

const Hero = () => (
    <HeroStyled>
        <div className="hero-imgBx">
            <div className="input-box">
                <input type="search" placeholder="search all post" name="" id="" /> <SearchIcon stroke="#FE7865" />
            </div>
        </div>
        <div className="content">
            <p className="subtitle">Featured Article</p>
            <p className="title">Thing Big! Make the most out of your spaces with these tips</p>
            <ArrowButton>Read More</ArrowButton>
        </div>
    </HeroStyled>
)

export default Hero;

const HeroStyled = styled.div`
    display: flex;
    margin: 0 100px;
    margin-top: 20px;
    height: 80vh;
    .hero-imgBx{
        width: 55%;
        background: #E3E3E3;
        height: 100%;
        position: relative;
        display: flex;
        align-items: flex-end;
        .input-box{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 110px;
            svg{
                position: relative;
                right: 50px;
            }
            input{
                width: 70%;
                padding: 15px;
                border: 1px solid #FE7865;
            }
            input::placeholder, input{
                font-weight: 600;
                font-size: 10px;
                line-height: 18px;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: #6C6D79;
            }
        }

    }
    .content{
        width: 45%;
        padding: 0 100px;
        background: linear-gradient(90deg, #F5F8FC 0%, #E7EFF8 100%);
        height: 100%;
        .subtitle{
            font-weight: 600;
            font-size: 12px;
            line-height: 33px;
            letter-spacing: -0.126667px;
            color: #FE7865;
            margin-top: 80px;
        }
        .title{
            font-weight: 600;
            font-size: 40px;
            color: #2C2E3F;
        }
    }

`