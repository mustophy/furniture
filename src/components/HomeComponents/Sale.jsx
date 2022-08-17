import styled from "styled-components";
import CategoryCard from "../CategoryCard";
import Sidebar from "../Sidebar";

const Sale = () => (
    <SaleStyled>
        <div className="col-1">
            <h3>On Sale</h3>
            <h2>Up to <br/> 20% off</h2>
            <div className="hr"></div>
            <span>Our entire winter collection.</span>
            <Sidebar>
                <span>New In</span>
                <p>Collections</p>
                <ul>
                    <li>Chairs</li>
                    <li>Office Chairs</li>
                    <li>Stools</li>
                    <li>Rocking Chairs</li>
                    <li>Benches</li>
                </ul>
                <p>Rest</p>
                <p>Decoration</p>
                <p>Outdoor</p>
                <p>Magazine</p>
                <p>Outlet</p>
            </Sidebar>
        </div>
        <div className="col-2">
            <div className="col right">
                <div className="card-container portion">
                    <CategoryCard position={3} title="Accessories" />
                </div>
                <div className="card-container">
                    <CategoryCard position={1} title="Chairs & Stools" background="#F2F2F4" />
                </div>
                <div className="card-container portion" title="Lighting">
                    <CategoryCard position={2} title="Sofas & armchairs" />
                </div>
            </div>
            <div className="col">
                <div className="card-container portion">
                    <CategoryCard position={4} title="Lighting" background="#BADAC4" />
                </div>
                <div className="card-container">
                    <CategoryCard position={2} title="Furnishings" background="#FFEDDB" />
                </div>
                <div className="card-container portion" title="Lighting">
                    <CategoryCard position={1} title="Tables" background="#F2F2F4" />
                </div>
            </div>
        </div>

    </SaleStyled>
)

export default Sale;

const SaleStyled = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    padding: 0 100px;
    .col-1{
        .hr{
            margin: 20px 0;
            width: 180px;
            height: 2px;
            background: #FE7865;
        }
        h3{
            font-weight: 600;
            font-size: 16px;
            letter-spacing: -0.19px;
        }
        span{
            margin-top: 32px;
            font-weight: 400;
            font-size: 14px;
            line-height: 28px;
            letter-spacing: -0.466667px;
        }
        h2{
            font-weight: 600;
            font-size: 48px;
            letter-spacing: -1.245px;
        }
    }
    .col-2{
        display: flex;
        margin-right: 100px;
        .col{
            margin-right: 20px;
            width: 280px;
            display: flex;
            flex-direction: column;
            .card-container{
                margin-top: 10px;
                height: 200px;
                width: 100%;
            }
            .portion{
                width: 70%;
            }
        }
        .col:nth-child(2){
            margin-top: 80px;
        }
        .right{
            align-items: flex-end;
        }
    }
`