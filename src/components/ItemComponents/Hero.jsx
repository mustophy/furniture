import styled from "styled-components";
import { ArrowButton } from "../Utils";
import chairImage from '../../images/chair.png'
import chairImage2 from '../../images/chair-1.png'
import chairImage3 from '../../images/chair-2.png'

const Hero = () => (
    <HeroStyled>
        <div className="col">
            <img className="image" alt="" src={chairImage} />
        </div>
        <div className="col content">
            <div className="product">
                <p className="subtitle">£152</p>
                <p className="title">Bjorg chair. <br /> white plastic</p>
                <span className="details">Armchair in polypropylene. Seat and legs in solid natural beech wood.</span>
                <div className="row">
                    <RadioButton color="#9CE0D8" name="radio"/>
                    <RadioButton color="#2C2E3F" name="radio"/>
                    <RadioButton color="#7FAADB" name="radio"/>
                    <RadioButton color="#FFB585" name="radio"/>
                </div>
                <ArrowButton>ADD TO CART</ArrowButton>
                <p className="extra">SHARE PRODUCT</p>
            </div>
            <div className="secondary-img">
                <img src={chairImage2} alt="" />
                <img src={chairImage3} alt="" />
            </div>
        </div>
    </HeroStyled>
)

export default Hero;

const HeroStyled = styled.div`
    height: 80vh;
    margin-top: 20px;
    display: flex;
    .col{
        width: 50%;
    }
    .image{
        margin-left: 200px;
        display: block;
        margin: 0 auto;
        width: 75%;
        height: 100%;
        background: #FE7865;
    }
    .content{
        position: relative;
        margin-top: 80px;
        display: flex;
        height: 60%;
        .product{
            height: 100%;
            display: flex;
            flex-direction: column;
            .row{
                display: flex;
                align-items: center;
            }
        }
        .title{
            font-weight: 600;
            font-size: 42px;
            letter-spacing: 1.66px;
            color: #2C2E3F;
            line-height: 60px;
            margin-bottom: 30px;
        }
        .subtitle{
            font-weight: 600;
            font-size: 20px;
            color: #FE7865;
        }
        .secondary-img{
            height: 100%;
            text-align: center;
            img{
                height: 50%;
            }
        }
        .details{
            font-weight: 400;
            font-size: 14px;
            letter-spacing: -0.466667px;
            color: rgba(44, 46, 63, 0.697549);
        }
        .extra{
            position: absolute;
            font-weight: 700;
            bottom: -70px;
            font-size: 11px;
            line-height: 16px;
            letter-spacing: 1.83333px;
            text-transform: uppercase;
            color: #2C2E3F;
            mix-blend-mode: normal;
            opacity: 0.5;
        }
    }
`

const RadioButton = ({ color, name }) => (
    <RadioButtonStyled color={color}>
        <label className="container">
            <input type="radio" name={name} />
            <span className="checkmark"></span>
        </label>
    </RadioButtonStyled>
)

const RadioButtonStyled = styled.div`
    margin-right: 40px;
    display: flex;
    justify-content: center;
    .container {
        display: block;
        position: relative;

        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
  
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: ${props => props.color};
    border-radius: 50%;
  }
  input:checked ~ .checkmark {
    height: 20px !important;
    width: 20px !important;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  
  .container .checkmark:after {
       top: 4px;
      left: 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
  }

`