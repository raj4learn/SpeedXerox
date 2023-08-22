import React, { Component } from 'react'
import './ImageItems.css' 
class ImageItems extends Component {
    render() {
        const isActive = this.props.index === 1 ? "carousel-item active" : "carousel-item"
        return (
            <div className={isActive}>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='banner_taital'>
                            <img className='image setFreezImgSize' alt="Avatar" src={this.props.imageName} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageItems