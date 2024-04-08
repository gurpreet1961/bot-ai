import React from "react";
import bot from "../Assests/bot.png";
import user from "../Assests/user.png";
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
				<div className="chat">
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="userQuestion">
						<img src={user} alt="" />
						<div className="div">
							<h5>You</h5>
							<p>Hi!</p>
							<p>10:33 AM</p>
						</div>
					</div>
					<div className="botReply">
						<img src={bot} alt="" />
						<div className="div">
							<h5>Soul AI</h5>
							<p>Hi There. How can I assist you today?</p>
							<p>10:33 AM</p>
						</div>
					</div>
				</div>
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
