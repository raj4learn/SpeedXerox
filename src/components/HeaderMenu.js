import React, { Component } from 'react'

import AboutUs from '../pages/AboutUs'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'
import Testimonial from '../pages/Testimonial'
/* import Reviews from '../pages/Reviews' */
import Home from '../components/Home'
import ContactUs from '../components/ContactUs'

import {
    HashRouter as Router,
    Routes,
    Route, Link
} from 'react-router-dom';

/* const AboutUs = React.lazy(() => import('./pages/AboutUs')); */

class HeaderMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showNav: true,
            pathSelf: "#"
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            showNav: !this.state.showNav
        })
    }

    render() {
        console.log('HeaderMenu: Start render');
        return (
            <Router>
                <div className='header_section'>
                    <div className='container-fluid'>
                        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                            <div className='logo'>
                                <Link className='nav-link' to='/'>
                                    <img alt="logo" src="images/logo.png" />
                                </Link>
                            </div>


                            <button type="button"
                                class="navbar-toggle navbar-toggler"
                                data-toggle="collapse"
                                data-target=".navbar-collapse">

                                <span class="sr-only"></span>
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            
                            {/* <button type="button" className='navbar-toggler'>
                                <span className='navbar-toggler-icon'> 
                                </span>
                            </button> */}

                            {/* Navigation bar */}
                            <div id='navbarNav' className='collapse navbar-collapse'>
                                <ul className='navbar-nav ml-auto'>
                                    <li className='nav-item active'>
                                        <Link className='nav-link' to='/'>Home</Link>
                                    </li>

                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/AboutUs'>About Us</Link>
                                    </li>

                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/Gallery'>Gallery</Link>
                                    </li>

                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/Testimonial'>Testimonial</Link>
                                    </li>

                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/Services'>Services</Link>
                                    </li>

                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/ContactUs'>Contact Us</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to={this.state.pathSelf}>
                                            <i className='fa' aria-hidden={true} aria-controls="navbarNav" aria-expanded={false} aria-label="Toggle navigation"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>

                <Routes>
                    <Route index name='Home' element={<Home />} />
                    <Route path='/AboutUs' exact name='About Us' element={<AboutUs />} />
                    <Route path="/Gallery" exact name='Gallery' element={<Gallery />} />
                    <Route path="/Testimonial" exact name='Testimonial' element={<Testimonial />} />
                    <Route path="/Services" exact name='Services' element={<Services />} />
                    <Route path="/ContactUs" exact name='Contact Us' element={<ContactUs />} />
                </Routes>
            </Router>
        )
    }
}

export default HeaderMenu