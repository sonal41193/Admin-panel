import React,{useEffect,useState} from 'react'
import Sidebar from '../Component/Sidebar'
import AdminNavbar from '../Component/AdminNavbar'
import FooterPart from '../Component/FooterPart'
import Api from '../Api/Api'
import { useNavigate } from 'react-router-dom'
import {  FcEmptyTrash} from "react-icons/fc";
import { FaRegEdit} from 'react-icons/fa';

export default function Showreview() {

  let navigate =  useNavigate()

  let Addreview = () =>{
    navigate('/addreview')
  }

  const [Review, setReview] = useState([])

  let handelupdate = (id) =>{
    console.log(id)
    navigate (`../Updatereview/${id}`)
  }


  let handeldelete= (id) =>{
      console.log(id)
      Api.deleteData('Review',id).then((result)=>{
        console.log("data deleted")
        let newReview =Review.filter((item)=>item.id !=id)
        setReview(newReview)
      })
  }
  let getData = () =>{
    Api.fetchData('Review').then((result)=>{
      console.log("result is" + result)
      setReview([...result])
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
            <h6 class="mb-0">Show Review</h6>
              <a href="">Show All</a>
          </div>
          <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Product</th>
      <th scope="col">Rating</th>
      <th scope="col">Text</th>
       <th scope="col">Action</th>
       <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    Review?
    Review.map((item,key)=>(
    <tr>
    <th scope="row">{item.id}</th>
    <td>{item.name}</td>
    <td>{item.product}</td>
    <td>{item.rating}</td>
    <td>{item.text}</td>
   
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
<button className='btn btn-secondary' onClick={Addreview}>Add Review</button>

        </div>
    </div>
    
        <FooterPart/>
       
    </div>
    </>
  )
}
