import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";


const Productlist = () => {
    const [products, setProducts] = useState([]);
   


    useEffect(() => {
        getProducts();

    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:2164/products');
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct=async(id)=>{
        let result=await fetch(`http://localhost:2164/product/${id}`,{
            method:"Delete"
        });
        result=await result.json();
        if(result){
            getProducts();
        }


    }

    const searchHandle=async (event)=>{
        let key=event.target.value;
        if(key){
            let result= await fetch(`http://localhost:2164/search/${key}`);
        result=await result.json();
        if(result){
            setProducts(result);
        }

        }
        else{
            getProducts();
        }
        
    }

    return (


        <div className="product-list">
            <h1>Product List</h1>
            <input className='search' type="text" placeholder='Search Products'
            onChange={searchHandle}></input>
            <ul className='ul'>
                <li className='head'>S. No</li>
                <li className='head'>Name</li>
                <li className='head'>Price</li>
                <li className='head'>Category</li>
                <li className='head'>Company</li>
                <li className='head'>Delete</li>
                <li className='head'>Update</li>
            </ul>
            {
                products.length>0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>$ {item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li><button style={{backgroundColor:'transparent',borderColor:'transparent'}} onClick={()=>deleteProduct(item._id)}><RiDeleteBin6Line style={{color:'red',fontSize:'1.2em'}} /></button></li>
                        <li><Link to={"/update/"+item._id} style={{textDecoration:'none'}}><MdSystemUpdateAlt style={{color:'blue',fontSize:'1.1em'
    }}/></Link></li>

                    </ul>

                ):
                <h1 class="result">No Product Matched</h1>
            }

        </div>
    )
}

export default Productlist
