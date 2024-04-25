import { useParams } from "react-router-dom";


const ArtsDetails = () => {
    const{id}=useParams();
    return (
        <div>
            <h1>details {id}</h1>
        </div>
    );
};

export default ArtsDetails;