import React from "react";

interface NavItem {
    SideNavItemType: NavItemType[];
}

interface NavItemType  {
   icon: string;
   label: string;
}

const SideNavitems: React.FC<NavItem> = ({SideNavItemType}) => {    
    return (
      <ul>
          {SideNavItemType.map((item) => {
                return <li className={item.icon}><span>{item.icon} </span> </li>;
            })}
      </ul>
    )
  }
  
  export default SideNavitems


//   https://dev.to/jsmanifest/create-a-modern-dynamic-sidebar-menu-in-react-using-recursion-36eo