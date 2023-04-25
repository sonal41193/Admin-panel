import React, { useEffect, useState } from 'react'
import Sidebar from '../Component/Sidebar'
import AdminNavbar from '../Component/AdminNavbar'
import FooterPart from '../Component/FooterPart'
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from '../Api/Api';

export default function Updatecategory() {
  
  let navigate = useNavigate()
  const [data, setdata] = useState({})
  let params = useParams() 
  console.log(params.id)
  
  let getData = () => {
    Api.fetchData('Category',params.id).then(result => {

      console.log(result)
      setdata(result)
    })
  }
  
  let updateData = (event) =>{
    event.preventDefault();
    Api.Update('Category',params.id,data).then(result => {
    console.log('Result Data....')
    setdata(result)
  
    navigate('../Showcategory' )
  
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
          <h6 class="mb-0">Update Category</h6>
            <a href="">Show All</a>
        </div>
        <Form onSubmit={updateData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={hendleChange} value={data.name}  id='name' name= 'name'/>

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
