import React, { Component } from 'react'
import ScrollButton from './ScrollButton'

class GlobalFooterAddressDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            emailAddress: "speedxerox@rocketmail.com",
            subject: "Subject: Requesting for Details",
            body: " ",
            PhoneNumber: "+91-94444-87145",
            address: "9A, Trunk Road,\n"+
                    " Next Elahi Supermarket,\n"+
                    " Near Vickram tools,\n" +
                    " Chennai,\n" +
                    " Tamil Nadu - 600116"
        }
    }
    render() {
        const { emailAddress, subject, body, PhoneNumber, address } = this.state;
        const Mailto = `mailto:${emailAddress}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`;
        //console.log(Mailto);
        const hrefSelf = "#";
        return (
            <div className='col-lg-3 col-sm-6'>
                <h3 className='useful_text'>
                    Contact Us
                </h3>
                <div className='location_text'>
                    <ul>
                        <li> <a href={hrefSelf}> <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span className="padding_left_10">{address}</span>
                        </a> </li>
                        <li> <a href={hrefSelf}> <i className="fa fa-phone" aria-hidden="true"></i> <span className="padding_left_10">Call: {PhoneNumber}</span> </a> </li>
                        <li> <a href={Mailto}> <i className="fa fa-envelope" aria-hidden="true"></i> <span className="padding_left_10">Email: {emailAddress}</span> </a> </li>
                    </ul>
                </div >
                <ScrollButton />
            </div >
        )
    }
}

export default GlobalFooterAddressDetails