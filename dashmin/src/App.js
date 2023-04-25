import logo from './logo.svg';
import './App.css';

import Main from './Pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Showcategory from './Pages/Showcategory';
import Addcategory from './Pages/Addcategory';
import Addproducts from './Pages/Addproducts';
import Showproducts from './Pages/Showproducts';
import Adduser from './Pages/Adduser';
import Showuser from './Pages/Showuser';
import Addreview from './Pages/Addreview';
import Showreview from './Pages/Showreview';
import Updatecategory from './Pages/Updatecategory';
import Updateproduct from './Pages/Updateproduct';
import Updatereview from './Pages/Updatereview';
import Updateuser from './Pages/Updateuser';

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='main' element={<Main/>}></Route>
    <Route path='showcategory' element={<Showcategory/>}></Route>
    <Route path='showproducts' element={<Showproducts/>}></Route>
    <Route path='showreview' element={<Showreview/>}></Route>
    <Route path='showuser' element={<Showuser/>}></Route>

    <Route path='addcategory' element={<Addcategory/>}></Route>
    <Route path='addproducts' element={<Addproducts/>}></Route>
    <Route path='addreview' element={<Addreview/>}></Route>
    <Route path='adduser' element={<Adduser/>}></Route>
   
   
    <Route path='updatecategory/:id' element={<Updatecategory/>}></Route>
    <Route path='updateproduct/:id' element={<Updateproduct/>}></Route>
    <Route path='updatereview/:id' element={<Updatereview/>}></Route>
    <Route path='updateuser/:id' element={<Updateuser/>}></Route>

   </Routes>
   </BrowserRouter>
     
    </>
  );
}

export default App;
