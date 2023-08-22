import React, { Component } from 'react'

import AboutUs from '../pages/AboutUs'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'
import ClientNotes from '../pages/Testimonial'
import Reviews from '../pages/Reviews'
import SpeedBanner from '../pages/SpeedBanner'
import ContactUs from '../components/ContactUs'

class Home extends Component {
  render() {
    console.log('Home: Start render');

    return (
      <div>
        <SpeedBanner />
        <AboutUs />
        <Gallery />
        <Services />
        <ClientNotes />
        {/* <Reviews /> */}
        <ContactUs />
      </div>
    )
  }
}

export default Home