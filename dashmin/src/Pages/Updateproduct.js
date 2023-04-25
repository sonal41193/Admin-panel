import React, { useEffect, useState } from 'react'
import Sidebar from '../Component/Sidebar'
import AdminNavbar from '../Component/AdminNavbar'
import FooterPart from '../Component/FooterPart'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../Api/Api';



export default function Updateproduct() {

    let navigate = useNavigate()
    const [data, setdata] = useState({})
    let params = useParams() 
    console.log(params.id)

    let getData = () => {
        Api.fetchData('Products',params.id).then(result => {
    
          console.log(result)
          setdata(result)
        })
      }

      let updateData = (event) =>{
        event.preventDefault();
        Api.Update('Products',params.id,data).then(result => {
        console.log('Result Data....')
        setdata(result)
      
        navigate('../Showproducts' )
      
      })}

      let hendleChange = (event) => {
  
        console.log(event.target.value)
        setdata({...data,[event.target.name]:event.target.value})
      }
      
      
         useEffect(() => {
      
          getData()
      
         }, [])
    

  return (
    <>
    <Sidebar/>
    <div className='content'>
    <AdminNavbar/>
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Update Product</h6>
              <a href="">Show All</a>
          </div>
          <Form onSubmit={updateData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={hendleChange} value={data.title}  id='title' name= 'title'/>
  
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Price" onChange={hendleChange} value={data.price}   id='price' name='price' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter Gender" onChange={hendleChange} value={data.category}   id='category' name='category' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Material</Form.Label>
          <Form.Control type="text" placeholder="Material" onChange={hendleChange} value={data.material}   id='material' name='material' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Size</Form.Label>
          <Form.Control type="text" placeholder="Enter Size" onChange={hendleChange} value={data.size}   id='size' name='size' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="Enter Color" onChange={hendleChange} value={data.color}   id='color' name='color' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Img path" onChange={hendleChange} value={data.photo}   id='photo' name='photo' />
      </Form.Group>
  
        <Button variant="primary" type="submit">
        Update
        </Button>
      </Form>
        </div>
    </div>
  
    <FooterPart/>
    
    </div>
   
    </>

  )
}
