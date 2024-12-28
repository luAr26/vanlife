import { NavLink, Outlet } from "react-router-dom";
import { setIsActiveStyle } from "../../utils/index";

export default function HostLayout() {
  return (
    <main className='main-host'>
      <div className='container'>
        <nav className='dashboard-nav'>
          <NavLink to='.' style={setIsActiveStyle} end>
            Dashboard
          </NavLink>
          <NavLink to='income' style={setIsActiveStyle}>
            Income
          </NavLink>
          <NavLink to='vans' style={setIsActiveStyle}>
            Vans
          </NavLink>
          <NavLink to='reviews' style={setIsActiveStyle}>
            Reviews
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </main>
  );
}
