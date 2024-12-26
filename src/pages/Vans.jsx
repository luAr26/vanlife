import { useEffect, useState } from "react";
import Van from "../components/Van";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  return (
    <main className='main-van'>
      <div className='container'>
        <h2>Explore our van options</h2>
        {vans.length === 0 ? (
          <div>Loading data...</div>
        ) : (
          <div className='vans-container'>
            {vans.map((van) => (
              <Van key={van.id} {...van} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
