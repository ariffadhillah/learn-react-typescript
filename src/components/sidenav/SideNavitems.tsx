import React from "react";

interface NavItemType  {
    items: string;
}

interface NavItem {
    SideNavItemType: NavItemType[];
}

const SideNavItemType = [
    {icon: 'dashboard', 'label': 'Dashboard'}, 
    {icon:'users', label: 'Users'}
]

const SideNavitems: React.FC<NavItem> = ({SideNavItemType}) => {    
        return (
            <ul>
             {SideNavItemType.map((nav, icon) => {
                return <li key={icon}>{nav.items}</li>;
            })}
            </ul>
        )
    };  

export default SideNavitems
