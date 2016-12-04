var React = require("react");
var PropTypes = React.PropTypes;
var HistoryItemContainer = require("../containers/HistoryItemContainer");
var MediaQuery = require("react-responsive");
var styles = require("../styles/styles");


function SearchHistory(props){
	var recentKeywordsList = props.recentKeywords.map(function(keyword, i){
		return (
			<HistoryItemContainer key={keyword + i} keyword={keyword} onSearchFromHistory={props.onSearchFromHistory} />
		);	
	});

	return(
		<div style={styles.historyDiv}>
			<MediaQuery minWidth={1156}>
				<h2>Recent Searches</h2>
			</MediaQuery>
			<MediaQuery maxWidth={1155}>
				<h3>Recent Searches</h3>
			</MediaQuery>	
			<ul>
				{recentKeywordsList}
			</ul>
		</div>
	);
}

SearchHistory.propTypes = {
	recentKeywords: PropTypes.array.isRequired,
	onSearchFromHistory: PropTypes.func.isRequired
};

module.exports = SearchHistory;