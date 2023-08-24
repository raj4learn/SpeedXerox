import React, { Component } from 'react'

import AboutUs from '../pages/AboutUs'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'
import Testimonial from '../pages/Testimonial'
/* import Reviews from '../pages/Reviews' */
import Home from '../components/Home'
import ContactUs from '../components/ContactUs'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

/* const AboutUs = React.lazy(() => import('./pages/AboutUs')); */

class HeaderMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showNav: true,
            pathSelf:"#"
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
                                <a href="/">
                                    <img alt="logo" src="./images/logo.png" />
                                </a>
                            </div>

                            <button type="button" className='navbar-toggler'>
                                <span className='navbar-toggler-icon'> </span>
                            </button>

                            {/* Navigation bar */}
                            <div id='navbarNav' className='collapse navbar-collapse'>
                                <ul className='navbar-nav ml-auto'>
                                    <li className='nav-item active'>
                                        <a className='nav-link' href='/'>Home</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link' href='/AboutUs'>About Us</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link' href='/Gallery'>Gallery</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link' href='/Testimonial'>Testimonial</a>
                                    </li>

                                    {/* <li className='nav-item'>
                                        <a className='nav-link' href='/Reviews'>Reviews</a>
                                    </li> */}

                                    <li className='nav-item'>
                                        <a className='nav-link' href='/Services'>Services</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link' href='/ContactUs'>Contact Us</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href={this.state.pathSelf}>
                                            <i className='fa' aria-hidden={true} aria-controls="navbarNav" aria-expanded={false} aria-label="Toggle navigation"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/Gallery" element={<Gallery />} />
                    <Route path="/Testimonial" element={<Testimonial />} />
                    {/* <Route path="/Reviews" element={<Reviews />} /> */}
                    <Route path="/Services" element={<Services />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                </Routes>
            </Router>
        )
    }
}

export default HeaderMenu