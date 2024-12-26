import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className='main-about'>
      <div className='hero-image'>
        <div className='bg-overlay'></div>
        <img src='/images/about-hero.png' alt='Beautiful mountains image' />
      </div>
      <div className='container'>
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className='cta'>
          <h3>
            Your destination is waiting. <br />
            Your van is ready.
          </h3>
          <Link to='/vans' className='cta-btn'>
            Explore our vans
          </Link>
        </div>
      </div>
    </main>
  );
}
