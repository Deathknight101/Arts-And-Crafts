import { Typewriter } from "react-simple-typewriter";


const Faq = () => {
    return (
        <div className='mb-10'>
            <h1 className="md:text-5xl text-4xl font-bold mb-10 "><Typewriter words={['Frequently Asked Questions(FAQ)']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={5000}
            ></Typewriter> </h1>
            <div className='space-y-3'>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What is Crafty Corner?
                    </div>
                    <div className="collapse-content">
                        <p>Crafty Corner is a personalized section of our arts and craft website where users can showcase their own creations and discover inspiration from others. It features a user-friendly interface that allows members to add their crafts, view their own creations, and explore a wide array of crafts from the community.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Can I edit or remove my crafts after adding them?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you have full control over your crafts. You can edit the details or remove them entirely from your profile at any time. Simply navigate to the "My Crafts" section, select the craft you wish to modify, and make the necessary changes.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        How can I view all the crafts added by other users?
                    </div>
                    <div className="collapse-content">
                        <p>You can explore the entire collection of crafts added by the community by visiting the "All Crafts" tab. Here, you'll find a curated selection of crafts from various users, offering endless inspiration and creative ideas.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        How often is Crafty Corner updated with new crafts?
                    </div>
                    <div className="collapse-content">
                        <p>Crafty Corner is a dynamic platform that is constantly updated with new crafts from our community members. Whether you're looking for fresh inspiration or eager to share your latest masterpiece, there's always something new to discover in Crafty Corner.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;