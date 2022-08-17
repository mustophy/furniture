import styled from "styled-components";
const Subscribe = () => (
    <SubscribeStyled>
        <div className="sign-up">
            <h3>Special offer</h3>
            <h2>Join Us</h2>
            <div className="hr"></div>
            <span>Sign up for the newsletter and receive <br /> 10% off your first order</span>
            <input type="email" name="" placeholder="E-mail" id="" />
            <button>SUBSCRIBE</button>
            <span>By subscribing you agree to our Terms & Conditions and <br /> Privacy & Cookies Policy.</span>
        </div>
        <div className="image"></div>
    </SubscribeStyled>
)

export default Subscribe;

const SubscribeStyled = styled.div`
    display: flex;
    margin-top: 50px;
    padding: 0 100px;
    .sign-up{
        background: #FE7865;
        display: flex;
        flex-direction: column;
        padding: 30px 120px 60px 60px;
        width: 50%;
        .hr{
            margin-top: 20px;
            width: 250px;
            height: 2px;
            background: white;
        }
        h3{
            font-weight: 600;
            font-size: 24px;
            letter-spacing: -0.19px;
            color: #FFFFFF;
        }
        span{
            margin-top: 32px;
            font-weight: 400;
            font-size: 16px;
            line-height: 28px;
            letter-spacing: -0.466667px;
            color: #FFFFFF;
        }
        h2{
            font-weight: 600;
            font-size: 48px;
            letter-spacing: -1.245px;
            color: #FFFFFF;
        }
        input{
            background: #E6604D;
            padding: 21px 0 22px 33px;
            border: none;
            margin-top: 30px;
            margin-bottom: 8px;
            font-size: 14px;
            line-height: 21px;
            color: #FFFFFF;
        }
        input:focus{
            background: #F55C46;
            outline: 1px solid #FFFFFF;
        }
        input::placeholder{
            color: #FFFFFF;
        }
        button{
            background: #1D2539;
            border: none;
            outline: none;
            font-weight: 700;
            padding: 22px 0;
            display: flex;
            justify-content: center;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFFFFF;
        }
    }
    .image{
        width: 50%;
        height: 570px;
        background: #ECECEE;
    }
`