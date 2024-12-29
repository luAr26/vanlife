export function setIsActiveStyle({ isActive }) {
  const isActiveStyle = {
    fontWeight: 500,
    textDecoration: "underline",
    color: "#161616",
  };
  return isActive ? isActiveStyle : null;
}

// Fetch data
export async function getVans() {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans.",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}
