import styled from "styled-components";
import Hero from "../components/CategoryComponents/Hero";
import Layout from "../components/Layout";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import { ColoredRadioButton, SectionNav } from "../components/Utils";
const Category = () => (
    <Layout>
        <CategoryStyled>
            <Hero />
            <div className="content">
                <Sidebar>
                    <div className="radio-row">
                        <ColoredRadioButton colors={['#7FAADB', '#FE7865', '#FFB585', '#FCBDDA', '#FCBDDA']} />
                    </div>
                    <p>Materials</p>
                    <ul>
                        <li>Synthetic skin (6)</li>
                        <li>Metal (68)</li>
                        <li>Wooden (158)</li>
                        <li>Fabric (236)</li>
                        <li>Synthetic skin (6)</li>
                    </ul>
                    <p>Menu</p>
                </Sidebar>
                <div className="products-container">
                    <SectionNav navs={['ALL', 'NEW', 'OFFERS', 'DELIVERY IN 10DAYS']} />
                    <div className="row">
                        <Product />
                        <Product />
                    </div>
                    <div className="row">
                        <Product />
                        <Product />
                    </div>
                    <div className="row">
                        <Product />
                        <Product />
                    </div>
                    <button>SHOW MORE PRODUCTS</button>
                </div>
            </div>
        </CategoryStyled>
    </Layout>
)

export default Category;

const CategoryStyled = styled.div`
    padding: 0 100px;
    .content{
        display: flex;
    }
    .products-container{
        flex: 1;
        margin-left: 150px;
        button{
            outline: none;
            margin: 0 auto;
            display: block;
            border: none;
            padding: 15px 50px;
            color: #FFFFFF;
            font-size: 12px;
            background: #FE7865;
        }
        .product-nav{
            display: flex;
            justify-content: center;
            margin-bottom: 70px;
            li{
                margin-right: 60px;
                font-weight: 600;
                font-size: 11px;
                line-height: 16px;
            }
            .active{
                color: #FE7865;
            }
        }
        .row{
            display: flex;
            justify-content: space-between;
            height: fit-content !important;
        }
    }

`