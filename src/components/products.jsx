import Product from '../components/Product';
import fetchData from "../api/api.js";
import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchData();
            setProducts(data);
        };

        getProducts();
    }, []);

    return (
        <div className="products-grid">
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};

export default Products;
