import React, { useState } from 'react'
import AdminNavbar from '../Component/AdminNavbar'
import Sidebar from '../Component/Sidebar'
import FooterPart from '../Component/FooterPart'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from '../Api/Api';
import { useNavigate } from 'react-router-dom';

export default function Addcategory() {

  let navigate = useNavigate()
  const [category, setcategory] = useState({})

    let insertData = (event) => {
      event.preventDefault()
      // console.log(category)

      Api.AddData('Category',category).then(()=>{
             console.log('done')
      })
      

      navigate('/ShowCategory' )

    }

    let hendleChange = (event) => {
          console.log(event.target.value)
          setcategory({...category,[event.target.name]:event.target.value})
    }

  return (
    
    <>
    <Sidebar/>
    <div className='content'>
    <AdminNavbar/>
    <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Add Category</h6>
              <a href="">Show All</a>
          </div>
          <Form onSubmit={insertData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Product Name" id='name' name='name' onChange={hendleChange} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="text" placeholder="Image path" id='photo' name='photo' onChange={hendleChange}/>
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
  
  
