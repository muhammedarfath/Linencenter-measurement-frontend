import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from "../../actions/auth"; 
import CSRFToken from '../../components/CSRFToken';

function SignUp({ signUp, isAuthenticated }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    re_password: "",
  });
  const [accountCreated, setAccountCreated] = useState(false);

  const { email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signUp(email, password, re_password); 
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;
  else if (accountCreated) return <Navigate to="/login" />;

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
                Sign up for an account
              </h1>

              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                <CSRFToken />
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signUp })(SignUp);
