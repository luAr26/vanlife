import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../utils";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/host";

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    async function getLoggedInUser() {
      try {
        await loginUser(loginFormData);
        setError(null);
        localStorage.setItem("loggedIn", true);
        navigate(from, { replace: true });
      } catch (err) {
        setError(err);
      } finally {
        setStatus("idle");
      }
    }
    getLoggedInUser();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prevLoginFormData) => {
      return { ...prevLoginFormData, [name]: value };
    });
  }

  return (
    <main>
      <div className='container'>
        {location.state?.message && <p>{location.state.message}</p>}
        <h2>Sign in to your account</h2>
        {error !== null && <p>{error?.message}</p>}
        <form action='' onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            value={loginFormData.email}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            value={loginFormData.password}
            onChange={handleChange}
          />
          <button disabled={status === "submitting"}>
            {status === "idle" ? "Log in" : "Submitting"}
          </button>
        </form>
      </div>
    </main>
  );
}
