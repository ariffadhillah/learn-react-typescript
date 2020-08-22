import React from "react";
import SideNavitems from "./SideNavitems";
import { BrowserRouter as Router, Route} from 'react-router-dom';

// import sidenavchild  from "../nav-item/sidenavchild";
// https://react-typescript-cheatsheet.netlify.app/docs/hoc/excluding_props

// https://fettblog.eu/typescript-react/
// https://www.sitepoint.com/react-with-typescript-best-practices/
// https://www.youtube.com/watch?v=Z5iWr6Srsj8

// type  Props = {
//     text: string;
// }


const SideNav: React.FC = () => {    
        return (
            <div>
                <h1>I' am component</h1>
                <Router>
                    <Route path="/" component={SideNavitems} />
                </Router>
                {/* <SideNavitems  SideNavItemType={icon: 'dashboard', 'label': 'Dashboard'}, {icon:'users', label: 'Users'}/> */}
            </div>
        );
    
}

export default SideNav
