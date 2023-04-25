import React, { useState } from 'react'
import Sidebar from '../Component/Sidebar'
import AdminNavbar from '../Component/AdminNavbar'
import FooterPart from '../Component/FooterPart'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from '../Api/Api';
import { useNavigate } from 'react-router-dom';

export default function Addreview() {
  let navigate = useNavigate()
  const [review, setreview] = useState({})

    let insertData = (event) => {
      event.preventDefault()
      // console.log(category)

      Api.AddData('Review',review).then(()=>{
             console.log('done')
      })
      

      navigate('/ShowReview' )

    }

    let hendleChange = (event) => {
          console.log(event.target.value)
          setreview({...review,[event.target.name]:event.target.value})
    }
  return (
    <>
    <Sidebar/>
    <div className='content'>
        <AdminNavbar/>
        <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Add Review</h6>
              <a href="">Show All</a>
          </div>
          <Form onSubmit={insertData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" id='name' name='name' onChange={hendleChange} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product</Form.Label>
        <Form.Control type="text" placeholder="Product" id='product' name='product' onChange={hendleChange}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Rating</Form.Label>
        <Form.Control type="text" placeholder="Product Rating" id='rating' name='rating' onChange={hendleChange}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Text</Form.Label>
        <Form.Control type="text" placeholder="Text" id='text' name='text' onChange={hendleChange}/>
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
