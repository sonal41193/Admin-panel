import React, { useState } from 'react'
import Sidebar from '../Component/Sidebar'
import AdminNavbar from '../Component/AdminNavbar'
import FooterPart from '../Component/FooterPart'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from '../Api/Api';
import { useNavigate } from 'react-router-dom';

export default function Adduser() {
  let navigate = useNavigate()
  const [user, setuser] = useState({})

  let insertData = (event) => {
               event.preventDefault()
             

           Api.AddData('User',user).then(()=>{
                  console.log('done')
           })

           navigate('/showuser' )

             }

             let hendleChange = (event) => {
                  console.log(event.target.value)
                  setuser({...user,[event.target.name]:event.target.value})
             }
  return (
    <>
    <Sidebar/>
    <div className='content'>
        <AdminNavbar/>
        <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Add User</h6>
              <a href="">Show All</a>
          </div>
          <Form onSubmit={insertData}>
     
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Enter Your Name</Form.Label>
       <Form.Control type="text" placeholder="Enter Your Name" onChange={hendleChange} id='name' name= 'name'/>

     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Email</Form.Label>
       <Form.Control type="text" placeholder="Email" onChange={hendleChange} id='email' name='email' />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="text" placeholder="Password" onChange={hendleChange} id='password' name='password' />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Contact</Form.Label>
       <Form.Control type="text" placeholder="Contact No." onChange={hendleChange} id='contact' name='contact' />
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
