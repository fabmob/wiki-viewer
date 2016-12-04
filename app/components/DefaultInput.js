var React = require("react");
var PropTypes = React.PropTypes;
var Input = require("./Input");
var styles = require("../styles/styles");


function DefaultInput(props){
	return (
		<div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1" style={styles.defaultInput}>
			<h2>Wikipedia Viewer</h2>
			<Input
				onKeywordChange={props.onUpdateInfo}
				keyword={props.keyword}
				requestsInLine={props.requestsInLine}
				onClick={props.onActivated}
				onKeyPress={props.onKeyPress}
			/>
		</div>
	);
}

DefaultInput.propTypes = {
	onUpdateInfo: PropTypes.func.isRequired,
	keyword: PropTypes.string,
	requestsInLine: PropTypes.number.isRequired,
	onActivated: PropTypes.func.isRequired,
	onKeyPress: PropTypes.func.isRequired
};

module.exports = DefaultInput;