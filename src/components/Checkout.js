import React, { Component } from 'react'
import {Input, Icon, Row, Tab, Tabs} from 'react-materialize'

class Checkout extends Component {
  
  constructor() {
    super()
    
  }

  render() {
    return (
      <div className="checkout">

        <h2>Personal information</h2>
        <Row>
          <Input s={12} m={6} label="Full name" />
          <Input s={12} m={6} label="E-mail" />
        </Row>
          
        <h2>Adress</h2>
        <Row>
          <Input s={12} label="Adress line 1" placeholder="Street adress, P.O. box, company name, c/o, etc."/>
          <Input s={12} label="Adress line 2" placeholder="Apartment, suite, unit, building, floor, etc." />
          <Input s={12} m={4} label="City" />
          <Input s={12} m={4} label="State" />
          <Input s={12} m={4} label="Country" />
          <Input s={12} m={4} label="ZIP/Postal code" />
          <Input s={12} m={8} label="Attention" />
        </Row>

        <h2>Payment</h2>
        <p>Select the payment method.</p>
        <Tabs className='paymentMethod z-depth-1'>
          <Tab title={<div><Icon>credit_card</Icon><div>Credit Card</div></div>} tabWidth="6">
          <Input s={12} label="Card number" maxlength="16" />
          <Input s={12} label="Name on card" />
          <Input s={6} label="Expiration date" placeholder="MM/YY" maxlength="5" />
          <Input s={6} label="Security code" maxlength="3" />
          </Tab>
          <Tab title={<div><Icon>attach_money</Icon><div>Boleto (Valid only in Brazil)</div></div>} tabWidth="6">
            Test 2
          </Tab>
        </Tabs>
       
        <style jsx>{`
        h2 {
          color: #26a69a;
          font-size: 38px;
        }
        .paymentMethod,
        .paymentMethod .tab {
          height: auto;
        }
        .paymentMethod i {
          display: block;
          font-size: 5em;
        }
        `}</style>

      </div>
    );
  }

}



export default Checkout;