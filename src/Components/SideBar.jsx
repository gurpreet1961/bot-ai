import React from "react";
import icon from "../Assests/Icon.png";
import edit from "../Assests/edit.png";
import "./SideBar.css";
const SideBar = () => {
	return (
		<div className="aside">
			<div className="profile-container">
				<img src={icon} alt="icon" className="icon" />
				<h3>New Chat</h3>
				<img src={edit} alt="" />
			</div>
			<div className="pastBtn">
				<h4>Past Conversations</h4>
			</div>
		</div>
	);
};

export default SideBar;
