import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className='container'>
        <h1 className='logo'>
          <Link to='/'>#VANLIFE</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/vans'>Vans</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
