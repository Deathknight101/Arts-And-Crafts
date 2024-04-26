import { Link, useLoaderData } from "react-router-dom";


const AllArts = () => {
    const allarts = useLoaderData();
    return (
        <div>
            <h1>Arts and crafts {allarts.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
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
                                    <td>{art.price}</td>
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