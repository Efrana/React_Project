import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer'
import Register from './components/Register';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Topfooter from './components/Topfooter';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Shoplist from './components/Shoplist';
function App() {
  return (
    <Router>
      <div>
        <div class="header zeref-header">
          <div class="header-bottom zeref-header-bottom fixed-header">
            <div class="container">
              <div class="row no-gutters">
                <div class="col-lg-2 col-md-2 col-sm-3 col-4 text-md-left d-flex align-items-center">
                  <a class="logo-box" href="index.html">
                    <span class="ec-text">EC</span><span class="react-team">-ReactTeam</span>

                  </a>
                </div>
                <div class="col-lg-6 col-md-1 col-sm-1 col-1 justify-content-md-end">
                  <div class="zeref-header-bottom-right justify-content-md-end">
                    <nav class="main-navigation zeref-main-navigation">

                      <ul class="mainmenu zeref-main-menu">
                        <li class="zeref-mainmenu-itm menu-item-has-children">
                          <a href="index.html" class="zeref-mainmenu-link">Home</a>
                          <ul class="sub-menu">
                            <li class="menu-item-has-children">
                              <a href="index.html">Fashion</a>
                              <ul class="sub-menu">
                                <li>
                                  <a href="index.html">Fashion 01</a>
                                </li>
                                <li>
                                  <a href="index-2.html">Fashion 02</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Fashion 03</a>
                                </li>
                                <li>
                                  <a href="index-4.html">Fashion 04</a>
                                </li>
                              </ul>
                            </li>
                            <li class="menu-item-has-children">
                              <a href="index-5.html">Electronics</a>
                              <ul class="sub-menu">
                                <li>
                                  <a href="index-5.html">Electronics 01</a>
                                </li>
                                <li>
                                  <a href="index-6.html">Electronics 02</a>
                                </li>
                                <li>
                                  <a href="index-7.html">Electronics 03</a>
                                </li>
                              </ul>
                            </li>
                            <li class="menu-item-has-children">
                              <a href="index-8.html">Furniture</a>
                              <ul class="sub-menu">
                                <li>
                                  <a href="index-8.html">Furniture 01</a>
                                </li>
                                <li>
                                  <a href="index-9.html">Furniture 02</a>
                                </li>
                                <li>
                                  <a href="index-10.html">Furniture 03</a>
                                </li>
                              </ul>
                            </li>
                            <li class="menu-item-has-children">
                              <a href="index-11.html">Food</a>
                              <ul class="sub-menu">
                                <li>
                                  <a href="index-11.html">Food 01</a>
                                </li>
                                <li>
                                  <a href="index-12.html">Food 02</a>
                                </li>
                                <li>
                                  <a href="index-13.html">Food 03</a>
                                </li>
                              </ul>
                            </li>
                            <li class="menu-item-has-children">
                              <a href="index-14.html">Jewellery</a>
                              <ul class="sub-menu">
                                <li>
                                  <a href="index-14.html">Jewellery 01</a>
                                </li>
                                <li>
                                  <a href="index-15.html">Jewellery 02</a>
                                </li>
                              </ul>
                            </li>
                            <li class="menu-item-has-children">
                              <a href="index-16.html">Beauty</a>
                              <ul class="sub-menu">
                                <li>
                                  <a href="index-16.html">Beauty 01</a>
                                </li>
                                <li>
                                  <a href="index-17.html">Beauty 02</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="index-18.html" class="mainmenu-sub-link">Flower</a>
                            </li>
                            <li>
                              <a href="index-19.html" class="mainmenu-sub-link">Games & Sports</a>
                            </li>
                            <li>
                              <a href="index-20.html" class="mainmenu-sub-link">Kids & Toys</a>
                            </li>
                            <li>
                              <a href="index-21.html" class="mainmenu-sub-link">Medicine</a>
                            </li>
                          </ul>
                        </li>
                        <li class="zeref-mainmenu-itm menu-item-has-children">
                          <a href="shop.html" class="zeref-mainmenu-link">Categories</a>
                          <ul class="megamenu three-column">
                            <li>
                              <a href="#">Category 01</a>
                              <ul>
                                <li class="">
                                  <a href="index.html" class="">Fashion</a>
                                </li>
                                <li class="">
                                  <a href="index-5.html" class="">Electronics</a>
                                </li>
                                <li class="">
                                  <a href="index-8.html" class="">Furniture</a>
                                </li>
                                <li class="">
                                  <a href="index-11.html" class="">Food</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Category 02</a>
                              <ul>
                                <li class="">
                                  <a href="index-14.html" class="">Jewellery</a>
                                </li>
                                <li class="">
                                  <a href="index-16.html" class="">Beauty</a>
                                </li>
                                <li class="">
                                  <a href="index-18.html" class="">Flower</a>
                                </li>
                                <li class="">
                                  <a href="index-19.html" class="">Games</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Category 03</a>
                              <ul>
                                <li>
                                  <a href="index-20.html">Kids & Toys</a>
                                </li>
                                <li>
                                  <a href="index-21.html">Medicine</a>
                                </li>
                                <li>
                                  <a href="index-16.html">Cosmetics</a>
                                </li>
                                <li>
                                  <a href="index-19.html">Sports</a>
                                </li>
                              </ul>
                            </li>

                          </ul>
                        </li>
                        <li class="zeref-mainmenu-itm menu-item-has-children">
                          <ul class="sub-menu">
                            <li class="menu-item-has-children">
                              <ul class="sub-menu">
                              </ul>
                            </li>
                            <li class="menu-item-has-children">
                              <ul class="sub-menu">
                              </ul>
                            </li>

                          </ul>
                        </li>
                        <li class="zeref-mainmenu-itm menu-item-has-children">
                          <a href="#" class="zeref-mainmenu-link">Pages</a>
                          <ul class="sub-menu">
                            <li>
                              <Link to={'/cart'} className="nav-link">Cart</Link>
                            </li>
                            <li>
                              <Link to={'/wishlist'} className="nav-link">Wishlist</Link>
                            </li>
                            <li>
                              <Link to={'/checkout'} className="nav-link">Checkout</Link>
                            </li>
                            <li>
                              <Link to={'/shoplist'} className="nav-link">Shoplist</Link>
                            </li>
                          </ul>
                        </li>
                        <li class="zeref-mainmenu-itm menu-item-has-children">
                          <Link to={'/register'} className="nav-link">Register</Link>
                        </li>
                        <li class="zeref-mainmenu-itm menu-item-has-children">
                          <Link to={'/login'} className="nav-link">Login</Link>
                        </li>
                      </ul>

                    </nav>
                  </div>
                </div>
                <div class="col-lg-4 col-md-9 col-sm-8 col-7">
                  <div class="zeref-header-bottom-right justify-content-md-end">

                    <div class="header-cart header-area-cart">
                      <a class="zeref-cart-toggle" id="cartDropdown">
                        <i class="fa fa-shopping-cart header-shop-icon"></i>
                        <sup class="cart-badge">0</sup>
                      </a>
                      <div class="cart-dropdown">
                        <div class="header-cart-content">
                          <a class="header-cart-close-btn" id="cart-close" href="#"><i class="fa fa-times"></i></a>
                          <div class="header-cart-item">
                            <div class="hcart-image">
                              <img src="assets/img/fashion/product/3.jpg" alt="product" />
                            </div>
                            <div class="hcart-content">
                              <h4><a href="single-product.html">Man dress</a> </h4>
                              <p>1 X &dollar;100</p>
                            </div>
                          </div>
                          <ul class="header-cart-list">
                            <li class="header-cart-single">
                              <span class="header-cart-single--title">Subtotal</span>
                              <span class="cart-amount">$100.00</span>
                            </li>
                          </ul>
                          <div class="header-cart-btn">
                            <a href="cart.html" class="btn btn-checkout btn-style-3">Cart</a>
                            <a href="checkout.html" class="btn btn-checkout btn-style-3">Checkout</a>
                          </div>

                        </div>
                      </div>
                    </div>
                    <a id="sidebarCollapse">
                      <i class="fa fa-user"></i>
                    </a>
                    <form class="head-form d-none d-sm-block">
                      <input type="text" name="search" class="head-search" placeholder="Search" />
                    </form>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="mobile-menu mobile__menu"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/wishlist' component={Wishlist} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/shoplist' component={Shoplist} />
          <Sidebar />
          <Banner/>
        </Switch>

        <Topfooter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
