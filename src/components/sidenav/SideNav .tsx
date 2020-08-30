import React from "react";
import SideNavitems from "./SideNavitems";

interface NavItemType  {
    items: string;
}   
   
const SideNavItemType = [
    {icon: 'dashboard', 'label': 'Dashboard'}, 
    {icon:'users', label: 'Users'}
]

   const SideNav = () => {
    return (
      <div className="App">      
          <SideNavitems SideNavItemType={SideNavItemType} />
      </div>
      );
  };
  
export default SideNav
  

