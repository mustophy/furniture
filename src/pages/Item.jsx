import styled from "styled-components";
import Layout from "../components/Layout";
import Hero from "../components/ItemComponents/Hero";
import Description from "../components/ItemComponents/Description";
import { SectionNav } from "../components/Utils";

const Item = () => (
    <Layout>
        <ItemStyled>
            <Hero />
            <SectionNav navs={['Description', 'Info', 'Collection', 'Reviews']} left={true} />
            <Description />
        </ItemStyled>
    </Layout>
)

export default Item;

const ItemStyled = styled.div`
    
`