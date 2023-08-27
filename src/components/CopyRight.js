import React, { Component } from 'react'

class CopyRight extends Component {
    render() {
        console.log('Footer: Start render');
        return (
            <div className="copyright_section">
                <div className="container">
                    <div className="row">
                        <p className="copyright_text">2023 All Rights Reserved. Design by <a href="https://html.design">Free html </a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CopyRight