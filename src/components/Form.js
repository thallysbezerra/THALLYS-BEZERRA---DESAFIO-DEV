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
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getInitialState() {
    return {search: ''}
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

  render() {
    {console.log(this.state.data)}
    const { placeholder, buttonValue } = this.props;
    return (
        <div>

          <form>
            <Input name="search" value={this.state.email} label="Which book are you looking for?" value={this.state.value} onChange={ this.handleChange } required></Input>   
            <Button floating large waves='light' icon='search' onClick={ this.handleClick } disabled={!this.state.search}  />
          </form>
          
          <Row>
            {
              this.state.data !== null &&  
                this.state.data.items.map((e) => {
                  return (
                    <BookList 
                      titulo={e.volumeInfo.title} 
                      descricao={e.volumeInfo.description} 
                      image={e.volumeInfo.imageLinks.thumbnail}
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