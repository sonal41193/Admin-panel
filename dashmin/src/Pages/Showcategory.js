import React,{useEffect,useState} from 'react'
import Sidebar from '../Component/Sidebar'
import AdminNavbar from '../Component/AdminNavbar'
import FooterPart from '../Component/FooterPart'
import Api from '../Api/Api'
import {  FcEmptyTrash} from "react-icons/fc";
import { FaRegEdit} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

export default function Showcategory() {

  let navigate = useNavigate()

  let addCategory = () =>{
    navigate('/addCategory')
  } 

  const [Category, setCategory] = useState([])

  let handelupdate = (id) =>{
    console.log(id)
    navigate (`../Updatecategory/${id}`)
  }

  let handeldelete= (id) =>{
      console.log(id)
      Api.deleteData('category',id).then((result)=>{
        console.log("data deleted")
        let newcategory =Category.filter((item)=>item.id !=id)
        setCategory(newcategory)

      })

  }
  
  let getData = () =>{
    Api.fetchData('Category').then((result)=>{
      console.log("result is" + result)
      setCategory([...result])
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
            <h6 class="mb-0">Show Category</h6>
              <a href="">Show All</a>
            </div>
          
          
          <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Photo</th>
      <th scope="col">Delete Action</th>
      <th scope="col">Update Action</th>
    </tr>
  </thead>
  <tbody>
  {
    Category?
  Category.map((item,key)=>(
    <tr>
    <th scope="row">{item.id}</th>
    <td>{item.name}</td>
    <td>{item.photo}</td>
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
<button className='btn btn-secondary' onClick={addCategory}>Add Category</button>
        </div>
        
    </div>
    
    <FooterPart/>
    </div>
   </>
  )
}
