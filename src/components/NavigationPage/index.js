import React from 'react';
import './NavigationPage.css';

function NavigationPage(props) {
  return (
    <div className="nav-page">
        <div className="nav-top">
            <div><img src={props.logo} alt="img" /></div>
            <div onClick={()=>props.triggerClose()} style={{color: '#047496'}}>
                <i className="fa fa-close" />
            </div>
        </div>
        <div className="nav-links">
            About <br />
            How it Works<br />
            Contact Us<br />
            FAQs<br />
            FEDPAY
        </div>
        <div className="nav-signup">
            <div className="nav-sign">
                SIGN IN
            </div>
            <div className="nav-download">
                DOWNLOAD APP
            </div>
        </div>
    </div>
  );
}

export default NavigationPage;
