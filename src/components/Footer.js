
import React, { Component } from 'react';

class footer extends Component{
    render(){
        return(
            
            <footer class="black-footer-bottom">
            <div class="container">
                <div class="footer-bottom footer-area-bottom">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                           <div class="payment">
                                <ul>
                                    <li><a href="#"><i class="fab fa-cc-paypal"></i></a></li>
                                    <li><a href="#"><i class="fab fa-cc-visa"></i></a></li>
                                    <li><a href="#"><i class="fab fa-cc-mastercard"></i></a></li>
                                    <li><a href="#"><i class="fab fa-cc-discover"></i></a></li>
                                    <li><a href="#"><i class="fab fa-cc-amex"></i></a></li>
                                </ul>
                            </div>
                        </div>
                                
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            
                            <p class="copyright-text footer-copyright-text">
                                © 2020 <a href="#">Cloud Production Front-end Team</a>. All rights reserved
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        )
    }   
}
export default footer