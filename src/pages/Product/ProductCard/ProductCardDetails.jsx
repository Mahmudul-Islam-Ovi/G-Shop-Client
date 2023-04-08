import React, { useContext } from 'react';

import pic from '../../../assets/produt-1.jpg'
import { Link } from 'react-router-dom';
import { CART_CONTEXT } from '../../../App';

const ProductCardDetails = (props) => {
    const {cart,setCart} = useContext(CART_CONTEXT);
    const {img,productName,price,rating}=props.product;
    return (
        <div className="bg-base-200 rounded-lg shadow-xl m-[40px] ">
            <img data-aos="flip-up"
                data-aos-easing="linear"
                data-aos-duration="2000" className="w-full" src={img} alt="" />
            <div className="p-5 ">
                <div className="flex justify-between">
                    <h2 className="card-title">{productName}</h2>
                    <h2 className="card-title">${price}</h2>
                </div>
                <p>Rating {rating}</p>
                <div className="p-2">
                    <Link to=''
                    onClick={() =>setCart(cart+1)}
                        className="btn w-full btn-success">Add To Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCardDetails;