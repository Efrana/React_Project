
import React, { Component } from 'react';

class Topfooter extends Component{
    render(){
        return(
            <div class="footer footer-area black-footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row pt--80 pb--40 footer-widget-row">
                        <div class="col-lg-4 col-md-8 col-sm-8">
                            <div class="footer-widget">
                                <h3 class="widget-title footer-widget-title">Categories</h3>
                                <div class="footer-logo-section-all">
                                    <div class="footer-logo-text">
                                        <a href="index-2.html"><img src="assets/img/logo-2.png" alt=""/></a>
                                    </div>
                                    <p>If you want to Get all the latest information on Events, Sales and Offers. Sign up for newsletter today. Be the first to know</p>
                                    <div class="subscribe">
                                        <form action="#">
                                            <input placeholder="Enter Your Mail" type="email"/>
                                            <button value="Submit" type="submit" class="search-button"><i class="fa fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4">
                            <div class="footer-widget">
                                <h3 class="widget-title footer-widget-title">Quick Links</h3>
                                <div class="menu-widget footer-menu-widget">
                                    <ul>
                                        <li><a href="#">Login </a></li>
                                        <li><a href="#">register </a></li>
                                        <li><a href="#">Wishlist </a></li>
                                        <li><a href="#">My Cart</a></li>
                                        <li><a href="#">Checkout </a></li>
                                        <li><a href="#">register </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-5 col-sm-5">
                            <div class="footer-widget">
                                <h3 class="widget-title footer-widget-title">Get in touch</h3>
                                <div class="address-widget footer-address-widget">
                                    <p><i class="fa fa-map-marker"></i> Mirpu DOHS Road 11 Building No. 724</p>
                                    <p><i class="fa fa-phone"></i> +001 2233 456</p>
                                    <p><i class="fa fa-envelope"></i> <a href="mailo:demo@themeglass.com">cloudproduction@gmail.com</a></p>
                                    <p><i class="fa fa-skype"></i> <a href="#">zeref12445</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-7 col-sm-7">
                            <div class="footer-widget">
                                <h3 class="widget-title footer-widget-title">Business hour</h3>
                                <div class="footer-business">
                                    <p>we always ready for the support in the working days.</p>
                                    <ul>
                                        <li>
                                            mon - fri <span>8.00 - 5.00 pm</span>
                                        </li>
                                        <li>
                                            saturday <span>closed</span>
                                        </li>
                                        <li>
                                            sunday <span>closed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }   
}
export default Topfooter