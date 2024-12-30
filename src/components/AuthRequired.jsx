import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const authenticated = localStorage.getItem("loggedIn");
  const location = useLocation();

  if (!authenticated) {
    return (
      <Navigate
        to='login'
        state={{ message: "You must login first", from: location }}
        replace
      />
    );
  }

  return <Outlet />;
}
