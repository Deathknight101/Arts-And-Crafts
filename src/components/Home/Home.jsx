import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ArtsCards from "../ArtsCards/ArtsCards";
import Category from "../Category/Category";



const Home = () => {


    const arts = useLoaderData();


    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1 className='text-3xl'>HOME {arts.length}</h1>
            <Banner></Banner>
            <h1 className="text-5xl font-bold mb-5">Craft Item</h1>
            <div className="grid md:grid-cols-3 gap-3 mb-10">
                {
                    arts.map(art => <ArtsCards key={art._id} art={art}></ArtsCards>)
                }
            </div>
            <h1 className="text-5xl font-bold mb-5">Art & Craft Categories</h1>
            <Category></Category>


        </div>
    );
};

export default Home;