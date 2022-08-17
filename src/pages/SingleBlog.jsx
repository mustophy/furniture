import styled from "styled-components";
import { useState } from "react";
import Layout from "../components/Layout";

const SingleBlog = () => {
    const [comments, showComment] = useState(false);
    function toggleComments() {
        showComment(!comments)
    }
    return (
        <Layout>
            <SingleBlogStyled>
                <header>
                    <h2 className="blog-title">Make the most out of your space with these tips</h2>
                    <div className="blog-author">
                        <div className="avatar"></div>
                        <span>Editorial Staff</span>
                    </div>
                </header>
                <p className="blog-subtitle">Is your home small but nice, or do you have a lot of space in your home but you don´t know what to do with it? For every home and every room, you need to think big!</p>
                <div className="blog-image"></div>
                <section>
                    <div className="blog-content">
                        <Post />
                        <Post />
                        <Post />
                        <div className="orange">
                            <p>What do you do to benefit the space you have to its maximum extent? Share it with us with #MIfurniture!</p>
                        </div>
                        <Post />
                    </div>
                    <div className="comment-section">
                        <div className="comment-toggle" onClick={toggleComments}>
                            <span>Comments</span>
                            <span>{comments ? '-' : '+'}</span>
                        </div>
                        {comments &&
                            <></>
                        }
                        <div className="hr"></div>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Comment here"></textarea>
                        <button>COMMENT</button>
                    </div>
                </section>
            </SingleBlogStyled>
        </Layout>
    )
}

export default SingleBlog;

const SingleBlogStyled = styled.div`
    padding: 0 100px;
    header{
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        .blog-title{
            font-weight: 600;
            font-size: 36px;
            color: #2C2E3F;
            width: 45%;
        }
        .blog-author{
            display: flex;
            height: fit-content;
            align-items: center;
            .avatar{
                width: 40px;
                height: 40px;
                margin-right: 30px;
                background: grey;
                border-radius: 50%;
            }
            span{
                font-weight: 500;
                font-size: 14px;
                color: #2C2E3F;
            }
        }
    }
    .blog-subtitle{
        font-weight: 400;
        margin-top: 20px;
        margin-bottom: 40px;
        font-size: 16px;
        width: 50%;
        color: rgba(44, 46, 63, 0.697549);
    }
    .blog-image{
        width: 100%;
        height: 500px;
        background: linear-gradient(90deg, #F5F8FC 0%, #E7EFF8 100%);;
    }
    section{
        margin-top: 70px;
        display: flex;
        justify-content: space-between;
        .blog-content{
            width: 50%;
            .orange{
                background: #FE7865;
                color: white;
                padding: 25px 30px 30px;
                width: 100%;
                text-align: justify;
                margin-bottom: 50px; 
            }
        }
        .comment-section{
            width: 40%;
            .comment-toggle{
                display: flex;
                justify-content: space-between;
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                color: #8F91A3;
            }
            .hr{
                margin-top: 6px;
                width: 100%;
                height: 0.5px;
                background-color: #8F91A3;
            }
            button{
                background: #FE7865;
                border: none;
                margin-top: 10px;
                outline: none;
                color: white;
                letter-spacing: 2px;
                padding: 15px 40px;
            }
            textarea{
                margin-top: 30px;
                width: 100%;
                resize: none;
                padding: 30px 20px;
                color: rgba(44, 46, 63, 0.332314);
                border: 1.5px solid #C7C7C7;
            }
            textarea::placeholder{
                color: rgba(44, 46, 63, 0.332314);
            }
        }
    }
`

const Post = () => (
    <PostStyled>
        <h3 className="title">Grouping is the basic</h3>
        <p className="content">Do you like small accessories, but you are afraid that it will make your room look messy? If yes, it´s best to group. You can apply it everywhere. Place small groups on your dining table, side table, tv cabinet or in a closet. Don´t place small accessories separately everywhere, but put a candleholder, vase and small plant together as a group. This brings calm to your interior. This way, you can combine different styles and create unity.</p>
        <div className="image"></div>
    </PostStyled>
)

const PostStyled = styled.div`
    margin-bottom: 50px;
    .title{
        font-weight: 500;
        font-size: 28px;
        color: #2C2E3F;
    }
    .content{
        margin-top: 20px;
        margin-bottom: 30px;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        color: rgba(44, 46, 63, 0.697549);
    }
    .image{
        width: 100%;
        height: 400px;
        background: #ECECEE;
    }
`