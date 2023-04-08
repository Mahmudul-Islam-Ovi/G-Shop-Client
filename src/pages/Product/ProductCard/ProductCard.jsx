import React from 'react';
import ProductCardDetails from './ProductCardDetails';
import { Link } from 'react-router-dom';
import { useProduct } from '../../../context/ProductProvider';


const ProductCard = () => {

    const { state: { products, loading, error } } = useProduct();

    let content;

    if (loading) {
        content = <p>Loading...</p>;
    }
    if (error) {
        content = <p>Something went wrong</p>;
    }

    if (!loading && !error && products.length) {
        content = products.filter((product) => product.rating >= 4.5).map(product => <ProductCardDetails
            key={product._id}
            product={product}
        ></ProductCardDetails>)
    }
    if (!loading && !error && products.length ===0) {
        content = <p>No data</p>
    }
   

    return (

        <div className="bg-blue-100 mt-10 lg:rounded-3xl p-10">

            <h1 className="text-center text-3xl font-bold my-10">
                High Rating Products
            </h1>
            <div className="lg:flex  ">
                <div className="w-2/12 mt-10 ">
                    <ul className="menu  w-56 p-2 ">
                        <li className="menu-title">
                            <span className="font-bold">Category</span>
                        </li>
                        <li><Link to="">Grocery & Grains</Link></li>
                        <li><Link to="">Homemade Product</Link></li>
                        <li><Link to="">Oils</Link></li>
                        <li><Link to="">Health Product</Link></li>
                        <li><Link to="">Cake</Link></li>
                        <li><Link to="">Biscuit </Link></li>
                        <li><Link to="">Rice Items</Link></li>
                        <li><Link to="">Tea Items</Link></li>
                        <li><Link to="">Other Products</Link></li>


                    </ul>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center w-full">
                  
                {
                    content
                }

                </div>
            </div>
            
            <Link  to="/product"className="btn btn-primary lg:ml-[700px] ml-48">
                All products
            </Link>

        </div>
    );
};

export default ProductCard;