
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <div className='container mx-auto px-1'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Root;