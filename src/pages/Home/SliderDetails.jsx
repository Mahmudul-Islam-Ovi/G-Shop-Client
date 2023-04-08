import React from 'react';

const SliderDetails = ({ src, href, href2, content, id }) => {
    return (

        <div id={id} className="carousel-item relative w-full">
            <img
                data-aos="flip-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                src={src} className="lg:w-7/12 w-full" />
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="lg:p-20 bg-gray-100 sm:p-5  ">
                <p className="lg:text-5xl lg:mt-10 mt-5 p-2 text-orange-500 font-bold">{content}</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={href} className="btn btn-circle">❮</a>
                <a href={href2} className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default SliderDetails;