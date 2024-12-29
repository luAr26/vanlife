import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { hostVanDetails } = useOutletContext();

  return (
    <>
      <div className='host-van-details-tab-content'>
        <img src={hostVanDetails.imageUrl} alt={hostVanDetails.description} />
      </div>
    </>
  );
}
