import React, { Component } from 'react'
import axios from 'axios'
import Payment from './components/Payment'
import BookList from './components/BookList'
import SignIn from './components/SignIn'
import {Button, Card, CardTitle, Col, Icon, Input, Modal, Row, Table} from 'react-materialize'

class App extends Component {
  constructor() {
    super()
    this.state = {
      texto: undefined,
      data: null,
      search: '',
      cart: null,
      totalPrice: null,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({texto: event.target.value});
    this.setState({search: event.target.value})
  }

  handleClick = (e) => {
    e.preventDefault(); 
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.texto}`)
    .then((response) => {
      this.setState({data: response.data});
    })
  }

  renderImage = (e) => {
    if(e.volumeInfo.imageLinks === undefined) {
      return 'https://fakeimg.pl/128x192/?text=No%20image'
    } else {
      return e.volumeInfo.imageLinks.thumbnail
    }
  }

  renderPrice = (e) => {
    if(e.saleInfo.listPrice === undefined) {
      return <div className="outOfStock">Out of stock</div>
    } else {
      return `US$ ${e.saleInfo.listPrice.amount}`
    }
  } 

  render() {
    return (
      <div className="container">
        <div>
          <h1><Icon medium>local_library</Icon>Book Store</h1>
          <Modal
            fixedFooter
            trigger={<Button large waves='light'>Sign in<Icon left>account_circle</Icon></Button>}
            actions={<Button waves='light'>Create account<Icon left>check</Icon></Button>}
          >
          <SignIn></SignIn>
          </Modal>
        </div>

        <div>
          <form>
            <Input name="search" value={this.state.email} label="Which book are you looking for?" value={this.state.value} onChange={ this.handleChange } required></Input>   
            <Button floating large waves='light' icon='search' onClick={ this.handleClick } disabled={!this.state.search}  />
          </form>
            <Row>
              {
                this.state.data !== null &&  
                  this.state.data.items.map((e) => {
                    console.log(e.volumeInfo.imageLinks === undefined)
                    return (
                        <Col s={12} m={6} l={4}>
                          <Card header={<CardTitle reveal image={this.renderImage(e)} waves='light' className="bookList"/>}
                            title={e.volumeInfo.title}
                            reveal={<p>{e.volumeInfo.description}</p>}>
                            <div className="price">{this.renderPrice(e)}
                            <Modal
                              actions=''
                              trigger={<Button large waves='light'>Order<Icon left>shopping_cart</Icon></Button>}
                            >
                            <Payment/>
                            </Modal>
                            </div>
                          </Card>
                      </Col>
                    )
                  })
                }
            </Row>
        </div>   

      </div>
    ); 
  }
}

export default App;
