import { shape, number, string, func } from 'prop-types';

export default function Card({
  product,
  addFunction,
  rmFunction,
  onChange,
}) {
  return (

    <div>
      <p
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { product.price.replace(/\./, ',') }
      </p>

      <img
        alt={ product.name }
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        height="150px"
        src={ product.urlImage }
      />

      <div>
        <p
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }
        </p>

        <button
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
          type="button"
          onClick={ addFunction }
        >
          +
        </button>

        <input
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
          value={ product.quantity }
          onChange={ onChange }
        />

        <button
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          type="button"
          onClick={ rmFunction }
        >
          -
        </button>
      </div>
    </div>

  );
}

Card.propTypes = {
  addFunction: func.isRequired,
  rmFunction: func.isRequired,
  onChange: func.isRequired,
  product: shape({
    id: number,
    name: string,
    urlImage: string,
    price: string,
    quantity: number,
  }).isRequired,
};
