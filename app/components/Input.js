var React = require("react");
var PropTypes = React.PropTypes;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var Button = require("react-bootstrap").Button;


function Input(props){
	return (
		<form>
			<FormGroup>
				<FormControl
					type="text" 
					placeholder="Search Wikipedia" 
					onChange={props.onKeywordChange}
					value={props.keyword}
					onKeyPress={props.onKeyPress}
				/>
			</FormGroup>	
			<Button 
				type="button" 
				disabled={props.requestsInLine > 0}
				bsStyle="success" 
				onClick={props.onClick}
			>{props.requestsInLine > 0 ? "Searching" : "Search"}
			</Button>	
		</form>	
	);
}

Input.propTypes = {
	onKeywordChange: PropTypes.func.isRequired,
	keyword: PropTypes.string,
	onKeyPress: PropTypes.func.isRequired,
	requestsInLine: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
};

module.exports = Input;


