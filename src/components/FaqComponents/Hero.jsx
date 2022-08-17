import styled from "styled-components";
import { SearchIcon } from "../Svgs";

const Hero = () => (
    <HeroStyled>
        <div className="image"></div>
        <div className="content">
            <p className="subtitle">Help Center</p>
            <p className="title">How can we help you</p>
            <span>Our help center can instantly give you answers to many frequently asked questions.</span> <br />
            <div className="input-box">

                <input type="search" placeholder="WHAT CAN WE HeLP YOU WITH" name="" id="" /> <SearchIcon stroke="#FE7865" />
            </div>
        </div>
    </HeroStyled >
)

export default Hero;

const HeroStyled = styled.div`
    display: flex;
    height: 80vh;
    margin: 50px 0 100px 0;
    .image{
        height: 100%;
        width: 50%;
        background: linear-gradient(90deg, #F5F8FC 0%, #E7EFF8 100%);
    }
    .content{
        margin-left: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        div{
            width: 400px;
        }
        width: 50%;
        height: 100%;

        .title{
            font-weight: 600;
            width: 50%;
            font-size: 52px;
            letter-spacing: 1.66px;
            color: #2C2E3F;
            line-height: 60px;
            margin-bottom: 30px;
        }
        .subtitle{
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: -0.184242px;
            color: #FE7865;
        }
        span{
            font-weight: 400;
            display: inline-block;
            font-size: 14px;
            width: 50%;
            letter-spacing: -0.466667px;
            color: rgba(44, 46, 63, 0.697549);
        }
        .input-box{
            width: 100%;
            display: flex;
            align-items: center;
            svg{
                position: relative;
                right: 50px;
            }
            input{
                width: 80%;
                padding: 15px;
                border: 1px solid #FE7865;
            }
            input::placeholder, input{
                font-weight: 600;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: #6C6D79;
            }
        }
    }
`