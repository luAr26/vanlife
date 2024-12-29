import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className='main-not-found'>
      <div className='container'>
        <h2>Sorry, the page you were looking for was not found.</h2>
        <Link to='/' className='return-home-btn'>
          Return home
        </Link>
      </div>
    </main>
  );
}
