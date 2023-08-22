import React, { Component } from 'react'
import TextRotateHalfLeftSide from './TextRotateHalfLeftSide'
import ImageRotateHalfRightSide from './ImageRotateHalfRightSide'
class AboutUs extends Component {
    render() {
        console.log('AboutUs: start render')
        return (
            <div className='about_section layout_padding'>
                <div className='container'>
                    <div className='row'>
                    <TextRotateHalfLeftSide />
                    <ImageRotateHalfRightSide />
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs