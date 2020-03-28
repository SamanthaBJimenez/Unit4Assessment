import React from 'react';
import linkedIn from '../ImgFiles/linkedin.png';
import gitHub from '../ImgFiles/gitHub.png';
import '../css/Footer.css';

const Footer = () => {
    
    return(
        <div className='FooterDiv'>
            <nav className='FooterNav'>
                <a className='FooterA' href='https://github.com/SamanthaBJimenez'>
                    <img className='FooterImg gitHub' src={gitHub} alt='gitHub'/>
                </a>
                <a className='FooterA' href='https://www.linkedin.com/in/samantha-jimenez-8335076a/'>
                    <img className='FooterImg linkedIn' src={linkedIn} alt='linkedIn'/>
                </a>
            </nav>
        </div>
    )
};

export default Footer;