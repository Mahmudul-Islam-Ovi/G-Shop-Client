import React from 'react';
import SliderDetails from './SliderDetails';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full  mt-10">
                <SliderDetails
                    id="slide1"
                    src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                    href="#slide4"
                    href2="#slide2"
                    content="The right store with the right price"
                ></SliderDetails>
                <SliderDetails
                    id="slide2"
                    src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                    href="#slide1"
                    href2="#slide3"
                    content="The right store with the right price"
                ></SliderDetails>
                <SliderDetails
                    id="slide3"
                    src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                    href="#slide2"
                    href2="#slide4"
                    content="The right store with the right price"
                ></SliderDetails>
                <SliderDetails
                    id="slide4"
                    src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                    href="#slide3"
                    href2="#slide1"
                    content="The right store with the right price"
                ></SliderDetails>
            </div>
        </div>
    );
};

export default Slider;