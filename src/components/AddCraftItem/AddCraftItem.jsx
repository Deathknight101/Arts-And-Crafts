import { useContext } from "react";
import { toast } from "sonner";
import { AuthContext } from "../Providers/AuthProviders";
import { useForm } from "react-hook-form";


const AddCraftItem = () => {

    const { user } = useContext(AuthContext)
    const { register } = useForm();

    const handleAddCraft = event => {
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
        const sub_catagory = form.sub_catagory.value.toUpperCase();

        const newCraft = { name, price, rating, customization, stock, description, photo, userName, email, time, sub_catagory }
        console.log(newCraft);

        //send data to the server
        fetch('http://localhost:5000/artscraft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('added successfully')
                    fetch('http://localhost:5000/category', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ category: sub_catagory })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })
                }
            })

    }
    return (
        <div>
            <div className="bg-white md:p-24">
                <h2 className="text-3xl font-extrabold">Add New Craft</h2>
                <form onSubmit={handleAddCraft}>
                    {/* form row 1*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Craft Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Craft Name" className="input input-bordered w-full  " />
                        </div>
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* form  row 2*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full  " />
                        </div>
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* form  row 3*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">StockStatus</span>
                            </label>
                            <input type="text" name="stock" placeholder="Status" className="input input-bordered w-full  " />
                        </div>
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full " />
                        </div>
                    </div>
                    {/* form row 4*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input {...register('photo', { value: user.displayName })} type="text" name="userName" placeholder="Name" className="input input-bordered w-full  " />
                        </div>
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input  {...register('email', { value: user.email })} type="email" name="email" placeholder="Email" className="input input-bordered w-full " />
                        </div>
                    </div>

                    {/* form  row 5*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input type="text" name="time" placeholder="Processing Time" className="input input-bordered w-full " />
                        </div>
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Sub-Catagory</span>
                            </label>
                            <input type="text" name="sub_catagory" placeholder="Sub-Catagory" className="input input-bordered w-full " />
                        </div>


                    </div>
                    {/*row 6*/}
                    <div className="md:flex mb-8 gap-2">
                        <div className="md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo URL" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <input type="submit" value="Add Craft" className="btn btn-block" />
                </form>
            </div>
        </div>
    );
};

export default AddCraftItem;