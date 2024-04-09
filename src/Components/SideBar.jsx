import React, { useState } from "react";
import icon from "../Assests/Icon.png";
import edit from "../Assests/edit.png";
import "./SideBar.css";
import Hamburger from "./Hamburger";

const SideBar = ({ showPastConversations, startNewChat }) => {
	const [showSidebar, setShowSidebar] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<div>
			<div className={`aside ${showSidebar ? "show" : ""}`}>
				<div className="profile-container" onClick={startNewChat}>
					<img src={icon} alt="icon" className="icon" />
					<h3>New Chat</h3>
					<img src={edit} alt="" />
				</div>
				<div className="pastBtn" onClick={showPastConversations}>
					<h4>Past Conversations</h4>
				</div>
			</div>
			<Hamburger toggleSidebar={toggleSidebar} />
		</div>
	);
};

export default SideBar;
