import styled from "styled-components"
import { useEffect, useState } from "react"

const Slider = () => {
    const [position, setPosition] = useState(0)
    const [transform, setTransform] = useState(0)
    function switchImage(position) {
        setPosition(position)
    }
    useEffect(() => {
        if(position > 0 ) setTransform(- position * 30)
        else setTransform(0)
    }, [position])
    function checkActive(num){
        if(num === position) return 'active';
        return ''
    }
    return (
        <SliderStyled transform={transform}>
            <div className="images">
                <div className="imageBx">
                    <div className="image"></div>
                </div>
                <div className="imageBx">
                    <p className="name">Autumn Collection</p>
                    <div className="image active-img"></div>
                    <p className="count">01</p>
                </div>
                <div className="imageBx">
                    <div className="image"></div>
                </div>
            </div>
            <div className="position">
                <div className={checkActive(0)} onClick={() => switchImage(0)}></div>
                <div className={checkActive(1)} onClick={() => switchImage(1)}></div>
                <div className={checkActive(2)} onClick={() => switchImage(2)}></div>
                <div className={checkActive(3)} onClick={() => switchImage(3)}></div>
            </div>
        </SliderStyled>
    )
}

export default Slider;
const SliderStyled = styled.div`
    margin-top: 96px;
    overflow-x: hidden;
    .images{
        transition: all 2s;
        transform: ${({ transform}) => `translateX(${transform}%)`};
    }
    div {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        .imageBx {
            width: 33%;
            padding: 0 10px;
            position: relative;
            .image{
                background: #ECECEE;
                height: 360px;
                width: 100%; 
            }
            .active-img{
                height: 400px;
            }
            .name{
                position: absolute;
                right: 0;
                top: 0;
                background: white;
                font-weight: 500;
                font-size: 16px;
                letter-spacing: -0.553333px;
                color: #2C2E3F;
                padding: 15px 30px;
            }
            .count{
                font-weight: 300;
                font-size: 14px;
                position: absolute;
                bottom: 0;
                left: 10px;
                color: #FFFFFF;
                padding: 10px;
                background: #FE7865;
            }
        }
    }
    .position{
        display: flex;
        justify-content: center;
        margin-top: 25px;
        align-items: center;
        div{
            cursor: pointer;
            height: 6px;
            margin-right: 14px;
            width: 6px;
            border-radius: 50%;
            background-color: #D8D8D8;
        }
        .active{
            height: 9px;
            background: #FE7865;
            width: 9px;
        }
    }
`