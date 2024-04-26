import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import ArtsCards from "../ArtsCards/ArtsCards";
import MyCards from "../MyCards/MyCards";


const MyArtCraft = () => {
    const [mydata, setMydata] = useState([]);
    const [reloadData,setReloadData]=useState(false);
   


    const { user } = useContext(AuthContext);
    useEffect(() => {

        fetch(`http://localhost:5000/user/artscraft/${user.email}`)
            .then(res => res.json())
            .then(data => {

                setMydata(data);
                setReloadData(false);
            })
    }, [reloadData])


    return (
        <div>
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