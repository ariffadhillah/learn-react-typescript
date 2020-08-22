import React from 'react';

interface NavItemType  {
    icon: string;
}

interface NavItem {
    SideNavItemType: NavItemType[];
}

const SideNavItemType = [
    {icon: 'dashboard', 'label': 'Dashboard'}, 
    {icon:'users', 'label': 'Users'}
]

// interface IAppOwnProps {
//   username: string | undefined;
//   icon: 'admin' ;
// }

const Apps: React.FC<NavItem> = ({SideNavItemType}): JSX.Element => {
  return (
    <div className="Apps">
        <p>            
         Hi, {SideNavItemType ? SideNavItemType : 'Mysterious Entity'}, 
         your user type is {SideNavItemType ? SideNavItemType : 'irrelevant because I do not know you'}.
        </p>
    </div>
  );
}

export default Apps;