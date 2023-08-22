import React, { Component } from 'react'

class CopyRight extends Component {
    render() {
        console.log('Footer: Start render');
        return (
            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
                </div>
            </div>
        )
    }
}

export default CopyRight