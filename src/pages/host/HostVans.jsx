import { useEffect, useState } from "react";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  return (
    <>
      {hostVans.length === 0 ? (
        <div>Loading...</div>
      ) : (
        hostVans.map((van) => <div key={van.id}>{van.name}</div>)
      )}
    </>
  );
}
