import React, { useState } from 'react'
import { BsDatabaseAdd, BsMenuButton } from 'react-icons/bs'
import { FaHome, FaTh } from 'react-icons/fa'
import { IoPersonCircle } from 'react-icons/io5'
import { RiUserAddLine } from 'react-icons/ri'
import { NavLink} from 'react-router-dom'

const SideNavbar = ({children}) => {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => setisOpen(!isOpen);
  const LogoutItem=[
    {
      path:"/",
      name:"Home",
      icon:<FaHome/>
    },
    {
      path:"/register",
      name:"Create New Account",
      icon:<RiUserAddLine/>
    }
  ]
  const menuItem=[
    {
      path:"/",
      name:"Your Profile",
      icon:<IoPersonCircle />
    },
    {
      path:"/consultant-add",
      name:"Add you data",
      icon:<BsDatabaseAdd />
    },
    {
      path:"/dashboard",
      name:"Dashboard",
      icon:<FaTh/>
    }
  ]
  return (
    <div className="contain">
      {localStorage.getItem("token")?
      <div style={{width:isOpen?"300px":"50px"}} className="sidebar">        
          <div style={{marginRight:isOpen?"50px":"-20px"}} className="top_section">
            <BsMenuButton onClick={toggle} style={{ cursor: 'pointer'}}/>            
            <h1 style={{display:isOpen ? "block":"none"}}>Filter</h1>
            <div className="bars">
            </div>
          </div>
        {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" isactive="active">
              <div className="icon">{item.icon}</div>
              <div style={{display:isOpen ? "block":"none"}} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div> :
        <div style={{width:isOpen?"300px":"50px"}} className="sidebar">        
          <div style={{marginRight:isOpen?"50px":"-20px"}} className="top_section">
            <BsMenuButton onClick={toggle} style={{ cursor: 'pointer'}}/>            
            <h1 style={{display:isOpen ? "block":"none"}}>Filter</h1>
            <div className="bars">
            </div>
          </div>
        {
          LogoutItem.map((item,index)=>(
              <NavLink to={item.path} key={index} className="link" isactive="active">
                <div className="icon">{item.icon}</div>
                <div style={{display:isOpen ? "block":"none"}} className="link_text">{item.name}</div>
              </NavLink>
            ))
          }
        </div>
      }
      <main style={{width:'100%'}}>{children}</main>
    </div>  
  )
}

export default SideNavbar

