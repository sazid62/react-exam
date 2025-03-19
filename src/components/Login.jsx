import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const Navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("allUser") || "[]");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });

  const bugDiv = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
    bugDiv.current.innerText = ""; // Clear error message when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, repeatPassword } = formData;

    if (password !== repeatPassword) {
      bugDiv.current.innerText = "Passwords do not match.";
      return;
    }

    if (
      data.findIndex((singleData) => singleData.username === username) === -1
    ) {
      bugDiv.current.innerText = "Username Not Found";
      return;
    }

    if (
      data.findIndex(
        (singleData) =>
          singleData.username === username && singleData.password === password
      ) === -1
    ) {
      bugDiv.current.innerText = "You gave wrong Pass Boss";
      return;
    }
    bugDiv.current.innerHTML =
      '<div class="spinner-border text-primary" role="status"><span class="sr-only"> </span></div>';

    setTimeout(() => {
      // bugDiv.current.innerText = "Passwords matched successfully!"; // Display success message after 2 seconds
      localStorage.setItem(
        "currentUser",
        JSON.stringify(data.find((per) => per.username === username))
      );
      Navigate("/success"); // Redirect to home page
    }, 2000);

    console.log("Form submitted with:", formData);
  };

  return (
    <section className="_social_login_wrapper _layout_main_wrapper">
      <div className="_shape_one">
        <img src="assets/images/shape1.svg" alt="" className="_shape_img" />
        <img
          src="assets/images/dark_shape.svg"
          alt=""
          className="_dark_shape"
        />
      </div>
      <div className="_shape_two">
        <img src="assets/images/shape2.svg" alt="" className="_shape_img" />
        <img
          src="assets/images/dark_shape1.svg"
          alt=""
          className="_dark_shape _dark_shape_opacity"
        />
      </div>
      <div className="_shape_three">
        <img src="assets/images/shape3.svg" alt="" className="_shape_img" />
        <img
          src="assets/images/dark_shape2.svg"
          alt=""
          className="_dark_shape _dark_shape_opacity"
        />
      </div>
      <div className="_social_login_wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="_social_login_left">
                <div className="_social_login_left_image">
                  <img
                    src="assets/images/login.png"
                    alt="Image"
                    className="_left_img"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="_social_login_content">
                <div className="_social_login_left_logo _mar_b28">
                  <img
                    src="assets/images/logo.svg"
                    alt="Image"
                    className="_left_logo"
                  />
                </div>
                <p className="_social_login_content_para _mar_b8">
                  Welcome back
                </p>
                <h4 className="_social_login_content_title _titl4 _mar_b50">
                  Login to your account
                </h4>
                <button
                  type="button"
                  className="_social_login_content_btn _mar_b40"
                >
                  <img
                    src="assets/images/google.svg"
                    alt="Image"
                    className="_google_img"
                  />
                  <span>Or sign-in with google</span>
                </button>
                <div className="_social_login_content_bottom_txt _mar_b40">
                  <span>Or</span>
                </div>
                <form className="_social_login_form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="_social_login_form_input _mar_b14">
                        <label className="_social_login_label _mar_b8">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          className="form-control _social_login_input"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="_social_login_form_input _mar_b14">
                        <label className="_social_login_label _mar_b8">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="form-control _social_login_input"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div className="_social_login_form_input _mar_b14">
                        <label className="_social_login_label _mar_b8">
                          Repeat Password
                        </label>
                        <input
                          type="password"
                          required={true}
                          name="repeatPassword"
                          value={formData.repeatPassword}
                          onChange={handleInputChange}
                          className="form-control _social_login_input"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                      <div className="form-check _social_login_form_check"></div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                      <div className="_social_login_form_left"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                      <div className="_social_login_form_btn _mar_t40 _mar_b60">
                        <button
                          type="submit"
                          className="_social_login_form_btn_link _btn1"
                        >
                          Login now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="_social_login_bottom_txt">
                      <p className="_social_login_bottom_txt_para">
                        Don't have an account?
                        <a href="reg">Create New Account</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div ref={bugDiv} className="text-danger"></div>{" "}
                {/* Error message */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
