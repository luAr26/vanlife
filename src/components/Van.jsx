import PropTypes from "prop-types";

export default function Van({ description, imageUrl, name, price, type }) {
  return (
    <div className='van-item'>
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
      <span className={`van-tag ${type}`}>{type}</span>
    </div>
  );
}

Van.propTypes = {
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
