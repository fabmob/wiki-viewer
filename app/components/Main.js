var React = require("react");

function Main(props){
	return (
		<div>
			{props.children}
		</div>
	);
}

module.exports = Main;