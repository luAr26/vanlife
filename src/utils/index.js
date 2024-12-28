export function setIsActiveStyle({ isActive }) {
  const isActiveStyle = {
    fontWeight: 500,
    textDecoration: "underline",
    color: "#161616",
  };
  return isActive ? isActiveStyle : null;
}
