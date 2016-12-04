var React = require("react");
var PropTypes = React.PropTypes;
var Input = require("./Input");
var styles = require("../styles/styles");


function SmallNavbar(props){
	return(
		<div style={styles.smallNavbar}>
			<Input
				onKeywordChange={props.onUpdateInfo}
				keyword={props.keyword}
				requestsInLine={props.requestsInLine}
				onKeyPress={props.onKeyPress}
				onClick={props.onApiRequest}
			/>
		</div>		
	);
}

SmallNavbar.propTypes = {
	onUpdateInfo: PropTypes.func.isRequired,
	keyword: PropTypes.string.isRequired,
	requestsInLine: PropTypes.number.isRequired,
	onKeyPress: PropTypes.func.isRequired,
	onApiRequest: PropTypes.func.isRequired
};

module.exports = SmallNavbar;