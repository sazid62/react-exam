import React, { useRef, useState } from "react";

export default function Registration() {
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
    bugDiv.current.innerText = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bugDiv);

    if (formData.password !== formData.repeatPassword) {
      bugDiv.current.innerHTML = `
      <div style="color: red;">
         Sorry Pass dont match
      </div>
    `;
      return;
    }

    if (
      data.findIndex(
        (singleData) => singleData.username === formData.username
      ) !== -1
    ) {
      bugDiv.current.innerText = "Username Already Found";
      return;
    }

    if (formData.password == formData.repeatPassword) {
      bugDiv.current.innerHTML = `
      <div style="color: green;">
        Successfully Created
        <br/>
        <a href="/">Need to LOG In, Sir?</a>
      </div>
    `;

      data.push({
        username: formData.username,
        password: formData.password,
        likedPost: [],
        commentPost: [],
        posts: [],
        friends: [],
        profile:
          "https://imgs.search.brave.com/5cAi-jXDh0PdCGuh2vvsggwMUWvGlmTFmbCQ7jYJ9OI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc",
      });
      localStorage.setItem("allUser", JSON.stringify(data));
    }
    console.log("Data = ", data);
    console.log(formData);
  };

  return (
    <section class="_social_registration_wrapper _layout_main_wrapper">
      <div class="_shape_one">
        <img src="assets/images/shape1.svg" alt="" class="_shape_img" />
        <img src="assets/images/dark_shape.svg" alt="" class="_dark_shape" />
      </div>
      <div class="_shape_two">
        <img src="assets/images/shape2.svg" alt="" class="_shape_img" />
        <img
          src="assets/images/dark_shape1.svg"
          alt=""
          class="_dark_shape _dark_shape_opacity"
        />
      </div>
      <div class="_shape_three">
        <img src="assets/images/shape3.svg" alt="" class="_shape_img" />
        <img
          src="assets/images/dark_shape2.svg"
          alt=""
          class="_dark_shape _dark_shape_opacity"
        />
      </div>
      <div class="_social_registration_wrap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div class="_social_registration_right">
                <div class="_social_registration_right_image">
                  <img src="assets/images/registration.png" alt="Image" />
                </div>
                <div class="_social_registration_right_image_dark">
                  <img src="assets/images/registration1.png" alt="Image" />
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div class="_social_registration_content">
                <div class="_social_registration_right_logo _mar_b28">
                  <img
                    src="assets/images/logo.svg"
                    alt="Image"
                    class="_right_logo"
                  />
                </div>
                <p class="_social_registration_content_para _mar_b8">
                  Get Started Now
                </p>
                <h4 class="_social_registration_content_title _titl4 _mar_b50">
                  Registration
                </h4>
                <button
                  type="button"
                  class="_social_registration_content_btn _mar_b40"
                >
                  <img
                    src="assets/images/google.svg"
                    alt="Image"
                    class="_google_img"
                  />
                  <span>Register with google</span>
                </button>
                <div class="_social_registration_content_bottom_txt _mar_b40">
                  <span>Or</span>
                </div>
                <form class="_social_registration_form" onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="_social_registration_form_input _mar_b14">
                        <label
                          class="_social_registration_label _mar_b8"
                          htmlFor="username"
                        >
                          username
                        </label>
                        <input
                          type="text"
                          class="form-control _social_registration_input"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          required={true}
                        />
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="_social_registration_form_input _mar_b14">
                        <label
                          class="_social_registration_label _mar_b8"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control _social_registration_input"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required={true}
                        />
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="_social_registration_form_input _mar_b14">
                        <label
                          class="_social_registration_label _mar_b8"
                          htmlFor="repeat-password"
                        >
                          Repeat Password
                        </label>
                        <input
                          type="password"
                          class="form-control _social_registration_input"
                          id="repeat-password"
                          name="repeatPassword"
                          value={formData.repeatPassword}
                          onChange={handleInputChange}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12"></div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                      <div ref={bugDiv}></div>

                      <div class="_social_registration_form_btn _mar_t40 _mar_b60">
                        <button
                          type="submit"
                          class="_social_registration_form_btn_link _btn1"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div class="_social_registration_bottom_txt"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
