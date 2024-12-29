import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "../server";
import Error from "./components/Error";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/host/Dashboard";
import HostLayout from "./pages/host/HostLayout";
import HostVanDetail from "./pages/host/HostVanDetail";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanPricing from "./pages/host/HostVanPricing";
import HostVans from "./pages/host/HostVans";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import NotFound from "./pages/NotFound";
import VanDetail from "./pages/VanDetail";
import Vans from "./pages/Vans";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='vans' element={<Vans />} loader={Vans.loader}></Route>
      <Route
        path='vans/:id'
        element={<VanDetail />}
        loader={VanDetail.loader}
      ></Route>
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='vans' element={<HostVans />} loader={HostVans.loader} />
        <Route
          path='vans/:id'
          element={<HostVanDetail />}
          loader={HostVanDetail.loader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path='pricing' element={<HostVanPricing />} />
          <Route path='photos' element={<HostVanPhotos />} />
        </Route>
        <Route path='reviews' element={<Reviews />} />
      </Route>
      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
