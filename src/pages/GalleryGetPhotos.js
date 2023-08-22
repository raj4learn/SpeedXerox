import React, { Component } from 'react'

export class GalleryGetPhotos extends Component {
    render() {
        console.log('GalleryGetPhotos: start render')

        return (
            <div className='col-md-4'>
                <div className='container_main'>
                    <img className='image' alt="Avatar" src={this.props.imageName}></img>
                </div>
            </div>
        )
    }
}

export default GalleryGetPhotos