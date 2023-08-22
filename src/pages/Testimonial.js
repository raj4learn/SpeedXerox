import React, { useState, useEffect } from 'react'
import TestimonialDetails from "./TestimonialDetails"
function Testimonial() {
    console.log('Testimonial: start render')

    const active = "active";
    const [data, setData] = useState([{}]);
    const getData = () => {
        fetch('jsonData/TestimonialData.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then(function (response) {
            console.log("JSON Then1");
            const jsonOut = response.json();
            return jsonOut;
        }).then(function (myJson) {
            console.log("JSON Then2");
            const jsonOut = myJson;
            console.log(jsonOut);
            setData(jsonOut);
            return jsonOut;
        }).catch(error => (console.log(error)));
    }

    useEffect(() => {
        console.log("useEffect");
        getData();
    }, []);

    return (
        <div className='client_section layout_padding'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="client_taital">Testimonial</h1>
                        <p className="client_text">Here some our Client notes from Reviews</p>
                    </div>
                </div>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {
                        data && data.length > 0 && data.map((mydata, index) => 
                        <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={ (index === 0)? active : ""} > </li> )
                    }
                </ol>
                <div className="carousel-inner">
                    {
                        data && data.length > 0 && data.map((mydata, index) => 
                        <TestimonialDetails key={index} props={mydata} /> )
                    }
                </div> 
                <a className='carousel-control-prev' href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <i className='fa fa-angle-left'></i>
                </a>
                <a className='carousel-control-next' href="#carouselExampleIndicators" role="button" data-slide="next">
                    <i className='fa fa-angle-right'></i>
                </a>
            </div>
        </div>
    )
}

export default Testimonial