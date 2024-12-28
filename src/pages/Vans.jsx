import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Van from "../components/Van";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const filteredVans =
    vans.length === 0 || !typeFilter
      ? vans
      : vans.filter((van) => van.type == typeFilter);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <main className='main-van'>
      <div className='container'>
        <h2>Explore our van options</h2>
        {filteredVans.length === 0 ? (
          <div>No data to show...</div>
        ) : (
          <>
            <div className='van-list-filter-buttons'>
              {[...new Set(vans.map((filteredVan) => filteredVan.type))].map(
                (filter, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilterChange("type", filter)}
                    className={clsx("van-type", filter, {
                      ["is-active"]: searchParams.get("type") === filter,
                    })}
                  >
                    {filter[0].toUpperCase() + filter.slice(1)}
                  </button>
                )
              )}
              {typeFilter && (
                <button
                  onClick={() => setSearchParams({})}
                  className='clear-filters'
                >
                  Clear filters
                </button>
              )}
            </div>
            <div className='vans-container'>
              {filteredVans.map((van) => (
                <Van key={van.id} {...van} search={searchParams.toString()} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
