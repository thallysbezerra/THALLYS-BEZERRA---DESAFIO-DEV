import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Card, CardTitle, Col, Modal, Button, Icon, Table} from 'react-materialize'

class BookList extends Component {
  constructor() {
    super()
    this.state = {
      infoBook: null,
    }
  }

  // addBookOnCart = () => {
  //   this.setState({
  //     infoBook: this.props
  //   })  
  //   console.log(this.props)
  // }

  render() {
    const { titulo, descricao, image, price, teste } = this.props;
    
    return (
      <div>
        <Col s={12} m={6} l={4}>
          <Card className='custom-card' header={<CardTitle reveal image={image} waves='light' className="bookList"/>}
            title={this.state.titulo}
            reveal={<p>{descricao}</p>}>
            <div className="price"><span>{price}</span></div>
            <button className="waves-effect waves-light btn custon-btn" href="#" onClick={teste}><i class="material-icons right">shopping_cart</i>Order</button>
          </Card>

          <style jsx>{`
            img {
              max-width: 128px;
            }
            .bookList {
              padding-top: 30px;
            }
            .bookList img {
              border: 1px solid #eee;
              border-radius: 50%;
              display: block;
              height: 128px;
              margin: 0 auto;
              object-fit: cover;
              width: 128px;
            }
            .bookList ~ .card-content .card-title {
              display: -webkit-box;
              font-size: 18px;
              height: 45px;
              line-height: normal;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .bookList ~ .card-reveal .card-title {
              font-size: 18px;
            }
            .bookList ~ .card-content .card-title i {
              bottom: 25px;
              position: absolute;
              right: 25px;
            }
            .price {
              color: #ee6e73;
              font-size: 24px;
              margin-bottom: 15px;
            }
            .custom-card {
              overflow: auto;
            }
            .custon-btn {
              margin-bottom: 20px;
              float: left;
            }
            h1 {
              display: inline-block;
              font-size: 58px;
              margin-bottom: 100px;
            }
          `}</style>
        </Col>   
      </div>
    );
  }
}

BookList.prototypes = {
 //colocar aqui os tipos de props.
}

BookList.defaultProps = {
  titulo: 'Titulo do livro',
  descricao: 'Descrição',
  image: 'https://fakeimg.pl/128x192/?text=No%20image'
}

export default BookList;