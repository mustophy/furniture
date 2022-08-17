import styled from "styled-components";
import Sidebar from "../Sidebar";
const Suggestions = () => (
    <SuggestionsStyled>
        <h3 className="subtitle">Our Suggestions</h3>
        <h2 className="title">You may also like</h2>
        <div className="hr"></div>
        <div className="container">
            <Sidebar>

            </Sidebar>
        </div>
    </SuggestionsStyled>
)

export default Suggestions;

const SuggestionsStyled = styled.div`

    .container{
        display: flex;
    }
`