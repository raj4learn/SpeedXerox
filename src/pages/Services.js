import React, { Component } from 'react'

class Services extends Component {
    render() {
        console.log('Services: start render')

        return (
            <div className="services_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="services_taital">Services</h1>
                            <p className="services_text">
                            Discover Speed Xerox's diverse range of services, including photocopying, printing, DTP services, book binding, brochure printing, visiting card designing, lamination, and more, delivering top-notch solutions to meet all your business and personal needs.
                            </p>
                        </div>
                    </div>
                    <div className="services_section_2">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 col-md-4">
                                <div className="box_main active">
                                    <div className="house_icon">
                                        <img src="images/Service/speed-xerox-porur-chennai-photocopying-centres-service.png" alt="SpeedXerox" className="image_1" />
                                        <img src="images/Service/speed-xerox-porur-chennai-photocopying-centres-service.png" alt="SpeedXerox" className="image_2" />
                                    </div>
                                    <h3 className="decorate_text">Photocopying</h3>
                                    <p className="tation_text">Explain... </p>
                                    <div className="readmore_bt"><a href="https://en.wikipedia.org/wiki/Photocopier">Read More</a></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-4">
                                <div className="box_main">
                                    <div className="house_icon">
                                        <img src="images/Service/dtp.png" alt="SpeedXerox" className="image_1" />
                                        <img src="images/Service/dtp.png" alt="SpeedXerox" className="image_2" />
                                    </div>
                                    <h3 className="decorate_text">DTP Services</h3>
                                    <p className="tation_text">Explain...</p>
                                    <div className="readmore_bt"><a href="https://en.wikipedia.org/wiki/Desktop_publishing">Read More</a></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-4">
                                <div className="box_main">
                                    <div className="house_icon">
                                        <img src="images/Service/BrochurePrinting.png" alt="SpeedXerox" className="image_1" />
                                        <img src="images/Service/BrochurePrinting.png" alt="SpeedXerox" className="image_2" />
                                    </div>
                                    <h3 className="decorate_text">Brochure Printing</h3>
                                    <p className="tation_text">Explain...</p>
                                    <div className="readmore_bt"><a href="https://en.wikipedia.org/wiki/Bookbinding">Read More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services