import React from "react";
import Proptypes from "prop-types";
import SecondsCounter from "./seconds-counter";

//create your first component
const Home = ({seconds}) => {
	return (
		<SecondsCounter seconds={seconds}></SecondsCounter>
	);
};

Home.propTypes = {
	seconds: Proptypes.number
}

export default Home;
