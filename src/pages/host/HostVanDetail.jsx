import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVanDetail, setIsActiveStyle } from "../../utils";

function loader({ params }) {
  return getHostVanDetail(params.id);
}

export default function HostVanDetail() {
  const hostVanDetails = useLoaderData();

  return (
    <main className='main-hostVanDetail'>
      <Link to='./..' className='go-back-link'>
        &larr; Back to all vans
      </Link>
      {!hostVanDetails ? (
        <div>Loading...</div>
      ) : (
        <div className='host-van-details'>
          <div className='host-van-details-info'>
            <img
              src={hostVanDetails.imageUrl}
              alt={`${hostVanDetails.name} van`}
            />
            <div>
              <p className={`van-tag ${hostVanDetails.type}`}>
                {hostVanDetails.type}
              </p>
              <h2>{hostVanDetails.name}</h2>
              <p className='host-van-price'>
                <span>${hostVanDetails.price}</span>
                /day
              </p>
            </div>
          </div>
          <div className='host-van-details-tabs'>
            <ul>
              <li>
                <NavLink to='.' end style={setIsActiveStyle}>
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink to='pricing' style={setIsActiveStyle}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to='photos' style={setIsActiveStyle}>
                  Photos
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet context={{ hostVanDetails }} />
        </div>
      )}
    </main>
  );
}

HostVanDetail.loader = loader;
