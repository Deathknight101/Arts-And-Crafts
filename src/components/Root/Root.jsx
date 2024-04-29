
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useState } from 'react';




const Root = () => {

    const [darkmode, setDarkmode] = useState(false);





    const toggleTheme = () => {

        document.documentElement.classList.toggle("dark");

        setDarkmode(!darkmode)

        console.log("working");
    };

    return (
        <div>
            <div className='container mx-auto px-1 pt-4'>
                <Navbar toggleTheme={toggleTheme} darkmode={darkmode}></Navbar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;