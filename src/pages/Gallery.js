import React, { Component } from 'react'
import GalleryGetPhotos from './GalleryGetPhotos'

class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageNames: []
        }
    }

    componentDidMount() {
        console.log("Start Gallery ComponentDidMount");

        fetch("/jsonData/Gallery.json")
            .then(res => res.json())
            .then(({ imageNames }) => this.setState({ imageNames }));

        console.log("End Gallery ComponentDidMount");
    }

    render() {
        console.log('Gallery: start render')
        const imageNames = this.state.imageNames
        console.log("Gallery Images..");
        console.log(imageNames);

        return (
            <div className="gallery_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="gallery_taital">Our Gallery</h1>
                            <p className="gallery_text">
                                Take a look on our Gallery
                            </p>
                        </div>
                    </div>

                    <div className='gallery_section_2'>
                        <div className='row'>
                            {
                                imageNames.map((GalleryImage, index) => <GalleryGetPhotos key={index} imageName={GalleryImage.name} />)
                            }
                        </div>
                    </div>
                    <div className="seemore_bt"><a href="https://jsdl.in/DT-20VY6NLI">See More</a></div>
                </div>
            </div>
        )
    }
}

export default Gallery