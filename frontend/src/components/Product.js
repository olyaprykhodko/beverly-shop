import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  return (
    <>
      <Card key={product.slug}>
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Rating
              rating={product.rating}
              numReviews={product.numRewies}
            ></Rating>
            <Card.Text>{product.price}€</Card.Text>
            <Button>Add to cart</Button>
          </Card.Body>
        </Link>
      </Card>
    </>
  );
}

export default Product;
