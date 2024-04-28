import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ArtsCards from "../ArtsCards/ArtsCards";
import Category from "../Category/Category";
import FeaturedSection from "../../FeaturedSection/FeaturedSection";
import Faq from "../../FAQ/Faq";



const Home = () => {


    const arts = useLoaderData();


    return (
        <div>
            
            <Helmet>
                <title>Home</title>
            </Helmet>
            
            <Banner></Banner>
            <h1 className="text-5xl font-bold mb-5">Craft Item</h1>
            <div className="grid md:grid-cols-3 gap-3 mb-10">
                {
                    arts.map(art => <ArtsCards key={art._id} art={art}></ArtsCards>)
                }
            </div>
            <h1 className="text-5xl font-bold mb-5">Art & Craft Categories</h1>
            <Category></Category>
            <FeaturedSection></FeaturedSection>
            <Faq></Faq>

        </div>
    );
};

export default Home;