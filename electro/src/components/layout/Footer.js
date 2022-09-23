import React  from 'react';
import "./layout.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = ({componentRef}) => {
    
    return (
        <>
            <div className="footer zindex-10" ref={componentRef}>
                <div className='container'>
                    <div className='footer-content'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <ul className='footer-top-list'>
                                    <li>
                                        <h3>contact us</h3>
                                    </li>
                                    <li><a href=''>0187654987</a></li>
                                    <li><a href="">01563214789</a></li>
                                    <li><a href="">mailtoelectro@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <ul className='footer-top-list'>
                                    <li>
                                        <h3>find us</h3>
                                    </li>
                                    <li>uttara, dhaka, bangladesh</li>
                                </ul>
                                <ul className='footer-top-list mt-3'>
                                    <li>
                                        <h3>career</h3>
                                    </li>
                                    <li><p className='mb-0'>Looking for a job opportunity?</p>
                                        <a href=''>careeratelectro@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <ul className='footer-top-list'>
                                    <li>
                                        <h3>follow us</h3>
                                    </li>
                                    <li>
                                        <ul className='d-flex'>
                                            <li><a href=''><FacebookOutlinedIcon className='social-icons' /></a></li>
                                            <li><a href=''><InstagramIcon className='social-icons' /></a></li>
                                            <li><a href=''><LinkedInIcon className='social-icons' /></a></li>
                                            <li><a href=''><TwitterIcon className='social-icons' /></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='copywrite'>
                    <div className='container'>
                        <div className=' text-white text-center'>
                            <p className='mb-0 '>copywrite reserved by team free thinkers &copy; 2022 </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer;
