import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Products/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, fakeProducts] = useState(first10);
    console.log(products);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 border-end border-2">
                        <ul>
                            {
                                products.map(product => <Product product={product} key={product.key}></Product> )
                            }
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h1>This is cart</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;