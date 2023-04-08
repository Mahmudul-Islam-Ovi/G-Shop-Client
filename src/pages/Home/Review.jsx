import React from 'react';
import ReviewDetails from './ReviewDetails';

import img from '../../assets/boy2.png';

const Review = () => {



    return (
        <div className="bg-gray-300 my-10 lg:p-10 p-1 lg:rounded-3xl">
            <h1 className="text-center text-3xl font-bold my-10">
                Customer Review
            </h1>

            <div data-aos="fade-up"
                data-aos-duration="1000" className="grid lg:grid-cols-4 grid-cols-2 justify-center ">
                <ReviewDetails
                    src={img}
                    name='Mahmudul Islam'
                    comment='Nice Product'
                    date='20-03-2022'
                    rating='4'
                ></ReviewDetails>
                <ReviewDetails
                    src={img}
                    name='Abir Islam'
                    comment='Good Service'
                    date='10-03-2023'
                    rating='4.5'
                ></ReviewDetails>
                <ReviewDetails
                    src={img}
                    name='Arif Hossen'
                    comment='Nice product'
                    date='20-2-23'
                    rating='4.5'
                ></ReviewDetails>
                <ReviewDetails
                    src={img}
                    name='Rahim  '
                    comment='Happy'
                    date='01-02-2023'
                    rating='4'
                ></ReviewDetails>

            </div>


        </div>
    );
};

export default Review;