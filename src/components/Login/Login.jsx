import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaGithub, FaGoogle } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'sonner'
import { Helmet } from "react-helmet-async";


const Login = () => {

    const [showPassword, setShowPassword] = useState();
    const { signIn, signInWithGoogle, signinWithGitHub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handGithubLogin = () => {
        signinWithGitHub()
            .then(result => {
                console.log(result)
                toast.success('Login Successfull')
                navigate(location?.state ? location.state : '/');
            })

            .catch(error =>
                console.log(error))
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                toast.success('Login Successfull')
                navigate(location?.state ? location.state : '/');
            })

            .catch(error =>
                console.log(error))
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successfull')
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)

            })
    }

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div data-aos="flip-up" className="py-2 min-h-[70vh] " >
                <h2 className="text-3xl my-10 text-center font-bold" >Please Login </h2>
                <div className="lg:w-1/2 md:w-3/4 mx-auto">
                    <form onSubmit={handleLogin} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
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
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Login</button>
                            </div>


                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                    </form>
                    <div className="mt-4">
                        <button onClick={handleGoogleLogin} className="btn btn-outline w-full ">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                    </div>
                    <div className="mt-4">
                        <button onClick={handGithubLogin} className="btn btn-outline w-full ">
                            <FaGithub></FaGithub>
                            GitHub
                        </button>
                    </div>
                </div>

                <p className="text-center mt-4">Don't have an account <Link className="text-blue-600" to='/register'>Register</Link></p>
            </div>

        </div>
    );
};

export default Login;