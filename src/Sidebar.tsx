import React from 'react'


interface NavItem {
    SideNavItemType: NavItemType[];
}

interface NavItemType  {
   icon: string;
   label: string;
}
   

const Sidebar: React.FC<NavItem> = ({SideNavItemType}) => {    
    return (
      <ul>
          {SideNavItemType.map((item) => {
                return <li className={item.icon}>{item.icon}</li>;
            })}
      </ul>
    )
  }
  
  export default Sidebar