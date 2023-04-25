import React, { useState } from 'react'
import AdminNavbar from '../Component/AdminNavbar'
import Sidebar from '../Component/Sidebar'
import FooterPart from '../Component/FooterPart'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Api from '../Api/Api';

export default function Addproducts() {
  let navigate = useNavigate()
  const [products, setproducts] = useState({})

  let insertData = (event) => {
               event.preventDefault()
             

           Api.AddData('Products',products).then(()=>{
                  console.log('done')
           })

           navigate('/showproducts' )

             }

             let hendleChange = (event) => {
                  console.log(event.target.value)
                  setproducts({...products,[event.target.name]:event.target.value})
             }
  return (
    <>
    
    <Sidebar/>
    <div className='content'>
    <AdminNavbar/>
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Add Product</h6>
              <a href="">Show All</a>
          </div>
          <Form onSubmit={insertData}>
     
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Product Name</Form.Label>
         <Form.Control type="text" placeholder="Product Name" onChange={hendleChange} id='title' name= 'title'/>

       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Product Price</Form.Label>
         <Form.Control type="text" placeholder="Products Price" onChange={hendleChange} id='price' name='price' />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Category</Form.Label>
         <Form.Control type="text" placeholder="Gender" onChange={hendleChange} id='category' name='category' />
       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Material</Form.Label>
         <Form.Control type="text" placeholder="Material" onChange={hendleChange} id='material' name='material' />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Product Size</Form.Label>
         <Form.Control type="text" placeholder="Products Size" onChange={hendleChange} id='size' name='size' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Product Color</Form.Label>
         <Form.Control type="text" placeholder="Products Color" onChange={hendleChange} id='color' name='color' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Photo</Form.Label>
         <Form.Control type="text" placeholder="Image Path" onChange={hendleChange} id='image' name= 'image'/>

       </Form.Group>

       <Button variant="primary" type="submit">
         Submit
       </Button>
 </Form>
          
        </div>
    </div>
    <FooterPart/>
    </div>
    
    </>
  )
}
