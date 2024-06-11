import React from 'react';
import './style/Footer.css';
import icon from './assests/icon.png'; 

const Footer = () => (
  <div className="footerlast">
    <div className="container">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-12 col-sm-12 col-md-12">
                <div className="logo">
                    <img src={icon} alt="Logo" className='footer-icon'/>
                    <div class="button-container button-container-new">
                      <button class="join-button">Buy Now</button>
                      <button class="white-button">Whitepaper</button>
                      </div>
                </div>
                {/* <p className="disclaimer footerpcss">
                    Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
                </p> */}
            </div>
            
            <div className="col-xl-2 col-lg-2 col-6 col-sm-6 col-md-6">
                <h5>About</h5>
                <ul className="list-unstyled">
                    <li><a href="#">Skullonomics</a></li>
                    <li><a href="#">How To Buy</a></li>
                </ul>
            </div>
            <div className="col-xl-2 col-lg-2 col-6 col-sm-6 col-md-6">
                <h5>Doc</h5>
                <ul className="list-unstyled">
                    <li><a href="#">Whitepaper</a></li>
                    <li><a href="#">Audit Report</a></li>
                    <li><a href="#">KYC</a></li>
                </ul>
            </div>
            <div className="col-xl-2 col-lg-2 col-6 col-sm-6 col-md-6">
                <h5>Terms</h5>
                <ul className="list-unstyled">
                    <li><a href="#">Cookies Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                </ul>
            </div>
            <div className="col-xl-2 col-lg-2 col-6 col-sm-6 col-md-6">
                <h5>Social</h5>
                <ul className="list-unstyled">
                    <li><a href="#"> Twitter</a></li>
                    <li><a href="#"> Telegram</a></li>
                    <li><a href="#"> Medium</a></li>
                </ul>
            </div>
        </div>
        <div className='row'>
            <p className="disclaimer footerpcss">
                    Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
                </p>
                <hr></hr>
            </div>
        <div className="text-center mt-4">
            <p id="footerp">Copyright © 2024 Punisher Coin. All Rights Reserved.</p>
        </div>
    </div>
  </div>
);

export default Footer;