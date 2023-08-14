import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';

interface ProductData {
    _id: string;
    name: string;
    description: string;
    price: number;
}

interface ProductProps {
    productId: string;
}

const Product: React.FC<ProductProps> = ({ productId }) => {
    const [productData, setProductData] = useState<ProductData | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/product/get/${productId}`)
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, [productId]);

    if (!productData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product">
            <h2 className="product-name">{productData.name}</h2>
            <p className="product-description">{productData.description}</p>
            <p className="product-price">${productData.price}</p>
        </div>
    );
};

export default Product;