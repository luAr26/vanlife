import { useRouteError } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Error() {
  const { message, statusText, status } = useRouteError();

  return (
    <>
      <Header />
      <main className='main-error'>
        <div className='container'>
          <h2>
            {statusText} ({status})
          </h2>
          <p>{message}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
