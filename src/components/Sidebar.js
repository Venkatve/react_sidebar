import React,{useState} from 'react';

import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaBars
} from "react-icons/fa"
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
  const[isOpen , setIsOpen] = useState(false)
  const toggle = ()=> setIsOpen(!isOpen)
  const menuItem=[
    {
      path:"/",
      name:"Dashboard",
      pic:<FaTh/>
    },{
      path:"/about",
      name:"About",
      pic:<FaUserAlt/>
    },{
      path:"/analytics",
      name:"Analytics",
      pic:<FaRegChartBar/>
    },{
      path:"/comment",
      name:"Comment",
      pic:<FaCommentAlt/>
    },{
      path:"/product",
      name:"Product",
      pic:<FaShoppingBag/>
    },{
      path:"/productList",
      name:"Product List",
      pic:<FaThList/>
    },
  ]
  return (
    <div className='container'>
      <div className='sidebar' style={{width: isOpen ? "200px" : "53px"}}>
        <div className='top_section'>
          <h1 className='logo' style={{display: isOpen ? "block" : "none"}}>Logo</h1>
          <div className='bars' style={{marginLeft: isOpen ? "70px" : "0px"}}>
           <FaBars onClick={toggle}/>
          </div>
        </div>
        {menuItem.map((item,index)=>(
          <NavLink to={item.path} key={index} className="link" activeclassName="active">
            <div className='icon'>{item.pic}</div>
            <div className='link_text' style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
          </NavLink>
        ))}
      </div>
      
      <main>{children}</main>
    </div>
  )
}

export default Sidebar