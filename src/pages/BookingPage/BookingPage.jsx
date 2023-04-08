import React, { useState } from 'react';


const BookingPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, such as sending a request to your backend or displaying a success message to the user.
       
    };

    return (
        <div className="max-w-md my-10 mx-auto card w-full p-10 bg-base-300 shadow-xl">
            <h2 className="text-3xl text-center font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate mb-4">
                Booking
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="sm:text-sm border-gray-900 rounded-md input input-bordered input-success w-full max-w-xs"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="sm:text-sm border-gray-900 rounded-md input input-bordered input-success w-full max-w-xs"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <div className="mt-2">
                        <input
                            id="date"
                            name="date"
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="sm:text-sm border-gray-900 rounded-md input input-bordered input-success w-full max-w-xs"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                    </label>
                    <div className="mt-2">
                        <input
                            id="address"
                            name="address"
                            type="text"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="sm:text-sm border-gray-900 rounded-md input input-bordered input-success w-full max-w-xs"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                        Product Details
                    </label>
                    <div className="mt-2">
                        <input
                            id="details"
                            name="details"
                            type="text"
                            required
                            min="1"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            className="sm:text-sm border-gray-900 rounded-md input input-bordered input-success w-full max-w-xs"
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingPage;
