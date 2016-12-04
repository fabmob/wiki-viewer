var React = require("react");
var PropTypes = React.PropTypes;
var ResultItemContainer = require("../containers/ResultItemContainer");
var styles = require("../styles/styles");


var ResultsList = function(props){

	var descriptions = props.results.descriptions; 
	var links = props.results.links;

	return(
			<ul className="div col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 resultsList" style={styles.ulDiv}>		
				{props.results.names.map(function(name, index){
					return (
						<ResultItemContainer 
							key={index} 
							name={name} 
							description={descriptions[index]} 
							link={links[index]} 
						/>
					);
				})}	
			</ul>
		);
};

ResultsList.propTypes = {
	results: PropTypes.object.isRequired
};

module.exports = ResultsList;