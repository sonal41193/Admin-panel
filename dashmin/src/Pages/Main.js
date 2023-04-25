import React from 'react'
import Sidebar from '../Component/Sidebar'
import Innermain from '../Component/Innermain'

export default function Main() {
  return (
    <>
        <div class="container-xxl position-relative bg-white d-flex p-0">

       <Sidebar/>
       <Innermain/>

        </div>
    </>
  )
}
