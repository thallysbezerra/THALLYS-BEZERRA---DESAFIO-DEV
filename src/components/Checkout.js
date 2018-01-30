import React, { Component } from 'react'
import {Collapsible, CollapsibleItem, Button, Col, Input, Icon, Row} from 'react-materialize'

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

        <Row className="paymentMethod">
          <Col s={6}>
            <Collapsible>
              <CollapsibleItem header='Credit Card' icon='credit_card'>
              <Row>
                <Input s={12} label="Card number" maxlength="16" />
                <Input s={12} label="Name on card" />
                <Input s={6} label="Expiration date" placeholder="MM/YY" maxlength="5" />
                <Input s={6} label="Security code" placeholder="Three numbers behind the card" maxlength="3" />
              </Row>
            <Row>
              <Button large className="right green" waves='light'>Confirm payment<Icon left>check</Icon></Button>
            </Row>
              </CollapsibleItem>
            </Collapsible>
          </Col>
          <Col s={6}>
            <Collapsible>
              <CollapsibleItem header='Boleto (Valid only in Brazil)' icon='monetization_on'>
              <Row>
                <p>Must be paid within 5 business days.</p>
                <Button large className="right green" waves='light'>Print<Icon left>print</Icon></Button>
              </Row>
              </CollapsibleItem>
            </Collapsible>
          </Col>
        </Row>
       
        <style jsx>{`
        h2 {
          color: #26a69a;
          font-size: 38px;
        }
        .paymentMethod button {
          width: 100%;
        }
        `}</style>

      </div>
    );
  }

}



export default Checkout;