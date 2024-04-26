
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='container mx-auto px-1'>
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;