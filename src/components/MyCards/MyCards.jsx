
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const MyCards = ({ art, setReloadData }) => {
    const { name, price, rating, customization, stock, description, photo, userName, email, time, _id, sub_catagory } = art;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://b9-a10-server-three.vercel.app/artscraft/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Item has been deleted.",
                                icon: "success"
                            })
                            setReloadData(true);

                        }
                    })
            }
        });
    }

    return (
        <div className="card  bg-base-100 shadow-xl image-full">
            <figure><img className="aspect-video" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <p>Stock: {stock}</p>
                <p>Customization: {customization}</p>
                <p>Sub-Category: {sub_catagory}</p>
                <div className="card-actions justify-start">
                    <Link to={`/arts/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                    <Link to={`/updatearts/${_id}`}>
                        <button className="btn bg-green-500 text-white">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white">Delete</button>


                </div>
            </div>
        </div>
    );
};

export default MyCards;