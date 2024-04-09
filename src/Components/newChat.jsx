import React from "react";
import icon from "../Assests/Icon.png";
import DemoQuestion from "./DemoQuestion";

const NewChatComponent = ({ startNewChat }) => {
	return (
		<div className="newChat">
			<div className="heading">
				<h3>How Can I help You Today?</h3>
				<img src={icon} alt="" />
			</div>
			<div className="demoQuestions">
				<DemoQuestion question={"Hi,What is the Weather"} />
				<DemoQuestion question={"Hi, what is my location"} />
				<DemoQuestion question={"Hi, what is the temperature"} />
				<DemoQuestion question={"Hi, how are you"} />
			</div>
		</div>
	);
};

export default NewChatComponent;
