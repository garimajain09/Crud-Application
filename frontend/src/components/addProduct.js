import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {

  const[name,setName]=useState('');
  const[price,setPrice]=useState('');
  const[category,setCategory]=useState('');
  const[company,setCompany]=useState('');
  const[error,setError]=useState(false);
  const navigate=useNavigate();

  const addProduct=async ()=>{
    if(!name || !price || !category || !company){
      setError(true);
      return false;
    }
    const userId=JSON.parse(localStorage.getItem('user'));
    let result=await fetch("http://localhost:2164/add-product",
      {
      method:"post",
      body:JSON.stringify({name,price,category,company,userId}),
      headers:{"Content-Type":"application/json",
      authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  });
  result=await result.json();
  console.warn(result);
  navigate("/myproduct");
}

  
  return (
    <div>
    <h1>Add Product</h1>
    <div className="product">
      
      <input type="text" className='inputBox' placeholder='Enter product name' onChange={(e)=>{setName(e.target.value)}} value={name}></input>
      {error && !name && <span className="span">Enter valid name</span>}
      <input type="text" className='inputBox' placeholder='Enter product price' onChange={(e)=>{setPrice(e.target.value)}} value={price}></input>
      {error && !price && <span className="span">Enter valid price</span>}
      <input type="text" className='inputBox' placeholder='Enter product category' onChange={(e)=>{setCategory(e.target.value)}} value={category}></input>
      {error && !category && <span className="span">Enter valid category</span>}
      <input type="text" className='inputBox' placeholder='Enter product company' onChange={(e)=>{setCompany(e.target.value)}} value={company}></input>
      {error && !company && <span className="span">Enter valid company</span>}
      <button className="button" onClick={addProduct} >Add Product </button>
    </div>
    </div>
  )
}

export default AddProduct;
