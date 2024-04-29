import { Typewriter } from "react-simple-typewriter";


const FeaturedSection = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold mb-10"><Typewriter words={['Featured Arts & Crafts']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={5000}
            ></Typewriter></h1>
            <div className="grid md:grid-cols-3 mb-10 gap-5 ">
                <div className="card  shadow-xl border bg-white dark:bg-slate-800">
                    <figure className="px-10 pt-10">
                        <img src="https://images.pexels.com/photos/375882/pexels-photo-375882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-xl object-cover aspect-video" />
                    </figure>
                    <div className="card-body items-center text-center text-black dark:text-white">
                        <h2 className="card-title">Artist Spotlight</h2>
                        <p>Discover the stories behind the artists who bring beauty and innovation to life through their creations. Each month, we shine a spotlight on a talented artisan, exploring their journey, techniques, and sources of inspiration. From traditional craftsmen to contemporary visionaries, delve into the diverse world of artistry and learn what drives these creators to craft their masterpieces.</p>

                    </div>
                </div>
                <div className="card  shadow-xl border bg-white dark:bg-slate-800">
                    <figure className="px-10 pt-10">
                        <img src="https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="rounded-xl object-cover aspect-video " />
                    </figure>
                    <div className="card-body items-center text-center text-black dark:text-white">
                        <h2 className="card-title">DIY Delights</h2>
                        <p>Get hands-on with our collection of DIY projects that are perfect for unleashing your creativity at home. From home decor and fashion accessories to gifts and seasonal decorations, our DIY Delights section offers a plethora of ideas and inspiration for crafters of all skill levels. Transform everyday materials into works of art and add a personal touch to your surroundings with our fun and easy-to-follow tutorials.</p>

                    </div>
                </div>
                <div className="card  shadow-xl border bg-white dark:bg-slate-800">
                    <figure className="px-10 pt-10">
                        <img src="https://images.pexels.com/photos/8033900/pexels-photo-8033900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-xl object-cover aspect-video " />
                    </figure>
                    <div className="card-body items-center text-center text-black dark:text-white">
                        <h2 className="card-title">Community Creations</h2>
                        <p>Celebrate the creativity of our vibrant community with our Community Creations showcase. Discover and share inspiring works from fellow crafters around the globe. Whether you're looking to showcase your latest masterpiece, seek feedback on a work in progress, or simply connect with like-minded individuals, our community platform is the perfect place to share your passion for creativity and discover the talents of others.</p>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default FeaturedSection;