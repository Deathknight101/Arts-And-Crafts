import { Typewriter } from "react-simple-typewriter";


const FeaturedSection = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold mb-10"><Typewriter  words={['Featured Arts & Crafts']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={5000}
           ></Typewriter></h1>
            <div className="grid md:grid-cols-3 mb-10">
                <div className="card bg-base-100 shadow-xl border">
                    <figure className="px-10 pt-10">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FeaturedSection;