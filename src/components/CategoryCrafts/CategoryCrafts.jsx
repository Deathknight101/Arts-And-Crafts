import { useLoaderData } from "react-router-dom";
import ArtsCards from "../ArtsCards/ArtsCards";


const CategoryCrafts = () => {
    const arts = useLoaderData()
    console.log(arts);
    return (
        <div className="grid md:grid-cols-3 gap-3 mb-10 mt-10">
            {
                arts.map(art => <ArtsCards key={art._id} art={art}></ArtsCards>)
            }
        </div>
    );
};

export default CategoryCrafts;