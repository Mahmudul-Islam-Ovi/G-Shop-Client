import React from 'react';
import ProductDetails from './ProductDetails';
import { useProduct } from '../../context/ProductProvider';
import ProductCategory from './ProductCategory';

const Product = () => {

    const { state: { products, loading, error } } = useProduct();

    let content;

    if (loading) {
        content = <p>Loading...</p>;
    }
    if (error) {
        content = <p>Something went wrong</p>;
    }

    if (!loading && !error && products.length) {
        content = products.map(product => <ProductDetails
            key={product._id}
            product={product}
        ></ProductDetails>)
    }
    if (!loading && !error && products.length === 0) {
        content = <p>No data</p>
    }
    return (
        <div>
            <ProductCategory></ProductCategory>

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center w-full" >
                {
                    content
                }
            </div>
            <div className="btn-group m-14 lg:ml-[650px]">
                <button className="btn">1</button>
                <button className="btn btn-active">2</button>
                <button className="btn">3</button>
                <button className="btn">4</button>
            </div>
        </div>

    );
};

export default Product;