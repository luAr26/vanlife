import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { hostVanDetails } = useOutletContext();
  return (
    <>
      <div className='host-van-details-tab-content'>
        <p className='host-van-details-tab-content-price'>
          <span>${hostVanDetails.price.toFixed(2)}</span>/day
        </p>
      </div>
    </>
  );
}
