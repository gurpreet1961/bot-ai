import React, { useState, useEffect, useRef } from "react";
import bot from "../Assests/bot.png";
import user from "../Assests/user.png";
import "./ChatComp.css";

// Import data from data.json
import data from "../data.json";
import NewChatComponent from "./newChat";

const ChatComp = () => {
	const [messages, setMessages] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [pastConversations, setPastConversations] = useState([]);
	const [showNewChat, setShowNewChat] = useState(false);
	const chatEndRef = useRef(null);
	useEffect(() => {
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	const sendMessage = () => {
		if (inputValue.trim() === "") return;

		const newMessages = [
			...messages,
			{
				sender: "user",
				message: inputValue,
				time: new Date().toLocaleTimeString(),
			},
		];
		setMessages(newMessages);
		setInputValue("");

		const question = inputValue.trim().toLowerCase();
		const matchingQuestions = data.filter(
			(item) => getSimilarity(question, item.question.toLowerCase()) >= 0.8
		);
		const answer =
			matchingQuestions.length > 0
				? matchingQuestions[0].response
				: "As an AI Language Model, I don’t have the details.";

		// Add bot reply to the list
		setTimeout(() => {
			const botMessage = {
				sender: "bot",
				message: answer,
				time: new Date().toLocaleTimeString(),
			};
			setMessages([...newMessages, botMessage]);
		}, 500);
	};

	// Function to calculate similarity between two strings
	const getSimilarity = (str1, str2) => {
		const similarity = str1
			.split("")
			.filter((char, index) => char === str2[index]).length;
		return similarity / Math.max(str1.length, str2.length);
	};
	const saveChat = () => {
		setPastConversations([...pastConversations, ...messages]);
		setMessages([]);
	};

	const showPastConversations = () => {
		setMessages([...pastConversations]);
	};

	const startNewChat = () => {
		setShowNewChat(true);
	};

	return (
		<div className="ChatContainer">
			<h3>Bot AI</h3>
			<div className="chatArea">
				{showNewChat || messages.length == 0 ? (
					<NewChatComponent startNewChat={() => setShowNewChat(false)} />
				) : (
					<div className="chat">
						{messages.map((msg, index) => (
							<div key={index} className={`message ${msg.sender}`}>
								{msg.sender === "user" ? (
									<img src={user} alt="" />
								) : (
									<img src={bot} alt="" />
								)}
								<div className="content">
									<h5>{msg.sender === "user" ? "You" : "Bot AI"}</h5>
									<p>{msg.message}</p>
									<p>{msg.time}</p>
								</div>
							</div>
						))}
						<div ref={chatEndRef} />
					</div>
				)}
			</div>
			<div className="ask">
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="Type your question..."
				/>
				<button
					onClick={() => {
						sendMessage();
						setShowNewChat(false);
					}}
				>
					Ask
				</button>
				<button onClick={saveChat}>Save</button>
				<button onClick={showPastConversations}>Past Conversations</button>
				<button onClick={startNewChat}>New Chat</button>
			</div>
		</div>
	);
};

export default ChatComp;
