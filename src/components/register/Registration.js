import {useState} from "react";

const RegistryForm = () => {

    const [mode, setMode] = useState('login');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleAuthentication = () => {
        // Handle login or registration logic here
        if (mode === 'login') {
            console.log('Logging in with:', {username, password});
        } else {
            console.log('Registering with:', {username, email, password});
        }
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
                        {mode === 'login' ? 'Login' : 'Register'}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="#">
                        {mode === 'register' && (
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                            </div>)
                        }

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
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        {mode === 'login' ? 'Forgot password?' : ''}
                                    </a>
                                </div>
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
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm
                                font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
                                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => handleAuthentication()}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>


                    <p className="mt-10 text-center text-sm text-gray-500">
                        {mode === 'login' ? 'New to this app? ' : 'Already have an account? '}
                        <a onClick={() => setMode(mode === 'login' ? 'register' : 'login')} href="#"
                           className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            {mode === 'login' ? 'Register' : 'Login'}
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default RegistryForm;