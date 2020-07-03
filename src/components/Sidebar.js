
import React, { Component } from 'react';

class Sidebar extends Component{
    render(){
        return(
            <div class="category-nav category-nav--3">
            <h2 class="zeref-catnav-title" id="js-cat-nav-title"><i class="fa fa-bars"></i> <span>Categories</span></h2>
            <ul class="zeref-catnav-menu display-none-md" id="js-cat-nav">
                <li class="zeref-category-nav-items has-children">
                    <a href="shop.html">Women</a>
                    <div class="category-submenu">
                        <div class="zeref-category-submenu">
                            <h3 class="zeref-category-submenu-title">Clothing</h3>
                            <ul>
                                <li><a href="shop.html">Western Wear</a></li>
                                <li><a href="shop.html">Night Wear</a></li>
                                <li><a href="shop.html">Ethnic Wear</a></li>
                                <li><a href="shop.html">Designer Wear</a></li>
                            </ul>
                        </div>
                        <div class="zeref-category-submenu">
                            <h3 class="zeref-category-submenu-title">Jwellery</h3>
                            <ul>
                                <li><a href="shop.html">Bracelets</a></li>
                                <li><a href="shop.html">Necklaces &amp; Pendent</a></li>
                                <li><a href="shop.html">Pendants</a></li>
                                <li><a href="shop.html">Pins &amp; Brooches</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="zeref-category-nav-items has-children">
                    <a href="shop.html">Man</a>
                    <div class="category-submenu">
                        <div class="zeref-category-submenu">
                            <h3 class="zeref-category-submenu-title">Clothing</h3>
                            <ul>
                                <li><a href="shop.html">Western Wear</a></li>
                                <li><a href="shop.html">Night Wear</a></li>
                                <li><a href="shop.html">Ethnic Wear</a></li>
                                <li><a href="shop.html">Designer Wear</a></li>
                            </ul>
                        </div>
                        <div class="zeref-category-submenu">
                            <h3 class="zeref-category-submenu-title">Shoes</h3>
                            <ul>
                                <li><a href="shop.html">Sport Shoes</a></li>
                                <li><a href="shop.html">Casual Shoes</a></li>
                                <li><a href="shop.html">Leather Shoes</a></li>
                                <li><a href="shop.html">Canvas shoes</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="zeref-category-nav-items has-children">
                    <a href="shop.html">Electronics</a>
                    <div class="category-submenu">
                        <div class="zeref-category-submenu">
                            <h3 class="zeref-category-submenu-title">Category 01</h3>
                            <ul>
                                <li><a href="shop.html">Laptop</a></li>
                                <li><a href="shop.html">Monitor</a></li>
                                <li><a href="shop.html">Microphones</a></li>
                                <li><a href="shop.html">Computer</a></li>
                            </ul>
                        </div>
                        <div class="zeref-category-submenu">
                            <h3 class="zeref-category-submenu-title">Category 02</h3>
                            <ul>
                                <li><a href="shop.html">Headphone</a></li>
                                <li><a href="shop.html">Mobile</a></li>
                                <li><a href="shop.html">Pendrive</a></li>
                                <li><a href="shop.html">Television</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="zeref-category-nav-items">
                    <a href="shop.html">Furniture</a>
                </li>
                <li class="zeref-category-nav-items">
                    <a href="shop.html">Accessories</a>
                </li>
                <li class="zeref-category-nav-items">
                    <a href="shop.html">Baby &amp; Kids</a>
                </li>
                <li class="zeref-category-nav-items">
                    <a href="shop.html">Games</a>
                </li>
                <li class="zeref-category-nav-items hidden-menu-item">
                    <a href="shop.html">Health & Beauty</a>
                </li>
                <li class="zeref-category-nav-items">
                    <a href="shop.html" class="js-expand-hidden-menu"> More Categories</a>
                </li>
            </ul>
        </div>
        )
    }   
}
export default Sidebar