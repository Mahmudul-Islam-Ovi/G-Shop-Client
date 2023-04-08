import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    return (
        <div>
            <div  data-aos="flip-left" className=" grid lg:grid-cols-6 sm:grid-cols-3 gap-4 grid-cols-2 justify-center w-full my-5 bg-blue-300 p-14 lg:rounded-3xl">
            <Link to="/product" className="btn btn-outline  btn-secondary">Grocery & Grains</Link>
            <Link to="/product" className="btn btn-outline  btn-secondary">Homemade Product</Link>
            <Link to="/product" className="btn btn-outline  btn-secondary">Oils</Link>
            <Link to="/product" className="btn btn-outline  btn-secondary">Health Product</Link>
            <Link to="/product" className="btn btn-outline  btn-secondary">Cake</Link>
            <Link to="/product" className="btn btn-outline  btn-secondary">Biscuit</Link>
            <Link to="/product" className="btn btn-outline  btn-secondary">Rice Items</Link>
            <Link to="/product" className="btn btn-outline  btn-secondary">Tea Items</Link>
            <Link to="/product" className="btn btn-outline  btn-secondary">Other Products</Link>
            </div>
        </div>
    );
};

export default ProductCategory;