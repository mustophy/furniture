import styled from "styled-components";
const Product = () => (
    <ProductStyled>
        <div className="product-image">

        </div>
        <div>
            <div className="title">
                <p className="product-name">Patio armchair, blue</p>
                <p className="price">486 £</p>
            </div>
            <span className="delivery">within 10 days</span>
            <p className="product-details">
                Armchair in scandinavian design upholstered with fabric Miss pattern. Backrest with decorative buttons. Legs in natural wood.
            </p>
            <p className="buy">BUY NOW</p>
        </div>
    </ProductStyled>
)

export default Product;

const ProductStyled = styled.div`
    width: 400px;
    display: flex;
    margin-bottom: 90px;
    .product-image{
        width: 45%;
        height: 130px;
        margin-right: 30px;
        background: #E9F1F3;
    }
    > div:nth-child(2){
        flex: 1;
    }
    .title{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .product-name{
            font-weight: 700;
            font-size: 16px;
            line-height: 27px;
            color: #141517;
            width: 63%;
        }
        .price{
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            text-align: right;
            color: #141517;
        }

    }
    .delivery{
        font-weight: 300;
        font-size: 12px;
        line-height: 18px;
        color: rgba(20, 21, 23, 0.49782);
    }
    .product-details{
        font-weight: 400;
        margin: 20px 0;
        font-size: 12px;
        line-height: 28px;
        letter-spacing: -0.379167px;
        color: rgba(44, 46, 63, 0.697549);
    }
    .buy{
        font-weight: 700;
        font-size: 11px;
        line-height: 16px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #2C2E3F;
    }
`