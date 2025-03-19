import React, { useState, useEffect } from "react";
import MyFeedCard from "./MyFeedCard";
function CreatePost() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("allUser") || "[]")
  );

  let currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [isImageURLInputVisible, setIsImageURLInputVisible] = useState(false);
  const [isVideoURLInputVisible, setIsVideoURLInputVisible] = useState(false);



  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageURLChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleVideoURLChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Add Some TExt ffirst");
      return;
    }

    const newPost = {
      id: Date.now(),
      text: text,
      image: imageUrl,
      video: videoUrl,
    };

    let updatedUser = {
      ...currentUser,
      posts: [newPost, ...currentUser.posts],
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    const newData = data.map((eachPerson) =>
      eachPerson.username === currentUser.username ? updatedUser : eachPerson
    );

    setData(newData);

    localStorage.setItem("allUser", JSON.stringify(newData));

    setText("");
    setImageUrl("");
    setVideoUrl("");
  };
  return (
    <>
      <div className="_feed_inner_text_area _b_radious6 _padd_b24 _padd_t24 _padd_r24 _padd_l24 _mar_b16">
        <div className="_feed_inner_text_area_box">
          <div className="_feed_inner_text_area_box_image">
            <img
              src={currentUser.profile}
              alt="User profile"
              className="_txt_img"
            />
          </div>
          <div className="form-floating _feed_inner_text_area_box_form">
            <textarea
              className="form-control _textarea"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={text}
              onChange={handleTextChange}
            ></textarea>
            {!text && (
              <label
                className="_feed_textarea_label"
                htmlFor="floatingTextarea"
              >
                Write something ...
              </label>
            )}
          </div>
        </div>

        <form onSubmit={handlePostSubmit}>
          <div className="_feed_inner_text_area_bottom">
            <div className="_feed_inner_text_area_item">
              {/* Photo button */}
              <div className="_feed_inner_text_area_bottom_photo _feed_common">
                <button
                  type="button"
                  onClick={() =>
                    setIsImageURLInputVisible(!isImageURLInputVisible)
                  }
                  className="_feed_inner_text_area_bottom_photo_link"
                >
                  <span className="_feed_inner_text_area_bottom_photo_image _mar_img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#666"
                        d="M13.916 0c3.109 0 5.18 2.429 5.18 5.914v8.17c0 3.486-2.072 5.916-5.18 5.916H5.999C2.89 20 .827 17.572.827 14.085v-8.17C.827 2.43 2.897 0 6 0h7.917zm0 1.504H5.999c-2.321 0-3.799 1.735-3.799 4.41v8.17c0 2.68 1.472 4.412 3.799 4.412h7.917c2.328 0 3.807-1.734 3.807-4.411v-8.17c0-2.678-1.478-4.411-3.807-4.411zm.65 8.68l.12.125 1.9 2.147a.803.803 0 01-.016 1.063.642.642 0 01-.894.058l-.076-.074-1.9-2.148a.806.806 0 00-1.205-.028l-.074.087-2.04 2.717c-.722.963-2.02 1.066-2.86.26l-.111-.116-.814-.91a.562.562 0 00-.793-.07l-.075.073-1.4 1.617a.645.645 0 01-.97.029.805.805 0 01-.09-.977l.064-.086 1.4-1.617c.736-.852 1.95-.897 2.734-.137l.114.12.81.905a.587.587 0 00.861.033l.07-.078 2.04-2.718c.81-1.08 2.27-1.19 3.205-.275zM6.831 4.64c1.265 0 2.292 1.125 2.292 2.51 0 1.386-1.027 2.511-2.292 2.511S4.54 8.537 4.54 7.152c0-1.386 1.026-2.51 2.291-2.51zm0 1.504c-.507 0-.918.451-.918 1.007 0 .555.411 1.006.918 1.006.507 0 .919-.451.919-1.006 0-.556-.412-1.007-.919-1.007z"
                      />
                    </svg>
                  </span>
                  Photo
                </button>
                {isImageURLInputVisible && (
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={handleImageURLChange}
                    placeholder="Paste image URL here"
                    className="form-control _textarea"
                  />
                )}
              </div>
              {/* Video button */}
              <div className="_feed_inner_text_area_bottom_video _feed_common">
                <button
                  type="button"
                  onClick={() =>
                    setIsVideoURLInputVisible(!isVideoURLInputVisible)
                  }
                  className="_feed_inner_text_area_bottom_photo_link"
                >
                  <span className="_feed_inner_text_area_bottom_photo_image _mar_img">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="24"
                      fill="none"
                      viewBox="0 0 22 24"
                    >
                      <path
                        fill="#666"
                        d="M11.485 4.5c2.213 0 3.753 1.534 3.917 3.784l2.418-1.082c1.047-.468 2.188.327 2.271 1.533l.005.141v6.64c0 1.237-1.103 2.093-2.155 1.72l-.121-.047-2.418-1.083c-.164 2.25-1.708 3.785-3.917 3.785H5.76c-2.343 0-3.932-1.72-3.932-4.188V8.688c0-2.47 1.589-4.188 3.932-4.188h5.726zm0 1.5H5.76c-1.425 0-2.417 1.013-2.417 2.688v6.228c0 1.48 1.028 2.396 2.417 2.396h5.726c1.389 0 2.417-.916 2.417-2.396v-6.228c0-1.675-1.028-2.688-2.417-2.688zm2.195 4.292c.314 0 .574.275.574.614v3.148c0 .339-.26.613-.574.613s-.574-.274-.574-.613v-3.148c0-.339.26-.614.574-.614zm-4.395 0c.314 0 .574.275.574.614v3.148c0 .339-.26.613-.574.613-.314 0-.574-.274-.574-.613v-3.148c0-.339.26-.614.574-.614z"
                      />
                    </svg>
                  </span>
                  Video
                </button>
                {isVideoURLInputVisible && (
                  <input
                    type="text"
                    value={videoUrl}
                    onChange={handleVideoURLChange}
                    placeholder="Paste video URL here"
                    className="form-control _textarea"
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary _feed_inner_text_area_bottom_event_button"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      {data.map((eachPerson) => {
        return eachPerson.posts.map((perPosts) => (
          <MyFeedCard
            key={perPosts.id}
            card={{
              cardId: perPosts.id,
              username: eachPerson.username,
              userprofile: eachPerson.profile,
              minutes: Math.floor((Date.now() - perPosts.id) / 1000 / 60),
              seconds: Math.floor(((Date.now() - perPosts.id) / 1000) % 60),
              text: perPosts.text,
              image: perPosts.image,
            }}
          />
        ));
      })}
    </>
  );
}

export default CreatePost;
