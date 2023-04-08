import React from 'react';
import cover from '../../assets/cover-pic.png'

const CoverImage = () => {
    return (
        <div className="mt-10 lg:w-10/12 m-auto ">
            <img className="lg:rounded-3xl" src={cover} alt="" srcset="" />
        </div>
    );
};

export default CoverImage;