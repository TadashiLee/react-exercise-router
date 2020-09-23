/* eslint-disable no-undef */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';

const AboutUs=(props)=>{  
    return (
      <Fragment>
        <p>Company : ThoughtWorks Local</p>
        <p>Location : Cheng'du</p>
        <p>From more information, please view our <a href="#" onClick={()=>{props.history.push('/');}}>wibset</a></p>
        <p>Website : '/my-profile'</p>
      </Fragment>
    );
}

export default AboutUs;