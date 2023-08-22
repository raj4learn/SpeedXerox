import React, { Component } from 'react'

class GlobalFooterWorkTimes extends Component {
    render() {
        return (
            <div className='col-lg-3 col-sm-6'>
                <h3 className='useful_text'>
                Work Times
                </h3>
                <div className='footer_menu'>
                    <ul>
                        <li><a>Sun: 10:00 am - 2:00 pm</a></li>
                        <li><a>Mon: 9:30 am - 9:30 pm</a></li>
                        <li><a>Tue: 9:30 am - 9:30 pm</a></li>
                        <li><a>Wed: 9:30 am - 9:30 pm</a></li>
                        <li><a>Thu: 9:30 am - 9:30 pm</a></li>
                        <li><a>Fri: 9:30 am - 9:30 pm</a></li>
                        <li><a>Sat: 9:30 am - 9:30 pm</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default GlobalFooterWorkTimes