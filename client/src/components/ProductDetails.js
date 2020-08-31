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
        const {name, price, rating, reviews, category, img} = this.state;
        return (
            <div className="prod-details-wrapper">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero velit dolorem fugiat aspernatur, tenetur adipisci vel accusamus aut dolore provident ullam. Obcaecati quibusdam molestias sequi nobis aspernatur reiciendis commodi quasi at fugit, ipsum minus iste dolores exercitationem illo incidunt enim distinctio facilis laudantium qui corrupti? Facere nemo veritatis earum obcaecati consequuntur cumque harum ratione consequatur, deleniti, dignissimos et praesentium dolorem quia! Sint animi dolorem ipsa assumenda officiis. Consequatur accusantium veniam aliquam. Magnam nemo harum deserunt iure id reprehenderit esse velit eaque explicabo enim, at iusto, voluptas nisi, molestiae voluptates itaque? Impedit quibusdam doloribus possimus hic enim minima rerum sequi? Minima!</p>
                <img src={img} />
                <p>{name}</p>
                <p>{price}</p>
                <p>{rating}</p>
                <p>{reviews}</p>
                
            </div>
        )
    }
}
