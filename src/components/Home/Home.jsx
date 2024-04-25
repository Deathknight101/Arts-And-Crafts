import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1 className='text-3xl'>HOME</h1>
            <Banner></Banner>
        </div>
    );
};

export default Home;