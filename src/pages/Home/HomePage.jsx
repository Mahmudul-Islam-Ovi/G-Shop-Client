import React from 'react';
import Slider from './Slider';
import ProductCard from '../Product/ProductCard/ProductCard';
import Offers from '../About/Offers';
import Review from './Review';
import CoverImage from './CoverImage';

const HomePage = () => {
   
    return (
        <div>
            <CoverImage></CoverImage>
            {/* <Slider></Slider> */}
            <ProductCard ></ProductCard>
            <Offers></Offers>
            <Review></Review>
        </div>
    );
};

export default HomePage;