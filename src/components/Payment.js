import React, { Component } from 'react'
import {Collapsible, CollapsibleItem, Button, Col, Input, Icon, Row} from 'react-materialize'

class Checkout extends Component {
  
  constructor() {
    super()
    
  }

  render() {
    return (
      <div className="payment">

        <h2>Payment</h2>
        <p>Select the payment method.</p>

        <Row className="paymentMethod">
            <Col s={12} m={6}>
                <Collapsible>
                <CollapsibleItem header='Credit Card' icon='credit_card'>
                <Row>
                    <Input s={12} label="Card number" maxlength="16" />
                    <Input s={12} label="Name on card" />
                    <Input s={6} label="Expiration date" maxlength="5" />
                    <Input s={6} label="Security code" maxlength="3" />
                </Row>
                <Row>
                <Button large className="right green" waves='light'>Confirm payment<Icon left>check</Icon></Button>
                </Row>
                </CollapsibleItem>
                </Collapsible>
            </Col>
            <Col s={12} m={6}>
                <Collapsible>
                <CollapsibleItem header='Boleto (Valid only in Brazil)' icon='monetization_on'>
                <Row>
                    <p>Must be paid within 5 business days.</p>
                    <a href="files/boleto.pdf" large className="btn waves-effect waves-light btn-large" waves='light' target="_blank">Print<Icon left>print</Icon></a>
                </Row>
                </CollapsibleItem>
                </Collapsible>
            </Col>
        </Row>

    </div>

    );
  }

}



export default Checkout;