import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password, email);
        // Here you can handle the form submission, such as sending a request to your backend or displaying a success message to the user.
    };
    return (
        <div>
            <div className=" grid justify-center m-10">

                <div className="text-center text-4xl text-amber-500 font-bold">
                    G-Shop
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter User Name"
                                onBlur={(e) => setName(e.target.value)}
                                className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Email"
                                onBlur={(e) => setEmail(e.target.value)}
                                className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text"
                                placeholder="Enter Password"
                                onBlur={(e) => setPassword(e.target.value)}
                                className="input input-bordered w-full max-w-xs" />

                        </div>
                        <input type="submit" className="btn text-1xl font-bold" value="Sing Up" />

                        <div className="btn text-4xl btn-accent text-red-400  font-bold">G</div>

                        <p>Have an account ?<span> <Link to='/login'> Login</Link></span></p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SingUp;