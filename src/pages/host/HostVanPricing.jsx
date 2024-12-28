import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const [hostVanDetails] = useOutletContext();
  return (
    <>
      <div className='host-van-details-tab-content'>
        <p>${hostVanDetails.price}/day</p>
      </div>
    </>
  );
}
