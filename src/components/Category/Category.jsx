import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Category = () => {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))


    }, [])
    console.log(category);

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {
                category.map(data => <Link to={`/categorycrafts/${data.category}`} key={data.category} className="card  glass mb-10">
                    <figure>{data.category === "CARTOON-DRAWING" ? <><img className="aspect-video object-cover" src="https://i.ibb.co/xDXfPpQ/pexels-didsss-1643964.jpg" alt="" /> </> : <></>}
                        {data.category === "LANDSCAPE-PAINTING" ? <><img className="aspect-video object-cover" src="https://images.pexels.com/photos/2104759/pexels-photo-2104759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> </> : <></>}
                        {data.category === "PORTRAIT-DRAWING" ? <><img className="aspect-video object-cover" src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> </> : <></>}
                        {data.category === "WATERCOLOUR-PAINTING" ? <><img className="aspect-video object-cover" src="https://images.pexels.com/photos/7175584/pexels-photo-7175584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> </> : <></>}
                        {data.category === "OIL-PAINTING" ? <><img className="aspect-video object-cover" src="https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> </> : <></>}
                        {data.category === "CHARCOAL-SKETCHING" ? <><img className="aspect-video object-cover" src="https://i.ibb.co/fx2pCDr/pexels-shkrabaanthony-4442022.jpg" alt="" /> </> : <></>}
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.category}</h2>
                        
                    </div>
                </Link>)
            }
        </div>
    );
};

export default Category;