import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip'

import { toast } from 'sonner';
import { AuthContext } from '../Providers/AuthProviders';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                toast.success('Logout Successfull')
            })
            .catch()
    }

    const navLinks = <>
        <li className='font-bold'><NavLink to="/" >Home</NavLink></li>
        <li className='font-bold'><NavLink to="/login" >Login</NavLink></li>
        <li className='font-bold'><NavLink to="/register" >Register</NavLink></li>
        <li className='font-bold'><NavLink to="/allarts" >All Arts & Craft</NavLink></li>
        <li className='font-bold'><NavLink to="/addcraftitem" >Add Craft Item</NavLink></li>
        <li className='font-bold'><NavLink to="/myartcraft" >My Art Craft</NavLink></li>

    </>

    return (
        <div className="navbar bg-gray-200 rounded-md mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost md:text-xl  font-bold">John's-Painting</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ? <>

                        <div className="dropdown dropdown-end md:mr-3">
                            <div tabIndex={0} role="button" data-tooltip-id='display-tooltip' className=" btn btn-ghost btn-circle avatar z-50" data-tooltip-html={user.displayName
                            }>
                                <Tooltip id="display-tooltip" />
                                <div className="w-10 rounded-full" data-tip="hello">
                                    <img alt="photo" src={user.photoURL} />
                                </div>
                            </div>

                        </div>

                    </> : <>

                    </>
                }
            </div>
            {
                user ?

                    <>
                        <button onClick={handleSignOut} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">LogOut</button>
                    </>
                    :
                    <Link to='/login'>
                        <button className='btn'>Login</button>
                    </Link>
            }


        </div>
    );
};

export default Navbar;