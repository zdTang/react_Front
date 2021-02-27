import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Search from './Search'
import Favorite from './Favourite'

export default class App extends Component {
    render() {
        return (
            <HashRouter>

            <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <span className="navbar-brand">Finddit</span>
            </div>        
          </nav>

  <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" to="/Search">Search</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link active" to="/Favorite"> Favorite </Link>
  </li>
  
</ul>

          <Route path="/Search" component={Search}></Route>
        
          <Route path="/Favorite" component={Favorite}></Route>

           
            </HashRouter>
           
        )
    }
}
