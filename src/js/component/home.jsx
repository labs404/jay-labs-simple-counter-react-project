import React from "react";
import propTypes from "prop-types";
import SimpleCounter from "./simpleCounter";
import calculateSeconds from "../lib/libTime";

const Home = ({counter}) => {	
	return (
		<>
			<SimpleCounter 
			onesDigit={calculateSeconds(counter, 1)}
			tensDigitDigit={calculateSeconds(counter, 10)}
			hundredsDigitDigit={calculateSeconds(counter, 100)}
			thousandsDigitDigit={calculateSeconds(counter, 1000)}
			tenThousandsDigitDigit={calculateSeconds(counter, 10000)}
			hundredThousandsDigitDigit={calculateSeconds(counter, 100000)}
			/>
		</>
	);
};

Home.propTypes = {
	counter: propTypes.number
}

export default Home;