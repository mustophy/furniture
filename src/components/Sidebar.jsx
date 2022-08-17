import styled from "styled-components";

const Sidebar = ({children}) => (
    <SidebarStyled>
        {children}
    </SidebarStyled>
)

export default Sidebar;

const SidebarStyled = styled.div`
    margin-top: 30px;
    span{
        font-weight: 500;
        font-size: 12px;
        color: #141517;
        mix-blend-mode: normal;
        opacity: 0.7;
    }
    p{
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #141517;
        margin-top: 35px;
    }
    ul {
        margin-left: 16px;
        margin-top: 16px;
        li {
            font-weight: 500;
            font-size: 12px;
            line-height: 32px;
            color: rgba(20, 21, 23, 0.594316);
            mix-blend-mode: normal;
            opacity: 0.7;
        }
    }
    .radio-row{
        display: flex;
        justify-content: space-between;
    }
`