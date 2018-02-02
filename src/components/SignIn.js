import React, { Component } from 'react'
import {Input, Row} from 'react-materialize'

class Checkout extends Component {
  
  constructor() {
    super()
    
  }

  render() {
    return (
      <div className="signIn">

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

      </div>
    );
  }

}



export default Checkout;