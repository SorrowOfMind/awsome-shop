import React, {useState} from 'react';
import products from '../data/products';
import sloth from '../assets/sloth.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Main = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <>
        <h2 className="product-category container">Category 1</h2>
        <div className="main-grid container">
            {products.map(product => (
                <Card className="card">
                <div className={product.name} key={product.id}>
                    <img src={sloth} className="product-image"/>
                </div>
                <CardContent className="card-content">
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{product.price}$</p>
                        <div className="product-actions">
                            <span>{product.rating} Stars</span> <span>{product.reviews} Reviews</span>
                        </div>
                    </Typography>
                </CardContent>
                </Card>
            ))}
        </div>
        </>
    )
}

export default Main;
