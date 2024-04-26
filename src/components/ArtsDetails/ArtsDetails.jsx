import { useLoaderData, useParams } from "react-router-dom";


const ArtsDetails = () => {

    const arts = useLoaderData();

    const { id } = useParams();

    const art = arts.find(art => art._id === id);

    if (art) {
        return (
            <>

                <div className="flex gap-12 flex-col 
                ">
                    <div className="flex-1 p-4">
                        <img className="aspect-video rounded-xl" src={art.photo} alt="" />
                    </div>
                    <div className="flex-1 p-4">
                        <h1 className="mb-4 text-4xl font-bold font-heading">
                            {art.name}
                        </h1>
                        <hr className="mb-4" />
                        <p className="mb-4">
                            Sub-Catagory : {art.sub_catagory}
                        </p>
                        <hr className="mb-4" />
                        <p className="mb-4">
                            <span className="font-bold">Price</span>  : ${art.price}
                        </p>
                        <div className="flex
                        gap-3 items-center mb-4">
                            <p className="font-bold">Description: {art.description} </p>
                            
                        </div>
                        <hr className="mb-4" />
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}

                                <tbody>
                                    {/* row 1 */}
                                    <tr>

                                        <td>Customization:</td>
                                        <td className="font-bold">{art.customization}</td>

                                    </tr>
                                    {/* row 2 */}
                                    <tr>

                                        <td>Stock:</td>
                                        <td className="font-bold">{art.stock}</td>

                                    </tr>
                                    {/* row 3 */}
                                    <tr>

                                        <td>Processing Time:</td>
                                        <td className="font-bold">{art.time}</td>

                                    </tr>
                                    <tr>

                                        <td>Rating:</td>
                                        <td className="font-bold">{art.rating}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>

                </div>

            </>
        )
    }
    else {
        return (
            <>
                <div>
                    <h1>Book not Found</h1>
                    <Link to="/">Go Home</Link>
                </div>
            </>
        )
    }
};

export default ArtsDetails;