import React, { Component } from 'react'

class LocationGMap extends Component {
  render() {
    console.log('LocationGMap: Start render');

    return (
      <div className='col-md-6 padding_0'>
        <div className='map-responsive'>
          <iframe width={600} height={508}
            style={{ border: 0, width: "100%" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.7507362445646!2d80.1531696!3d13.0354842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261cc9f820169%3A0xeac9b52b685530af!2sSpeed%20Xerox!5e0!3m2!1sen!2sin!4v1690110358967!5m2!1sen!2sin">
          </iframe>
        </div>
      </div>
    )
  }
}

export default LocationGMap