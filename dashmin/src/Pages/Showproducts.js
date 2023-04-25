import React,{useEffect,useState} from 'react'
import Sidebar from '../Component/Sidebar'
import AdminNavbar from '../Component/AdminNavbar'
import FooterPart from '../Component/FooterPart'
import Api from '../Api/Api'
import {  FcEmptyTrash} from "react-icons/fc";
import { FaRegEdit} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

export default function Showproducts() {

  let navigate = useNavigate()

  let Addproducts = ()=>{
    navigate('/addproducts')
  }

  const [Products, setProducts] = useState([])

  let handeldelete= (id) =>{
      console.log(id)
      Api.deleteData('Products',id).then((result)=>{
        console.log("data deleted")
        let newProducts =Products.filter((item)=>item.id !=id)
        setProducts(newProducts)
      })
  }

  let handelupdate = (id) =>{
    console.log(id)
    navigate (`../Updateproduct/${id}`)
  
  }

  let getData = () =>{
    Api.fetchData('Products').then((result)=>{
      console.log("result is" + result)
      setProducts([...result])
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
            <h6 class="mb-0">Show Products</h6>
              <a href="">Show All</a>
          </div>
          <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Material</th>
      <th scope="col">Size</th>
      <th scope="col">Color</th>
      <th scope="col">Image</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    Products?
    Products.map((item,key)=>(
    <tr>
    <th scope="row">{item.id}</th>
    <td>{item.title}</td>
    <td>{item.price}</td>
    <td>{item.category}</td>
    <td>{item.material}</td>
    <td>{item.size}</td>
    <td>{item.color}</td>
    <td>{item.image}</td>
    <td>
    {/* < FaTrashAlt onClick={()=>handeldelete(item.id)}/> */}
    < FcEmptyTrash onClick={()=>handeldelete(item.id)} values=''/>
    </td>
    <td>
    <td>
    
    <FaRegEdit class="text-success me-3 " onClick={()=>handelupdate(item.id)}  />
    </td>
      </td>
    
  </tr>
  )):<h2>Loading</h2>
  }
  
  </tbody>
</table>
<button className='btn btn-secondary' onClick={Addproducts}>Add Product</button>
        </div>
    </div>
    
        <FooterPart/>
        
    </div>
    </>
  )
}
