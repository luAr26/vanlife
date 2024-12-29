import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { hostVanDetails } = useOutletContext();
  return (
    <>
      <div className='host-van-details-tab-content'>
        <p>
          <strong>Name: </strong>
          {hostVanDetails.name}
        </p>
        <p>
          <strong>Category: </strong>
          {hostVanDetails.type[0].toUpperCase() + hostVanDetails.type.slice(1)}
        </p>
        <p>
          <strong>Description: </strong>
          {hostVanDetails.description}
        </p>
        <p>
          <strong>Visibility: </strong> Public
        </p>
      </div>
    </>
  );
}
