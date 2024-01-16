import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Review from './Review.js';
import Menu from './Menu.js';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
    <div className="App">
       <Navbar></Navbar>
       <div className="content">
        <Switch>
            <Route exact path="/">
            <Menu></Menu>
            </Route>
            <Route exact path="/Review">
              <Review></Review>
            </Route>
        </Switch>
       </div>
    </div>
    </Router>
  );
}

export default App;
 