import React, { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate=useNavigate();

    useEffect(() => {
        getProductDetails();
    },[]);

    const getProductDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:2164/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async () => {
        let result = await fetch(`http://localhost:2164/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name, price, category, company }),
            headers:{
                'Content-Type':"application/json"
            }
        });
        result = await result.json();
        navigate("/myproduct");

    }


    return (
        <>
        <h1>Update Product</h1>
        <div className="product">
            
            <input type="text" className='inputBox' onChange={(e) => { setName(e.target.value) }} value={name}></input>

            <input type="text" className='inputBox' onChange={(e) => { setPrice(e.target.value) }} value={price}></input>

            <input type="text" className='inputBox'  onChange={(e) => { setCategory(e.target.value) }} value={category}></input>

            <input type="text" className='inputBox'  onChange={(e) => { setCompany(e.target.value) }} value={company}></input>

            <button className="button" onClick={updateProduct}>Update Product</button>
        </div>
        </>
    )
}


export default UpdateProduct;
