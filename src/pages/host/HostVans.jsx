import { useLoaderData } from "react-router-dom";
import HostVan from "../../components/HostVan";
import { getHostVans } from "../../utils";

function loader() {
  return getHostVans();
}

export default function HostVans() {
  const hostVans = useLoaderData();
  return (
    <>
      <h2>Your listed vans</h2>
      {hostVans.length === 0 ? (
        <div>No data to show...</div>
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

HostVans.loader = loader;
