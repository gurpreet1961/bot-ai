import React from "react";
import icon from "../Assests/Icon.png";
// import "./NewChatComponent.css";

const NewChatComponent = ({ startNewChat }) => {
	return (
		<div className="newChat">
			<div className="heading">
				<h3>How Can I help You Today?</h3>
				<img src={icon} alt="" />
			</div>
			<div className="demoQuestions">
				<div className="question">
					<h3>Hi,What is the Weather</h3>
					<p>Get immediate AI generated response</p>
				</div>
				<div className="question">
					<h3>Hi,What is the Weather</h3>
					<p>Get immediate AI generated response</p>
				</div>
				<div className="question">
					<h3>Hi,What is the Weather</h3>
					<p>Get immediate AI generated response</p>
				</div>
				<div className="question">
					<h3>Hi,What is the Weather</h3>
					<p>Get immediate AI generated response</p>
				</div>
			</div>
		</div>
	);
};

export default NewChatComponent;
