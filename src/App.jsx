import React from "react";
import CreatePost from "./components/CreatePost";
import MyFeedCard from "./components/MyFeedCard";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftSidebar from "./components/LeftSidebar";
import RightSideBar from "./components/RightSideBar";

function App() {
  return (
    <div className="app-container">
      <div className="fixed-top">
        <Navbar />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <LeftSidebar />
          <div className="col-md-8 col-lg-6">
            <div className="create-post-container mt-5 pt-5">
              <CreatePost />
            </div>

            <div className="feed-container mt-3">
              <div className="feed-card-wrapper">
                <MyFeedCard />
              </div>
            </div>
          </div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
