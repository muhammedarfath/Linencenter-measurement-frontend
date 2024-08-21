import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/Auth/authSlice";
import { Toaster, toast } from "react-hot-toast";
import LoginForm from "./LoginForm";
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/login/",
        {
          email,
          password,
        }
      );
      const { access, refresh, username: userData, userId } = response.data;

      dispatch(
        loginSuccess({
          email: userData,
          userId: userId,
          token: access,
          refresh: refresh,
        })
      );
      toast.success("Login successful.")
      setSuccess("Login successful.");
      console.log("Login successful. UserId:", userId);
      console.log("Access token:", access);
      console.log("Refresh token:", refresh);

      navigate("/");
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;
        let errorMessage = "Login failed. Please check your credentials.";

        if (status === 400) {
          errorMessage = data.non_field_errors
            ? data.non_field_errors[0]
            : errorMessage;
        }
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        setError(
          "An error occurred. Please check your network connection and try again."
        );
        toast.error(
          "An error occurred. Please check your network connection and try again."
        );
      }
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-white"
          >
            <img
              className="w-28 h-28 mr-2 object-cover"
              src="https://linencentre.in/measurement/images/06.png"
              alt="logo"
            />
            Linen Centre
          </a>
          <div className="w-full bg-black rounded-lg shadow sm:max-w-md xl:p-0 border-gray-500 border">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                Sign in to your account
              </h1>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {success && (
                <div className="text-green-500 text-sm">{success}</div>
              )}
              <LoginForm
                handleLoginSubmit={handleLoginSubmit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            </div>
          </div>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </section>
    </div>
  );
}

export default Login;
