import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import Home from './Pages/Home';
import About from './Pages/About';
import Signin from './Pages/Signin';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import Header from './Components/Header';



function App() {
  
  return (
   
   <BrowserRouter>
   <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Signin' element={<Signin/>}/>
    <Route path='/Signup' element={<Signup/>}/>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path = '/About' element = {<About/>}/>

    </Routes>
   </BrowserRouter>
  );
  
}

export default App