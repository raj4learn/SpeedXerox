import React from 'react'

function TestimonialDetails(mydata) {
    console.log('TestimonialDetails: start render')

    const activeSection = 'carousel-item';
    const { seq_no, customer_comment, customer_name, quick_icon } = mydata.props;

    return (
        <div className={(seq_no === 1) ? activeSection + " active" : activeSection}>
            <div className="client_section_2">
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonial_section_2"> 
                                <h4 className="client_name_text">{customer_name} <span className="quick_icon"> <img alt="quicIcon" src={quick_icon} /> </span></h4>
                                <p className="customer_text">{customer_comment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialDetails