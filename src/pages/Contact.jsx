import styledComponents from "styled-components";
import Layout from "../components/Layout";

const Contact = () => (
    <Layout>
        <ContactStyled>
            <div className="image"></div>
            <div className="content">
                <p className="subtitle">Contact Us</p>
                <p className="title">Let's talk</p>
                <span>Our friendly custom service team always respond to enquiries within 24 hours.</span> <br />
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <textarea name="" id="" cols="30" rows="7" placeholder="Message"></textarea>
                <button>SEND MESSAGE</button>
            </div>
        </ContactStyled>
    </Layout>
)

export default Contact;

const ContactStyled = styledComponents.div`
    display: flex;
    height: 80vh;
    margin: 50px 0 100px 0;
    .image{
        height: 100%;
        width: 50%;
        background: linear-gradient(90deg, #F5F8FC 0%, #E7EFF8 100%);
    }
    .content{
        margin-left: 100px;
        display: flex;
        padding-right: 100px;
        flex-direction: column;
        justify-content: center;
        div{
            width: 400px;
        }
        width: 50%;
        height: 100%;

        .title{
            font-weight: 600;
            width: 50%;
            font-size: 52px;
            letter-spacing: 1.66px;
            color: #2C2E3F;
            line-height: 60px;
            margin-bottom: 30px;
        }
        .subtitle{
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: -0.184242px;
            color: #FE7865;
        }
        span{
            font-weight: 400;
            display: inline-block;
            font-size: 14px;
            width: 50%;
            letter-spacing: -0.466667px;
            color: rgba(44, 46, 63, 0.697549);
        }

        input{
            width: 100%;
            padding: 15px;
            border: 1px solid #D8D8D8;
            margin-bottom: 20px;
        }
        input::placeholder, input{
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: rgba(58, 59, 75, 0.497452);;
        }
        textarea{
            width: 100%;
            margin-bottom: 20px;
            resize: none;
            padding: 20px;
        }   
        textarea::placeholder{
            color: rgba(58, 59, 75, 0.497452);
        }
        button{
            width: 100%;
            background: #1D2539;
            outline: none;
            padding: 20px 0;
            border: none;
            color: white;
            text-align-center;          
        }
    }
`