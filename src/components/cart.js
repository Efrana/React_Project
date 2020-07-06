import React, { Component } from 'react';
class Cart extends Component{
    render(){
        return(
            <div class="main-content-wrapper">
            <div class="cart-area ptb--60">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
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
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                        <th>remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <a href="single-product.html"><img src="assets/img/fashion/product/1.jpg" alt="product"/></a>
                                                        </td>
                                                        <td class="cart-product-price"><h3><a href="#">Red Bag</a></h3></td>
                                                        <td><strong>$16.00</strong></td>
                                                        <td>
                                                            <div class="quantity">
                                                                <input type="number" class="quantity-input" name="qty" id="qty1" value="1"/>
                                                            <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div></div>
                                                        </td>
                                                        <td><strong>$16.00</strong></td>
                                                        <td><a href="#"><i class="fa fa-trash remove"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="single-product.html"><img src="assets/img/fashion/product/12.jpg" alt="product"/></a>
                                                        </td>
                                                        <td class="cart-product-price"><h3><a href="#">Blue shoe</a></h3></td>
                                                        <td><strong>$16.00</strong></td>
                                                        <td>
                                                            <div class="quantity">
                                                                <input type="number" class="quantity-input" name="qty" id="qty2" value="1"/>
                                                            <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div></div>
                                                        </td>
                                                        <td><strong>$16.00</strong></td>
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
            </div>
        </div>
        )
    }
}
export default Cart