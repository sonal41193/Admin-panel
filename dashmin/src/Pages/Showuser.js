import React,{useEffect,useState} from 'react'
import Sidebar from '../Component/Sidebar'
import AdminNavbar from '../Component/AdminNavbar'
import FooterPart from '../Component/FooterPart'
import Api from '../Api/Api'
import { useNavigate } from 'react-router-dom';
import {  FcEmptyTrash} from "react-icons/fc";
import { FaRegEdit} from 'react-icons/fa';

export default function Showuser() {
  let navigate =  useNavigate()
  let Adduser = () =>{
    navigate('/adduser')
  }

  const [User, setUser] = useState([])

  let handelupdate = (id) =>{
    console.log(id)
    navigate (`../Updateuser/${id}`)
  }

  let handeldelete= (id) =>{
      console.log(id)
      Api.deleteData('User',id).then((result)=>{
        console.log("data deleted")
        let newUser = User.filter((item)=>item.id !=id)
        setUser(newUser)
      })
  }
  let getData = () =>{
    Api.fetchData('User').then((result)=>{
      console.log("result is" + result)
      setUser([...result])
    })
  }

  useEffect(() => {

      getData()

  }, [])
  return (
    <>
    <Sidebar/>
  
    <div className='content'>
        <AdminNavbar/>
        <br/>
        <div class="container-fluid pt-4 px-4">
        <div class="bg-light text-center rounded p-4">
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h6 class="mb-0">Show User</h6>
              <a href="">Show All</a>
          </div>
          <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Contact</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    User?
    User.map((item,key)=>(
    <tr>
    <th scope="row">{item.id}</th>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.password}</td>
    <td>{item.contact}</td>
    <td>
    < FcEmptyTrash onClick={()=>handeldelete(item.id)} values=''/>
    </td>

    <td>
    <FaRegEdit class="text-success me-3 " onClick={()=>handelupdate(item.id)}  />
    </td>
    
  </tr>
  )):<h2>Loading</h2>
  }
  
  </tbody>
</table>
<button className='btn btn-secondary' onClick={Adduser}>Add User</button>

        </div>
    </div>
    
        <FooterPart/>
       
    </div>

    </>
  )
}
