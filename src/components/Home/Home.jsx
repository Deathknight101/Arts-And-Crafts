import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ArtsCards from "../ArtsCards/ArtsCards";
import Category from "../Category/Category";
import FeaturedSection from "../../FeaturedSection/FeaturedSection";
import Faq from "../../FAQ/Faq";
import { Typewriter } from 'react-simple-typewriter';



const Home = () => {


    const arts = useLoaderData();


    return (
        <div>
            
            <Helmet>
                <title>Home</title>
            </Helmet>
            
            <Banner></Banner>
            
            <h1 className="text-5xl font-bold mb-5"><Typewriter  words={['Craft Item']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={5000}
           ></Typewriter>  </h1>
            <div className="grid md:grid-cols-3 gap-3 mb-10">
                {
                    arts.map(art => <ArtsCards key={art._id} art={art}></ArtsCards>)
                }
            </div>
            <h1 className="text-5xl font-bold mb-5"><Typewriter  words={['Art & Craft Categories']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={5000}
           ></Typewriter></h1>
            <Category></Category>
            <FeaturedSection></FeaturedSection>
            <Faq></Faq>

        </div>
    );
};

export default Home;