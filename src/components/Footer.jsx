export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className='container'>
        <p>&copy; {year} #VANLIFE</p>
      </div>
    </footer>
  );
}
