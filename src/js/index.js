//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import PropTypes from "prop-types";

function SecondCounter(props) {
	return (
		<div
			className="counterAll d-flex"
			style={{
				display: "inline-block",
				fontSize: "160px",
				lineHeight: "160px",
				backgroundColor: "#101010",
				color: "white",
			}}>
			<div className="calendar">
				<i
					className="far fa-clock"
					style={{
						paddingRight: "3cm",
						paddingTop: "1cm",
						paddingLeft: "5cm",
					}}
				/>
			</div>
			<div
				className="four"
				style={{ paddingRight: "3cm", paddingTop: "1cm" }}>
				{props.digitFour % 10}
			</div>
			<div
				className="three"
				style={{ paddingRight: "3cm", paddingTop: "1cm" }}>
				{props.digitThree % 10}
			</div>
			<div
				className="two"
				style={{ paddingRight: "3cm", paddingTop: "1cm" }}>
				{props.digitTwo % 10}
			</div>
			<div
				className="one"
				style={{ paddingRight: "3cm", paddingTop: "1cm" }}>
				{props.digitOne % 10}
			</div>
		</div>
	);
}
SecondCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	//render your react application
	counter++;
	ReactDOM.render(
		<SecondCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
ReactDOM.render(
	<SecondCounter
		seconds={1000} //={parseInt(prompt("Ingrese el número máximo de segundos: "))}
	/>,
	document.querySelector("#app")
);
