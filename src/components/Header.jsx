import { Link, NavLink } from "react-router-dom";

export default function Header() {
  function setIsActiveClass({ isActive }) {
    return isActive ? "is-active" : null;
  }

  return (
    <header>
      <div className='container'>
        <h1 className='logo'>
          <Link to='/'>#VANLIFE</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to='/host' className={setIsActiveClass}>
                Host
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={setIsActiveClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/vans' className={setIsActiveClass}>
                Vans
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
