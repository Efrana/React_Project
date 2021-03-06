import React, { Component } from 'react';
class Checkout extends Component {
    render() {
        return (
            <div class="main-content-wrapper">
                <div class="checkout-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">

                                <div class="checkout-area ptb--60">
                                    <div class="row">
                                        <div class="col-lg-7">
                                            <div class="custom-title">
                                                <h2>Billing Details</h2>
                                            </div>
                                            <div class="checkout-form">
                                                <form action="#" class="form" _lpchecked="1">
                                                    <div class="form-row mb--30">
                                                        <div class="zeref-form-group col-md-6">
                                                            <input type="text" name="fname" class="zeref-input-form" placeholder="First Name *" />
                                                        </div>
                                                        <div class="zeref-form-group col-md-6">
                                                            <input type="text" name="lname" class="zeref-input-form" placeholder="Last Name *" />
                                                        </div>
                                                    </div>
                                                    <div class="form-row mb--30">
                                                        <div class="zeref-form-group col-md-12">
                                                            <input type="text" name="company" class="zeref-input-form" placeholder="Company" />
                                                        </div>
                                                    </div>
                                                    <div class="form-row mb--30">
                                                        <div class="zeref-form-group col-md-6">
                                                            <input type="text" name="city" class="zeref-input-form" placeholder="City *" />
                                                        </div>
                                                        <div class="zeref-form-group col-md-6">
                                                            <input type="email" name="bill_email" id="bill_email" class="zeref-input-form" placeholder="Email Address *" />
                                                        </div>
                                                    </div>
                                                    <div class="form-row mb--30">
                                                        <div class="zeref-form-group col-md-6">
                                                            <input type="text" name="zip" id="zip" class="zeref-input-form" placeholder="Zip Code *" />
                                                        </div>
                                                        <div class="zeref-form-group col-md-6">
                                                            <select class="country_select">
                                                                <option value="">---Please Select---</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Pakistan">Pakistan</option>
                                                                <option value="Germany">Germany</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="India">India</option>
                                                                <option value="Saudi">Saudi arabia</option>
                                                            </select><div class="nice-select country_select" tabindex="0"><span class="current">---Please Select---</span><ul class="list"><li data-value="" class="option selected">---Please Select---</li><li data-value="Bangladesh" class="option">Bangladesh</li><li data-value="Pakistan" class="option">Pakistan</li><li data-value="Germany" class="option">Germany</li><li data-value="Argentina" class="option">Argentina</li><li data-value="Belgium" class="option">Belgium</li><li data-value="Brazil" class="option">Brazil</li><li data-value="India" class="option">India</li><li data-value="Saudi" class="option">Saudi arabia</li></ul></div>
                                                        </div>
                                                    </div>
                                                    <div class="form-row mb--30">
                                                        <div class="zeref-form-group col-12">
                                                            <input type="text" name="streetAddress" class="zeref-input-form" placeholder="Address" />
                                                        </div>
                                                    </div>
                                                    <div class="form-row mb--30">
                                                        <div class="zeref-form-group col-12">
                                                            <input type="text" name="apartment" class="zeref-input-form" placeholder="Apartment, suite, unit etc. (optional)" />
                                                        </div>
                                                    </div>
                                                    <div class="form-row mb--30">
                                                        <div class="zeref-form-group col-md-6">
                                                            <input type="text" name="phone" class="zeref-input-form" placeholder="Telephone" />
                                                        </div>
                                                        <div class="zeref-form-group col-md-6">
                                                            <input type="text" name="fax" class="zeref-input-form" placeholder="Fax" />
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="zeref-form-group col-12">
                                                            <textarea class="zeref-input-form zeref-input-form--textarea" id="orderNotes" name="orderNotes" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 mt-md--30">
                                            <div class="custom-title">
                                                <h2>Your Order</h2>
                                            </div>
                                            <div class="order-details mb--30">
                                                <table class="order-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Luxury Bag</td>
                                                            <td>$38.00</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr class="cart-subtotal">
                                                            <td>Cart Subtotal</td>
                                                            <td>$56.00</td>
                                                        </tr>
                                                        <tr class="cart-subtotal">
                                                            <td>Shipping</td>
                                                            <td>$00.00</td>
                                                        </tr>
                                                        <tr class="order-total">
                                                            <td>Order Total</td>
                                                            <td>$56.00</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div class="checkout-payment">
                                                <form action="#" class="form">
                                                    <div class="form-row">
                                                        <div class="zeref-form-group col-12">
                                                            <div class="custom-radio custom-radio--2">
                                                                <input type="radio" name="paymentMethods" id="checkpayment" class="zeref-radio-input" />
                                                                <label for="checkpayment" class="zeref-radio-label"> <span></span> Direct Bank Transfer</label>
                                                            </div>
                                                            <p class="zeref-payment-info">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="zeref-form-group col-12">
                                                            <div class="custom-radio">
                                                                <input type="radio" name="paymentMethods" id="cashdelivery" class="zeref-radio-input" />
                                                                <label for="cashdelivery" class="zeref-radio-label"> <span></span> Cheque Payment</label>
                                                            </div>
                                                            <p class="zeref-payment-info">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="zeref-form-group col-12">
                                                            <div class="custom-radio custom-radio--2">
                                                                <input type="radio" name="paymentMethods" id="paypal" class="zeref-radio-input" />
                                                                <label for="paypal" class="zeref-radio-label"> <span></span> PayPal Express Checkout</label>
                                                            </div>
                                                            <p class="zeref-payment-info">Pay via PayPal. You can pay with your credit card if you don’t have a PayPal account.</p>
                                                        </div>
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="zeref-form-group col-12">
                                                            <button type="submit" class="btn btn-style-3 btn--fullwidth">Place Order</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
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
export default Checkout