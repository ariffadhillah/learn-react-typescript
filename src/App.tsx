import React from 'react';
import SideNav  from "./components/sidenav/SideNav ";
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import Apps from "./Apps";
// import { title } from 'process';

// App: React.FC = () =>

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={SideNav} />
        </Router>
    </div>
    );
};

export default App;
