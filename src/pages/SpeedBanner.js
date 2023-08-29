import React, { Component } from 'react'
import BannerSlides from './BannerSlides'

class SpeedBanner extends Component {

    constructor(props) {
        super(props)

        this.state = {
            BannerObjectLists: []
        }
    }
    componentDidMount() {
        fetch("jsonData/BannerData.json")
            .then(res => res.json())
            .then(({ BannerObjectLists }) => this.setState({ BannerObjectLists }))
    }

    render() {
        console.log('SpeedBanner: start render')
        const BannerObjectLists = this.state.BannerObjectLists
        console.log(BannerObjectLists)

        return (
            <div className="banner_section layout_padding">
                <div className="container">
                    <div id="main_slider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {
                                BannerObjectLists.map((bannerObjectList, index) => <BannerSlides key={bannerObjectList.seqno} banner_dtls={bannerObjectList} index={bannerObjectList.seqno} />)
                            }
                        </div>
                        <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpeedBanner