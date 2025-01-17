import React, { useState } from 'react'
import "./Layout.css"
import Home from '../../pages/home/Home'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menu from './../Menu/Menu';


const Layout = () => {
  const[toggle,setToggle]=useState(true)

  const handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <>
    <div className='sidebar-section'>
      <div className={toggle?"sidebar-toggle":"sidebar"}>
        <div className='sidebar-toggle-icons'>
        
          <p onClick={handleToggle}>
            {toggle ? <AiOutlineDoubleLeft size={30} onClick={handleToggle} />:<AiOutlineDoubleRight size={30} />}
          </p>
        </div>
        <Menu toggle={toggle}/>
      </div>
      
      
      
      <div className='container'>
        <Home/>
      </div>
    </div>
    </>
  )
}

export default Layout