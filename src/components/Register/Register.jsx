import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'

import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const navigate = useNavigate();
    const { createUser, uploadNamePhoto } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(email, name, photo, password);






        // Check for uppercase letter
        if (!/[A-Z]/.test(password)) {

            toast.error('Must have Atleast One UpperCase')
            return
        }

        // Check for lowercase letter
        if (!/[a-z]/.test(password)) {

            toast.error('Must have Atleast One LowerCase')
            return
        }

        // Check for digit
        if (!/\d/.test(password)) {

            toast.error('Must have Atleast One Digit')
            return
        }

        // Check for length
        if (password.length < 6) {
            toast.error('Must have Atleast 6 Characters')
            return
        }



        createUser(email, password)
            .then(result => {
                uploadNamePhoto(photo, name)
                    .then(() => {
                        console.log(result.user);
                        toast.success('Registration Successfull')
                        navigate(location?.state ? location.state : '/');
                    })
            })
            .catch(error => {
                console.log(error);
                toast.error('Registration Failed')

            })


    }
    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>

            <div data-aos="flip-down" className="py-2 min-h-[70vh] " >
                <h2 className="text-3xl my-10 text-center font-bold">Please Register </h2>
                <form onSubmit={handleRegister} className="lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Place URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="">

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className=" relative">
                            <input name="password" type={showPassword ? "text" : "password"} placeholder="Password" className="input w-full input-bordered" required />
                            <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white">Register</button>
                    </div>


                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p className="text-center mt-4">Already have an account? <Link className="text-blue-600" to='/login'>Login</Link></p>

            </div>

            <Toaster position="bottom-right" richColors />
        </div>
    );
};

export default Register;