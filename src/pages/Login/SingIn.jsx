import React, { useState } from 'react';

import { Link } from 'react-router-dom';


const SingIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password);
        // Here you can handle the form submission, such as sending a request to your backend or displaying a success message to the user.
    };
    return (
        <div className=" grid justify-center m-10">

            <div className="text-center text-4xl text-amber-500 font-bold">
                G-Shop
            </div>

            <form onSubmit={handleSubmit} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text"
                            placeholder="Enter User Name"
                            onBlur={(e) => setName(e.target.value)}
                            className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            onBlur={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password ?</span>
                        </label>

                    </div>

                   <input type="submit" className="btn text-1xl font-bold" value="Login" />
                    <div className="btn text-4xl btn-accent text-red-400  font-bold">G</div>

                    <p>Not an account ?<span> <Link to='/singUp'> SingUp</Link></span></p>
                </div>
            </form>

        </div>
    );
};

export default SingIn;