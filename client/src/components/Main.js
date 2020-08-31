import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import products from '../data/products';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Main = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const currentCategory = useSelector(state => state.category.currentCategory);
    return (
        <>
        <h2 className="product-category container">Category {currentCategory}</h2>
        <div className="main-grid container">
            {products.filter(prod => prod.category === currentCategory).map(product => (
                <Link to={`/products/${product.id}`} key={product.id}><Card className="card">
                <div className={product.name}>
                    <img src={product.img} className="product-image"/>
                </div>
                <CardContent className="card-content">
                    <Typography variant="body2" color="textSecondary" component="div">
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{product.price}$</p>
                        <div className="product-actions">
                            <span>{product.rating} Stars</span> <span>{product.reviews} Reviews</span>
                        </div>
                    </Typography>
                </CardContent>
                </Card>
                </Link>
            ))}
        </div>
        </>
    )
}

export default Main;
