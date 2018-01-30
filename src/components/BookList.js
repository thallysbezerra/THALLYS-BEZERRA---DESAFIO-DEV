import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Card, CardTitle, Col} from 'react-materialize'

class BookList extends Component {
  constructor() {
    super()
    this.state = {
      texto: undefined,
    }

  }

  render() {
    const { titulo, descricao, image } = this.props;

    return (

        <Col s={12} m={6} l={4}>

          <Card header={<CardTitle reveal image={image} waves='light' className="bookList"/>}
            title={titulo}
            reveal={<p>{descricao}</p>}>
            <div className="price">US$<span>18.00</span></div>
            <a className="waves-effect waves-light btn" href="#"><i class="material-icons right">shopping_cart</i>Order</a>
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
          `}</style>

        </Col>   

    );
  }
}

BookList.prototypes = {
 
}

BookList.defaultProps = {
  titulo: 'Titulo do livro',
  descricao: 'Descrição',
  image: 'https://fakeimg.pl/128x192/?text=No%20image'
}

export default BookList;