import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const NavBar = (props) => {
    console.log(props);
    setTimeout(() => {
        props.history.push('/about')
    }, 4000)
    return (
        <nav className="wrapper red darken-3">
            <div className="container">
                <a href="" className="brand-logo">React Router Tutorial</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>                
                    <li><Link to="/contact">Contact</Link></li>

                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar);