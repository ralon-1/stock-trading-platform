import React,{useState} from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const[selectedmenu,setSelectedMenu]=useState(0);
  const [isprofilefropdownopen,setIsProfileDropdownOpen]=useState(false);
  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  }
  const handleProfileClick=()=>{
    setIsProfileDropdownOpen(!isprofilefropdownopen);
  }
  return (

    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>

        <Link style={{textDecoration:"none",color:"inherit"}} to="/" onClick={()=>handleMenuClick(0)}>
        <p className="selectedMenu==0 ? activeMenuClass:menuclass"> dashboard</p>
        </Link>
          </li>
          <li>
           <Link style={{textDecoration:"none",color:"inherit"}} to="/orders" onClick={()=>handleMenuClick(1)}>
        <p className="selectedMenu==1 ? activeMenuClass:menuclass"> orders</p>
        </Link>
          </li>
          <li>
           <Link style={{textDecoration:"none",color:"inherit"}} to="/holdings" onClick={()=>handleMenuClick(2)}>
        <p className="selectedMenu==2 ? activeMenuClass:menuclass"> Holdings</p>
        </Link>
          </li>
          <li>
               <Link style={{textDecoration:"none",color:"inherit"}} to="/positions" onClick={()=>handleMenuClick(3)}>
        <p className="selectedMenu==3 ? activeMenuClass:menuclass"> Positions</p>
        </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none",color:"inherit"}} to="/funds" onClick={()=>handleMenuClick(4)}>
        <p className="selectedMenu==4 ? activeMenuClass:menuclass"> Funds</p>
        </Link>
          </li>
          <li>
             <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}>
        <p className="selectedMenu==5 ? activeMenuClass:menuclass"> Apps</p>
        </Link>
          </li>
        </ul>
        <hr />
        {/* onClick={handleProfileClick} */}
        <div className="profile" onClick={isprofilefropdownopen} >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
      
    </div>
  );
};

export default Menu;
