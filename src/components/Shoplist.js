import React, { Component } from 'react';
class Shoplist extends Component {
    render() {
        return (
            <div class="main-content-wrapper">
                <div class="shop-area section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 order-lg-1 order-2">
                                <aside class="sidebar shop-sidebar">
                                    <div class="search-filter">
                                        <div class="filter-box mb--30">
                                            <div class="filter-title">
                                                <h2>Filter by categories</h2>
                                            </div>
                                            <ul class="search-filter-list">
                                                <li class="custom-checkbox">
                                                    <input type="checkbox" name="bookandboardgame" id="bookandboardgame" class="zeref-checkbox" />
                                                    <label for="bookandboardgame" class="zeref-checkbox-label">Dresses</label>
                                                </li>
                                                <li class="custom-checkbox">
                                                    <input type="checkbox" name="babydols" id="1" class="zeref-checkbox" />
                                                    <label for="1" class="zeref-checkbox-label">Accessories</label>
                                                </li>
                                                <li class="custom-checkbox">
                                                    <input type="checkbox" name="babydols" id="2" class="zeref-checkbox" />
                                                    <label for="2" class="zeref-checkbox-label">Handbag</label>
                                                </li>
                                                <li class="custom-checkbox">
                                                    <input type="checkbox" name="babydols" id="3" class="zeref-checkbox" />
                                                    <label for="3" class="zeref-checkbox-label">Watches</label>
                                                </li>
                                                <li class="custom-checkbox">
                                                    <input type="checkbox" name="babydols" id="4" class="zeref-checkbox" />
                                                    <label for="4" class="zeref-checkbox-label">Jewelery</label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="filter-box mb--30">
                                            <div class="filter-title">
                                                <h2>Filter by brand</h2>
                                            </div>
                                            <ul class="search-filter-list">
                                                <li class="custom-checkbox">
                                                    <input type="checkbox" name="bookandboardgame" id="cat" class="zeref-checkbox" />
                                                    <label for="cat" class="zeref-checkbox-label">Nike</label>
                                                </li>
                                                <li class="custom-checkbox">
                                                    <input type="checkbox" name="babydols" id="5" class="zeref-checkbox" />
                                                    <label for="5" class="zeref-checkbox-label">zeref</label>
                                                </li>
                                                <li class="custom-checkbox">
                                                    <input type="checkbox" name="babydols" id="6" class="zeref-checkbox" />
                                                    <label for="6" class="zeref-checkbox-label">Lorem</label>
                                                </li>
                                                <li class="custom-checkbox">
                                                    <input type="checkbox" name="babydols" id="7" class="zeref-checkbox" />
                                                    <label for="7" class="zeref-checkbox-label">Ipsum</label>
                                                </li>
                                                <li class="custom-checkbox">
                                                    <input type="checkbox" name="babydols" id="8" class="zeref-checkbox" />
                                                    <label for="8" class="zeref-checkbox-label">Dolet</label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="filter-box mb--30">
                                            <div class="filter-title">
                                                <h2>Filter by price</h2>
                                            </div>
                                            <ul class="search-filter-list">
                                                <li class="custom-radio">
                                                    <input type="radio" name="price" id="sixtentoeighteen" class="zeref-radio-input" />
                                                    <label for="sixtentoeighteen" class="zeref-radio-label"><span></span> $10.00 - $15.00 (5) </label>
                                                </li>
                                                <li class="custom-radio">
                                                    <input type="radio" name="price" id="twentyfivetothirtytwo" class="zeref-radio-input" />
                                                    <label for="twentyfivetothirtytwo" class="zeref-radio-label"><span></span> $16.00 - $25.00 (22)</label>
                                                </li>
                                                <li class="custom-radio">
                                                    <input type="radio" name="price" id="fiftytofiftythree" class="zeref-radio-input" />
                                                    <label for="fiftytofiftythree" class="zeref-radio-label"><span></span> $26.00 - $35.00 (53)</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="filter-box mb--30">
                                            <div class="filter-title">
                                                <h2>Tags</h2>
                                            </div>
                                            <ul class="tag-list">
                                                <li><a href="#">Man</a></li>
                                                <li><a href="#">Women</a></li>
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">Children</a></li>
                                                <li><a href="#">Toys</a></li>
                                                <li><a href="#">Games</a></li>
                                            </ul>
                                        </div>
                                        <div class="recent-post-widget filter-box">
                                            <div class="filter-title">
                                                <h2>Best Product</h2>
                                            </div>
                                            <div class="single-recent-post">
                                                <a href="#" class="single-post-thumb">
                                                    <img src="assets/img/blog/1.jpg" alt="Blog Thumb" />
                                                </a>
                                                <div class="single-post-content">
                                                    <a href="#" class="single-post-title">Awesome Dress</a>
                                                    <a href="#" class="single-post-date">12 February, 2020</a>
                                                </div>
                                            </div>
                                            <div class="single-recent-post">
                                                <a href="#" class="single-post-thumb">
                                                    <img src="assets/img/blog/2.jpg" alt="Blog Thumb" />
                                                </a>
                                                <div class="single-post-content">
                                                    <a href="#" class="single-post-title">Awesome Dress</a>
                                                    <a href="#" class="single-post-date">12 February, 2020</a>
                                                </div>
                                            </div>
                                            <div class="single-recent-post">
                                                <a href="#" class="single-post-thumb">
                                                    <img src="assets/img/blog/3.jpg" alt="Blog Thumb" />
                                                </a>
                                                <div class="single-post-content">
                                                    <a href="#" class="single-post-title">Awesome Dress</a>
                                                    <a href="#" class="single-post-date">12 February, 2020</a>
                                                </div>
                                            </div>
                                            <div class="single-recent-post">
                                                <a href="#" class="single-post-thumb">
                                                    <img src="assets/img/blog/4.jpg" alt="Blog Thumb" />
                                                </a>
                                                <div class="single-post-content">
                                                    <a href="#" class="single-post-title">Awesome Dress</a>
                                                    <a href="#" class="single-post-date">12 February, 2020</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </aside>

                            </div>
                            <div class="col-lg-9 order-lg-2 order-1">
                                <div class="shop-toolbar d-flex flex-md-row flex-column justify-content-between align-items-md-center">
                                    <div class="zeref-shop-grid-list">
                                        <ul class="nav">
                                            <li>
                                                <a data-toggle="tab" href="#grid"><i class="fa fa-th"></i></a>
                                            </li>
                                            <li>
                                                <a class="active" data-toggle="tab" href="#list"><i class="fa fa-list"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="zeref-short">
                                        <label>Short By:</label>
                                        <select class="short-select">
                                            <option value="1">Position</option>
                                            <option value="2">Name, A to Z</option>
                                            <option value="3">Name, Z to A</option>
                                            <option value="4">Price, low to high</option>
                                            <option value="5">Price, high to low</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="main-shop-wrapper">
                                    <div class="tab-content" id="myTabContent-2">
                                        <div class="tab-pane" id="grid">
                                            <div class="product-grid-view">
                                                <div class="row">
                                                    <div class="col-xl-4 col-md-6">

                                                        <div class="product-grid7 mb--30">
                                                            <div class="product-image7">
                                                                <a href="#">
                                                                    <img class="pic-1" alt="product image" src="assets/img/fashion/product/1.jpg" />
                                                                    <img class="pic-2" alt="product image" src="assets/img/fashion/product/2.jpg" />
                                                                </a>
                                                                <ul class="social">
                                                                    <li><a href="#" data-toggle="modal" data-target="#productModal"> <i class="fa fa-eye"></i> </a></li>
                                                                    <li><a href="wishlist.html"><i class="fa fa-heart"></i> </a></li>
                                                                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> </a></li>
                                                                    <li><a href="single-product.html"><i class="fa fa-link"></i> </a></li>
                                                                </ul>
                                                                <span class="product-new-label">New</span>
                                                            </div>
                                                            <div class="product-content">
                                                                <h3 class="title"><a href="#">Girls Tops</a></h3>
                                                                <ul class="rating">
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                </ul>
                                                                <div class="price">$15.00
                                                                <span>$20.00</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-xl-4 col-md-6">

                                                        <div class="product-grid7 mb--30">
                                                            <div class="product-image7">
                                                                <a href="#">
                                                                    <img class="pic-1" alt="product image" src="assets/img/fashion/product/3.jpg" />
                                                                    <img class="pic-2" alt="product image" src="assets/img/fashion/product/4.jpg" />
                                                                </a>
                                                                <ul class="social">
                                                                    <li><a href="#" data-toggle="modal" data-target="#productModal"> <i class="fa fa-eye"></i> </a></li>
                                                                    <li><a href="wishlist.html"><i class="fa fa-heart"></i> </a></li>
                                                                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> </a></li>
                                                                    <li><a href="single-product.html"><i class="fa fa-link"></i> </a></li>
                                                                </ul>
                                                                <span class="product-new-label">New</span>
                                                            </div>
                                                            <div class="product-content">
                                                                <h3 class="title"><a href="#">Girls Tops</a></h3>
                                                                <ul class="rating">
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                </ul>
                                                                <div class="price">$15.00
                                                                <span>$20.00</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-xl-4 col-md-6">

                                                        <div class="product-grid7 mb--30">
                                                            <div class="product-image7">
                                                                <a href="#">
                                                                    <img class="pic-1" alt="product image" src="assets/img/fashion/product/5.jpg" />
                                                                    <img class="pic-2" alt="product image" src="assets/img/fashion/product/6.jpg" />
                                                                </a>
                                                                <ul class="social">
                                                                    <li><a href="#" data-toggle="modal" data-target="#productModal"> <i class="fa fa-eye"></i> </a></li>
                                                                    <li><a href="wishlist.html"><i class="fa fa-heart"></i> </a></li>
                                                                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> </a></li>
                                                                    <li><a href="single-product.html"><i class="fa fa-link"></i> </a></li>
                                                                </ul>
                                                                <span class="product-new-label">New</span>
                                                            </div>
                                                            <div class="product-content">
                                                                <h3 class="title"><a href="#">Girls Tops</a></h3>
                                                                <ul class="rating">
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                </ul>
                                                                <div class="price">$15.00
                                                                <span>$20.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-md-6">

                                                        <div class="product-grid7 mb--30">
                                                            <div class="product-image7">
                                                                <a href="#">
                                                                    <img class="pic-1" alt="product image" src="assets/img/fashion/product/7.jpg" />
                                                                    <img class="pic-2" alt="product image" src="assets/img/fashion/product/8.jpg" />
                                                                </a>
                                                                <ul class="social">
                                                                    <li><a href="#" data-toggle="modal" data-target="#productModal"> <i class="fa fa-eye"></i> </a></li>
                                                                    <li><a href="wishlist.html"><i class="fa fa-heart"></i> </a></li>
                                                                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> </a></li>
                                                                    <li><a href="single-product.html"><i class="fa fa-link"></i> </a></li>
                                                                </ul>
                                                                <span class="product-new-label">New</span>
                                                            </div>
                                                            <div class="product-content">
                                                                <h3 class="title"><a href="#">Girls Tops</a></h3>
                                                                <ul class="rating">
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                </ul>
                                                                <div class="price">$15.00
                                                                <span>$20.00</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-xl-4 col-md-6">

                                                        <div class="product-grid7 mb--30">
                                                            <div class="product-image7">
                                                                <a href="#">
                                                                    <img class="pic-1" alt="product image" src="assets/img/fashion/product/9.jpg" />
                                                                    <img class="pic-2" alt="product image" src="assets/img/fashion/product/10.jpg" />
                                                                </a>
                                                                <ul class="social">
                                                                    <li><a href="#" data-toggle="modal" data-target="#productModal"> <i class="fa fa-eye"></i> </a></li>
                                                                    <li><a href="wishlist.html"><i class="fa fa-heart"></i> </a></li>
                                                                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> </a></li>
                                                                    <li><a href="single-product.html"><i class="fa fa-link"></i> </a></li>
                                                                </ul>
                                                                <span class="product-new-label">New</span>
                                                            </div>
                                                            <div class="product-content">
                                                                <h3 class="title"><a href="#">Girls Tops</a></h3>
                                                                <ul class="rating">
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                </ul>
                                                                <div class="price">$15.00
                                                                <span>$20.00</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-xl-4 col-md-6">

                                                        <div class="product-grid7 mb--30">
                                                            <div class="product-image7">
                                                                <a href="#">
                                                                    <img class="pic-1" alt="product image" src="assets/img/fashion/product/11.jpg" />
                                                                    <img class="pic-2" alt="product image" src="assets/img/fashion/product/12.jpg" />
                                                                </a>
                                                                <ul class="social">
                                                                    <li><a href="#" data-toggle="modal" data-target="#productModal"> <i class="fa fa-eye"></i> </a></li>
                                                                    <li><a href="wishlist.html"><i class="fa fa-heart"></i> </a></li>
                                                                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> </a></li>
                                                                    <li><a href="single-product.html"><i class="fa fa-link"></i> </a></li>
                                                                </ul>
                                                                <span class="product-new-label">New</span>
                                                            </div>
                                                            <div class="product-content">
                                                                <h3 class="title"><a href="#">Girls Tops</a></h3>
                                                                <ul class="rating">
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                </ul>
                                                                <div class="price">$15.00
                                                                <span>$20.00</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-xl-4 col-md-6">

                                                        <div class="product-grid7 mb--30">
                                                            <div class="product-image7">
                                                                <a href="#">
                                                                    <img class="pic-1" alt="product image" src="assets/img/fashion/product/13.jpg" />
                                                                    <img class="pic-2" alt="product image" src="assets/img/fashion/product/14.jpg" />
                                                                </a>
                                                                <ul class="social">
                                                                    <li><a href="#" data-toggle="modal" data-target="#productModal"> <i class="fa fa-eye"></i> </a></li>
                                                                    <li><a href="wishlist.html"><i class="fa fa-heart"></i> </a></li>
                                                                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> </a></li>
                                                                    <li><a href="single-product.html"><i class="fa fa-link"></i> </a></li>
                                                                </ul>
                                                                <span class="product-new-label">New</span>
                                                            </div>
                                                            <div class="product-content">
                                                                <h3 class="title"><a href="#">Girls Tops</a></h3>
                                                                <ul class="rating">
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                </ul>
                                                                <div class="price">$15.00
                                                                <span>$20.00</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-xl-4 col-md-6">

                                                        <div class="product-grid7 mb--30">
                                                            <div class="product-image7">
                                                                <a href="#">
                                                                    <img class="pic-1" alt="product image" src="assets/img/fashion/product/15.jpg" />
                                                                    <img class="pic-2" alt="product image" src="assets/img/fashion/product/16.jpg" />
                                                                </a>
                                                                <ul class="social">
                                                                    <li><a href="#" data-toggle="modal" data-target="#productModal"> <i class="fa fa-eye"></i> </a></li>
                                                                    <li><a href="wishlist.html"><i class="fa fa-heart"></i> </a></li>
                                                                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> </a></li>
                                                                    <li><a href="single-product.html"><i class="fa fa-link"></i> </a></li>
                                                                </ul>
                                                                <span class="product-new-label">New</span>
                                                            </div>
                                                            <div class="product-content">
                                                                <h3 class="title"><a href="#">Girls Tops</a></h3>
                                                                <ul class="rating">
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                </ul>
                                                                <div class="price">$15.00
                                                                <span>$20.00</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-xl-4 col-md-6">

                                                        <div class="product-grid7 mb--30">
                                                            <div class="product-image7">
                                                                <a href="#">
                                                                    <img class="pic-1" alt="product image" src="assets/img/fashion/product/1.jpg" />
                                                                    <img class="pic-2" alt="product image" src="assets/img/fashion/product/2.jpg" />
                                                                </a>
                                                                <ul class="social">
                                                                    <li><a href="#" data-toggle="modal" data-target="#productModal"> <i class="fa fa-eye"></i> </a></li>
                                                                    <li><a href="wishlist.html"><i class="fa fa-heart"></i> </a></li>
                                                                    <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> </a></li>
                                                                    <li><a href="single-product.html"><i class="fa fa-link"></i> </a></li>
                                                                </ul>
                                                                <span class="product-new-label">New</span>
                                                            </div>
                                                            <div class="product-content">
                                                                <h3 class="title"><a href="#">Girls Tops</a></h3>
                                                                <ul class="rating">
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                    <li class="fa fa-star"></li>
                                                                </ul>
                                                                <div class="price">$15.00
                                                                <span>$20.00</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane show active" id="list">
                                            <div class="product-list-view">
                                                <div class="product-box product-box--list variable-product">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="zeref-box-image">
                                                                <img src="assets/img/fashion/product/3.jpg" alt="product image" class="primary_image" />
                                                                <img src="assets/img/fashion/product/4.jpg" alt="product image" class="secondary_image" />
                                                                <a href="#" data-toggle="modal" data-target="#productModal" class="quick-view"> <i class="fa fa-eye"></i> </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <div class="zeref-box-desc">
                                                                <a href="single-product.html" class="zeref-box-title">Blue Shirt</a>
                                                                <p class="zeref-box-price">
                                                                    <span class="sale-price">$15.00</span>
                                                                    <span class="regular-price">$23.00</span>
                                                                </p>
                                                                <p class="zeref-box-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis distinctio, recusandae sed, dolore perspiciatis, eaque ex ad itaque esse odio ab magni! Impedit molestias dicta aliquid ipsum accusantium repellendus aut!</p>
                                                                <a href="cart.html" class="btn add-to-cart btn-style-2"><i class="fa fa-shopping-cart"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-box product-box--list variable-product">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="zeref-box-image">
                                                                <img src="assets/img/fashion/product/5.jpg" alt="product image" class="primary_image" />
                                                                <img src="assets/img/fashion/product/6.jpg" alt="product image" class="secondary_image" />
                                                                <a href="#" data-toggle="modal" data-target="#productModal" class="quick-view"> <i class="fa fa-eye"></i> </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <div class="zeref-box-desc">
                                                                <a href="single-product.html" class="zeref-box-title">Blue Shirt</a>
                                                                <p class="zeref-box-price">
                                                                    <span class="sale-price">$15.00</span>
                                                                    <span class="regular-price">$23.00</span>
                                                                </p>
                                                                <p class="zeref-box-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis distinctio, recusandae sed, dolore perspiciatis, eaque ex ad itaque esse odio ab magni! Impedit molestias dicta aliquid ipsum accusantium repellendus aut!</p>
                                                                <a href="cart.html" class="btn add-to-cart btn-style-2"><i class="fa fa-shopping-cart"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-box product-box--list variable-product">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="zeref-box-image">
                                                                <img src="assets/img/fashion/product/7.jpg" alt="product image" class="primary_image" />
                                                                <img src="assets/img/fashion/product/8.jpg" alt="product image" class="secondary_image" />
                                                                <a href="#" data-toggle="modal" data-target="#productModal" class="quick-view"> <i class="fa fa-eye"></i> </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <div class="zeref-box-desc">
                                                                <a href="single-product.html" class="zeref-box-title">Blue Shirt</a>
                                                                <p class="zeref-box-price">
                                                                    <span class="sale-price">$15.00</span>
                                                                    <span class="regular-price">$23.00</span>
                                                                </p>
                                                                <p class="zeref-box-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis distinctio, recusandae sed, dolore perspiciatis, eaque ex ad itaque esse odio ab magni! Impedit molestias dicta aliquid ipsum accusantium repellendus aut!</p>
                                                                <a href="cart.html" class="btn add-to-cart btn-style-2"><i class="fa fa-shopping-cart"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-box product-box--list variable-product">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="zeref-box-image">
                                                                <img src="assets/img/fashion/product/9.jpg" alt="product image" class="primary_image" />
                                                                <img src="assets/img/fashion/product/10.jpg" alt="product image" class="secondary_image" />
                                                                <a href="#" data-toggle="modal" data-target="#productModal" class="quick-view"> <i class="fa fa-eye"></i> </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <div class="zeref-box-desc">
                                                                <a href="single-product.html" class="zeref-box-title">Blue Shirt</a>
                                                                <p class="zeref-box-price">
                                                                    <span class="sale-price">$15.00</span>
                                                                    <span class="regular-price">$23.00</span>
                                                                </p>
                                                                <p class="zeref-box-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis distinctio, recusandae sed, dolore perspiciatis, eaque ex ad itaque esse odio ab magni! Impedit molestias dicta aliquid ipsum accusantium repellendus aut!</p>
                                                                <a href="cart.html" class="btn add-to-cart btn-style-2"><i class="fa fa-shopping-cart"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-box product-box--list variable-product">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="zeref-box-image">
                                                                <img src="assets/img/fashion/product/11.jpg" alt="product image" class="primary_image" />
                                                                <img src="assets/img/fashion/product/12.jpg" alt="product image" class="secondary_image" />
                                                                <a href="#" data-toggle="modal" data-target="#productModal" class="quick-view"> <i class="fa fa-eye"></i> </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <div class="zeref-box-desc">
                                                                <a href="single-product.html" class="zeref-box-title">Blue Shirt</a>
                                                                <p class="zeref-box-price">
                                                                    <span class="sale-price">$15.00</span>
                                                                    <span class="regular-price">$23.00</span>
                                                                </p>
                                                                <p class="zeref-box-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis distinctio, recusandae sed, dolore perspiciatis, eaque ex ad itaque esse odio ab magni! Impedit molestias dicta aliquid ipsum accusantium repellendus aut!</p>
                                                                <a href="cart.html" class="btn add-to-cart btn-style-2"><i class="fa fa-shopping-cart"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-box product-box--list variable-product">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="zeref-box-image">
                                                                <img src="assets/img/fashion/product/13.jpg" alt="product image" class="primary_image" />
                                                                <img src="assets/img/fashion/product/14.jpg" alt="product image" class="secondary_image" />
                                                                <a href="#" data-toggle="modal" data-target="#productModal" class="quick-view"> <i class="fa fa-eye"></i> </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <div class="zeref-box-desc">
                                                                <a href="single-product.html" class="zeref-box-title">Blue Shirt</a>
                                                                <p class="zeref-box-price">
                                                                    <span class="sale-price">$15.00</span>
                                                                    <span class="regular-price">$23.00</span>
                                                                </p>
                                                                <p class="zeref-box-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis distinctio, recusandae sed, dolore perspiciatis, eaque ex ad itaque esse odio ab magni! Impedit molestias dicta aliquid ipsum accusantium repellendus aut!</p>
                                                                <a href="cart.html" class="btn add-to-cart btn-style-2"><i class="fa fa-shopping-cart"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-md--30">
                                        <div class="col-12 text-center">
                                            <ul class="pagination">
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                            </ul>
                                        </div>
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
export default Shoplist