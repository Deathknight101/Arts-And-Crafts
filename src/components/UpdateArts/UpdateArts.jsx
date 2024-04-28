import { useLoaderData } from "react-router-dom";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const UpdateArts = () => {
    const { user } = useContext(AuthContext)
    const { register } = useForm();

    const existingData = useLoaderData();
    const { name, price, rating, customization, stock, description, photo, userName, email, time, _id, sub_catagory } = existingData;
    console.log(existingData);

    const handleCraftUpdate  = event => {
        event.preventDefault();

        const form = event.target;



        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const description = form.description.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const time = form.time.value;
        const photo = form.photo.value;
        const sub_catagory = form.sub_catagory.value;

        const updateCraft = { name, price, rating, customization, stock, description, photo, userName, email, time, sub_catagory }
        console.log(updateCraft);

        //send data to the server
        fetch(`https://b9-a10-server-three.vercel.app/artscraft/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Updated Successfully')
                }
            })

    }

    return (
        <div>
            <div className="bg-white md:p-24">
                <h2 className="text-3xl font-extrabold">Update Craft : {name}</h2>
                <form onSubmit={handleCraftUpdate}>
                    {/* form row 1*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Craft Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={name} placeholder="Craft Name" className="input input-bordered w-full  " />
                        </div>
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price"
                                defaultValue={price} placeholder="Price" className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* form  row 2*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating"
                                defaultValue={rating}
                                placeholder="rating" className="input input-bordered w-full  " />
                        </div>
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" name="customization"
                                defaultValue={customization}
                                placeholder="Customization" className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* form  row 3*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">StockStatus</span>
                            </label>
                            <input type="text" name="stock"
                                defaultValue={stock}
                                placeholder="Status" className="input input-bordered w-full  " />
                        </div>
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text"
                                defaultValue={description}
                                name="description" placeholder="Description" className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* form row 4*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input {...register('photo', { value: user.displayName })} type="text" name="userName"
                                defaultValue={userName}
                                placeholder="Name" className="input input-bordered w-full  " />
                        </div>
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input  {...register('email', { value: user.email })} type="email" name="email"
                                defaultValue={email}
                                placeholder="Email" className="input input-bordered w-full " />
                        </div>
                    </div>

                    {/* form  row 5*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input type="text" name="time"
                                defaultValue={time}
                                placeholder="Processing Time" className="input input-bordered w-full " />
                        </div>
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Sub-Catagory</span>
                            </label>
                            <input type="text" name="sub_catagory"
                                defaultValue={sub_catagory}
                                placeholder="Sub-Catagory" className="input input-bordered w-full " />
                        </div>


                    </div>
                    {/*row 6*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo URL"
                                defaultValue={photo}
                                className="input input-bordered w-full " />
                        </div>
                    </div>
                    <input type="submit" value="Update Craft" className="btn text-white bg-green-500 btn-block" />
                </form>
            </div>
        </div>
    );
};

export default UpdateArts;