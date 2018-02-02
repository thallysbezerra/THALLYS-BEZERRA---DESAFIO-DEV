import React, { Component } from 'react'
import {Button, Icon, Input, Row} from 'react-materialize'
import PropTypes from 'prop-types'
import axios from 'axios'

import BookList from './BookList'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      texto: undefined,
      data: null,
      search: '',
      cart: 0,
      finalPrice: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({texto: event.target.value});
    this.setState({search: event.target.value})
  }

  handleClick = (e) => {
    e.preventDefault()
    return this.state.texto
    // e.preventDefault(); 
    // axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.texto}`)
    // .then((response) => {
    //   this.setState({data: response.data});
    //   console.log(response.data.items[3])
    // })
  }

  renderImage = (e) => {
    if(e.volumeInfo.imageLinks === undefined) {
      return 'https://goo.gl/rDT6Q3'
    } else {
      return e.volumeInfo.imageLinks.thumbnail
    }
  }

  renderPrice = (e) => {
    if(e.saleInfo.listPrice === undefined) {
      return 'without price'
    } else {
      return `R$ ${e.saleInfo.listPrice.amount}`
    }
  }

  render() {
    const { placeholder, buttonValue } = this.props;
    return (
        <div>
           <div className="shoppingCart">

          </div>

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
                    <BookList 
                      titulo={e.volumeInfo.title} 
                      descricao={e.volumeInfo.description} 
                      image={this.renderImage(e)}
                      price={this.renderPrice(e)}
                    /> 
                  )
                })
            }
          </Row>          

          <style jsx>{`
            form + .row {
              clear: both;
              margin-top: 20px;
            }
            button {
              float: right;
              margin-bottom: 40px;
            }
            .input-field.col label {
              left: 0;
            }
          `}</style>

        </div>
    );
  }
}

export default Form;