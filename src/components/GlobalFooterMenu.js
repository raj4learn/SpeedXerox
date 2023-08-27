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

class GlobalFooterMenu extends Component {
    render() {
        return (
            <Router>
                <div className='col-lg-3 col-sm-6'>
                    <h3 className='useful_text'>
                        Menu
                    </h3>
                    <div className='footer_menu'>
                        <ul>
                            <li><Link to="/" replace>Home</Link></li>
                            <li><Link to="/AboutUs" replace>About Us</Link></li>
                            <li><Link to="/Gallery" replace>Gallery</Link></li>
                            <li><Link to="/Services" replace>Services</Link></li>
                            <li><Link to="/ClientNotes" >Client Notes</Link></li>
                            <li><Link to="/ContactUs" onClick={() => ('#/ContactUs')}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <Routes>
                    <Route path='/' exact name='Home' element={<Home />} />
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

export default GlobalFooterMenu