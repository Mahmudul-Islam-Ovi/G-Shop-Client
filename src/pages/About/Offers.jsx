import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Offers = () => {
    const slides = [
        {
            url: 'https://greengrocery.com.bd/wp-content/uploads/2022/10/khichuri-combo.jpeg'
        },
        {
            url: 'https://greengrocery.com.bd/wp-content/uploads/2022/10/touch-of-purity.jpeg'
        },
        {
            url: 'https://greengrocery.com.bd/wp-content/uploads/2022/10/Mustard-Oil-New-Discount-2.jpg'
        },
        {
            url: 'https://greengrocery.com.bd/wp-content/uploads/2022/10/Tehari-masala-free-offer.jpeg'
        },
        {
            url: 'https://greengrocery.com.bd/wp-content/uploads/2022/10/Spices_Tea_offer.jpeg'
        },
    ]

    const [index, setIndex] = useState(0);
    const preSlide = () => {
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
        setIndex(newIndex);

    }
    const nextSlide = () => {
        const isLastSlide = index === slides.length - 1;
        const newIndex = isLastSlide ? 0 : index + 1;
        setIndex(newIndex);
    }

    const goSlide = (slideIndex) => {
        setIndex(slideIndex);

    }
    return (
        <div>
        <h1 className="text-center text-3xl font-bold my-10">
        Special Packages & Offers
        </h1>

        <div className="max-w-[600px] h-[750px] w-full m-auto relative py-16">
            <div style={{ backgroundImage: `url(${slides[index].url})` }} className="w-full h-full rounded-2xl bg-cover duration-500">

            </div>
            {/* right arrow */}
            <div className=" absolute tom-[50%] -translate-x-0  translate-y-[-900%] left-[-50px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer  ">
                <BsChevronCompactLeft onClick={preSlide} size={20}></BsChevronCompactLeft>
            </div>
            {/* left arrow  hidden group-hover:block*/}
            <div className=" absolute tom-[50%] -translate-x-0  translate-y-[-900%] right-[-50px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" >
                <BsChevronCompactRight onClick={nextSlide} size={20}></BsChevronCompactRight>
            </div>

            <div className="flex top-5 justify-center py-2">
                {
                    slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goSlide(slideIndex)} className="text-2xl cursor-pointer">
                            <RxDotFilled />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    );
};

export default Offers;