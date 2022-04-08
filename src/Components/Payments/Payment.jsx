import React from 'react';
import PaymentNavbar from './PaymentNavbar.jsx';
import './Payment.css';
import { BsPaypal,BsLock } from "react-icons/bs";

const Payment = () => {
  return (
    <>
    
    <PaymentNavbar/> <br /><br /><br /><br />
    <div className="pay-start-heading">
        <div className="title-pay">Complete your monthly payment to Pratik Borade</div>
        <br/> <br />
       
    </div>
    <div className="main_payment_page">
          <div className="left_payment_box">
            <div className="content_to_pay">
                <div className='left_heading_1'>Choose what <br /> you pay</div> 

                <div class="dollar_currency">$</div>
                <input type="text" name="" id="input_1_payment"  max="1000"/>
            </div>
            <br /><br />


            <div className="content_card_pay">
              <div className="left_heading_1">Payment <br /> details</div>
              <div className='card_payment_form'>
                <div className='card_payment_heading_1'>
                    <input type="radio" name="" class="radio_button_1" />
                    <div className='left_heading_1'>CARD</div>
                </div>
                <br />
                <form action="">
                  <label htmlFor="">Name</label> <br />
                  <input type="text" name="" className="input_for_text" placeholder='Name on Card' />
                  <br /> <br />
                  <label htmlFor="">Card Number</label> 
                  <input type="text" name="" className="input_for_text" placeholder='Credit Card Number' />
                  <br /> <br/>
                  
                  <div className="for_cvv_input">
                    <div className="for_expiration">
                    <label htmlFor="">Expiration</label> <br />
                    <input type="text" name="" className="input_for_text" placeholder='09/29' />

                    </div>
                    <div className="for_cvv">
                    <label htmlFor="">CVV</label> <br />
                    <input type="text" name="" className="input_for_text" placeholder='123' />
                    </div>
                    <div className="for_postal_code">
                    <label htmlFor="">Postal Code</label> <br />
                    <input type="text" name="" className="input_for_text" placeholder='12345' />
                    </div>
                   

                  </div>
                  <div className="pay_with_card">
                      <button disabled="">Pay with card</button>
                    </div>
                </form>
                <div className="for_paypal">
                <input type="radio" name="" class="radio_button_2" /><br />
                   <button>Pay using Paypal <BsPaypal color="blue"/></button>
                </div>
                <div className="secure_checkout">
                <BsLock/> &nbsp;
                Secure checkout

                </div>


              </div>
            </div>
          </div>
          <div className="right_payment_box">
            <div className="left_heading_1">SUMMARY</div> <br />
            <div className="left_heading_1">Custom Pledge  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; USD $5.00*</div>
            <br /><hr /> <br />
            <div className="left_heading_1">May 1st Charge  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; USD $5.00*</div>
            <br /><hr />
            <div className="left_heading_1">Currency &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; USD</div>
            <div className="change_right">Change</div>
            <br /><hr />
            <div className="main_content_right">
              <div className="left_heading_1">
              Renews automatically on May 1 at 12am Pacific Time
              </div> <br />
              <div className="right_para_1">
              You can cancel auto-renew at any time or edit your payment. By making this payment, you agree to <br/>Patreon's Terms of Use.
              </div> <br />
              <div className="right_para_2">
              *Depending on your location your bank might charge an additional foreign transaction fee for your membership to<br /> this Creator. 
              </div>
            </div>
            <hr />
            <div className='right_para_3'>
            Questions? Visit our <u>Help Center</u>
            </div>

           
          </div>
    </div>
    <div className="end_line_page">Patreon does not issue refunds on behalf of creators.<u>Learn more.</u></div>
    </>
  )
}

export default Payment