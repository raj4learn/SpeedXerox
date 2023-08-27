import React, { Component } from 'react'
import ImageItems from './ImageItems'
class ImageRotateHalfRightSide extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageNames: []
        }
    }
    componentDidMount() {
        console.log("Start AboutUs ComponentDidMount");

        fetch("/jsonData/AboutUs.json")
            .then(res => res.json())
            .then(({ imageNames }) => this.setState({ imageNames }));

        console.log("End AboutUs ComponentDidMount");
    }
    render() {
        console.log('ImageRotateHalfRightSide: start render')

        const images = this.state.imageNames

        return (
            <div className='col-md-6 layout_padding'>
                <div>
                    <div id="about_slider" className='carousel slide' data-ride="carousel">
                        <div className='carousel-inner'>
                            {
                                images.map((image, index) => <ImageItems key={index} imageName={image.name} index={index} />)
                            }
                        </div>
                        <a className='carousel-control-prev' href="#about_slider" role="button" data-slide="prev">
                            <i className='fa fa-angle-left'></i>
                        </a>
                        <a className='carousel-control-next' href="#about_slider" role="button" data-slide="next">
                            <i className='fa fa-angle-right'></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageRotateHalfRightSide