import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function HostVan({ name, price, id, imageUrl, description }) {
  return (
    <li>
      <Link
        to={id}
        aria-label={`View details for ${name} priced at $${price} per day`}
      >
        <img src={imageUrl} alt={description} />
        <div className='host-van-info'>
          <h3>{name}</h3>
          <p>${price}/day</p>
        </div>
      </Link>
    </li>
  );
}

HostVan.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
