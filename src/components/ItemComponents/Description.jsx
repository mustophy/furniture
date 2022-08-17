import styled from "styled-components";
const Description = () => (
    <DescriptionStyled>
        <div className="news">
            <h3>Description</h3>
            <h2>Borg Chair</h2>
            <div className="hr"></div>
            <span className="product-desc">All trend spaces have a common denominator: chairs that are icons. And this chair has everything to become that, an icon of design. Its legs and seat are made of solid beech wood ad its backrest, with rounded shapes, is made of polypropylene. Its design favors comfort while adding great aesthetic value to any interior design.</span>
        </div>
        <div className="image"></div>
        <div className="idea">
            <h2 className="title">
                5 ideas for choosing the perfect
            </h2>
            <div className="hr"></div>
            <p className="content">
                Choosing the right mattress is not so simple. We all sleep in a different way and we all want our mattress to adapt perfectly to our body.
            </p>
            <div className="author">
                <div className="avatar"></div>
                <p className="author-name">Editorial Staff</p>
            </div>
        </div>
    </DescriptionStyled>

)

export default Description;

const DescriptionStyled = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
    .news{
        display: flex;
        flex-direction: column;
        width: 35%;
        .hr{
            margin-top: 50px;
            width: 250px;
            height: 2px;
            background: #FE7865;
        }
        h3{
            font-weight: 600;
            font-size: 16px;
            letter-spacing: -0.19px;
        }
        .product-desc{
            margin-top: 32px;
            font-weight: 400;
            font-size: 14px;
            line-height: 38px;

        }
        h2{
            font-weight: 600;
            font-size: 48px;
            letter-spacing: -1.245px;
        }
        button{
            background: #FE7865;;
            border: none;
            outline: none;
            width: 50%;
            margin-top: 40px;
            padding: 20px;
            font-weight: 700;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFFFFF;
            span{
                margin-top: 0;
                font-size: 12px;
            }
        }
    }
    .image{
        width: 30%;
        height: 570px;
        background: #ECECEE;
    }
    .idea{
        width: 272px;
        .hr{
            width: 100px;
            height: 2px;
            margin: 48px 0;
            background: #FE7865;;
        }
        .title{
            font-weight: 600;
            font-size: 30px;
            line-height: 40px;
            letter-spacing: -0.691667px;
            color: #2C2E3F;
        }
        .content{
            font-weight: 400;
            font-size: 14px;
            line-height: 28px;
            letter-spacing: -0.408333px;
            margin-bottom: 18px;
            color: rgba(44, 46, 63, 0.697549);
        }
        .author{
            display: flex;
            align-items: center;
            .avatar{
                height: 51px;
                width: 51px;
                border-radius: 50%;
                background: grey;
                margin-right: 23px;
            }
            .author-name{
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: -0.466667px;
                color: #2C2E3F;
            }
        }
    }
`