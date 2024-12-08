import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }
 

  return (
    <div className='page'>
       <ul class="li">
       <li ><a href='/'><span>Profile</span></a></li>
        <li><a href="/myproduct"  ><span>Products</span></a></li>
        <li ><a href="/add"  ><span>Add Products</span></a></li>
        <li><Link onClick={logout} to="/login">Logout</Link></li>
    </ul>
      <div className=" about">
        <div>
     
        <h1>About Us</h1>
        <p >Welcome to e-commerce dashboard, your go-to platform for managing e-commerce operations effortlessly. Our mission is to empower businesses of all sizes by providing a comprehensive, user-friendly dashboard that simplifies the complexities of online retail.

Who We Are
At e-commerce dashboard, we are a team of passionate developers and e-commerce enthusiasts dedicated to creating tools that enhance operational efficiency. Our dashboard offers seamless CRUD (Create, Read, Update, Delete) functionalities, enabling you to manage products, orders, and customer data with ease.

What We Offer
Intuitive Interface: Our dashboard is designed with user experience in mind, allowing you to navigate and manage your e-commerce store effortlessly.
Real-Time Data Management: Make informed decisions with instant access to your store's data, from inventory levels to sales trends.
Scalability: Whether you’re a startup or an established business, our platform grows with you, adapting to your evolving needs.
Security First: We prioritize your data security with robust measures to keep your information safe.
Our Vision
We envision a world where every business, regardless of size, can thrive in the digital marketplace. By providing powerful tools and resources, we aim to support entrepreneurs and businesses in achieving their goals.

Thank you for choosing e-commerce dashboard. Together, let’s build a successful e-commerce journey!

</p>


<div className='us'>
<h3 style={{paddingTop:"35px",marginLeft:'-2px',paddingBottom:"20px"}}>CRUD OPERATIONS</h3>

Create, Read, Update, and Delete—are fundamental for managing data in an e-commerce dashboard. Here's a brief overview of each operation within that context:


<div >

<u >1. Create Functionality</u>
<p> Add new products, categories, users, orders, etc.
Implementation: Typically involves a form where admins can input details such as product name, price, description, and images.</p>
</div>
<div>
<u >2. Read Functionality</u>
<p> View existing products, categories, users, and orders.
Implementation: Display information in tables or lists, often with filters and search options to easily find specific entries. This can include details like stock levels, sales metrics, and user activity.
</p>
</div>
<div>
<u >3. Update Functionality</u>
<p>
 Modify existing data, such as changing product prices, updating stock levels, or editing user information.
Implementation: Usually involves forms pre-filled with existing data, allowing the admin to make necessary changes and save updates.
</p>
</div>

<div>
<u>4. Delete Functionality</u>
<p>
 Remove products, users, orders, or categories from the system.
Implementation: Often includes confirmation prompts to prevent accidental deletions, along with soft-delete options (marking items as inactive rather than permanently deleting them).
</p>
</div>   
</div>
<div style={{marginBottom:"50px",textAlign:"center",paddingTop:"20px"}}>
<a href="/myproduct">View products</a>
<a href="add" style={{paddingLeft:'50px'}}>Add products</a>
</div> 
</div>
</div>
</div> 
   
    
  )
}

export default About
