import React from 'react'
import './sty.css'


function sty() {
  return (
    <>
    <header className='header'>
        <dir className="navbar">
            <div className='navber-container-logo'>
                <h2 className='navber-text'>LOGO</h2>
                <h2 className='navber-text-2'>Help Center</h2>
            </div>
            <div>
              <button className='button-Submit'>Submit a request</button>
              <button className='button-Signin'>Sign in</button>
            </div>
        </dir>
    </header>
    <dir className='container21'>
            <h2 className='h2-lobe'>How can we help?</h2>
        <div className="input-container">
            <input className='input-lobe' type="text" placeholder="Search"/>
        </div>
    </dir>
    <dir className='container22'>
        <dir className='icon-container22'>
            <dir className='img-icon'></dir>
            <dir className='text-icon'>
                <h2 className='h-icon-item'>Using Abstract</h2>
                <p className='p-icon-item'>Abstract lets you manage, version, and document your designs in one place.</p>
                <a href="">Learn More →</a>
            </dir>
        </dir>
        <dir className='icon-container22'>
            <dir className='img-icon'></dir>
            <dir className='text-icon'>
                <h2 className='h-icon-item'>Manage your account</h2>
                <p className='p-icon-item'>Configure your account settings, such as your email, profile details, and password.</p>
                <a href="">Learn More →</a>
            </dir>
        </dir>
        <dir className='icon-container22'>
            <dir className='img-icon'></dir>
            <dir className='text-icon'>
                <h2 className='h-icon-item'>Manage organizations, teams, and projects</h2>
                <p className='p-icon-item'>Configure your account settings, such as your email, profile details, and password.</p>
                <a href="">Learn More →</a>
            </dir>
        </dir>
        <dir className='icon-container22'>
            <dir className='img-icon'></dir>
            <dir className='text-icon'>
                <h2 className='h-icon-item'>Manage billing</h2>
                <p className='p-icon-item'>Change subscriptions and payment details.</p>
                <a href="">Learn More →</a>
            </dir>
        </dir>
        <dir className='icon-container22'>
            <dir className='img-icon'></dir>
            <dir className='text-icon'>
                <h2 className='h-icon-item'>Authenticate to Abstract</h2>
                <p className='p-icon-item'>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
                <a href="">Learn More →</a>
            </dir>
        </dir>
        <dir className='icon-container22'>
            <dir className='img-icon'></dir>
            <dir className='text-icon'>
                <h2 className='h-icon-item'>Abstract support</h2>
                <p className='p-icon-item'>Get in touch with a human.</p>
                <a href="">Learn More →</a>
            </dir>
        </dir>
    </dir>
    <footer className='footer'>
        <dir className='footer-box'>
            <dir className='footer-box-item'>
                <h3 className='footer-box-item-h3-text'>Abstract</h3>
                <p href="">Start Trial</p>
                <p href="">Pricing</p>
                <p href="">Download</p>
            </dir>
            <dir className='footer-box-item'>
                <h3 className='footer-box-item-h3-text'>Resources</h3>
                <p href="">Blog</p>
                <p href="">Help Center</p>
                <p href="">Release Notes</p>
                <p href="">Status</p>
            </dir>
            <dir className='footer-box-item'>
                <h3 className='footer-box-item-h3-text'>Community</h3>
                <p href="">Twitter</p>
                <p href="">LinkedIn</p>
                <p href="">Facebook</p>
                <p href="">Dribbble</p>
                <p href="">Podcast</p>
            </dir>
            <dir className='footer-box-item'>
                <h3 className='footer-box-item-h3-text'>Company</h3>
                <p href="">About Us</p>
                <p href="">Careers</p>
                <p href="">Legal</p>
            </dir>
            <dir className='footer-box-item'>
                <h3 className='footer-box-item-h3-text'>Contact Us</h3>
                <p href="">info@abstract.com</p>
            </dir>
        </dir>
    </footer>
    </>
  )
}

export default sty