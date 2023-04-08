import React from 'react';



const ReviewDetails = ({ src,name,comment, date,rating}) => {
    return (
        <div className="bg-white   shadow-md rounded-lg p-5 m-10">
            <div className="flex mb-4">
                <img
                    className="h-10 w-10 rounded-full"
                    src={src}
                    alt=''
                />
                <div className="ml-2">
                    <div className="text-sm font-medium text-gray-900">{name}</div>
                    <div className="text-xs text-gray-500">{date}</div>
                </div>
            </div>
            <div className="text-sm text-gray-700 mb-2">{comment}</div>
            <div className="flex items-center">
                <svg
                    className="h-4 w-4 fill-current text-yellow-500 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 0l3.7 7.5 8.3 1.2-6 5.9 1.4 8.2L10 16.7l-7.4 3.9 1.4-8.2-6-5.9 8.3-1.2z" />
                </svg>
                <div className="text-xs text-gray-500">{rating} out of 5 stars</div>
            </div>
        </div>
    );
};

export default ReviewDetails;