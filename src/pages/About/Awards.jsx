import React from 'react';

const Awards = () => {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
                <li>
                    <a href="#" className="block hover:bg-gray-50">
                        <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-indigo-600 truncate">Best Grocery Store Award</p>
                                <div className="ml-2 flex-shrink-0 flex">
                                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        2020
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                    <p className="flex items-center text-sm text-gray-500">
                                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 010 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 010 2H3a1 1 0 01-1-1zm1 4a1 1 0 100 2h8a1 1 0 100-2H3z" clipRule="evenodd" />
                                        </svg>
                                        Grocery Industry Association
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="block hover:bg-gray-50">
                        <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-indigo-600 truncate">Best Customer Service Award</p>
                                <div className="ml-2 flex-shrink-0 flex">
                                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        2021
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                                <div className="sm:flex">
                                    <p className="flex items-center text-sm text-gray-500">
                                        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 010 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 010 2H3a1 1 0 01-1-1zm1 4a1 1 0 100 2h8a1 1 0 100-2H3z" clipRule="evenodd" />
                                        </svg>
                                        Customer Service Association
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

    );
};

export default Awards;