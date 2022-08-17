import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import styled from "styled-components"
import Hero from "../components/FaqComponents/Hero";
import Layout from "../components/Layout";
import { ChatIcon, ForumIcon, MinusIcon, PlusIcon } from "../components/Svgs";

const questionArray = [
    {
        title: "How can I pay for my order?",
        content: "Is your home small but nice, or do you have a lot of space in your home but you don´t know what to do with it? For every home and every room, you need to think big!"
    },
    {
        title: "How can I pay for my order?",
        content: "Is your home small but nice, or do you have a lot of space in your home but you don´t know what to do with it? For every home and every room, you need to think big!"
    },
    {
        title: "How can I pay for my order?",
        content: "Is your home small but nice, or do you have a lot of space in your home but you don´t know what to do with it? For every home and every room, you need to think big!"
    },
    {
        title: "How can I pay for my order?",
        content: "Is your home small but nice, or do you have a lot of space in your home but you don´t know what to do with it? For every home and every room, you need to think big!"
    }

]

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(-1);
    return (
        <Layout>
            <FaqStyled>
                <Hero />
                <section className="questions">
                    <div>
                        <p className="question-header">General questions</p>
                        <div className="hr"></div>
                        {questionArray.map((question, index) => {
                            function toggle(index) {
                                if (activeQuestion === index) return setActiveQuestion(-1)
                                else setActiveQuestion(index)
                            }
                            return (
                                <DropDown title={question.title}
                                    handler={() => toggle(index)}
                                    active={activeQuestion === index}
                                >
                                    {question.content}
                                </DropDown>
                            )
                        })

                        }
                    </div>
                    <div>
                        <p className="question-header">General questions</p>
                        <div className="hr"></div>
                        {questionArray.map((question, index) => {
                            function toggle(index) {
                                if (activeQuestion === index) return setActiveQuestion(-1)
                                else setActiveQuestion(index)
                            }
                            return (
                                <DropDown title={question.title}
                                    handler={() => toggle(index)}
                                    active={activeQuestion === index}
                                >
                                    {question.content}
                                </DropDown>
                            )
                        })

                        }

                    </div>
                </section>
                <section className="card-container">
                    <div className="card">
                        <ForumIcon />
                        <div>
                            <p className="card-title">Ask in the Forums</p>
                            <p className="content">Join the conversation! We think you would love our communtiy and it's a great place to find furniture announcements or general help</p>
                        </div>
                    </div>
                    <div className="card">
                        <ChatIcon />
                        <div>
                            <p className="card-title">Ask in the Forums</p>
                            <p className="content">Join the conversation! We think you would love our communtiy and it's a great place to find furniture announcements or general help</p>
                        </div>
                    </div>
                </section>
            </FaqStyled>
        </Layout>
    )
}

export default Faq;
const FaqStyled = styled.div`
    .questions{
        .question-header{
            font-weight: 500;
            font-size: 24px;
            letter-spacing: -0.691667px;
            color: #2C2E3F;
        }
        .hr{
            margin: 10px 0;
            height: 2px;
            background: #FE7865;
            width: 40px;
        }
        padding: 0 100px;
        display: flex;
        justify-content: space-between;
        >div{
            width: 40%;
        }
    }
    .card-container{
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
        width: 80%;
        .card{
            max-width: 500px;
            display: flex;
            border: 1px solid #D9D9D9;
            padding: 50px 50px;
            justify-content: center;
            align-items: center;
            svg{
                margin-right: 40px;
            }
            .card-title{
                font-weight: 500;
                font-size: 18px;
                color: #2C2E3F;
            }
            .content{
                font-weight: 400;
                font-size: 12px;
                margin-top: 16px;
                color: rgba(44, 46, 63, 0.697549);
            }
        }

    }
`

const DropDown = ({ title, children, active, handler }) => {

    return (
        <DropDownStyled>
            <div className="head" onClick={(handler)}>
                <p className="question-name">{title}</p>
                {!active
                    ? <PlusIcon />
                    : <MinusIcon />
                }
            </div>
            {active &&
                <>
                    {children}
                </>
            }
        </DropDownStyled>
    )
}

const DropDownStyled = styled.div`
    border-bottom: 1px solid #E3E3E3;;
    .head{
        min-height: 50px;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        .question-name{
            font-weight: 500;
            font-size: 14px;
            line-height: 36px;
            letter-spacing: -0.415px;
            color: #2C2E3F;
        }
    }
`