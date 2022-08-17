import Hero from "../components/HomeComponents/Hero";
import Layout from "../components/Layout";
import Subscribe from "../components/HomeComponents/Subscribe";
import News from "../components/HomeComponents/News";
import Sale from "../components/HomeComponents/Sale";

const Home = () => (
    <Layout>
        <Hero />
        <Sale />
        <Subscribe />
        <News />
    </Layout>
)

export default Home;
