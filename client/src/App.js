import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

// // Pages
import Home from './pages/Home';
import Cart from './pages/Cart';

// Components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
      </div>
    </Router>
  )
}

export default App;

