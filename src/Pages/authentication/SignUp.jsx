import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");
  const navigate = useNavigate();

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !re_password) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== re_password) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/sign_up/",
        {
          email,
          password,
          re_password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("User successfully registered.");
        setEmail("");
        setPassword("");
        setRePassword("");
        navigate("/login");
      } else {
        toast.error("Signup request failed: " + response.statusText);
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;

        if (status === 400) {
          let errorMessage = "";
          if (data.email) {
            errorMessage = data.email[0];
          } else if (data.non_field_errors) {
            errorMessage = data.non_field_errors[0];
          } else {
            errorMessage = "An error occurred. Please try again later.";
          }

          toast.error(errorMessage);
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      } else {
        toast.error(
          "An error occurred. Please check your network connection and try again."
        );
      }
    }
  };

  const handleLoginLinkClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <section>
      <Toaster position="top-right" reverseOrder={false} />
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
                Sign up for an account
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSignupSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black border border-gray-300 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-black border border-gray-300 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="re_password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Re-enter Password
                  </label>
                  <input
                    type="password"
                    name="re_password"
                    id="re_password"
                    value={re_password}
                    onChange={(e) => setRePassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-black border border-gray-300 text-white rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
              </form>
              <div className="text-center mt-4">
                <button
                  onClick={handleLoginLinkClick}
                  className="text-blue-500 hover:underline"
                >
                  Already have an account? Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
