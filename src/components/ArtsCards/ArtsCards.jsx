import { Link } from "react-router-dom";


const ArtsCards = ({ art }) => {
    const { name, price, rating, customization, stock, description, photo, userName, email, time, _id, sub_catagory } = art;

    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img className="aspect-video" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <p>Stock: {stock}</p>
                <p>Sub-Category: {sub_catagory}</p>
                <p>Processing Time: {time}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-start">
                    <Link to={`/arts/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ArtsCards;