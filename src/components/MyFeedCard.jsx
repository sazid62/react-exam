import { useState, useEffect } from "react";
import PopComment from "./PopComment";

function MyFeedCard({ card }) {
  const [commentText, setCommentText] = useState([]);
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

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("allUser");
    return savedData ? JSON.parse(savedData) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : { likedPost: [] };
  });
  const [commentStateChange, setCommentStageChange] = useState(false);
  useEffect(() => {

    data.forEach((each) => {

      console.log(each, "Check")
      each.commentPost.forEach((eachComment) => {

        if (eachComment.id === cardId) {
          setCommentText([
            ...commentText,
            eachComment
          ])

        }
      });
    });
  }, [commentStateChange]);

  useEffect(() => {
    localStorage.setItem("allUser", JSON.stringify(data));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser, data, setData, setCurrentUser]);

  const [likedBy, setLikedBy] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(
    currentUser.likedPost.includes(cardId)
  );

  useEffect(() => {
    const usersWhoLiked = data
      .filter((user) => user.likedPost.includes(cardId))
      .map((user) => user.username);
    setLikedBy(usersWhoLiked);
  }, [data, cardId]);

  const handleLikeClick = () => {
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

    localStorage.setItem(
      "currentUser",
      JSON.stringify({ ...currentUser, likedPost: updatedLikedPost })
    );
    localStorage.setItem(
      "allUser",
      JSON.stringify(
        data.map((user) =>
          user.username === currentUser.username
            ? { ...user, likedPost: updatedLikedPost }
            : user
        )
      )
    );
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
    setAllComment(commentForCard);
    // console.log(commentForCard, "TEst");
  }, [data, currentUser, cardId]);

  const toggleCommentPopup = () => {
    setIsCommentPopupOpen(!isCommentPopupOpen);
  };

  return (
    <div className="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b16">
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
                {minutes ? `${minutes} minutes ago` : `${seconds} seconds ago`}
                <span>. Public</span>
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#444",
                  marginBottom: "12px",
                }}
              >
                -{text}
              </p>
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
          <button type="button" class="_previous_comment_txt">

          </button>
        </div>
        {/* Commment */}
        <form class="_feed_inner_comment_box_form">
          <div class="_feed_inner_comment_box_content">
            <div class="_feed_inner_comment_box_content_image">
              <img src={currentUser.profile} alt="" class="_comment_img" />
            </div>
            <div className="_feed_inner_comment_box_content_txt">
              <textarea
                className="form-control _comment_textarea"
                placeholder="Write a comment"
                id="floatingTextarea1"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
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
                  setData((prevData) =>
                    prevData.map((user) =>
                      user.username === currentUser.username
                        ? { ...user, commentPost: [newComment, ...user.commentPost] }
                        : user
                    )
                  );
                }}
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
          <div class="_feed_inner_comment_box_icon">
            <button class="_feed_inner_comment_box_icon_btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path fill="#000" fill-opacity=".46" fill-rule="evenodd" d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="_feed_inner_comment_box_icon_btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path fill="#000" fill-opacity=".46" fill-rule="evenodd" d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zm.426 5.733l.017.015.013.013.009.008.037.037c.12.12.453.46 1.443 1.477a.5.5 0 11-.716.697S10.73 8.91 10.633 8.816a.614.614 0 00-.433-.118.622.622 0 00-.421.225c-1.55 1.88-1.568 1.897-1.594 1.922a1.456 1.456 0 01-2.057-.021s-.62-.63-.63-.642c-.155-.143-.43-.134-.594.04l-1.02 1.076a.498.498 0 01-.707.018.499.499 0 01-.018-.706l1.018-1.075c.54-.573 1.45-.6 2.025-.06l.639.647c.178.18.467.184.646.008l1.519-1.843a1.618 1.618 0 011.098-.584c.433-.038.854.088 1.19.363zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
        {allComment.map((comment) => (

          <PopComment comment={comment} minutes={minutes} />

        ))}
        {isCommentPopupOpen && (
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
                {console.log(allComment, "  Sakid")}
                {allComment.map((comment) => {
                  // Calculate the time difference in minutes
                  const minutes = Math.floor(
                    (Date.now() - comment.time) / 1000 / 60
                  );
                  <PopComment comment={comment} minutes={minutes} />
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
            </div>
          </div >
        )
        }
      </div >
    </div >
  );
}

export default MyFeedCard;
