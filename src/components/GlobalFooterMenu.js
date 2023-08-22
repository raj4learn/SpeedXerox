import React, { Component } from 'react'

class GlobalFooterMenu extends Component {
    render() {
        return (
            <div className='col-lg-3 col-sm-6'>
                <h3 className='useful_text'>
                    Menu
                </h3>
                <div className='footer_menu'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/AboutUs">About Us</a></li>
                        <li><a href="/Gallery">Gallery</a></li>
                        <li><a href="/Services">Services</a></li>
                        <li><a href="/ClientNotes">Client Notes</a></li>
                        <li><a href="/ContactUs">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default GlobalFooterMenu