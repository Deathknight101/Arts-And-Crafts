import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ArtsCards from "../ArtsCards/ArtsCards";



const Home = () => {


    const arts = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1 className='text-3xl'>HOME {arts.length}</h1>
            <Banner></Banner>
            <div className="grid md:grid-cols-3 gap-3 mb-10">
                {
                    arts.map(art => <ArtsCards key={art._id} art={art}></ArtsCards>)
                }
            </div>


        </div>
    );
};

export default Home;