import styled, { css } from "styled-components";

const CategoryCard = ({ position = 1, title, background="#DBEDF0" }) => {
    
    function checkPosititon(pos) {
        if(pos === 1) return 'title top-left'
        else if(pos === 2) return 'title top-right'
        else if(pos === 3) return 'title bottom-right'
        else return 'title bottom-left'
    }
    
    return (
        <CategoryCardStyled background={background}>
            <span className={checkPosititon(position)}>{title}</span>
        </CategoryCardStyled>
    )
}

export default CategoryCard;

const CategoryCardStyled = styled.div`
    ${({background}) => css`
        background: ${background};
    `}
    position: relative;
    height: 100%;
    width: 100%;
    .title{
        position: absolute;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        letter-spacing: -0.415px;
        color: #2C2E3F;
        background: #FFFFFF;
        padding: 10px 15px;
    }
    .top-right{
        right: 0;
        top: 0;
    }
    .top-left{
        left: 0;
        top: 0;
    }
    .bottom-left{
        bottom: 0;
        left: 0;
    }
    .bottom-right{
        bottom: 0;
        right: 0;
    }
`