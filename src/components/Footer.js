import React, { Component } from 'react'
import GlobalFooterAbout from './GlobalFooterAbout'
/* import GlobalFooterMenu from './GlobalFooterMenu' */
import GlobalFooterWorkTimes from './GlobalFooterWorkTimes'
import GlobalFooterAddressDetails from './GlobalFooterAddressDetails'

class Footer extends Component {

  render() {
    console.log('Footer: Start render');
    return (
      <div className='footer_section layout_padding margin_top90'>
        <div className='container'>
            <div className='row'>
             <GlobalFooterAbout />
             {/* <GlobalFooterMenu /> */}
             <GlobalFooterWorkTimes />
             <GlobalFooterAddressDetails />
            </div>
        </div>
      </div>
    )
  }
}

export default Footer