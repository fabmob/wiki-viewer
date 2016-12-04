var React = require("react");
var PropTypes = React.PropTypes;
var DefaultInput = require("./DefaultInput");
var NavbarContainer = require("../containers/NavbarContainer");
var ResultsList = require("./ResultsList");
var SearchHistory = require("./SearchHistory");
var MediaQuery = require("react-responsive");


function Viewer(props){

	var searchInput = null, searchResults = null;

	/* before a successfull API request, default input component is shown, without a results component;
	after request: navbar container, resultsList component and, depending on screen width, search history are shown*/
	if (props.activated) {
		searchInput = (<NavbarContainer 
						onUpdateInfo={props.onUpdateInfo}
						keyword={props.keyword} 
						requestsInLine={props.requestsInLine}
						onApiRequest={props.onApiRequest}
					/>);
		searchResults = (<div className="container-fluid">
							<div className="row">	
								<div className="col-sm-9">
									<ResultsList results={props.results} />	
								</div>	
								<MediaQuery minWidth={768}>
									<div className="col-sm-3">
										<SearchHistory 
											recentKeywords = {props.recentKeywords}
											onSearchFromHistory = {props.onSearchFromHistory}
										/>
									</div>	
								</MediaQuery>
							</div>	
						</div>);					
	} else {
		searchInput =	(<DefaultInput
							onUpdateInfo={props.onUpdateInfo}
							keyword={props.keyword} 
							requestsInLine={props.requestsInLine}
							onKeyPress={props.onKeyPress}
							onActivated={props.onActivated}
						/>);						
	}	

	return (
		<div className="container-fluid">
			{searchInput}
			{searchResults}
		</div>
	);
}

Viewer.propTypes = {
	activated: PropTypes.bool.isRequired,
	requestsInLine: PropTypes.number.isRequired,
	keyword: PropTypes.string,
	results: PropTypes.object,
	recentKeywords: PropTypes.array,
	onUpdateInfo: PropTypes.func.isRequired,
	onKeyPress: PropTypes.func.isRequired,
	onActivated: PropTypes.func.isRequired,
	onApiRequest: PropTypes.func.isRequired,
	onSearchFromHistory: PropTypes.func.isRequired
};

module.exports = Viewer;