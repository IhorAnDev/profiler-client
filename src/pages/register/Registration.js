import {useState} from "react";
import {Link} from "react-router-dom";
import {PATH_NAMES} from "../../consts";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setRegistered} from "./registerSlice";

const RegistryForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {isRegistered} = useSelector(state => state.register);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAuthentication = (e) => {
        e.preventDefault();
        // Handle login or registration logic here
        console.log('Registering with:', {username, email, password, confirmPassword});
        dispatch(setRegistered(true));

        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center  px-6 pt-36 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register
                    </h2>
                </div>

                <div onSubmit={handleAuthentication} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="#">

                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                                        ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                        focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                                    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                     focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                                     ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                     focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirmPassword"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm
                                     ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                     focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm
                                font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
                                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </button>
                        </div>
                    </form>


                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link to={PATH_NAMES.HOME} className="font-medium text-indigo-600 hover:text-indigo-500">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            {isRegistered && (
                <div className="mt-10 text-center text-sm text-gray-500">
                    Successfully registered! Redirecting to login form...
                    {/* You can also use a timer to delay the redirection */}
                    {setTimeout(() => {
                        navigate(PATH_NAMES.HOME);
                        dispatch(setRegistered(false));
                    }, 1000)}
                </div>
            )}
        </>
    )
}

export default RegistryForm;
