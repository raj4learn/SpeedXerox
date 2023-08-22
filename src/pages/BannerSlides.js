import React, { Component } from 'react'

export class BannerSlides extends Component {
    render() {
        console.log('BannerSlides: start render')
        const { banner_dtls, index } = this.props
        console.log('index:' + index)
        console.log('banner_dtls.heading:' + banner_dtls.heading)
        console.log('banner_dtls.details:' + banner_dtls.details)
        const isActive = (index == '1') ? "carousel-item active" : "carousel-item"
        
        return (
            <div className={isActive}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="banner_taital">
                            <h1 className="outstanding_text">{banner_dtls.heading}</h1>
                            <h2 className="coffee_text">{banner_dtls.heading2}</h2>
                            <p className="there_text">{banner_dtls.details}</p>
                            <div className="learnmore_bt"><a href={banner_dtls.moreUrl}>Know More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BannerSlides