import styled from "styled-components";
import { ArrowButton } from "../Utils";

const Hero = () => (
    <HeroStyled>
        <div className="image"></div>
        <div className="content">
            <div style={{position: "relative"}}>
                <p className="discount">-35%</p>
                <p className="subtitle">Sale off</p>
                <p className="title">Sofas <span className="light">and</span> <br /> Armchairs</p>
                <span>Relax, get comfortable and let yourself go. Once you try one of these sofas and armchairs you won't want any others. May the style be with you!</span>
                <ArrowButton>EXPLORE ALL ITEMS</ArrowButton>
            </div>
        </div>
    </HeroStyled>
)

export default Hero;

const HeroStyled = styled.div`
    display: flex;
    height: 80vh;
    margin: 50px 0 100px 0;
    .image{
        height: 100%;
        flex: 3;
        background: linear-gradient(90deg, #F5F8FC 0%, #E7EFF8 100%);
    }
    .content{
        div{
            width: 400px;
        }
        flex: 4;
        height: 100%;
        padding: 70px 0 0 100px;
        background: linear-gradient(360deg, #FFFBF8 0%, #FFF5EF 100%);
        .discount{
            position: absolute;
            height: 70px;
            top: 0;
            right: 0;
            width: 70px;
            border-radius: 50%;
            color: #FFFFFF;
            font-size: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FE7865;
        }
        .title{
            font-weight: 600;
            font-size: 64px;
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
            font-size: 14px;
            letter-spacing: -0.466667px;
            color: rgba(44, 46, 63, 0.697549);
        }
        .light{
            font-weight: 300;
            color: #2C2E3F;
            font-size: 48px;
        }
    }
`