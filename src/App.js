import React, { Component } from 'react'
import Form from './components/Form'
import Checkout from './components/Checkout'
import {Button, Icon, Modal, Table} from 'react-materialize'

class App extends Component {
  
  constructor() {
    super()
    
  }

  render() {
    return (
      <div className="container">

        <div>

          <h1><Icon medium>local_library</Icon>Book Store</h1>

          <div className="shoppingCart">

            <Modal
              header='Your shopping cart'
              fixedFooter
              trigger={<Button large waves='light'>Cart<Icon left>shopping_cart</Icon></Button>}>
              
              <Table>
                <thead>
                  <tr>
                    <th data-field="title">Book</th>
                    <th data-field="description">Description</th>
                    <th data-field="price">Price</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Livro</td>
                    <td>Descrição</td>
                    <td>Preço</td>
                  </tr>
                </tbody>
              </Table>

            </Modal>

          </div>

        </div>

        <div>
          <Form/>
          <Checkout/>
        </div>

        <style jsx>{`
          h1 {
            display: inline-block;
            font-size: 58px;
            margin-bottom: 100px;
          }
          h1 i {
            color: #26a69a;
            margin-right: 15px;
          }
          .shoppingCart {
            float: right;
            margin-top: 38px;
          }
        `}</style>

      </div>
    );
  }
}

export default App;
