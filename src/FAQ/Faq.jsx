

const Faq = () => {
    return (
        <div className='mb-10'>
            <h1 className="md:text-5xl text-4xl font-bold mb-10 ">Frequently Asked Questions(FAQ)</h1>
            <div className='space-y-3'>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;