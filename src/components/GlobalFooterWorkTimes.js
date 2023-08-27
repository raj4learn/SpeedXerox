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
                        <li><p>Sun: 10:00 am - 2:00 pm</p></li>
                        <li><p>Mon: 9:30 am - 9:30 pm</p></li>
                        <li><p>Tue: 9:30 am - 9:30 pm</p></li>
                        <li><p>Wed: 9:30 am - 9:30 pm</p></li>
                        <li><p>Thu: 9:30 am - 9:30 pm</p></li>
                        <li><p>Fri: 9:30 am - 9:30 pm</p></li>
                        <li><p>Sat: 9:30 am - 9:30 pm</p></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default GlobalFooterWorkTimes