import { useEffect, useState } from "react";
import HostVan from "../../components/HostVan";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans);
        setHostVans(data.vans);
      });
  }, []);

  return (
    <>
      <h2>Your listed vans</h2>
      {hostVans.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ul className='host-vans'>
          {hostVans.map((van) => (
            <HostVan key={van.id} {...van} />
          ))}
        </ul>
      )}
    </>
  );
}
