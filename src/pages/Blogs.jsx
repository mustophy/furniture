import { useState } from "react";
import styled from "styled-components";
import Hero from "../components/BlogComponents/Hero";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

const Blogs = () => (
    <Layout>
        <BlogStyled>
            <Hero />
            <section>
                <Sidebar>
                    <p>Materials</p>
                    <ul>
                        <li>Synthetic skin (6)</li>
                        <li>Metal (68)</li>
                        <li>Wooden (158)</li>
                        <li>Fabric (236)</li>
                        <li>Synthetic skin (6)</li>
                    </ul>
                    <p>Tips and Tricks</p>
                    <p>Sales</p>
                    <p>Menu</p>
                </Sidebar>
                <div className="blog-section">
                    <div className="col">
                        <BlogCard title="Make the most of your space with these tips" />
                        <SliderCard />
                        <BlogCard title="Make the most of your space with these tips" />
                        <BlogCard title="Make the most of your space with these tips" />
                    </div>
                    <div className="col">
                        <SliderCard />
                        <BlogCard title="Make the most of your space with these tips" />
                        <BlogCard title="Make the most of your space with these tips" />
                        <BlogCard title="Make the most of your space with these tips" />
                    </div>
                </div>
            </section>
        </BlogStyled>
    </Layout>
)

export default Blogs;

const BlogStyled = styled.div`
    section{
        padding: 0 100px;
        margin-top: 50px;
        display: flex;
        .blog-section{
            display: flex;
            flex-basis: 70%;
            margin-left: auto;
            justify-content: space-between;
        }
    }
`

const BlogCard = ({ title }) => (
    <BlogCardStyled>
        <div>
            <p className="blog-title">{title}</p>
            <p className="category">Inspiration</p>
        </div>
    </BlogCardStyled>
)

const BlogCardStyled = styled.div`
    min-height: 500px;
    background: #E3E3E3;
    width: 400px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    >div{
        background: white;
        position: absolute;
        bottom: 50px;
        padding: 20px;
        width: 70%;
        .blog-title{
            font-weight: 700;
            font-size: 14px;
            color: #2C2E3F;
        }
        .category{
            font-weight: 500;
            font-size: 10px;
            margin-top: 20px;
            line-height: 14px;
            color: #9497AA;
        }
    }
`

const SliderCard = () => {
    const [active, setActive] = useState(0)
    function checkActive(num){
        if(num === active) return 'active'
    }
    return(
    <SliderCardStyled>
        <div className="dots">
            <p className={checkActive(0)} onClick={() => setActive(0)}></p>
            <p className={checkActive(1)} onClick={() => setActive(1)}></p>
            <p className={checkActive(2)} onClick={() => setActive(2)}></p>
        </div>
    </SliderCardStyled>
)}

const SliderCardStyled = styled.div`
    position: relative;
    background: #E3E3E3;
    width: 400px;
    height: 400px;
    margin-bottom: 50px;
    .dots{
        position: absolute;
        background: white;
        height: 30%;
        padding: 0 15px;
        width: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 0;
        p{
            border-radius: 50%;
            width: 6px;
            height: 6px;
            margin-bottom: 5px;
            background: #E3E3E3;
            margin-bottom: 10px;
        }
        .active{
            width: 7px;
            height: 7px;
            background: #FE7865;
        }
    }
`