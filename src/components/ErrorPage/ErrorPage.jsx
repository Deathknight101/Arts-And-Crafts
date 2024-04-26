import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center h-screen flex flex-col item-center justify-center">
            <h1 className="font-bold text-2xl">Oops!!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
                {
                    error.status === 404 && <div>
                        <h3 className="font-bold text-3xl">Page not Found</h3>
                        <Link to='/'><button className="btn">GO BACK</button></Link>
                    </div>
                }
            </p>
        </div>
    );
};

export default ErrorPage;