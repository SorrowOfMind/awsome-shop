import React, { Component } from 'react';
import products from '../data/products';

export default class ProductDetails extends Component {
    state = {
        name: '',
        price: 0,
        rating: 0,
        reviews: 0,
        category: null,
        img: ''
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const product = products.find(product => product.id == id);
        const {name, price, rating, reviews, category, img} = product;
        this.setState({
            name,
            price,
            rating,
            reviews,
            category,
            img
        }, () => console.log(this.state))
    }
    render() {
        return (
            <div>
           
            </div>
        )
    }
}
