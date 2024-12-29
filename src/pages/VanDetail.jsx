import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getVanDetail } from "../utils";

function loader({ params }) {
  return getVanDetail(params.id);
}

export default function VanDetail() {
  // const { id } = useParams();
  // const [vanDetails, setVanDetails] = useState(null);
  const vanDetails = useLoaderData();
  const location = useLocation();
  // console.log(location);

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

VanDetail.loader = loader;
