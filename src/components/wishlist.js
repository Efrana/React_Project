import React, { Component } from 'react';
class Wishlist extends Component {
    render() {
        return (
            <div class="main-content-wrapper">
                <div class="wishlist-wrapper ptb--60">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <form action="#" class="form form--cart">
                                    <div class="cart-table table-content table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Images</th>
                                                    <th>Product</th>
                                                    <th>Unit Price</th>
                                                    <th>Available</th>
                                                    <th>Add to Cart</th>
                                                    <th>remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><a href="single-product.html"><img src="assets/img/fashion/product/1.jpg" alt="product" /></a></td>
                                                    <td class="cart-product-price"><h3><a href="#">Red Bag</a></h3></td>
                                                    <td><strong>$16.00</strong></td>
                                                    <td>
                                                        <span class="available">Yes</span>
                                                    </td>
                                                    <td><a href="cart.html" class="btn add-to-cart"><i class="fa fa-shopping-cart"></i></a></td>
                                                    <td><a href="#"><i class="fa fa-trash remove"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="single-product.html"><img src="assets/img/fashion/product/11.jpg" alt="product" /></a></td>
                                                    <td class="cart-product-price"><h3><a href="#">Blue Shoes</a></h3></td>
                                                    <td><strong>$16.00</strong></td>
                                                    <td>
                                                        <span class="out-stock">No</span>
                                                    </td>
                                                    <td><a href="cart.html" class="btn add-to-cart"><i class="fa fa-shopping-cart"></i></a></td>
                                                    <td><a href="#"><i class="fa fa-trash remove"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default Wishlist