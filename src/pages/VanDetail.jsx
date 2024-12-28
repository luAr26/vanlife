import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function VanDetail() {
  const { id } = useParams();
  const [vanDetails, setVanDetails] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data.vans));
  }, [id]);

  const search = location.state?.search || "";
  const backLinkText = search
    ? `Back to ${search.split("=")[1]} vans`
    : "Back to all vans";

  return (
    <main className='main-vanDetail'>
      <div className='container'>
        <Link to={`..?${search}`} relative='path' className='go-back-link'>
          &larr; {backLinkText}
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
