import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const AllArts = () => {
    const allarts = useLoaderData();
    return (
        <div>
            <h1 className="text-5xl font-bold mb-5 mt-5"><Typewriter words={['Arts and crafts']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={5000}
            ></Typewriter>  </h1>
            <div className="overflow-x-auto ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allarts.map(art =>
                                <tr key={art}>
                                    <th>{art._id}</th>
                                    <td>{art.name}</td>
                                    <td>{art.sub_catagory}</td>
                                    <td>$ {art.price}</td>
                                    <td>{art.stock}</td>
                                    <td>{art.rating}</td>
                                    <Link to={`/arts/${art._id}`}>
                                        <button className="btn btn-primary">View Details</button>
                                    </Link>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArts;