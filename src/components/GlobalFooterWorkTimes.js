import React, { Component } from 'react'

class GlobalFooterWorkTimes extends Component {
    render() {
        return (
            <div className='col-lg-3 col-sm-6'>
                <h3 className='useful_text'>
                    Work Times
                </h3>
                <div className='footer_menu'>
                    <table style={{ color: "#FFF" }}>
                        <colgroup>
                            <col />
                            <col span="2" />
                            <col span="2" />
                        </colgroup>
                        <tr>
                            <th scope="col">Day</th>
                            <th scope="col">Open</th>
                            <th scope="col">Until</th>
                        </tr>
                        <tr>
                            <th scope="row">Sunday</th>
                            <td>10:00 am</td>
                            <td>2:00 pm</td>
                        </tr>
                        <tr>
                            <th scope="row">Monday</th>
                            <td>9:30 am</td>
                            <td>9:30 pm</td>
                        </tr>
                        <tr>
                            <th scope="row">Tuesday</th>
                            <td>9:30 am</td>
                            <td>9:30 pm</td>
                        </tr>
                        <tr>
                            <th scope="row">Wednesday</th>
                            <td>9:30 am</td>
                            <td>9:30 pm</td>
                        </tr>
                        <tr>
                            <th scope="row">Thursday</th>
                            <td>9:30 am</td>
                            <td>9:30 pm</td>
                        </tr>
                        <tr>
                            <th scope="row">Friday</th>
                            <td>9:30 am</td>
                            <td>9:30 pm</td>
                        </tr>
                        <tr>
                            <th scope="row">Saturday</th>
                            <td>9:30 am</td>
                            <td>9:30 pm</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default GlobalFooterWorkTimes