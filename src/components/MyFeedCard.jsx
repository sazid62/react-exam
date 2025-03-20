import { useState, useEffect } from "react";
import PopComment from "./PopComment";

function MyFeedCard({ card, data, setData, currentUser, setCurrentUser }) {
  const [deletePostSHowOrNot, setDeletePostSHowOrNot] = useState(false);
  const [editPostSHowOrNot, setEditPostSHowOrNot] = useState(false);
  const [commentText, setCommentText] = useState("");

  const [commentButtonClick, setCommentButtonClick] = useState(false);
  const [allComment, setAllComment] = useState([]);
  if (!card || !card.cardId) {
    return (
      <div
        style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "#6b5b95",
          padding: "1rem",
          borderRadius: "0.5rem",
          textAlign: "center",
        }}
      ></div>
    );
  }

  const { cardId, username, userprofile, minutes, seconds, text, image } = card;
  const [cardTextInput, setCardTextInput] = useState(text);

  const [likedBy, setLikedBy] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(
    currentUser?.likedPost?.includes(cardId)
  );

  useEffect(() => {
    const usersWhoLiked = data
      .filter((user) => user.likedPost.includes(cardId))
      .map((user) => user.username);
    setLikedBy(usersWhoLiked);
  }, [data, cardId]);

  const handleLikeClick = (e) => {
    e.preventDefault();
    const isLiked = clicked;

    const updatedLikedPost = isLiked
      ? currentUser.likedPost.filter((id) => id !== cardId)
      : [...currentUser.likedPost, cardId];

    setCurrentUser((prevUser) => ({
      ...prevUser,
      likedPost: updatedLikedPost,
    }));

    setData((prevData) =>
      prevData.map((user) =>
        user.username === currentUser.username
          ? { ...user, likedPost: updatedLikedPost }
          : user
      )
    );

    setClicked(!isLiked);
  };

  const [isCommentPopupOpen, setIsCommentPopupOpen] = useState(false);
  const [comments, setComments] = useState();

  useEffect(() => {
    const commentForCard = [];
    data.forEach((user) => {
      user.commentPost.forEach((eachCommentByUser) => {
        if (eachCommentByUser.id === cardId) {
          commentForCard.push(eachCommentByUser);
        }
      });
    });

    commentForCard.sort((a, b) => b.time - a.time);
    setAllComment(commentForCard);
    // console.log(commentForCard, "TEst");
  }, [data, currentUser, cardId]);

  const toggleCommentPopup = () => {
    setIsCommentPopupOpen(!isCommentPopupOpen);
  };

  return (
    <div
      onClick={() => {
        deletePostSHowOrNot === true ? setDeletePostSHowOrNot(false) : "";
      }}
      className="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b26  "
      style={{ margin: "10px" }}
    >
      <div
        className="_feed_inner_timeline_content _padd_r24 _padd_l24"
        style={{ position: "relative" }}
      >
        <div className="_feed_inner_timeline_post_top">
          <div className="_feed_inner_timeline_post_box">
            <div className="_feed_inner_timeline_post_box_image">
              <img
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                src={userprofile}
                alt="User profile"
              />
            </div>
            <div className="_feed_inner_timeline_post_details">
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "8px",
                }}
              >
                {username}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#888",
                  marginBottom: "8px",
                }}
              >
                {minutes ? `${minutes} minute ago` : `few seconds ago`}
                <span>. Public</span>
              </p>
              <input
                type="text"
                value={cardTextInput}
                readOnly={!editPostSHowOrNot ? true : false}
                onChange={(e) => setCardTextInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const updatedData = data.map((user) => ({
                      ...user,
                      posts: user.posts.map((post) =>
                        post.id === cardId
                          ? { ...post, text: cardTextInput }
                          : post
                      ),
                    }));

                    setData(updatedData);
                    setCurrentUser({
                      ...currentUser,
                      posts: currentUser.posts.map((eachPost) =>
                        eachPost.id === card.id
                          ? { ...eachPost, text: cardTextInput }
                          : eachPost
                      ),
                    });

                    setEditPostSHowOrNot(!editPostSHowOrNot);
                  }
                }}
                style={{
                  border: !editPostSHowOrNot ? "none" : false,

                  fontSize: "1rem",
                  color: "#444",
                  // marginBottom: "12px",
                  width: "300px",
                  height: "30px",
                }}
              />
            </div>
          </div>
          {/* Delete PostSHow */}
          <div class="_feed_inner_timeline_post_box_dropdown">
            <div class="_feed_timeline_post_dropdown">
              <button
                href="#0"
                id="_timeline_show_drop_btn"
                class="_feed_timeline_post_dropdown_link"
                onClick={() => {
                  setDeletePostSHowOrNot(!deletePostSHowOrNot);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="17"
                  fill="none"
                  viewBox="0 0 4 17"
                >
                  <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                  <circle cx="2" cy="8" r="2" fill="#C4C4C4" />
                  <circle cx="2" cy="15" r="2" fill="#C4C4C4" />
                </svg>
              </button>
            </div>
            {/* <!--Dropdown--> */}
            <div
              id="_timeline_drop"
              class={`_feed_timeline_dropdown ${
                deletePostSHowOrNot ? "show" : ""
              }`}
            >
              <ul class="_feed_timeline_dropdown_list">
                <li class="_feed_timeline_dropdown_item">
                  <a href="#0" class="_feed_timeline_dropdown_link">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="#1890FF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="M14.25 15.75L9 12l-5.25 3.75v-12a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v12z"
                        />
                      </svg>
                    </span>
                    Save Post
                  </a>
                </li>
                <li class="_feed_timeline_dropdown_item">
                  <a href="#0" class="_feed_timeline_dropdown_link">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="22"
                        fill="none"
                        viewBox="0 0 20 22"
                      >
                        <path
                          fill="#377DFF"
                          fill-rule="evenodd"
                          d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    Turn On Notification
                  </a>
                </li>
                <li class="_feed_timeline_dropdown_item">
                  <a href="#0" class="_feed_timeline_dropdown_link">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="#1890FF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="M14.25 2.25H3.75a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zM6.75 6.75l4.5 4.5M11.25 6.75l-4.5 4.5"
                        />
                      </svg>
                    </span>
                    Hide
                  </a>
                </li>
                {currentUser?.posts?.some(
                  (eachPost) => eachPost.id === cardId
                ) && (
                  <li className="_feed_timeline_dropdown_item">
                    <a
                      href="#0"
                      className="_feed_timeline_dropdown_link"
                      onClick={() => {
                        setDeletePostSHowOrNot((prev) => !prev);
                        setEditPostSHowOrNot((prev) => !prev);
                      }}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="#1890FF"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.2"
                            d="M8.25 3H3a1.5 1.5 0 00-1.5 1.5V15A1.5 1.5 0 003 16.5h10.5A1.5 1.5 0 0015 15V9.75"
                          />
                          <path
                            stroke="#1890FF"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.2"
                            d="M13.875 1.875a1.591 1.591 0 112.25 2.25L9 11.25 6 12l.75-3 7.125-7.125z"
                          />
                        </svg>
                      </span>
                      Edit Post
                    </a>
                  </li>
                )}

                {currentUser?.posts?.some(
                  (eachPost) => eachPost.id === cardId
                ) ? (
                  <li className="_feed_timeline_dropdown_item">
                    <a
                      href="#0"
                      className="_feed_timeline_dropdown_link"
                      onClick={() => {
                        let ok = false;
                        const updatedCurrentUser = {
                          ...currentUser,
                          posts: [],
                        };
                        updatedCurrentUser.posts = currentUser.posts.filter(
                          (eachPost) => {
                            if (eachPost.id === cardId) {
                              ok = true;
                              return false;
                            }
                            return true;
                          }
                        );

                        if (!ok) {
                          alert("You can't Delete Another post");
                          return;
                        }

                        setCurrentUser(updatedCurrentUser);

                        setData((prevData) =>
                          prevData.map((user) =>
                            user.username === currentUser.username
                              ? updatedCurrentUser
                              : user
                          )
                        );
                      }}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="#1890FF"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.2"
                            d="M2.25 4.5h13.5M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5m2.25 0V15a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V4.5h10.5zM7.5 8.25v4.5M10.5 8.25v4.5"
                          />
                        </svg>
                      </span>
                      Delete Post
                    </a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        </div>
        {image && (
          <div className="_feed_inner_timeline_post_image">
            <img
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
              src={image}
              alt="Post content"
            />
          </div>
        )}
        <div className="_feed_inner_timeline_post_actions">
          <div className="_feed_inner_timeline_total_reacts _padd_r24 _padd_l24 _mar_b26">
            <div className="_feed_inner_timeline_total_reacts_image">
              {likedBy.map((user) => (
                <p
                  className="_feed_inner_timeline_total_reacts_para"
                  key={user}
                >
                  {user}
                </p>
              ))}
            </div>
            <div className="_feed_inner_timeline_total_reacts_txt">
              <p className="_feed_inner_timeline_total_reacts_para1 ">
                <span>{allComment.length}</span> Comment
              </p>
              <p className="_feed_inner_timeline_total_reacts_para2">
                <span>122</span> Share
              </p>
            </div>
          </div>
        </div>
        <div className="_feed_inner_timeline_reaction">
          <button
            className="_feed_inner_timeline_reaction_emoji _feed_reaction"
            onClick={handleLikeClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: clicked ? "blue" : "white",
              color: clicked ? "white" : "#000",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            {clicked ? `Liked` : `Like`}
          </button>
          <button
            className="_feed_inner_timeline_reaction_comment _feed_reaction"
            onClick={toggleCommentPopup}
          >
            <span className="_feed_inner_timeline_reaction_link">
              <span>
                {/* Replaced the inner <button> with a <div> to avoid nesting issue */}
                <div
                  style={{
                    width: "150px",
                    height: "200px",
                    border: "none",
                    background: "none",
                    display: "flex",
                    alignItems: "center", // Center the content vertically
                    justifyContent: "center", // Center the content horizontally
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setCommentButtonClick(!commentButtonClick);
                  }}
                >
                  <svg
                    className="_reaction_svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="#000"
                      d="M1 10.5c0-.464 0-.696.009-.893A9 9 0 019.607 1.01C9.804 1 10.036 1 10.5 1v0c.464 0 .696 0 .893.009a9 9 0 018.598 8.598c.009.197.009.429.009.893v6.046c0 1.36 0 2.041-.317 2.535a2 2 0 01-.602.602c-.494.317-1.174.317-2.535.317H10.5c-.464 0-.696 0-.893-.009a9 9 0 01-8.598-8.598C1 11.196 1 10.964 1 10.5v0z"
                    ></path>
                    <path
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.938 9.313h7.125M10.5 14.063h3.563"
                    ></path>
                  </svg>
                  Comment
                </div>
              </span>
            </span>
          </button>

          <button className="_feed_inner_timeline_reaction_share _feed_reaction">
            <span className="_feed_inner_timeline_reaction_link">
              <span>
                <svg
                  className="_reaction_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="21"
                  fill="none"
                  viewBox="0 0 24 21"
                >
                  <path
                    stroke="#000"
                    strokeLinejoin="round"
                    d="M23 10.5L12.917 1v5.429C3.267 6.429 1 13.258 1 20c2.785-3.52 5.248-5.429 11.917-5.429V20L23 10.5z"
                  ></path>
                </svg>
                Share
              </span>
            </span>
          </button>
        </div>
        {/* Comment Popup */}
        {/* comment */}
        <div class="_previous_comment">
          <button type="button" class="_previous_comment_txt"></button>
        </div>
        {/* Commment */}
        {commentButtonClick && (
          <form className="_feed_inner_comment_box_form">
            <div className="_feed_inner_comment_box_content">
              <div className="_feed_inner_comment_box_content_image">
                <img
                  src={currentUser.profile}
                  alt=""
                  className="_comment_img"
                />
              </div>
              <div className="_feed_inner_comment_box_content_txt">
                <textarea
                  className="form-control _comment_textarea"
                  placeholder="Write a comment"
                  id="floatingTextarea1"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#f0f0f0",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div className="_feed_inner_comment_box_icon">
              <button
                className="_feed_inner_comment_box_icon_btn"
                style={{
                  width: "120px",
                  height: "40px",
                  backgroundColor: "#4a90e2",
                  color: "white",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textAlign: "center",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#357ABD")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
                onClick={(e) => {
                  e.preventDefault();

                  if (!commentText.trim()) {
                    alert("Comment cannot be empty!");
                    return;
                  }
                  // Create a new comment object
                  const newComment = {
                    id: cardId,
                    time: Date.now(),
                    text: commentText,
                    profile: userprofile,
                    name: currentUser.username,
                  };

                  // Update the currentUser's comment history (local state update)
                  const updatedCurrentUser = {
                    ...currentUser,
                    commentPost: [newComment, ...currentUser.commentPost],
                  };
                  setCurrentUser(updatedCurrentUser); // Update the currentUser state

                  // Update the global 'data' state with the new comment (map over users and update)
                  setData((prevData) =>
                    prevData.map((user) =>
                      user.username === currentUser.username
                        ? {
                            ...user,
                            commentPost: [newComment, ...user.commentPost],
                          }
                        : user
                    )
                  );

                  // Clear the comment text input after submission
                  setCommentText("");
                }}
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {commentButtonClick && (
          <div>
            {allComment.map((comment, idx) => (
              <PopComment
                key={idx}
                comment={comment}
                minutes={minutes}
                data={data}
                setData={setData}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            ))}
          </div>
        )}
        {/* {isCommentPopupOpen && (
                      <div
                        style={{
                          position: "fixed",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          zIndex: 10,
                        }}
                        onClick={toggleCommentPopup}
                      >
                        <div
                          style={{
                            backgroundColor: "white",
                            padding: "2rem",
                            borderRadius: "8px",
                            width: "60%",
                            maxHeight: "70%",
                            overflowY: "auto",
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <h3>Comments</h3>
                          <span>Post Your Comment</span>

                          <input
                            style={{
                              padding: "0.5rem 1rem",
                              backgroundColor: "#f0f0",
                              border: "",
                              borderRadius: "8px",
                              cursor: "pointer",
                            }}
                            type="text"
                            value={commentText}
                            onChange={(e) => {
                              // e.preventDefault();
                              // console.log(e.target.value, " Coment");
                              setCommentText(e.target.value);
                            }}
                          ></input>
                          <button
                            onClick={() => {
                              setCommentStageChange(!commentStateChange);

                              // Create a new comment for the current user
                              const newComment = {
                                id: cardId,
                                time: Date.now(),
                                text: commentText,
                                profile: userprofile,
                                name: currentUser.username,
                              };

                              // Update the currentUser's comment history (for the local user)
                              const updatedCurrentUser = {
                                ...currentUser,
                                commentPost: [newComment, ...currentUser.commentPost],
                              };
                              setCurrentUser(updatedCurrentUser); // Update the local user state

                              // Update the global 'data' state with the new comment (find the matching user)
                              setData((prevData) => {
                                const updatedData = prevData.map((user) => {
                                  // Check if the user's username matches the currentUser's username
                                  if (user.username === currentUser.username) {
                                    // If it matches, update the user in the data state with the new comment
                                    return {
                                      ...user,
                                      commentPost: [newComment, ...user.commentPost],
                                    };
                                  }
                                  return user; // Otherwise, leave the user unchanged
                                });
                                return updatedData;
                              });
                            }}
                            style={{
                              padding: "0.5rem 1rem",
                              backgroundColor: "#f0f0f0",
                              border: "none",
                              borderRadius: "8px",
                              cursor: "pointer",
                            }}
                          >
                            Post
                          </button>

                          <br />
                          <br />
                          <br />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column", // Make sure the items are displayed in a column
                              padding: "1rem",
                              borderBottom: "1px solid #ddd",
                            }}
                          >
                            {/* Comment Section */}
        {/* {console.log(allComment, "  Sakid")}
                            {allComment.map((comment) => {
                              // Calculate the time difference in minutes
                              const minutes = Math.floor(
                                (Date.now() - comment.time) / 1000 / 60
                              );
                              <PopComment comment={comment} minutes={minutes} />;
                            })}
                          </div>
                          <button
                            onClick={toggleCommentPopup}
                            style={{
                              padding: "0.5rem 1rem",
                              backgroundColor: "#f0f0f0",
                              border: "none",
                              borderRadius: "8px",
                              cursor: "pointer",
                            }}
                          >
                            Close
                          </button>
                        </div> */}
        {/* </div> */}
        {/* )} */}
      </div>
    </div>
  );
}

export default MyFeedCard;
