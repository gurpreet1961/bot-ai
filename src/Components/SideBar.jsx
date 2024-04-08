import React, { useState } from "react";
import icon from "../Assests/Icon.png";
import edit from "../Assests/edit.png";
import "./SideBar.css";

const SideBar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<div>
			<div className={`aside ${showSidebar ? "show" : ""}`}>
				<div className="profile-container">
					<img src={icon} alt="icon" className="icon" />
					<h3>New Chat</h3>
					<img src={edit} alt="" />
				</div>
				<div className="pastBtn">
					<h4>Past Conversations</h4>
				</div>
			</div>
			<div className="hamburger" onClick={toggleSidebar}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</div>
	);
};

export default SideBar;
