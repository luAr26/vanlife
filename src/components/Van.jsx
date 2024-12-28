import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Van({
  id,
  description,
  imageUrl,
  name,
  price,
  type,
  search,
}) {
  return (
    <div className='van-item'>
      <Link
        to={id}
        aria-label={`View details for ${name} priced at $${price} per day`}
        state={{ search }}
      >
        <div className='van-image'>
          <img src={imageUrl} alt={description} />
        </div>
        <div className='van-info'>
          <h3>{name}</h3>
          <p>
            ${price}
            <span>/day</span>
          </p>
        </div>
      </Link>
      <span className={`van-tag ${type}`}>{type}</span>
    </div>
  );
}

Van.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  search: PropTypes.string,
};
