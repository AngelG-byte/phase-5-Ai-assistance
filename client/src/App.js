import { useState, useEffect} from 'react';
import './App.css';
import HouseScene2 from './three.js/house-2'
import Login from './Routes/Login';
import Main from './Routes/Main';
import * as THREE from "three";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Register } from './Routes/Register';



function App() {
const [ai, setAi] = useState([])

useEffect(()=>{
    fetch('/me')
      .then(response => response.json())
      .then(data => {
        setAi(data)
      })
   },[])




const AppLayout = () => (<><Outlet/></>);
 const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Login setAi={setAi}/>}/>
          <Route path="/main" element={<Main ai={ai} />}/>
          <Route path="/create" element={<Register />}/>
        </Route>
      ))
return (
<div className='Apple'><RouterProvider router={router}/>
{/* <HouseScene2/> */}
</div>);
}

export default App;
