import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import ArtsCards from "../ArtsCards/ArtsCards";
import MyCards from "../MyCards/MyCards";


const MyArtCraft = () => {
    const [mydata, setMydata] = useState([]);
    const [reloadData, setReloadData] = useState(false);
    const [filter, setFilter] = useState('all');



    const { user } = useContext(AuthContext);
    useEffect(() => {

        fetch(`http://localhost:5000/user/artscraft/${user.email}`)
            .then(res => res.json())
            .then(data => {
                if (filter === 'all') {
                    setMydata(data);
                    setReloadData(false);
                }
                if (filter === 'Yes') {
                    setMydata(data.filter(data => data.customization === filter))
                    setReloadData(false);
                }
                if (filter === 'No') {
                    setMydata(data.filter(data => data.customization === filter))
                    setReloadData(false);
                }

            })
        console.log(filter);
    }, [reloadData, filter])




    return (
        <div>
            <div className="flex justify-center mt-10">
                <select value={filter} onChange={(e) => {
                    setFilter(e.target.value)
                }} className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Customization</option>
                    <option value={'all'}>All</option>
                    <option value={'Yes'}>Yes</option>
                    <option value={'No'}>No</option>

                </select>
            </div>
            <h1>My Art Craft</h1>
            <div className="grid md:grid-cols-3 gap-3 mb-10">
                {
                    mydata.map(data => <MyCards key={data._id} art={data}
                        setReloadData={setReloadData}></MyCards>)
                }
            </div>

        </div>
    );
};

export default MyArtCraft;