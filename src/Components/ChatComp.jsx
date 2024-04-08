import React from "react";
import icon from "../Assests/Icon.png";
import "./ChatComp.css";
const ChatComp = () => {
	return (
		<div className="ChatContainer">
			<h3>Bot AI</h3>
			<div className="chatArea">
				{/* <div className="newChat">
					<div className="heading">
						<h3>How Can I help You Today?</h3>
						<img src={icon} alt="" />
					</div>
					<div className="demoQuestions">
						<div className="question">
							<h3>Hi,What is the Weather</h3>
							<p>Get immediate AI generated respone</p>
						</div>
						<div className="question">
							<h3>Hi,What is the Weather</h3>
							<p>Get immediate AI generated respone</p>
						</div>
						<div className="question">
							<h3>Hi,What is the Weather</h3>
							<p>Get immediate AI generated respone</p>
						</div>
						<div className="question">
							<h3>Hi,What is the Weather</h3>
							<p>Get immediate AI generated respone</p>
						</div>
					</div>
				</div> */}
				<div className="chat"></div>
			</div>
			<div className="ask">
				<input type="text" name="" id="" />
				<button>Ask</button>
				<button>Save</button>
			</div>
		</div>
	);
};

export default ChatComp;
