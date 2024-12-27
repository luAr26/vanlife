import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  function setIsActiveStyle({ isActive }) {
    const isActiveStyle = {
      fontWeight: 500,
      textDecoration: "underline",
      color: "#161616",
    };
    return isActive ? isActiveStyle : null;
  }

  return (
    <main>
      <div className='container'>
        <nav className='dashboard-nav'>
          <NavLink to='/host' style={setIsActiveStyle} end>
            Dashboard
          </NavLink>
          <NavLink to='/host/income' style={setIsActiveStyle}>
            Income
          </NavLink>
          <NavLink to='/host/vans' style={setIsActiveStyle}>
            Vans
          </NavLink>
          <NavLink to='/host/reviews' style={setIsActiveStyle}>
            Reviews
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </main>
  );
}
