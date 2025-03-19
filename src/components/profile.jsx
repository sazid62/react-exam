import React from 'react'

function profile() {
  return (
    <div class="_layout_main_wrapper _layout_profile">
    {/* <!--Header Start--> */}
    <header class="_header_wrapper">
        {/* <!--Desktop Menu Start--> */}
        <nav class="navbar navbar-expand-lg navbar-light _header_nav _padd_t10">
            <div class="container _custom_container">
                <div class="_logo_wrap">
                    <a class="navbar-brand" href="feed.html">
                        <img src="assets/images/logo.svg" alt="Image" class="_nav_logo"/>
                    </a>
                </div>
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="_header_form ms-auto">
                        <form class="_header_form_grp">
                            <svg class="_header_form_svg" xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
                                <circle cx="7" cy="7" r="6" stroke="#666"></circle>
                                <path stroke="#666" stroke-linecap="round" d="M16 16l-3-3"></path>
                            </svg>
                            <input class="form-control me-2 _inpt1" type="search" placeholder="input search text" aria-label="Search"/>
                        </form>
                    </div>
                    <ul class="navbar-nav mb-2 mb-lg-0 _header_nav_list ms-auto _mar_r8">
                        <li class="nav-item _header_nav_item">
                            <a class="nav-link  _header_nav_link" aria-current="page" href="feed.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" fill="none" viewBox="0 0 18 21">
                                    <path class="_home" stroke="#000" stroke-width="1.5" stroke-opacity=".6" d="M1 9.924c0-1.552 0-2.328.314-3.01.313-.682.902-1.187 2.08-2.196l1.143-.98C6.667 1.913 7.732 1 9 1c1.268 0 2.333.913 4.463 2.738l1.142.98c1.179 1.01 1.768 1.514 2.081 2.196.314.682.314 1.458.314 3.01v4.846c0 2.155 0 3.233-.67 3.902-.669.67-1.746.67-3.901.67H5.57c-2.155 0-3.232 0-3.902-.67C1 18.002 1 16.925 1 14.77V9.924z"></path>
                                    <path class="_home1" stroke="#000" stroke-opacity=".6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.857 19.341v-5.857a1 1 0 00-1-1H7.143a1 1 0 00-1 1v5.857"></path>
                                </svg>
                            </a>
                        </li>
                        <li class="nav-item _header_nav_item">
                            <a class="nav-link _header_nav_link" aria-current="page" href="friend-request.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="none" viewBox="0 0 26 20">
                                    <path fill="#000" fill-opacity=".6" fill-rule="evenodd" d="M12.79 12.15h.429c2.268.015 7.45.243 7.45 3.732 0 3.466-5.002 3.692-7.415 3.707h-.894c-2.268-.015-7.452-.243-7.452-3.727 0-3.47 5.184-3.697 7.452-3.711l.297-.001h.132zm0 1.75c-2.792 0-6.12.34-6.12 1.962 0 1.585 3.13 1.955 5.864 1.976l.255.002c2.792 0 6.118-.34 6.118-1.958 0-1.638-3.326-1.982-6.118-1.982zm9.343-2.224c2.846.424 3.444 1.751 3.444 2.79 0 .636-.251 1.794-1.931 2.43a.882.882 0 01-1.137-.506.873.873 0 01.51-1.13c.796-.3.796-.633.796-.793 0-.511-.654-.868-1.944-1.06a.878.878 0 01-.741-.996.886.886 0 011.003-.735zm-17.685.735a.878.878 0 01-.742.997c-1.29.19-1.944.548-1.944 1.059 0 .16 0 .491.798.793a.873.873 0 01-.314 1.693.897.897 0 01-.313-.057C.25 16.259 0 15.1 0 14.466c0-1.037.598-2.366 3.446-2.79.485-.06.929.257 1.002.735zM12.789 0c2.96 0 5.368 2.392 5.368 5.33 0 2.94-2.407 5.331-5.368 5.331h-.031a5.329 5.329 0 01-3.782-1.57 5.253 5.253 0 01-1.553-3.764C7.423 2.392 9.83 0 12.789 0zm0 1.75c-1.987 0-3.604 1.607-3.604 3.58a3.526 3.526 0 001.04 2.527 3.58 3.58 0 002.535 1.054l.03.875v-.875c1.987 0 3.605-1.605 3.605-3.58S14.777 1.75 12.789 1.75zm7.27-.607a4.222 4.222 0 013.566 4.172c-.004 2.094-1.58 3.89-3.665 4.181a.88.88 0 01-.994-.745.875.875 0 01.75-.989 2.494 2.494 0 002.147-2.45 2.473 2.473 0 00-2.09-2.443.876.876 0 01-.726-1.005.881.881 0 011.013-.721zm-13.528.72a.876.876 0 01-.726 1.006 2.474 2.474 0 00-2.09 2.446A2.493 2.493 0 005.86 7.762a.875.875 0 11-.243 1.734c-2.085-.29-3.66-2.087-3.664-4.179 0-2.082 1.5-3.837 3.566-4.174a.876.876 0 011.012.72z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        <li class="nav-item _header_nav_item">
                            <span id="_notify_btn" class="nav-link _header_nav_link _header_notify_btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none" viewBox="0 0 20 22">
                                    <path fill="#000" fill-opacity=".6" fill-rule="evenodd" d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z" clip-rule="evenodd" />
                                </svg>
                                <span class="_counting">6</span> 
                                <div id="_notify_drop" class="_notification_dropdown">
                                    <div class="_notifications_content">
                                        <h4 class="_notifications_content_title">Notifications</h4>
                                        <div class="_notification_box_right">
                                            <button type="button" class="_notification_box_right_link">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" fill="none" viewBox="0 0 4 17">
                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4"></circle>
                                                    <circle cx="2" cy="8" r="2" fill="#C4C4C4"></circle>
                                                    <circle cx="2" cy="15" r="2" fill="#C4C4C4"></circle>
                                                </svg>
                                            </button>
                                            <div class="_notifications_drop_right">
                                                <ul class="_notification_list">
                                                    <li class="_notification_item">
                                                        <span class="_notification_link">Mark as all read</span>
                                                    </li>
                                                    <li class="_notification_item">
                                                        <span class="_notification_link">Notifivations seetings</span>
                                                    </li>
                                                    <li class="_notification_item">
                                                        <span class="_notification_link">Open Notifications</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="_notifications_drop_box">
                                        <div class="_notifications_drop_btn_grp">
                                            <button class="_notifications_btn_link">
                                                All
                                            </button>
                                            <button class="_notifications_btn_link1">
                                                Unread
                                            </button>
                                        </div>
                                        <div class="_notifications_all">
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/friend-req.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        <span class="_notify_txt_link">
                                                            Steve Jobs
                                                        </span>
                                                        posted a link in your timeline.
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/profile-1.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        An admin changed the name of the group 
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa
                                                        </span>
                                                        to
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa 
                                                        </span>
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/friend-req.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        <span class="_notify_txt_link">
                                                            Steve Jobs
                                                        </span>
                                                        posted a link in your timeline.
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/profile-1.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        An admin changed the name of the group 
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa
                                                        </span>
                                                        to
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa 
                                                        </span>
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/friend-req.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        <span class="_notify_txt_link">
                                                            Steve Jobs
                                                        </span>
                                                        posted a link in your timeline.
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/profile-1.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        An admin changed the name of the group 
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa
                                                        </span>
                                                        to
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa 
                                                        </span>
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/friend-req.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        <span class="_notify_txt_link">
                                                            Steve Jobs
                                                        </span>
                                                        posted a link in your timeline.
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/profile-1.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        An admin changed the name of the group 
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa
                                                        </span>
                                                        to
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa 
                                                        </span>
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/friend-req.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        <span class="_notify_txt_link">
                                                            Steve Jobs
                                                        </span>
                                                        posted a link in your timeline.
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/profile-1.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        An admin changed the name of the group 
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa
                                                        </span>
                                                        to
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa 
                                                        </span>
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/friend-req.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        <span class="_notify_txt_link">
                                                            Steve Jobs
                                                        </span>
                                                        posted a link in your timeline.
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/profile-1.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        An admin changed the name of the group 
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa
                                                        </span>
                                                        to
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa 
                                                        </span>
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/friend-req.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        <span class="_notify_txt_link">
                                                            Steve Jobs
                                                        </span>
                                                        posted a link in your timeline.
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/profile-1.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        An admin changed the name of the group 
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa
                                                        </span>
                                                        to
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa 
                                                        </span>
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/friend-req.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        <span class="_notify_txt_link">
                                                            Steve Jobs
                                                        </span>
                                                        posted a link in your timeline.
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/profile-1.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        An admin changed the name of the group 
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa
                                                        </span>
                                                        to
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa 
                                                        </span>
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/friend-req.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        <span class="_notify_txt_link">
                                                            Steve Jobs
                                                        </span>
                                                        posted a link in your timeline.
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="_notification_box">
                                                <div class="_notification_image">
                                                    <img src="assets/images/profile-1.png" alt="Image" class="_notify_img"/>
                                                </div>
                                                <div class="_notification_txt">
                                                    <p class="_notification_para">
                                                        An admin changed the name of the group 
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa
                                                        </span>
                                                        to
                                                        <span class="_notify_txt_link">
                                                            Freelacer usa 
                                                        </span>
                                                    </p>
                                                    <div class="_nitification_time">
                                                        <span>42 miniutes ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </li>
                        <li class="nav-item _header_nav_item">
                            <a class="nav-link _header_nav_link" aria-current="page" href="chat.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" fill="none" viewBox="0 0 23 22">
                                    <path fill="#000" fill-opacity=".6" fill-rule="evenodd" d="M11.43 0c2.96 0 5.743 1.143 7.833 3.22 4.32 4.29 4.32 11.271 0 15.562C17.145 20.886 14.293 22 11.405 22c-1.575 0-3.16-.33-4.643-1.012-.437-.174-.847-.338-1.14-.338-.338.002-.793.158-1.232.308-.9.307-2.022.69-2.852-.131-.826-.822-.445-1.932-.138-2.826.152-.44.307-.895.307-1.239 0-.282-.137-.642-.347-1.161C-.57 11.46.322 6.47 3.596 3.22A11.04 11.04 0 0111.43 0zm0 1.535A9.5 9.5 0 004.69 4.307a9.463 9.463 0 00-1.91 10.686c.241.592.474 1.17.474 1.77 0 .598-.207 1.201-.39 1.733-.15.439-.378 1.1-.231 1.245.143.147.813-.085 1.255-.235.53-.18 1.133-.387 1.73-.391.597 0 1.161.225 1.758.463 3.655 1.679 7.98.915 10.796-1.881 3.716-3.693 3.716-9.7 0-13.391a9.5 9.5 0 00-6.74-2.77zm4.068 8.867c.57 0 1.03.458 1.03 1.024 0 .566-.46 1.023-1.03 1.023a1.023 1.023 0 11-.01-2.047h.01zm-4.131 0c.568 0 1.03.458 1.03 1.024 0 .566-.462 1.023-1.03 1.023a1.03 1.03 0 01-1.035-1.024c0-.566.455-1.023 1.025-1.023h.01zm-4.132 0c.568 0 1.03.458 1.03 1.024 0 .566-.462 1.023-1.03 1.023a1.022 1.022 0 11-.01-2.047h.01z" clip-rule="evenodd"></path>
                                </svg> <span class="_counting">2</span> 
                            </a>
                        </li>
                    </ul>
                    <div class="_header_nav_profile">
                        <div class="_header_nav_profile_image">
                            <img src="assets/images/profile.png" alt="Image" class="_nav_profile_img"/>
                        </div>
                        <div class="_header_nav_dropdown">
                            <p class="_header_nav_para">Dylan Field</p>
                            <button id="_profile_drop_show_btn" class="_header_nav_dropdown_btn _dropdown_toggle" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none" viewBox="0 0 10 6">
                                    <path fill="#112032" d="M5 5l.354.354L5 5.707l-.354-.353L5 5zm4.354-3.646l-4 4-.708-.708 4-4 .708.708zm-4.708 4l-4-4 .708-.708 4 4-.708.708z" />
                                </svg>
                            </button>
                        </div>
                        {/* <!-- dropdown --> */}
                        <div id="_prfoile_drop" class="_nav_profile_dropdown _profile_dropdown">
                            <div class="_nav_profile_dropdown_info">
                                <div class="_nav_profile_dropdown_image">
                                    <img src="assets/images/profile.png" alt="Image" class="_nav_drop_img"/>
                                </div>
                                <div class="_nav_profile_dropdown_info_txt">
                                    <h4 class="_nav_dropdown_title">Dylan Field</h4>
                                    <a href="profile.html" class="_nav_drop_profile">
                                        View Profile
                                    </a>
                                </div>
                            </div>
                            <hr>
                            <ul class="_nav_dropdown_list">
                                <li class="_nav_dropdown_list_item">
                                    <a href="#0" class="_nav_dropdown_link">
                                        <div class="_nav_drop_info">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none" viewBox="0 0 18 19">
                                                    <path fill="#377DFF" d="M9.584 0c.671 0 1.315.267 1.783.74.468.473.721 1.112.7 1.709l.009.14a.985.985 0 00.136.395c.145.242.382.418.659.488.276.071.57.03.849-.13l.155-.078c1.165-.538 2.563-.11 3.21.991l.58.99a.695.695 0 01.04.081l.055.107c.519 1.089.15 2.385-.838 3.043l-.244.15a1.046 1.046 0 00-.313.339 1.042 1.042 0 00-.11.805c.074.272.255.504.53.66l.158.1c.478.328.823.812.973 1.367.17.626.08 1.292-.257 1.86l-.625 1.022-.094.144c-.735 1.038-2.16 1.355-3.248.738l-.129-.066a1.123 1.123 0 00-.412-.095 1.087 1.087 0 00-.766.31c-.204.2-.317.471-.316.786l-.008.163C11.956 18.022 10.88 19 9.584 19h-1.17c-1.373 0-2.486-1.093-2.484-2.398l-.008-.14a.994.994 0 00-.14-.401 1.066 1.066 0 00-.652-.493 1.12 1.12 0 00-.852.127l-.169.083a2.526 2.526 0 01-1.698.122 2.47 2.47 0 01-1.488-1.154l-.604-1.024-.08-.152a2.404 2.404 0 01.975-3.132l.1-.061c.292-.199.467-.527.467-.877 0-.381-.207-.733-.569-.94l-.147-.092a2.419 2.419 0 01-.724-3.236l.615-.993a2.503 2.503 0 013.366-.912l.126.066c.13.058.269.089.403.09a1.08 1.08 0 001.086-1.068l.008-.185c.049-.57.301-1.106.713-1.513A2.5 2.5 0 018.414 0h1.17zm0 1.375h-1.17c-.287 0-.562.113-.764.312-.179.177-.288.41-.308.628l-.012.29c-.098 1.262-1.172 2.253-2.486 2.253a2.475 2.475 0 01-1.013-.231l-.182-.095a1.1 1.1 0 00-1.488.407l-.616.993a1.05 1.05 0 00.296 1.392l.247.153A2.43 2.43 0 013.181 9.5c0 .802-.401 1.552-1.095 2.023l-.147.091c-.486.276-.674.873-.448 1.342l.053.102.597 1.01c.14.248.374.431.652.509.246.069.51.05.714-.04l.103-.05a2.506 2.506 0 011.882-.248 2.456 2.456 0 011.823 2.1l.02.335c.059.535.52.95 1.079.95h1.17c.566 0 1.036-.427 1.08-.95l.005-.104a2.412 2.412 0 01.726-1.732 2.508 2.508 0 011.779-.713c.331.009.658.082.992.23l.3.15c.469.202 1.026.054 1.309-.344l.068-.105.61-1a1.045 1.045 0 00-.288-1.383l-.257-.16a2.435 2.435 0 01-1.006-1.389 2.393 2.393 0 01.25-1.847c.181-.31.429-.575.752-.795l.152-.095c.485-.278.672-.875.448-1.346l-.067-.127-.012-.027-.554-.945a1.095 1.095 0 00-1.27-.487l-.105.041-.098.049a2.515 2.515 0 01-1.88.259 2.47 2.47 0 01-1.511-1.122 2.367 2.367 0 01-.325-.97l-.012-.24a1.056 1.056 0 00-.307-.774 1.096 1.096 0 00-.779-.323zm-.58 5.02c1.744 0 3.16 1.39 3.16 3.105s-1.416 3.105-3.16 3.105c-1.746 0-3.161-1.39-3.161-3.105s1.415-3.105 3.16-3.105zm0 1.376c-.973 0-1.761.774-1.761 1.729 0 .955.788 1.73 1.76 1.73s1.76-.775 1.76-1.73-.788-1.73-1.76-1.73z"/>
                                                </svg>											  
                                            </span>
                                            Settings		
                                        </div>
                                        <button type="submit" class="_nav_drop_btn_link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none" viewBox="0 0 6 10">
                                                <path fill="#112032" d="M5 5l.354.354L5.707 5l-.353-.354L5 5zM1.354 9.354l4-4-.708-.708-4 4 .708.708zm4-4.708l-4-4-.708.708 4 4 .708-.708z" opacity=".5"/>
                                            </svg>												  
                                        </button>
                                    </a>
                                </li>
                                <li class="_nav_dropdown_list_item">
                                    <a href="#0" class="_nav_dropdown_link">
                                        <div class="_nav_drop_info">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="#377DFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19a9 9 0 100-18 9 9 0 000 18z"/>
                                                    <path stroke="#377DFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.38 7.3a2.7 2.7 0 015.248.9c0 1.8-2.7 2.7-2.7 2.7M10 14.5h.009"/>
                                                </svg>												
                                            </span>
                                            Help & Support		
                                        </div>
                                        <button type="submit" class="_nav_drop_btn_link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none" viewBox="0 0 6 10">
                                                <path fill="#112032" d="M5 5l.354.354L5.707 5l-.353-.354L5 5zM1.354 9.354l4-4-.708-.708-4 4 .708.708zm4-4.708l-4-4-.708.708 4 4 .708-.708z" opacity=".5"/>
                                            </svg>												  
                                        </button>
                                    </a>
                                </li>
                                <li class="_nav_dropdown_list_item">
                                    <a href="#0" class="_nav_dropdown_link">
                                        <div class="_nav_drop_info">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19">
                                                    <path stroke="#377DFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.667 18H2.889A1.889 1.889 0 011 16.111V2.89A1.889 1.889 0 012.889 1h3.778M13.277 14.222L18 9.5l-4.723-4.722M18 9.5H6.667"/>
                                                </svg>			
                                            </span>
                                            Log Out		
                                        </div>
                                        <button type="submit" class="_nav_drop_btn_link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" fill="none" viewBox="0 0 6 10">
                                                <path fill="#112032" d="M5 5l.354.354L5.707 5l-.353-.354L5 5zM1.354 9.354l4-4-.708-.708-4 4 .708.708zm4-4.708l-4-4-.708.708 4 4 .708-.708z" opacity=".5"/>
                                            </svg>												  
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* <!--Desktop Menu End--> */}
        {/* <!--Mobile Menu Start--> */}
        <div class="_header_mobile_menu">
            <div class="_header_mobile_menu_wrap">
                <div class="container">
                    <div  class="_header_mobile_menu">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="_header_mobile_menu_top_inner">
                                    <div class="_header_mobile_menu_logo">
                                        <a href="feed.html" clas="_mobile_logo_link">
                                            <img src="assets/images/logo.svg" alt="Image" class="_nav_logo"/>
                                        </a>
                                    </div>
                                    <div class="_header_mobile_menu_right">
                                        <form class="_header_form_grp">
                                            <a href="#0" class="_header_mobile_search"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
                                                    <circle cx="7" cy="7" r="6" stroke="#666"/>
                                                    <path stroke="#666" stroke-linecap="round" d="M16 16l-3-3"/>
                                                </svg>													  
                                            </a>
                                        </form>
                                        {/* <!-- <div class="_header_mobile_toggle"> */}
                                            <form action="/mobileMenu.html">
                                                <button type="submit" class="_header_mobile_btn_link" value="go to mobile menu">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none" viewBox="0 0 18 14">
                                                        <path stroke="#666" stroke-linecap="round" stroke-width="1.5" d="M1 1h16M1 7h16M1 13h16"/>
                                                    </svg>													  
                                                </button>
                                            </form>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        {/* <!--Mobile Menu End--> */}
        {/* <!-- Mobile Bottom Navigation --> */}
        <div class="_mobile_navigation_bottom_wrapper">
            <div class="_mobile_navigation_bottom_wrap">
                <div class="conatiner">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <ul class="_mobile_navigation_bottom_list">
                                <li class="_mobile_navigation_bottom_item">
                                    <a href="feed.html" class="_mobile_navigation_bottom_link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="none" viewBox="0 0 24 27">
                                            <path class="_mobile_svg" fill="#000" fill-opacity=".6" stroke="#666666" stroke-width="1.5" d="M1 13.042c0-2.094 0-3.141.431-4.061.432-.92 1.242-1.602 2.862-2.965l1.571-1.321C8.792 2.232 10.256 1 12 1c1.744 0 3.208 1.232 6.136 3.695l1.572 1.321c1.62 1.363 2.43 2.044 2.86 2.965.432.92.432 1.967.432 4.06v6.54c0 2.908 0 4.362-.92 5.265-.921.904-2.403.904-5.366.904H7.286c-2.963 0-4.445 0-5.365-.904C1 23.944 1 22.49 1 19.581v-6.54z"/>
                                            <path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.07 18.497h5.857v7.253H9.07v-7.253z"/>
                                        </svg>																						
                                    </a>
                                </li>
                                <li class="_mobile_navigation_bottom_item">
                                    <a href="friend-request.html" class="_mobile_navigation_bottom_link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20" fill="none" viewBox="0 0 27 20">
                                            <path class="_dark_svg" fill="#000" fill-opacity=".6" fill-rule="evenodd" d="M13.334 12.405h.138l.31.001c2.364.015 7.768.247 7.768 3.81 0 3.538-5.215 3.769-7.732 3.784h-.932c-2.364-.015-7.77-.247-7.77-3.805 0-3.543 5.405-3.774 7.77-3.789l.31-.001h.138zm0 1.787c-2.91 0-6.38.348-6.38 2.003 0 1.619 3.263 1.997 6.114 2.018l.266.001c2.91 0 6.379-.346 6.379-1.998 0-1.673-3.469-2.024-6.38-2.024zm9.742-2.27c2.967.432 3.59 1.787 3.59 2.849 0 .648-.261 1.83-2.013 2.48a.953.953 0 01-.327.058.919.919 0 01-.858-.575.886.886 0 01.531-1.153c.83-.307.83-.647.83-.81 0-.522-.682-.886-2.027-1.082a.9.9 0 01-.772-1.017c.074-.488.54-.814 1.046-.75zm-18.439.75a.9.9 0 01-.773 1.017c-1.345.196-2.027.56-2.027 1.082 0 .163 0 .501.832.81a.886.886 0 01.531 1.153.92.92 0 01-.858.575.953.953 0 01-.327-.058C.262 16.6 0 15.418 0 14.77c0-1.06.623-2.417 3.592-2.85.506-.061.97.263 1.045.751zM13.334 0c3.086 0 5.596 2.442 5.596 5.442 0 3.001-2.51 5.443-5.596 5.443H13.3a5.616 5.616 0 01-3.943-1.603A5.308 5.308 0 017.74 5.439C7.739 2.442 10.249 0 13.334 0zm0 1.787c-2.072 0-3.758 1.64-3.758 3.655-.003.977.381 1.89 1.085 2.58a3.772 3.772 0 002.642 1.076l.03.894v-.894c2.073 0 3.76-1.639 3.76-3.656 0-2.015-1.687-3.655-3.76-3.655zm7.58-.62c2.153.344 3.717 2.136 3.717 4.26-.004 2.138-1.647 3.972-3.82 4.269a.911.911 0 01-1.036-.761.897.897 0 01.782-1.01c1.273-.173 2.235-1.248 2.237-2.501 0-1.242-.916-2.293-2.179-2.494a.897.897 0 01-.756-1.027.917.917 0 011.055-.736zM6.81 1.903a.897.897 0 01-.757 1.027C4.79 3.13 3.874 4.182 3.874 5.426c.002 1.251.963 2.327 2.236 2.5.503.067.853.519.783 1.008a.912.912 0 01-1.036.762c-2.175-.297-3.816-2.131-3.82-4.267 0-2.126 1.563-3.918 3.717-4.262.515-.079.972.251 1.055.736z" clip-rule="evenodd"/>
                                        </svg>											  
                                    </a>
                                </li>
                                <li class="_mobile_navigation_bottom_item">
                                    <a href="notification(mobile).html" class="_mobile_navigation_bottom_link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" fill="none" viewBox="0 0 25 27">
                                            <path class="_dark_svg" fill="#000" fill-opacity=".6" fill-rule="evenodd" d="M10.17 23.46c.671.709 1.534 1.098 2.43 1.098.9 0 1.767-.39 2.44-1.099.36-.377.976-.407 1.374-.067.4.34.432.923.073 1.3-1.049 1.101-2.428 1.708-3.886 1.708h-.003c-1.454-.001-2.831-.608-3.875-1.71a.885.885 0 01.072-1.298 1.01 1.01 0 011.374.068zM12.663 0c5.768 0 9.642 4.251 9.642 8.22 0 2.043.549 2.909 1.131 3.827.576.906 1.229 1.935 1.229 3.88-.453 4.97-5.935 5.375-12.002 5.375-6.067 0-11.55-.405-11.998-5.296-.004-2.024.649-3.053 1.225-3.959l.203-.324c.501-.814.928-1.7.928-3.502C3.022 4.25 6.897 0 12.664 0zm0 1.842C8.13 1.842 4.97 5.204 4.97 8.22c0 2.553-.75 3.733-1.41 4.774-.531.836-.95 1.497-.95 2.932.216 2.316 1.831 3.533 10.055 3.533 8.178 0 9.844-1.271 10.06-3.613-.004-1.355-.423-2.016-.954-2.852-.662-1.041-1.41-2.221-1.41-4.774 0-3.017-3.161-6.38-7.696-6.38z" clip-rule="evenodd"/>
                                        </svg>		
                                        <span class="_counting">6</span>									  
                                    </a>
                                </li>
                                <li class="_mobile_navigation_bottom_item">
                                    <a href="chat_list(for_mbl).html" class="_mobile_navigation_bottom_link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path class="_dark_svg" fill="#000" fill-opacity=".6" fill-rule="evenodd" d="M12.002 0c3.208 0 6.223 1.239 8.487 3.489 4.681 4.648 4.681 12.211 0 16.86-2.294 2.28-5.384 3.486-8.514 3.486-1.706 0-3.423-.358-5.03-1.097-.474-.188-.917-.366-1.235-.366-.366.003-.859.171-1.335.334-.976.333-2.19.748-3.09-.142-.895-.89-.482-2.093-.149-3.061.164-.477.333-.97.333-1.342 0-.306-.149-.697-.376-1.259C-1 12.417-.032 7.011 3.516 3.49A11.96 11.96 0 0112.002 0zm.001 1.663a10.293 10.293 0 00-7.304 3.003A10.253 10.253 0 002.63 16.244c.261.642.514 1.267.514 1.917 0 .649-.225 1.302-.422 1.878-.163.475-.41 1.191-.252 1.349.156.16.881-.092 1.36-.255.576-.195 1.228-.42 1.874-.424.648 0 1.259.244 1.905.503 3.96 1.818 8.645.99 11.697-2.039 4.026-4 4.026-10.509 0-14.508a10.294 10.294 0 00-7.303-3.002zm4.407 9.607c.617 0 1.117.495 1.117 1.109 0 .613-.5 1.109-1.117 1.109a1.116 1.116 0 01-1.12-1.11c0-.613.494-1.108 1.11-1.108h.01zm-4.476 0c.616 0 1.117.495 1.117 1.109 0 .613-.5 1.109-1.117 1.109a1.116 1.116 0 01-1.121-1.11c0-.613.493-1.108 1.11-1.108h.01zm-4.477 0c.617 0 1.117.495 1.117 1.109 0 .613-.5 1.109-1.117 1.109a1.116 1.116 0 01-1.12-1.11c0-.613.494-1.108 1.11-1.108h.01z" clip-rule="evenodd"/>
                                        </svg>			
                                        <span class="_counting">2</span>								  
                                    </a>
                                </li>
                                <div class="_header_mobile_toggle">
                                    <form action="/mobileMenu.html">
                                        <button type="submit" class="_header_mobile_btn_link" value="go to mobile menu">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none" viewBox="0 0 18 14">
                                                <path stroke="#666" stroke-linecap="round" stroke-width="1.5" d="M1 1h16M1 7h16M1 13h16"/>
                                            </svg>													  
                                        </button>
                                    </form>
                                </div>
                                {/* <!-- <li class="_mobile_navigation_bottom_item"> */}
                                    <a href="profile.html" class="_mobile_navigation_bottom_link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" fill="none" viewBox="0 0 29 28">
                                            <g opacity=".6">
                                            <path class="_mobile_svg1 _dark_svg" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M23.999 24.5v-2.333a4.667 4.667 0 00-4.667-4.667H9.999a4.667 4.667 0 00-4.667 4.667V24.5M14.667 12.833a4.667 4.667 0 100-9.333 4.667 4.667 0 000 9.333z"/>
                                            </g>
                                        </svg>											  
                                    </a>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Mobile Bottom Navigation End --> */}
    </header>
    {/* <!--Header End--> */}
    {/* <!-- Profile Section --> */}
    <div class="_profile_wrapper">
        <div class="_profile_wrap">
            <div class="container">
                <div class="_profile_container_top">
                    <div class="_profile_container_top_inner">
                        <div class="_profile_cover_wrap">
                            <div class="_profile_cover">
                                <img src="assets/images/profile-cover-img.png" alt="cover img" class="_profile_cover_img"/>
                            </div>
                            <div class="_profile_card_inner">
                                <div class="_profile_card">
                                    <div class="_profile_card_pro_pic ">
                                        <img src="assets/images/profile-1.png" alt="" title="" class="_profile_card_pro_img"/>
                                    </div>
                                    <div class="_profile_card_info">
                                        <h4 class="_profile_card_info_title">Karim Saif</h4>
                                        <p class="_profile_card_info_para">UI/UX Designer</p>
                                    </div>
                                    <div class="_profile_card_progress">
                                        <div class="_profile_card_progreess_bar"></div>
                                        <div class="_profile_card_progreess_bar_image">
                                            <img src="assets/images/line.svg" alt="Image" class="_progress_image"/>
                                        </div>
                                        {/* <!----> */}
                                        <div class="_profile_card_progress_txt">
                                            <p class="_profile_card_progress_txt_para">Profile Completed</p>
                                            <p class="_profile_card_progress_txt_percent">55%</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--For Desktop--> */}
                                <div class="_profile_card_upload">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                        <path stroke="#000" d="M1 9c0-3.771 0-5.657 1.172-6.828C3.343 1 5.229 1 9 1h2c3.771 0 5.657 0 6.828 1.172C19 3.343 19 5.229 19 9v2c0 3.771 0 5.657-1.172 6.828C16.657 19 14.771 19 11 19H9c-3.771 0-5.657 0-6.828-1.172C1 16.657 1 14.771 1 11V9z" />
                                        <path fill="#000" fill-rule="evenodd" d="M6.998 9.162a1.5 1.5 0 00-.799-.154c-.216.019-.471.129-.87.45-.402.323-.885.805-1.566 1.486l-1.91 1.91-.707-.708 1.91-1.91.022-.021c.654-.655 1.175-1.175 1.623-1.536.456-.367.902-.624 1.414-.667a2.5 2.5 0 011.33.256c.46.23.779.635 1.066 1.145.282.501.572 1.178.937 2.028l.012.029.053.124c.167.39.279.65.38.835.1.183.157.23.181.245a.5.5 0 00.35.067c.028-.005.098-.027.26-.16a11 11 0 00.662-.634l.015-.016c.401-.4.724-.723 1.008-.962.292-.246.576-.434.909-.534a2.5 2.5 0 011.444 0c.333.1.617.288.91.534.283.239.606.562 1.007.962l.015.016 1.7 1.7-.707.706-1.7-1.699c-.42-.42-.713-.712-.96-.92-.242-.205-.405-.297-.554-.342a1.5 1.5 0 00-.866 0c-.149.045-.312.137-.554.341-.247.209-.54.501-.96.921l-.017.017c-.278.279-.512.512-.716.68-.209.173-.44.325-.723.375a1.5 1.5 0 01-1.05-.202c-.243-.151-.402-.378-.532-.617a11.395 11.395 0 01-.412-.896l-.01-.023-.053-.124c-.379-.886-.648-1.512-.9-1.961-.252-.447-.448-.644-.642-.741z" clip-rule="evenodd" />
                                        <circle cx="14.5" cy="5.5" r="1.5" fill="#000" />
                                    </svg>
                                    <p class="_profile_card_upload_txt">Edit Cover Photo</p>
                                </div>
                                {/* <!--For Desktop--> */}
                                {/* <!--For Mobile--> */}
                                <div class="_profile_card_upload_mobile">
                                    <div class="_profile_cover_upload">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                            <path stroke="#000" d="M1 9c0-3.771 0-5.657 1.172-6.828C3.343 1 5.229 1 9 1h2c3.771 0 5.657 0 6.828 1.172C19 3.343 19 5.229 19 9v2c0 3.771 0 5.657-1.172 6.828C16.657 19 14.771 19 11 19H9c-3.771 0-5.657 0-6.828-1.172C1 16.657 1 14.771 1 11V9z" />
                                            <path fill="#000" fill-rule="evenodd" d="M6.998 9.162a1.5 1.5 0 00-.799-.154c-.216.019-.471.129-.87.45-.402.323-.885.805-1.566 1.486l-1.91 1.91-.707-.708 1.91-1.91.022-.021c.654-.655 1.175-1.175 1.623-1.536.456-.367.902-.624 1.414-.667a2.5 2.5 0 011.33.256c.46.23.779.635 1.066 1.145.282.501.572 1.178.937 2.028l.012.029.053.124c.167.39.279.65.38.835.1.183.157.23.181.245a.5.5 0 00.35.067c.028-.005.098-.027.26-.16a11 11 0 00.662-.634l.015-.016c.401-.4.724-.723 1.008-.962.292-.246.576-.434.909-.534a2.5 2.5 0 011.444 0c.333.1.617.288.91.534.283.239.606.562 1.007.962l.015.016 1.7 1.7-.707.706-1.7-1.699c-.42-.42-.713-.712-.96-.92-.242-.205-.405-.297-.554-.342a1.5 1.5 0 00-.866 0c-.149.045-.312.137-.554.341-.247.209-.54.501-.96.921l-.017.017c-.278.279-.512.512-.716.68-.209.173-.44.325-.723.375a1.5 1.5 0 01-1.05-.202c-.243-.151-.402-.378-.532-.617a11.395 11.395 0 01-.412-.896l-.01-.023-.053-.124c-.379-.886-.648-1.512-.9-1.961-.252-.447-.448-.644-.642-.741z" clip-rule="evenodd" />
                                            <circle cx="14.5" cy="5.5" r="1.5" fill="#000" />
                                        </svg>
                                    </div>
                                </div>
                                {/* <!--For Mobile--> */}
                            </div>
                        </div>
                        {/* <!--For Mobile--> */}
                        <div class="_profile_info_wrap">
                            <div class="_profile_info_des">
                                <div class="_profile_info_des_image">
                                    <img src="assets/images/profile-1.png" alt="" title="" class="_profile_card_pro_img"/>
                                    <div class="_profile_info_des_upload_icon">
                                        <button class="_profile_info_des_upload_icon_link" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15.333 12.667A1.334 1.334 0 0113.999 14H2a1.334 1.334 0 01-1.333-1.333V5.333A1.333 1.333 0 011.999 4h2.667l1.333-2h4l1.334 2h2.666a1.334 1.334 0 011.334 1.333v7.334z"/>
                                                <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8 11.333A2.667 2.667 0 108 6a2.667 2.667 0 000 5.333z"/>
                                            </svg>											  
                                        </button>
                                    </div>
                                </div>
                                <div class="_profile_info_des_txt">
                                    <h4 class="_profile_card_info_title">Karim Saif</h4>
                                    <p class="_profile_card_info_para">UI/UX Designer</p>
                                    <div class="_profile_card_progress_txt">
                                        <p class="_profile_card_progress_txt_para">Profile Completed</p>
                                        <p class="_profile_card_progress_txt_percent">55%</p>
                                        <div class="_profile_card_progreess_bar"></div>
                                        <div class="_profile_card_progreess_bar_image">
                                            <img src="assets/images/line.svg" alt="Image" class="_progress_image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--For Mobile--> */}
                        {/* <!--For Desktop--> */}
                        <div class="_profile_nav_wrap">
                            <div class="_top_inner_content _padd_t24 _padd_b24">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div class="_top_inner_content_area">
                                                <div class="_top_inner_content_area_left">
                                                    <ul class="_top_inner_content_area_left_list">
                                                        <li class="_top_inner_content_area_left_item"> <a href="#0" class="_top_inner_content_area_left_link _top_inner_content_area_left_link_active">Feed</a>
                                                        </li>
                                                        <li class="_top_inner_content_area_left_item"> <a href="#0" class="_top_inner_content_area_left_link">About</a>
                                                        </li>
                                                        <li class="_top_inner_content_area_left_item"> <a href="#0" class="_top_inner_content_area_left_link">Friends</a>
                                                        </li>
                                                        <li class="_top_inner_content_area_left_item"> <a href="#0" class="_top_inner_content_area_left_link">Photos</a>
                                                        </li>
                                                        <li class="_top_inner_content_area_left_item"> <a href="#0" class="_top_inner_content_area_left_link">More</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="_top_inner_content_area_right">
                                                    <div class="_top_inner_content_area_btn">
                                                        <button type="button" class="_top_inner_content_area_btn_link"> <span>
                                                                + Add Stories									  
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div class="_top_inner_content_area_btn">
                                                        <button type="button" class="_top_inner_content_area_btn_link"> <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none" viewBox="0 0 15 16">
                                                                    <path stroke="#666" d="M1.93 14.783h0l.021-.005h0l2.633-.659.045-.01c.223-.056.42-.105.599-.207.179-.101.322-.245.484-.407l.033-.033 7.194-7.194h0l.024-.024c.313-.313.583-.583.77-.828.2-.263.353-.556.353-.916s-.152-.653-.353-.916c-.187-.245-.457-.515-.77-.829l-.024-.023-.353.354.353-.354-.171-.171-.024-.024c-.313-.313-.583-.583-.828-.77-.263-.2-.556-.353-.916-.353s-.653.152-.916.353c-.245.187-.515.457-.829.77l-.023.024-7.194 7.194-.033.033c-.162.162-.306.305-.407.484-.102.18-.15.376-.206.6l-.011.044-.664 2.654a9.274 9.274 0 00-.007.027c-.039.157-.08.324-.095.465-.015.154-.011.415.198.625.21.21.47.213.625.197a3.43 3.43 0 00.492-.101z"/>
                                                                    <path fill="#666" d="M8.5 3l3-2 3 3-2 3-4-4z"/>
                                                                </svg>
                                                                Edit Profile											  
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div class="_top_inner_content_area_btn">
                                                        <button type="button" class="_top_inner_content_area_btn_link">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" fill="none" viewBox="0 0 4 17">
                                                                <circle class="_circle" cx="2" cy="2" r="2" fill="#666"></circle>
                                                                <circle class="_circle" cx="2" cy="8" r="2" fill="#666"></circle>
                                                                <circle class="_circle" cx="2" cy="15" r="2" fill="#666"></circle>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--For Desktop--> */}
                        {/* <!--For Mobile--> */}
                        <div class="_profile_nav_wrap_mobile _mar_t4">
                            <div class="_top_inner_content_mobile _padd_t24 _padd_b24">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div class="_top_inner_content_area_mobile">
                                                <div class="_top_inner_content_area_left">
                                                    <ul class="_top_inner_content_area_left_list">
                                                        <li class="_top_inner_content_area_left_item"> <a href="#0" class="_top_inner_content_area_left_link _top_inner_content_area_left_link_active">Feed</a>
                                                        </li>
                                                        <li class="_top_inner_content_area_left_item"> <a href="#0" class="_top_inner_content_area_left_link">About</a>
                                                        </li>
                                                        <li class="_top_inner_content_area_left_item">
                                                            <a href="#0" class="_top_inner_content_area_left_link">More</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="_top_inner_content_area_right">
                                                    <div class="_top_inner_content_area_btn">
                                                        <button type="button" class="_top_inner_content_area_btn_link"> 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                                                                <path stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3.75v10.5M3.75 9h10.5"/>
                                                            </svg>															  
                                                        </button>
                                                    </div>
                                                    <div class="_top_inner_content_area_btn">
                                                        <button type="button" class="_top_inner_content_area_btn_link"> <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none" viewBox="0 0 15 16">
                                                                    <path stroke="#666" d="M1.93 14.783h0l.021-.005h0l2.633-.659.045-.01c.223-.056.42-.105.599-.207.179-.101.322-.245.484-.407l.033-.033 7.194-7.194h0l.024-.024c.313-.313.583-.583.77-.828.2-.263.353-.556.353-.916s-.152-.653-.353-.916c-.187-.245-.457-.515-.77-.829l-.024-.023-.353.354.353-.354-.171-.171-.024-.024c-.313-.313-.583-.583-.828-.77-.263-.2-.556-.353-.916-.353s-.653.152-.916.353c-.245.187-.515.457-.829.77l-.023.024-7.194 7.194-.033.033c-.162.162-.306.305-.407.484-.102.18-.15.376-.206.6l-.011.044-.664 2.654a9.274 9.274 0 00-.007.027c-.039.157-.08.324-.095.465-.015.154-.011.415.198.625.21.21.47.213.625.197a3.43 3.43 0 00.492-.101z"></path>
                                                                    <path fill="#666" d="M8.5 3l3-2 3 3-2 3-4-4z"></path>
                                                                </svg>											  
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--For Mobile--> */}
                    </div>
                </div>
                <div class="_layout_inner_wrap_area">
                    <div class="row">
                        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                            <div class="_layout_left_wrap">
                                <div class="_layout_left_sidebar_inner">
                                    <div class="_left_inner_area_introduction _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                                        <div class="_left_inner_event_content">
                                            <h4 class="_left_inner_event_title _title5">Introduction</h4>
                                            <a href="#0" class="_left_inner_event_link">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" fill="none" viewBox="0 0 4 17">
                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4"></circle>
                                                    <circle cx="2" cy="8" r="2" fill="#C4C4C4"></circle>
                                                    <circle cx="2" cy="15" r="2" fill="#C4C4C4"></circle>
                                                </svg>
                                            </a>
                                        </div>
                                        <ul class="_left_inner_area_explore_list">
                                            <li class="_left_inner_area_explore_item _explore_item">
                                                <a href="#0" class="_left_inner_area_explore_link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none" viewBox="0 0 22 20">
                                                        <path fill="#666" d="M21.36 2.578h-5.848v-.644A1.936 1.936 0 0013.578 0H8.422a1.936 1.936 0 00-1.934 1.934v.644H.645A.646.646 0 000 3.223v14.18c0 1.066.867 1.933 1.934 1.933h18.132A1.936 1.936 0 0022 17.402V3.236v-.002c-.025-.424-.285-.653-.64-.656zM7.777 1.934c0-.356.29-.645.645-.645h5.156c.356 0 .645.29.645.645v.644H7.777v-.644zm12.684 1.933L18.46 9.872a.643.643 0 01-.612.44h-3.625v-.644a.645.645 0 00-.645-.645H8.422a.644.644 0 00-.645.645v.645H4.152a.643.643 0 01-.612-.441L1.54 3.867H20.46zm-7.527 6.446v1.289H9.066v-1.29h3.868zm7.777 7.09c0 .355-.29.644-.645.644H1.934a.645.645 0 01-.645-.645V7.194l1.028 3.085c.264.791 1.001 1.323 1.835 1.323h3.625v.644c0 .356.289.645.645.645h5.156a.645.645 0 00.645-.645v-.644h3.625a1.93 1.93 0 001.835-1.323l1.028-3.085v10.208z" />
                                                    </svg>Designer At Ifinity Tech</a>
                                            </li>
                                            <li class="_left_inner_area_explore_item">
                                                <a href="#0" class="_left_inner_area_explore_link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none" viewBox="0 0 29 19">
                                                        <path fill="#666" d="M27.3 11.21V6.69l1.309-.47A.622.622 0 0029 5.625c0-.27-.158-.51-.391-.594l-13.934-5a.517.517 0 00-.35 0L.39 5.03A.623.623 0 000 5.625c0 .27.158.51.391.594l5.613 2.014v4.892c0 1.268.947 2.413 2.666 3.226 1.566.741 3.637 1.149 5.83 1.149s4.264-.408 5.83-1.149c1.72-.813 2.666-1.958 2.666-3.226V8.233l3.172-1.138v4.115c-.976.278-1.7 1.258-1.7 2.421v1.362c0 .956-.352 1.893-.966 2.571a.673.673 0 00-.123.681.569.569 0 00.523.386h1.133c2.186 0 3.965-1.963 3.965-4.375v-.625c0-1.163-.723-2.143-1.7-2.42zM14.5 1.282l12.102 4.343L14.5 9.968 2.398 5.625 14.5 1.282zm7.363 11.843c0 1.478-3.024 3.125-7.363 3.125-4.34 0-7.363-1.647-7.363-3.125V8.64l7.188 2.58a.516.516 0 00.35 0l7.188-2.58v4.485z" />
                                                    </svg>University of California</a>
                                            </li>
                                            <li class="_left_inner_area_explore_item">
                                                <a href="#0" class="_left_inner_area_explore_link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none" viewBox="0 0 18 18">
                                                        <path stroke="#666" stroke-width="1.2" d="M13.707 11.707l2.648 2.648a.912.912 0 010 1.29 5.471 5.471 0 01-7.151.508l-1.575-1.182a22.997 22.997 0 01-4.6-4.6L1.847 8.796a5.471 5.471 0 01.508-7.151.912.912 0 011.29 0l2.648 2.648a1 1 0 010 1.414L5.272 6.728a.533.533 0 00-.1.616 12.263 12.263 0 005.484 5.484.533.533 0 00.616-.1l1.02-1.02a1 1 0 011.415 0z" />
                                                    </svg>000 141 582 258</a>
                                            </li>
                                            <li class="_left_inner_area_explore_item">
                                                <a href="#0" class="_left_inner_area_explore_link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none" viewBox="0 0 22 24">
                                                        <path fill="#666" d="M13.704 2c2.8 0 4.585 1.435 4.585 4.258V20.33c0 .443-.157.867-.436 1.18-.279.313-.658.489-1.063.489a1.456 1.456 0 01-.708-.203l-5.132-3.134-5.112 3.14c-.615.36-1.361.194-1.829-.405l-.09-.126-.085-.155a1.913 1.913 0 01-.176-.786V6.434C3.658 3.5 5.404 2 8.243 2h5.46zm0 1.448h-5.46c-2.191 0-3.295.948-3.295 2.986V20.32c0 .044.01.088 0 .07l.034.063c.059.09.17.12.247.074l5.11-3.138c.38-.23.84-.23 1.222.001l5.124 3.128a.252.252 0 00.114.035.188.188 0 00.14-.064.236.236 0 00.058-.157V6.258c0-1.9-1.132-2.81-3.294-2.81zm.386 4.869c.357 0 .646.324.646.723 0 .367-.243.67-.559.718l-.087.006H7.81c-.357 0-.646-.324-.646-.723 0-.367.243-.67.558-.718l.088-.006h6.28z"></path>
                                                    </svg>Bookmarks</a>
                                            </li>
                                            <li class="_left_inner_area_explore_item _explore_item">
                                                <a href="#0" class="_left_inner_area_explore_link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none" viewBox="0 0 18 20">
                                                        <path fill="#666" d="M9.398 18.82l-.274-.535.274.534zm-.796 0l.274-.535-.274.534zM16.4 8.727c0 2.68-1.381 4.851-3.018 6.484-1.637 1.633-3.476 2.672-4.258 3.073l.548 1.068c.835-.428 2.797-1.535 4.557-3.291 1.76-1.755 3.371-4.215 3.371-7.334h-1.2zM9 1.328a7.4 7.4 0 017.4 7.4h1.2A8.6 8.6 0 009 .128v1.2zm-7.4 7.4a7.4 7.4 0 017.4-7.4v-1.2a8.6 8.6 0 00-8.6 8.6h1.2zm7.276 9.557c-.782-.4-2.621-1.44-4.258-3.073S1.6 11.408 1.6 8.728H.4c0 3.12 1.611 5.579 3.37 7.334 1.761 1.756 3.723 2.863 4.558 3.291l.548-1.068zm.248 0a.262.262 0 01-.248 0l-.548 1.068c.425.218.919.218 1.344 0l-.548-1.068zm2.705-9.557A2.829 2.829 0 019 11.557v1.2a4.029 4.029 0 004.029-4.029h-1.2zM9 5.9a2.829 2.829 0 012.829 2.828h1.2A4.029 4.029 0 009 4.7v1.2zM6.171 8.728A2.829 2.829 0 019 5.9V4.7a4.029 4.029 0 00-4.029 4.028h1.2zM9 11.557a2.829 2.829 0 01-2.829-2.829h-1.2A4.029 4.029 0 009 12.757v-1.2z" />
                                                    </svg>14/A City Road, West California, USA</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="_left_inner_area_photos _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                                        <div class="_left_inner_area_photo_content _mar_b24">
                                            <h4 class="_left_inner_area_photo_content_title _title5">Photos</h4>
                                            <span class="_left_inner_area_photo_content_txt">
                                                <a class="_left_inner_area_photo_content_txt_link" href="#0">See All</a>
                                            </span>
                                        </div>
                                        <div class="_left_inner_area_photos_area">
                                            <div class="_left_inner_area_photos_box">
                                                <img src="assets/images/friends_img.png" alt="Image" class="_photo_img"/>
                                            </div>
                                            <div class="_left_inner_area_photos_box">
                                                <img src="assets/images/photos1.png" alt="Image" class="_photo_img"/>
                                            </div>
                                            <div class="_left_inner_area_photos_box">
                                                <img src="assets/images/photos2.png" alt="Image" class="_photo_img"/>
                                            </div>
                                            <div class="_left_inner_area_photos_box">
                                                <img src="assets/images/photos3.png" alt="Image" class="_photo_img"/>
                                            </div>
                                            <div class="_left_inner_area_photos_box">
                                                <img src="assets/images/photos5.png" alt="Image" class="_photo_img"/>
                                            </div>
                                            <div class="_left_inner_area_photos_box">
                                                <img src="assets/images/photos6.png" alt="Image" class="_photo_img"/>
                                            </div>
                                            <div class="_left_inner_area_photos_box">
                                                <img src="assets/images/photos7.png" alt="Image" class="_photo_img"/>
                                            </div>
                                            <div class="_left_inner_area_photos_box">
                                                <img src="assets/images/photos8.png" alt="Image" class="_photo_img"/>
                                            </div>
                                            <div class="_left_inner_area_photos_box">
                                                <img src="assets/images/photos9.png" alt="Image" class="_photo_img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="_layout_middle_wrap">
                                <div class="_layout_middle_inner">
                                    <div class="_feed_inner_text_area  _b_radious6 _padd_b24 _padd_t24 _padd_r24 _padd_l24 _mar_b16">
                                        <div class="_feed_inner_text_area_box">
                                            <div class="_feed_inner_text_area_box_image">
                                                <img src="assets/images/txt_img.png" alt="Image" class="_txt_img"/>
                                            </div>
                                            <div class="form-floating _feed_inner_text_area_box_form ">
                                                <textarea class="form-control _textarea" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                                <label class="_feed_textarea_label" for="floatingTextarea">Write something ...
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" fill="none" viewBox="0 0 23 24">
                                                        <path fill="#666" d="M19.504 19.209c.332 0 .601.289.601.646 0 .326-.226.596-.52.64l-.081.005h-6.276c-.332 0-.602-.289-.602-.645 0-.327.227-.597.52-.64l.082-.006h6.276zM13.4 4.417c1.139-1.223 2.986-1.223 4.125 0l1.182 1.268c1.14 1.223 1.14 3.205 0 4.427L9.82 19.649a2.619 2.619 0 01-1.916.85h-3.64c-.337 0-.61-.298-.6-.66l.09-3.941a3.019 3.019 0 01.794-1.982l8.852-9.5zm-.688 2.562l-7.313 7.85a1.68 1.68 0 00-.441 1.101l-.077 3.278h3.023c.356 0 .698-.133.968-.376l.098-.096 7.35-7.887-3.608-3.87zm3.962-1.65a1.633 1.633 0 00-2.423 0l-.688.737 3.606 3.87.688-.737c.631-.678.666-1.755.105-2.477l-.105-.124-1.183-1.268z"></path>
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>
                                        {/* <!--For Desktop--> */}
                                        <div class="_feed_inner_text_area_bottom">
                                            <div class="_feed_inner_text_area_item">
                                                <div class="_feed_inner_text_area_bottom_photo _feed_common">
                                                    <button type="button" class="_feed_inner_text_area_bottom_photo_link"> <span class="_feed_inner_text_area_bottom_photo_iamge _mar_img"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                                        <path fill="#666" d="M13.916 0c3.109 0 5.18 2.429 5.18 5.914v8.17c0 3.486-2.072 5.916-5.18 5.916H5.999C2.89 20 .827 17.572.827 14.085v-8.17C.827 2.43 2.897 0 6 0h7.917zm0 1.504H5.999c-2.321 0-3.799 1.735-3.799 4.41v8.17c0 2.68 1.472 4.412 3.799 4.412h7.917c2.328 0 3.807-1.734 3.807-4.411v-8.17c0-2.678-1.478-4.411-3.807-4.411zm.65 8.68l.12.125 1.9 2.147a.803.803 0 01-.016 1.063.642.642 0 01-.894.058l-.076-.074-1.9-2.148a.806.806 0 00-1.205-.028l-.074.087-2.04 2.717c-.722.963-2.02 1.066-2.86.26l-.111-.116-.814-.91a.562.562 0 00-.793-.07l-.075.073-1.4 1.617a.645.645 0 01-.97.029.805.805 0 01-.09-.977l.064-.086 1.4-1.617c.736-.852 1.95-.897 2.734-.137l.114.12.81.905a.587.587 0 00.861.033l.07-.078 2.04-2.718c.81-1.08 2.27-1.19 3.205-.275zM6.831 4.64c1.265 0 2.292 1.125 2.292 2.51 0 1.386-1.027 2.511-2.292 2.511S4.54 8.537 4.54 7.152c0-1.386 1.026-2.51 2.291-2.51zm0 1.504c-.507 0-.918.451-.918 1.007 0 .555.411 1.006.918 1.006.507 0 .919-.451.919-1.006 0-.556-.412-1.007-.919-1.007z"></path>
                                                    </svg></span>
                                                        Photo</button>
                                                </div>
                                                <div class="_feed_inner_text_area_bottom_video _feed_common">
                                                    <button type="button" class="_feed_inner_text_area_bottom_photo_link"> <span class="_feed_inner_text_area_bottom_photo_iamge _mar_img">   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
                                                        <path fill="#666" d="M11.485 4.5c2.213 0 3.753 1.534 3.917 3.784l2.418-1.082c1.047-.468 2.188.327 2.271 1.533l.005.141v6.64c0 1.237-1.103 2.093-2.155 1.72l-.121-.047-2.418-1.083c-.164 2.25-1.708 3.785-3.917 3.785H5.76c-2.343 0-3.932-1.72-3.932-4.188V8.688c0-2.47 1.589-4.188 3.932-4.188h5.726zm0 1.5H5.76C4.169 6 3.197 7.05 3.197 8.688v7.015c0 1.636.972 2.688 2.562 2.688h5.726c1.586 0 2.562-1.054 2.562-2.688v-.686-6.329c0-1.636-.973-2.688-2.562-2.688zM18.4 8.57l-.062.02-2.921 1.306v4.596l2.921 1.307c.165.073.343-.036.38-.215l.008-.07V8.876c0-.195-.16-.334-.326-.305z"></path>
                                                    </svg>    
                                                    </span>
                                                        Video</button>
                                                </div>
                                                <div class="_feed_inner_text_area_bottom_event _feed_common">
                                                    <button type="button" class="_feed_inner_text_area_bottom_photo_link"> <span class="_feed_inner_text_area_bottom_photo_iamge _mar_img">  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
                                                        <path fill="#666" d="M14.371 2c.32 0 .585.262.627.603l.005.095v.788c2.598.195 4.188 2.033 4.18 5v8.488c0 3.145-1.786 5.026-4.656 5.026H7.395C4.53 22 2.74 20.087 2.74 16.904V8.486c0-2.966 1.596-4.804 4.187-5v-.788c0-.386.283-.698.633-.698.32 0 .584.262.626.603l.006.095v.771h5.546v-.771c0-.386.284-.698.633-.698zm3.546 8.283H4.004l.001 6.621c0 2.325 1.137 3.616 3.183 3.697l.207.004h7.132c2.184 0 3.39-1.271 3.39-3.63v-6.692zm-3.202 5.853c.349 0 .632.312.632.698 0 .353-.238.645-.546.691l-.086.006c-.357 0-.64-.312-.64-.697 0-.354.237-.645.546-.692l.094-.006zm-3.742 0c.35 0 .632.312.632.698 0 .353-.238.645-.546.691l-.086.006c-.357 0-.64-.312-.64-.697 0-.354.238-.645.546-.692l.094-.006zm-3.75 0c.35 0 .633.312.633.698 0 .353-.238.645-.547.691l-.093.006c-.35 0-.633-.312-.633-.697 0-.354.238-.645.547-.692l.094-.006zm7.492-3.615c.349 0 .632.312.632.697 0 .354-.238.645-.546.692l-.086.006c-.357 0-.64-.312-.64-.698 0-.353.237-.645.546-.691l.094-.006zm-3.742 0c.35 0 .632.312.632.697 0 .354-.238.645-.546.692l-.086.006c-.357 0-.64-.312-.64-.698 0-.353.238-.645.546-.691l.094-.006zm-3.75 0c.35 0 .633.312.633.697 0 .354-.238.645-.547.692l-.093.006c-.35 0-.633-.312-.633-.698 0-.353.238-.645.547-.691l.094-.006zm6.515-7.657H8.192v.895c0 .385-.283.698-.633.698-.32 0-.584-.263-.626-.603l-.006-.095v-.874c-1.886.173-2.922 1.422-2.922 3.6v.402h13.912v-.403c.007-2.181-1.024-3.427-2.914-3.599v.874c0 .385-.283.698-.632.698-.32 0-.585-.263-.627-.603l-.005-.095v-.895z"></path>
                                                    </svg>    
                                                    </span>
                                                        Event</button>
                                                </div>
                                                <div class="_feed_inner_text_area_bottom_article _feed_common">
                                                    <button type="button" class="_feed_inner_text_area_bottom_photo_link"> <span class="_feed_inner_text_area_bottom_photo_iamge _mar_img"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                                        <path fill="#666" d="M12.49 0c2.92 0 4.665 1.92 4.693 5.132v9.659c0 3.257-1.75 5.209-4.693 5.209H5.434c-.377 0-.734-.032-1.07-.095l-.2-.041C2 19.371.74 17.555.74 14.791V5.209c0-.334.019-.654.055-.96C1.114 1.564 2.799 0 5.434 0h7.056zm-.008 1.457H5.434c-2.244 0-3.381 1.263-3.381 3.752v9.582c0 2.489 1.137 3.752 3.38 3.752h7.049c2.242 0 3.372-1.263 3.372-3.752V5.209c0-2.489-1.13-3.752-3.372-3.752zm-.239 12.053c.36 0 .652.324.652.724 0 .4-.292.724-.652.724H5.656c-.36 0-.652-.324-.652-.724 0-.4.293-.724.652-.724h6.587zm0-4.239a.643.643 0 01.632.339.806.806 0 010 .78.643.643 0 01-.632.339H5.656c-.334-.042-.587-.355-.587-.729s.253-.688.587-.729h6.587zM8.17 5.042c.335.041.588.355.588.729 0 .373-.253.687-.588.728H5.665c-.336-.041-.589-.355-.589-.728 0-.374.253-.688.589-.729H8.17z"></path>
                                                    </svg>  
                                                    </span>
                                                        Article</button>
                                                </div>
                                            </div>
                                            <div class="_feed_inner_text_area_btn">
                                                <button type="button" class="_feed_inner_text_area_btn_link">
                                                    <svg class="_mar_img" xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none" viewBox="0 0 14 13">
                                                        <path fill="#fff" fill-rule="evenodd" d="M6.37 7.879l2.438 3.955a.335.335 0 00.34.162c.068-.01.23-.05.289-.247l3.049-10.297a.348.348 0 00-.09-.35.341.341 0 00-.34-.088L1.75 4.03a.34.34 0 00-.247.289.343.343 0 00.16.347L5.666 7.17 9.2 3.597a.5.5 0 01.712.703L6.37 7.88zM9.097 13c-.464 0-.89-.236-1.14-.641L5.372 8.165l-4.237-2.65a1.336 1.336 0 01-.622-1.331c.074-.536.441-.96.957-1.112L11.774.054a1.347 1.347 0 011.67 1.682l-3.05 10.296A1.332 1.332 0 019.098 13z" clip-rule="evenodd"></path>
                                                    </svg> <span>Post</span> 
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!--For Desktop--> */}
                                        {/* <!--For Mobile--> */}
                                        <div class="_feed_inner_text_area_bottom_mobile">
                                            <div class="_feed_inner_text_mobile">
                                                <div class="_feed_inner_text_area_item">
                                                    <div class="_feed_inner_text_area_bottom_photo _feed_common">
                                                        <button type="button" class="_feed_inner_text_area_bottom_photo_link"> <span class="_feed_inner_text_area_bottom_photo_iamge _mar_img"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                                            <path fill="#666" d="M13.916 0c3.109 0 5.18 2.429 5.18 5.914v8.17c0 3.486-2.072 5.916-5.18 5.916H5.999C2.89 20 .827 17.572.827 14.085v-8.17C.827 2.43 2.897 0 6 0h7.917zm0 1.504H5.999c-2.321 0-3.799 1.735-3.799 4.41v8.17c0 2.68 1.472 4.412 3.799 4.412h7.917c2.328 0 3.807-1.734 3.807-4.411v-8.17c0-2.678-1.478-4.411-3.807-4.411zm.65 8.68l.12.125 1.9 2.147a.803.803 0 01-.016 1.063.642.642 0 01-.894.058l-.076-.074-1.9-2.148a.806.806 0 00-1.205-.028l-.074.087-2.04 2.717c-.722.963-2.02 1.066-2.86.26l-.111-.116-.814-.91a.562.562 0 00-.793-.07l-.075.073-1.4 1.617a.645.645 0 01-.97.029.805.805 0 01-.09-.977l.064-.086 1.4-1.617c.736-.852 1.95-.897 2.734-.137l.114.12.81.905a.587.587 0 00.861.033l.07-.078 2.04-2.718c.81-1.08 2.27-1.19 3.205-.275zM6.831 4.64c1.265 0 2.292 1.125 2.292 2.51 0 1.386-1.027 2.511-2.292 2.511S4.54 8.537 4.54 7.152c0-1.386 1.026-2.51 2.291-2.51zm0 1.504c-.507 0-.918.451-.918 1.007 0 .555.411 1.006.918 1.006.507 0 .919-.451.919-1.006 0-.556-.412-1.007-.919-1.007z"></path>
                                                        </svg></span>
                                                        </button>
                                                    </div>
                                                    <div class="_feed_inner_text_area_bottom_video _feed_common">
                                                        <button type="button" class="_feed_inner_text_area_bottom_photo_link"> 
                                                            <span class="_feed_inner_text_area_bottom_photo_iamge _mar_img">   
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
                                                                    <path fill="#666" d="M11.485 4.5c2.213 0 3.753 1.534 3.917 3.784l2.418-1.082c1.047-.468 2.188.327 2.271 1.533l.005.141v6.64c0 1.237-1.103 2.093-2.155 1.72l-.121-.047-2.418-1.083c-.164 2.25-1.708 3.785-3.917 3.785H5.76c-2.343 0-3.932-1.72-3.932-4.188V8.688c0-2.47 1.589-4.188 3.932-4.188h5.726zm0 1.5H5.76C4.169 6 3.197 7.05 3.197 8.688v7.015c0 1.636.972 2.688 2.562 2.688h5.726c1.586 0 2.562-1.054 2.562-2.688v-.686-6.329c0-1.636-.973-2.688-2.562-2.688zM18.4 8.57l-.062.02-2.921 1.306v4.596l2.921 1.307c.165.073.343-.036.38-.215l.008-.07V8.876c0-.195-.16-.334-.326-.305z"></path>
                                                                </svg>    
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div class="_feed_inner_text_area_bottom_event _feed_common">
                                                        <button type="button" class="_feed_inner_text_area_bottom_photo_link"> 
                                                            <span class="_feed_inner_text_area_bottom_photo_iamge _mar_img">  
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 22 24">
                                                                    <path fill="#666" d="M14.371 2c.32 0 .585.262.627.603l.005.095v.788c2.598.195 4.188 2.033 4.18 5v8.488c0 3.145-1.786 5.026-4.656 5.026H7.395C4.53 22 2.74 20.087 2.74 16.904V8.486c0-2.966 1.596-4.804 4.187-5v-.788c0-.386.283-.698.633-.698.32 0 .584.262.626.603l.006.095v.771h5.546v-.771c0-.386.284-.698.633-.698zm3.546 8.283H4.004l.001 6.621c0 2.325 1.137 3.616 3.183 3.697l.207.004h7.132c2.184 0 3.39-1.271 3.39-3.63v-6.692zm-3.202 5.853c.349 0 .632.312.632.698 0 .353-.238.645-.546.691l-.086.006c-.357 0-.64-.312-.64-.697 0-.354.237-.645.546-.692l.094-.006zm-3.742 0c.35 0 .632.312.632.698 0 .353-.238.645-.546.691l-.086.006c-.357 0-.64-.312-.64-.697 0-.354.238-.645.546-.692l.094-.006zm-3.75 0c.35 0 .633.312.633.698 0 .353-.238.645-.547.691l-.093.006c-.35 0-.633-.312-.633-.697 0-.354.238-.645.547-.692l.094-.006zm7.492-3.615c.349 0 .632.312.632.697 0 .354-.238.645-.546.692l-.086.006c-.357 0-.64-.312-.64-.698 0-.353.237-.645.546-.691l.094-.006zm-3.742 0c.35 0 .632.312.632.697 0 .354-.238.645-.546.692l-.086.006c-.357 0-.64-.312-.64-.698 0-.353.238-.645.546-.691l.094-.006zm-3.75 0c.35 0 .633.312.633.697 0 .354-.238.645-.547.692l-.093.006c-.35 0-.633-.312-.633-.698 0-.353.238-.645.547-.691l.094-.006zm6.515-7.657H8.192v.895c0 .385-.283.698-.633.698-.32 0-.584-.263-.626-.603l-.006-.095v-.874c-1.886.173-2.922 1.422-2.922 3.6v.402h13.912v-.403c.007-2.181-1.024-3.427-2.914-3.599v.874c0 .385-.283.698-.632.698-.32 0-.585-.263-.627-.603l-.005-.095v-.895z"></path>
                                                                </svg>    
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div class="_feed_inner_text_area_bottom_article _feed_common">
                                                        <button type="button" class="_feed_inner_text_area_bottom_photo_link"> 
                                                            <span class="_feed_inner_text_area_bottom_photo_iamge _mar_img"> 
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                                                                    <path fill="#666" d="M12.49 0c2.92 0 4.665 1.92 4.693 5.132v9.659c0 3.257-1.75 5.209-4.693 5.209H5.434c-.377 0-.734-.032-1.07-.095l-.2-.041C2 19.371.74 17.555.74 14.791V5.209c0-.334.019-.654.055-.96C1.114 1.564 2.799 0 5.434 0h7.056zm-.008 1.457H5.434c-2.244 0-3.381 1.263-3.381 3.752v9.582c0 2.489 1.137 3.752 3.38 3.752h7.049c2.242 0 3.372-1.263 3.372-3.752V5.209c0-2.489-1.13-3.752-3.372-3.752zm-.239 12.053c.36 0 .652.324.652.724 0 .4-.292.724-.652.724H5.656c-.36 0-.652-.324-.652-.724 0-.4.293-.724.652-.724h6.587zm0-4.239a.643.643 0 01.632.339.806.806 0 010 .78.643.643 0 01-.632.339H5.656c-.334-.042-.587-.355-.587-.729s.253-.688.587-.729h6.587zM8.17 5.042c.335.041.588.355.588.729 0 .373-.253.687-.588.728H5.665c-.336-.041-.589-.355-.589-.728 0-.374.253-.688.589-.729H8.17z"></path>
                                                                </svg>  
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="_feed_inner_text_area_btn">
                                                    <button type="button" class="_feed_inner_text_area_btn_link">
                                                        <svg class="_mar_img" xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none" viewBox="0 0 14 13">
                                                            <path fill="#fff" fill-rule="evenodd" d="M6.37 7.879l2.438 3.955a.335.335 0 00.34.162c.068-.01.23-.05.289-.247l3.049-10.297a.348.348 0 00-.09-.35.341.341 0 00-.34-.088L1.75 4.03a.34.34 0 00-.247.289.343.343 0 00.16.347L5.666 7.17 9.2 3.597a.5.5 0 01.712.703L6.37 7.88zM9.097 13c-.464 0-.89-.236-1.14-.641L5.372 8.165l-4.237-2.65a1.336 1.336 0 01-.622-1.331c.074-.536.441-.96.957-1.112L11.774.054a1.347 1.347 0 011.67 1.682l-3.05 10.296A1.332 1.332 0 019.098 13z" clip-rule="evenodd"></path>
                                                        </svg> <span>Post</span> 
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--For Mobile--> */}
                                    </div>
                                    <div class="_feed_inner_timeline_post_area _b_radious6 _padd_b24 _padd_t24 _mar_b16">
                                        <div class="_feed_inner_timeline_content _padd_r24 _padd_l24">
                                            <div class="_feed_inner_timeline_post_top">
                                                <div class="_feed_inner_timeline_post_box">
                                                    <div class="_feed_inner_timeline_post_box_image">
                                                        <img src="assets/images/post_img.png" alt="" class="_post_img"/>
                                                    </div>
                                                    <div class="_feed_inner_timeline_post_box_txt">
                                                        <h4 class="_feed_inner_timeline_post_box_title">Karim Saif</h4>
                                                        <p class="_feed_inner_timeline_post_box_para">5 minute ago . 
                                                            <a href="#0">Public</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="_feed_inner_timeline_post_box_dropdown">
                                                    <div class="_feed_timeline_post_dropdown">
                                                        <button href="#0" id="_timeline_show_drop_btn" class="_feed_timeline_post_dropdown_link">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" fill="none" viewBox="0 0 4 17">
                                                                <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                                <circle cx="2" cy="8" r="2" fill="#C4C4C4" />
                                                                <circle cx="2" cy="15" r="2" fill="#C4C4C4" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    {/* <!--Dropdown--> */}
                                                    <div id="_timeline_drop" class="_feed_timeline_dropdown _timeline_dropdown">
                                                        <ul class="_feed_timeline_dropdown_list">
                                                            <li class="_feed_timeline_dropdown_item">
                                                                <a href="#0" class="_feed_timeline_dropdown_link">
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                                                                            <path stroke="#1890FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M14.25 15.75L9 12l-5.25 3.75v-12a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v12z"/>
                                                                        </svg>															  
                                                                    </span>
                                                                    Save Post	
                                                                </a>
                                                            </li>
                                                            <li class="_feed_timeline_dropdown_item">
                                                                <a href="#0" class="_feed_timeline_dropdown_link">
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none" viewBox="0 0 20 22">
                                                                            <path fill="#377DFF" fill-rule="evenodd" d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z" clip-rule="evenodd"/>
                                                                        </svg>										
                                                                    </span>
                                                                    Turn On Notification 
                                                                </a>
                                                            </li>
                                                            <li class="_feed_timeline_dropdown_item">
                                                                <a href="#0" class="_feed_timeline_dropdown_link">
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                                                                            <path stroke="#1890FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M14.25 2.25H3.75a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zM6.75 6.75l4.5 4.5M11.25 6.75l-4.5 4.5"/>
                                                                        </svg>										
                                                                    </span>
                                                                    Hide	
                                                                </a>
                                                            </li>
                                                            <li class="_feed_timeline_dropdown_item">
                                                                <a href="#0" class="_feed_timeline_dropdown_link">
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                                                                            <path stroke="#1890FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M8.25 3H3a1.5 1.5 0 00-1.5 1.5V15A1.5 1.5 0 003 16.5h10.5A1.5 1.5 0 0015 15V9.75"/>
                                                                            <path stroke="#1890FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M13.875 1.875a1.591 1.591 0 112.25 2.25L9 11.25 6 12l.75-3 7.125-7.125z"/>
                                                                        </svg>									
                                                                    </span>
                                                                    Edit Post	
                                                                </a>
                                                            </li>
                                                            <li class="_feed_timeline_dropdown_item">
                                                                <a href="#0" class="_feed_timeline_dropdown_link">
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18">
                                                                            <path stroke="#1890FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M2.25 4.5h13.5M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5m2.25 0V15a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V4.5h10.5zM7.5 8.25v4.5M10.5 8.25v4.5"/>
                                                                        </svg>										
                                                                    </span>
                                                                    Delete Post	
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <h4 class="_feed_inner_timeline_post_title">-Healthy Tracking App</h4>
                                            <div class="_feed_inner_timeline_image">
                                                <img src="assets/images/timeline_img.png" alt="" class="_time_img"/>
                                            </div>
                                        </div>
                                        <div class="_feed_inner_timeline_total_reacts _padd_r24 _padd_l24 _mar_b26">
                                            <div class="_feed_inner_timeline_total_reacts_image">
                                                <img src="assets/images/react_img1.png" alt="Image" class="_react_img1"/>
                                                <img src="assets/images/react_img2.png" alt="Image" class="_react_img"/>
                                                <img src="assets/images/react_img3.png" alt="Image" class="_react_img _rect_img_mbl_none"/>
                                                <img src="assets/images/react_img4.png" alt="Image" class="_react_img _rect_img_mbl_none"/>
                                                <img src="assets/images/react_img5.png" alt="Image" class="_react_img _rect_img_mbl_none"/>
                                                <p class="_feed_inner_timeline_total_reacts_para">9+</p>
                                            </div>
                                            <div class="_feed_inner_timeline_total_reacts_txt">
                                                <p class="_feed_inner_timeline_total_reacts_para1">
                                                    <a href="#0"><span>12</span> Comment</a>
                                                </p>
                                                <p class="_feed_inner_timeline_total_reacts_para2"><span>122</span> Share</p>
                                            </div>
                                        </div>
                                        <div class="_feed_inner_timeline_reaction">
                                            <button class="_feed_inner_timeline_reaction_emoji _feed_reaction _feed_reaction_active">
                                                <span class="_feed_inner_timeline_reaction_link"> <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" viewBox="0 0 19 19">
                                                        <path fill="#FFCC4D" d="M9.5 19a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"></path>
                                                        <path fill="#664500" d="M9.5 11.083c-1.912 0-3.181-.222-4.75-.527-.358-.07-1.056 0-1.056 1.055 0 2.111 2.425 4.75 5.806 4.75 3.38 0 5.805-2.639 5.805-4.75 0-1.055-.697-1.125-1.055-1.055-1.57.305-2.838.527-4.75.527z"></path>
                                                        <path fill="#fff" d="M4.75 11.611s1.583.528 4.75.528 4.75-.528 4.75-.528-1.056 2.111-4.75 2.111-4.75-2.11-4.75-2.11z"></path>
                                                        <path fill="#664500" d="M6.333 8.972c.729 0 1.32-.827 1.32-1.847s-.591-1.847-1.32-1.847c-.729 0-1.32.827-1.32 1.847s.591 1.847 1.32 1.847zM12.667 8.972c.729 0 1.32-.827 1.32-1.847s-.591-1.847-1.32-1.847c-.729 0-1.32.827-1.32 1.847s.591 1.847 1.32 1.847z"></path>
                                                    </svg>
                                                    Haha
                                                </span>
                                                </span>
                                            </button>
                                            <button class="_feed_inner_timeline_reaction_comment _feed_reaction">
                                                <span class="_feed_inner_timeline_reaction_link"> <span>
                                                    <svg class="_reaction_svg" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
                                                        <path stroke="#000" d="M1 10.5c0-.464 0-.696.009-.893A9 9 0 019.607 1.01C9.804 1 10.036 1 10.5 1v0c.464 0 .696 0 .893.009a9 9 0 018.598 8.598c.009.197.009.429.009.893v6.046c0 1.36 0 2.041-.317 2.535a2 2 0 01-.602.602c-.494.317-1.174.317-2.535.317H10.5c-.464 0-.696 0-.893-.009a9 9 0 01-8.598-8.598C1 11.196 1 10.964 1 10.5v0z"></path>
                                                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.938 9.313h7.125M10.5 14.063h3.563"></path>
                                                    </svg>                                                      
                                                Commentt
                                                </span>
                                            </span>
                                            </button>
                                            <button class="_feed_inner_timeline_reaction_share _feed_reaction">
                                                <span class="_feed_inner_timeline_reaction_link"> <span>
                                                    <svg class="_reaction_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="21" fill="none" viewBox="0 0 24 21">
                                                        <path stroke="#000" stroke-linejoin="round" d="M23 10.5L12.917 1v5.429C3.267 6.429 1 13.258 1 20c2.785-3.52 5.248-5.429 11.917-5.429V20L23 10.5z"></path>
                                                    </svg>                                                 
                                                Share
                                                </span>
                                            </span>
                                            </button>
                                        </div>
                                        <div class="_feed_inner_timeline_cooment_area">
                                            <div class="_feed_inner_comment_box">
                                                <form class="_feed_inner_comment_box_form">
                                                    <div class="_feed_inner_comment_box_content">
                                                        <div class="_feed_inner_comment_box_content_image">
                                                            <img src="assets/images/comment_img.png" alt="" class="_comment_img"/>
                                                        </div>
                                                        <div class="_feed_inner_comment_box_content_txt">
                                                            <textarea class="form-control _comment_textarea" placeholder="Write a comment" id="floatingTextarea2"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="_feed_inner_comment_box_icon">
                                                        <button class="_feed_inner_comment_box_icon_btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                <path fill="#000" fill-opacity=".46" fill-rule="evenodd" d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </button>
                                                        <button class="_feed_inner_comment_box_icon_btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                <path fill="#000" fill-opacity=".46" fill-rule="evenodd" d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zm.426 5.733l.017.015.013.013.009.008.037.037c.12.12.453.46 1.443 1.477a.5.5 0 11-.716.697S10.73 8.91 10.633 8.816a.614.614 0 00-.433-.118.622.622 0 00-.421.225c-1.55 1.88-1.568 1.897-1.594 1.922a1.456 1.456 0 01-2.057-.021s-.62-.63-.63-.642c-.155-.143-.43-.134-.594.04l-1.02 1.076a.498.498 0 01-.707.018.499.499 0 01-.018-.706l1.018-1.075c.54-.573 1.45-.6 2.025-.06l.639.647c.178.18.467.184.646.008l1.519-1.843a1.618 1.618 0 011.098-.584c.433-.038.854.088 1.19.363zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="_timline_comment_main">
                                            <div class="_previous_comment">
                                                <button type="button" class="_previous_comment_txt">View 4 previous comments</button>
                                            </div>
                                            <div class="_comment_main">
                                                <div class="_comment_image">
                                                    <a href="profile.html" class="_comment_image_link">
                                                        <img src="assets/images/txt_img.png" alt="" class="_comment_img1"/>
                                                    </a>
                                                </div>
                                                <div class="_comment_area">
                                                    <div class="_comment_details">
                                                        <div class="_comment_details_top">
                                                            <div class="_comment_name">
                                                                <a href="profile.html ">
                                                                    <h4 class="_comment_name_title">Radovan SkillArena</h4>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="_comment_status">
                                                            <p class="_comment_status_text"><span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </span></p>
                                                        </div>
                                                        <div class="_total_reactions">
                                                            <div class="_total_react">
                                                                <span class="_reaction_like">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                                                </span>
                                                                <span class="_reaction_heart">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                                                </span>
                                                            </div>
                                                            <span class="_total">
                                                                198
                                                            </span>
                                                        </div>
                                                        <div class="_comment_reply">
                                                            <div class="_comment_reply_num">
                                                                <ul class="_comment_reply_list">
                                                                    <li><span>Like.</span></li>
                                                                    <li><span>Reply.</span></li>
                                                                    <li><span>Share</span></li>
                                                                    <li><span class="_time_link">.21m</span></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="_feed_inner_comment_box">
                                                        <form class="_feed_inner_comment_box_form">
                                                            <div class="_feed_inner_comment_box_content">
                                                                <div class="_feed_inner_comment_box_content_image">
                                                                    <img src="assets/images/comment_img.png" alt="" class="_comment_img"/>
                                                                </div>
                                                                <div class="_feed_inner_comment_box_content_txt">
                                                                    <textarea class="form-control _comment_textarea" placeholder="Write a comment" id="floatingTextarea2"></textarea>
                                                                </div>
                                                            </div>
                                                            <div class="_feed_inner_comment_box_icon">
                                                                <button class="_feed_inner_comment_box_icon_btn">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                        <path fill="#000" fill-opacity=".46" fill-rule="evenodd" d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                </button>
                                                                <button class="_feed_inner_comment_box_icon_btn">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                        <path fill="#000" fill-opacity=".46" fill-rule="evenodd" d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zm.426 5.733l.017.015.013.013.009.008.037.037c.12.12.453.46 1.443 1.477a.5.5 0 11-.716.697S10.73 8.91 10.633 8.816a.614.614 0 00-.433-.118.622.622 0 00-.421.225c-1.55 1.88-1.568 1.897-1.594 1.922a1.456 1.456 0 01-2.057-.021s-.62-.63-.63-.642c-.155-.143-.43-.134-.594.04l-1.02 1.076a.498.498 0 01-.707.018.499.499 0 01-.018-.706l1.018-1.075c.54-.573 1.45-.6 2.025-.06l.639.647c.178.18.467.184.646.008l1.519-1.843a1.618 1.618 0 011.098-.584c.433-.038.854.088 1.19.363zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z" clip-rule="evenodd"></path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                            <div class="_layout_right_wrap">
                                <div class="_left_inner_area_suggest _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                                    <div class="_left_inner_area_suggest_content _mar_b24">
                                        <h4 class="_left_inner_area_suggest_content_title _title5">Suggested People</h4>
                                        <span class="_left_inner_area_suggest_content_txt">
                                            <a class="_left_inner_area_suggest_content_txt_link" href="#0">See All</a>
                                        </span>
                                    </div>
                                    <div class="_left_inner_area_suggest_info">
                                        <div class="_left_inner_area_suggest_info_box">
                                            <div class="_left_inner_area_suggest_info_image">
                                                <a href="profile.html">
                                                    <img src="assets/images/people1.png" alt="Image" class="_info_img"/>
                                                </a>
                                            </div>
                                            <div class="_left_inner_area_suggest_info_txt">
                                                <a href="profile.html">
                                                    <h4 class="_left_inner_area_suggest_info_title">Steve Jobs</h4>
                                                </a>
                                                <p class="_left_inner_area_suggest_info_para">CEO of Apple</p>
                                            </div>
                                        </div>
                                        <div class="_left_inner_area_suggest_info_link"> <a href="#0" class="_info_link">Connect</a>
                                        </div>
                                    </div>
                                    <div class="_left_inner_area_suggest_info">
                                        <div class="_left_inner_area_suggest_info_box">
                                            <div class="_left_inner_area_suggest_info_image">
                                                <a href="profile.html">
                                                    <img src="assets/images/people2.png" alt="Image" class="_info_img1"/>
                                                </a>
                                            </div>
                                            <div class="_left_inner_area_suggest_info_txt">
                                                <a href="profile.html">
                                                    <h4 class="_left_inner_area_suggest_info_title">Ryan Roslansky</h4>
                                                </a>
                                                <p class="_left_inner_area_suggest_info_para">CEO of Linkedin</p>
                                            </div>
                                        </div>
                                        <div class="_left_inner_area_suggest_info_link"> <a href="#0" class="_info_link">Connect</a>
                                        </div>
                                    </div>
                                    <div class="_left_inner_area_suggest_info">
                                        <div class="_left_inner_area_suggest_info_box">
                                            <div class="_left_inner_area_suggest_info_image">
                                                <a href="profile.html">
                                                    <img src="assets/images/people3.png" alt="Image" class="_info_img1"/>
                                                </a>
                                            </div>
                                            <div class="_left_inner_area_suggest_info_txt">
                                                <a href="profile.html">
                                                    <h4 class="_left_inner_area_suggest_info_title">Dylan Field</h4>
                                                </a>
                                                <p class="_left_inner_area_suggest_info_para">CEO of Figma</p>
                                            </div>
                                        </div>
                                        <div class="_left_inner_area_suggest_info_link"> <a href="#0" class="_info_link">Connect</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="right_iiner_area_friends _padd_t24  _padd_b6 _padd_r24 _padd_l24 _b_radious6 _feed_inner_area">
                                    <div class="_right_inner_area_friends_content">
                                        <h4 class="_right_inner_area_friends_content_title _title5 _mar_b24">Your Friends</h4>
                                        <span class="_right_inner_area_friends_content_txt">
                                            <a class="_right_inner_area_friends_content_txt_link" href="#0">See All</a>
                                        </span>
                                    </div>
                                    <div class="_right_inner_area_photos_area">
                                        <div class="_right_inner_area_photos_box">
                                            <img src="assets/images/f1.png" alt="Image" class="_photo1_img"/>
                                        </div>
                                        <div class="_right_inner_area_photos_box">
                                            <img src="assets/images/f2.png" alt="Image" class="_photo1_img"/>
                                        </div>
                                        <div class="_right_inner_area_photos_box">
                                            <img src="assets/images/f3.png" alt="Image" class="_photo1_img"/>
                                        </div>
                                        <div class="_right_inner_area_photos_box">
                                            <img src="assets/images/f4.png" alt="Image" class="_photo1_img"/>
                                        </div>
                                        <div class="_right_inner_area_photos_box">
                                            <img src="assets/images/f5.png" alt="Image" class="_photo1_img"/>
                                        </div>
                                        <div class="_right_inner_area_photos_box">
                                            <img src="assets/images/f6.png" alt="Image" class="_photo1_img"/>
                                        </div>
                                        <div class="_right_inner_area_photos_box">
                                            <img src="assets/images/f7.png" alt="Image" class="_photo1_img"/>
                                        </div>
                                        <div class="_right_inner_area_photos_box">
                                            <img src="assets/images/f8.png" alt="Image" class="_photo1_img"/>
                                        </div>
                                        <div class="_right_inner_area_photos_box">
                                            <img src="assets/images/f9.png" alt="Image" class="_photo1_img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Profile Section --> */}
</div>
  )
}

export default profile