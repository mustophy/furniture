import styled from "styled-components"
import { ArrowRight } from "../Svgs";

const Hero = () => (
    <HeroStyled>
        <div className="absolute">
            <h3>New Collection</h3>
            <h2>Chairs & Stools</h2>
            <span>Armchair upholstered in synthetic leather. Powder <br /> coated steel legs.
            </span>
        </div>
        <div className="col-1">
        </div>
        <div className="col-2">
            <button>
                <span>SHOP NOW</span>
                <ArrowRight />
            </button>
        </div>
    </HeroStyled>
)

export default Hero;
const HeroStyled = styled.div`
    display: flex;
    margin-top: 32px;
    height: 80vh;
    position: relative;
    padding: 0 100px;
    .absolute{
        position: absolute;
        right: 17%;
        top: 20%;
        h2{
            font-weight: 600;
            font-size: 88px;
            letter-spacing: -1.66px;
            color: #2C2E3F;
        }
        h3{
            font-weight: 600;
            font-size: 24px;
            letter-spacing: -0.184242px;
            color: #2C2E3F;
        }
        span{
            font-weight: 400;
            font-size: 14px;
            line-height: 28px;
            letter-spacing: -0.466667px;
            color: rgba(44, 46, 63, 0.697549);
        }
    }
    .col-1{
        padding-left: 40%;
        width: 67%;
        background: linear-gradient(90deg, #F5F8FC 0%, #E7EFF8 100%);
    }
    .col-2{
        width: 33%;
        background: linear-gradient(360deg, #FFFBF8 0%, #FFF5EF 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        button{
            height: 80px;
            display: flex;
            justify-content: space-between;
            padding: 0 72px;
            align-items: center;
            background: #FE7865;
            outline: none;
            border: none;
            span{
                font-weight: 700;
                font-size: 12px;
                line-height: 18px;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
        }
    }
`