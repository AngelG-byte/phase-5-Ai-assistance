import { useState, useEffect} from 'react';
import './App.css';
import Login from './Routes/Login';
import Home from './Routes/Home';
import * as THREE from "three";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Register } from './Routes/Register';
import Logout from './components/Logout';



function App() {

const [ai, setAi] = useState([])




useEffect(()=>{
    fetch('/me')
      .then(response => response.json())
      .then(data => {
        setAi(data)
      })
   },[])

// console.log(ai.name)


const AppLayout = () => (<div className='center'><Outlet/></div>);
 const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<Login setAi={setAi} />}/>
          <Route path="/home" element={<Home ai={ai} setAi={setAi}/>}/>
          <Route path="/create" element={<Register />}/>
        </Route>
      ))
return (
<div className='Apple'><RouterProvider router={router}/>

</div>);
}

export default App;
