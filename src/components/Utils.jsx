import { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { ArrowRight, MinusIcon, PlusIcon } from "./Svgs"

export const PrimaryButton = ({ children }) => (
    <PrimaryButtonStyled>
        {children}
    </PrimaryButtonStyled>
)

const PrimaryButtonStyled = styled.button`
    border: none;
    outline: none;
    background: #FE7865;
    height: 62px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
`
export const TextInput = ({ inputType = 'text', placeholder }) => (
    <TextInputStyled type={inputType} placeholder={placeholder} />

)

export const SidebarDropDown = ({ title, children }) => {
    const [showContent, setShowContent] = useState(false)
    function handler(){
        setShowContent(!showContent)
    }
    return (
        <SidebarDropDownStyled>
            <div className="head">
                <p>{title}</p>
                {showContent ?
                    <MinusIcon action={handler}/> : <PlusIcon action={handler}/>
                }
            </div>
            {showContent && {children} }
        </SidebarDropDownStyled>
    )
}

const SidebarDropDownStyled = styled.div`
    > p{
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #8F91A3;
    }
    .head{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
`

export const SectionNav = ({ navs = [], left = false }) => {
    const [activeNav, setActiveNav] = useState(0);
    function checkActive(index) {
        if (activeNav === index) return 'active nav';
        return 'nav'
    }
    return (
        <SectionNavStyled left={left}>
            {navs.map((nav, index) => (
                <p className={checkActive(index)} onClick={() => setActiveNav(index)}>{nav}</p>
            ))}
        </SectionNavStyled>
    )
}

const SectionNavStyled = styled.div`
    ${(left) => left !== false && css`
        padding-left: 100px;
        justify-content: flex-start !important;
    `}
    width: 100%;
    display: flex;
    margin-bottom: 80px;
    justify-content: center;
    
    .nav{
        font-weight: 600;
        font-size: 11px;
        cursor: pointer;
        line-height: 16px;
        color: #2C2E3F;
        margin-right: 40px;
    }    
    .active{
        color: #FE7865;
    }
`

const TextInputStyled = styled.input`
    width: 100%;
    padding-bottom: 18px;
    margin-bottom: 33px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #2C2E3F;
    border: none;
    border-bottom: 1px solid #FE7865;
    margin-bottom: 33px;
    :focus{
        outline: none;
    }
`

export const SearchInput = () => (
    <SearchInputStyled type="search">
    </SearchInputStyled>
)

const SearchInputStyled = styled.input`
`

export const ArrowButton = ({ children }) => (
    <ArrowButtonStyled>
        <span className="action">{children}</span>
        <ArrowRight />
    </ArrowButtonStyled>
)

const ArrowButtonStyled = styled.button`
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    background: #FE7865;
    outline: none;
    margin-top: 30px;
    width: 300px;
    border: none;
    .action{
        color: #FFFFFF !important;
        font-weight: 700;
        font-size: 10px;
        line-height: 18px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
`

export const ColoredRadioButton = ({ colors = [], name = "name" }) => {
    return colors.map(color => (
        <ColoredStyled color={color}>
            <div className="container">
                <input type="radio" name={name} id="" />
                <div className="inner"></div>
            </div>
        </ColoredStyled>
    ))
}

const ColoredStyled = styled.div`
    width: 25%;
    .container{
        width: 15px;
        background: #FFFFFF;
        border: 1px solid ${({ color }) => color};
        height: 15px;
        display: flex;
        padding: 0;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        .inner{
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background: ${({ color }) => color};
            border-radius: 50%;
        }
        input:checked ~ .inner{
            width: 4px;
            height: 4px;
        }
        input{
            position: absolute;
            opacity: 0;
            cursor: pointer;
        }
    }
`;