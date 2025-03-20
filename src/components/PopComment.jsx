import { useState } from "react";
import Reply from "./Reply";

export default function PopComment({
  card,
  data,
  setData,
  currentUser,
  setCurrentUser,
  comment,
}) {
  const { id, name, profile, text, time } = comment;
  const [replyButtonClick, setReplyButtonClick] = useState(false);
  const [replyText, setReplyText] = useState("");
  const minutes = Math.floor((Date.now() - time) / 1000 / 60);

  if (!comment) {
    return null;
  }

  const handleReplySubmit = (e) => {
    e.preventDefault();

    if (replyText.trim() === "") return;

    const newReply = {
      id: Date.now(),
      text: replyText,
      profile: currentUser.profile,
      name: currentUser.username,
      time: Date.now(),
      isReply: true,
      parentCommentId: comment.id,
    };

    // Update the global data state with the new reply
    const updatedUsers = data.map((user) => {
      if (user.username === currentUser.username) {
        return {
          ...user,
          commentPost: [...user.commentPost, newReply],
        };
      }
      return user;
    });

    // Update current user state
    const updatedCurrentUser = {
      ...currentUser,
      commentPost: [...currentUser.commentPost, newReply],
    };

    // Update the states
    setData(updatedUsers);
    setCurrentUser(updatedCurrentUser);
    setReplyText("");
    setReplyButtonClick(false); // Optionally close the reply form after submission
  };

  // Handle Enter key press in textarea
  const handleKeyDown = (e) => {
    // Submit on Enter without Shift key
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent default to avoid newline
      if (replyText.trim() !== "") {
        handleReplySubmit(e);
      }
    }
  };

  // Filter replies for this specific comment from all users
  const commentReplies = data
    .flatMap((user) => user.commentPost)
    .filter((post) => post.isReply && post.parentCommentId === comment.id)
    .sort((a, b) => a.time - b.time);

  return (
    <div className="_timline_comment_main">
      <div className="_comment_main">
        <div className="_comment_image">
          <a href="profile.html" className="_comment_image_link">
            <img src={profile} alt="" className="_comment_img1" />
          </a>
        </div>
        <div className="_comment_area">
          <div className="_comment_details">
            <div className="_comment_details_top">
              <div className="_comment_name">
                <a href="profile.html">
                  <h4 className="_comment_name_title">{name}</h4>
                </a>
              </div>
            </div>
            <div className="_comment_status" style={{ width: "303px" }}>
              <p className="_comment_status_text" style={{ width: "303px" }}>
                <span>{text}</span>
              </p>
            </div>
            <div className="_total_reactions">
              <div className="_total_react">
                <span className="_reaction_like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-thumbs-up"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </span>
                <span className="_reaction_heart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-heart"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </span>
              </div>
              <span className="_total">198</span>
            </div>
            <div className="_comment_reply">
              <div className="_comment_reply_num">
                <ul className="_comment_reply_list">
                  <li>
                    <span>Like.</span>
                  </li>
                  <li
                    onClick={(e) => {
                      setReplyButtonClick(!replyButtonClick);
                      e.preventDefault();
                    }}
                  >
                    <span>Reply.</span>
                  </li>
                  <li>
                    <span>Share</span>
                  </li>
                  <li>
                    <span className="_time_link">
                      {minutes <= 0
                        ? `few seconds ago`
                        : `${minutes} minutes ago`}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Show replies for this comment */}
          {commentReplies.length > 0 && (
            <div className="_reply_container">
              {commentReplies.map((reply) => (
                <Reply
                  key={reply.id || reply.time}
                  comment={reply}
                  minutes={Math.floor((Date.now() - reply.time) / 1000 / 60)}
                  data={data}
                  setData={setData}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              ))}
            </div>
          )}

          {/* Reply input form */}
          {replyButtonClick && (
            <div className="_feed_inner_comment_box">
              <form
                className="_feed_inner_comment_box_form"
                onSubmit={handleReplySubmit}
              >
                <div className="_feed_inner_comment_box_content">
                  <div className="_feed_inner_comment_box_content_image">
                    <img
                      src={
                        currentUser?.profile || "assets/images/comment_img.png"
                      }
                      alt=""
                      className="_comment_img"
                    />
                  </div>
                  <div className="_feed_inner_comment_box_content_txt">
                    <textarea
                      className="form-control _comment_textarea"
                      placeholder="Write a reply"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      onKeyDown={handleKeyDown}
                      id="floatingTextarea2"
                    ></textarea>
                  </div>
                </div>
                <div className="_feed_inner_comment_box_icon">
                  <button
                    type="submit"
                    className="_feed_inner_comment_box_icon_btn"
                    disabled={replyText.trim() === ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#000"
                        fillOpacity=".46"
                        fillRule="evenodd"
                        d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
