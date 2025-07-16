import React, { useState } from 'react'
import { useEffect } from 'react'
import CardsList from '../Cards/CardsList';
import Header from '../components/Header';
import { ShimmerCard } from '../Cards/ShimmerCard';

const Productlist = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('')
 

    const API_URL = "https://dummyjson.com/products"
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await fetch(`${API_URL}?limit=0`);
            const data = await res.json()
            setProducts(data?.products);
        } catch (error) {
            console.log("Failed to fetch product:", error)
        }
    }

    const handleDeleteProduct = async (productId) => {
        try {
            const response = await fetch(`${API_URL}/${productId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setProducts(products.filter(product => product.id !== productId));
            } else {
                console.log("Failed to delete product");
            }
        } catch (error) {
            console.log("Error deleting product:", error);
        }
    }

    const handleUpdate = async (productId, updatedData) => {
        try {
            const res = await fetch(`${API_URL}/${productId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ updatedData })
            });
            const data = await res.json();
            setProducts(products.map(product => product.id === productId ? { ...product, ...updatedData } : product))
        } catch (error) {
            console.log("Error updating product:", error);
        }
    }

    const handleAddProduct = async (productData) => {
        try {
            const res = await fetch(`${API_URL}/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData)
            })
            const data = await res.json();
            setProducts(prev=> ([data, ...prev]) )
    } catch (error) {
            console.log(`Failed to add Product:`, error)
        }
    }

    return (
        <div>
            <Header
             onSearch={setSearch}
            onAddProduct={handleAddProduct} />
            {
                products.length > 0 ? (
                    <CardsList
                        products={products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))}
                        onDelete={handleDeleteProduct}
                        onUpdate={handleUpdate}
                    />
                ) : (
                    <ShimmerCard />
                )
            }

        </div>
    )
}

export default Productlist