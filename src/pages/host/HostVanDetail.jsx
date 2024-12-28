import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { setIsActiveStyle } from "../../utils";

export default function HostVanDetail() {
  const [hostVanDetails, setHostVanDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setHostVanDetails(data.vans[0]));
  }, [id]);

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
          <Outlet context={[hostVanDetails]} />
        </div>
      )}
    </main>
  );
}
