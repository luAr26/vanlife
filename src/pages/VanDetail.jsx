import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function VanDetail() {
  const { id } = useParams();
  const [vanDetails, setVanDetails] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data.vans));
  }, [id]);

  return (
    <main className='main-vanDetail'>
      <div className='container'>
        <Link to='/vans' className='go-back-link'>
          &larr; Back to all vans
        </Link>
        {!vanDetails ? (
          <div>Loading...</div>
        ) : (
          <div className='van-details'>
            <div className='van-details-image'>
              <img src={vanDetails.imageUrl} alt={`${vanDetails.name} van`} />
            </div>
            <p className={`van-tag ${vanDetails.type}`}>{vanDetails.type}</p>

            <h2>{vanDetails.name}</h2>
            <p className='van-details-price'>
              <span>${vanDetails.price}</span>/day
            </p>
            <p className='van-details-description'>{vanDetails.description}</p>
            <button className='van-details-btn'>Rent this van</button>
          </div>
        )}
      </div>
    </main>
  );
}
