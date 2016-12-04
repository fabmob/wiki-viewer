var React = require("react");
var Viewer = require("../components/Viewer");
var makeApiRequest = require("../helpers/makeApiRequest");


var ViewerContainer = React.createClass({

	getInitialState: function(){
		return {
			keyword: "",
			results: {
				names: [],
				descriptions: [],
				links: []
			},
			keywordsHistory: [],
			// activated is used for tracking which search input should be displayed
			activated: false,
			// requestsInLine prevents multiple API requests being made at the same time 
			requestsInLine: 0
		};
	},

	handleApiRequest: function(){
		// prevents making multiple simultaneous API requests
		if (this.state.requestsInLine === 0){
			var requestAdded = this.state.requestsInLine + 1; 
			this.setState({requestsInLine: requestAdded});
			makeApiRequest(this.state.keyword)
			.then(function(response){
				// filling results with three separate arrays from Wiki API's JSON 
				this.handleFillResults(response[1], response[2], response[3]);
				//  request was solved positively
				var requestSolved = this.state.requestsInLine - 1; 
				this.setState({requestsInLine: requestSolved});
			}.bind(this))
			.catch(function(){
				alert("Error occured. Please, try a different search keyword.");
				//  request was solved negatively
				var requestSolved = this.state.requestsInLine - 1; 
				this.setState({requestsInLine: requestSolved});
			});
		}	
	},

	handleFillResults: function(names, descriptions, links){
		// if API request got results
		if (names.length > 0) {
			var tempResults = {
				names: names,
				descriptions: descriptions,
				links: links
			};
			var tempHistory = this.state.keywordsHistory.concat(this.state.keyword);

			this.setState({
				results: tempResults,
				keywordsHistory: tempHistory
			});
		// request returned empty JSON
		} else {
			alert("Well.. even Wikipedia doesn't know about: " + this.state.keyword + ". Please, try another keyword.");
		}
	},

	// used for changing state in child components
	handleActivated: function(){
		if (this.state.keyword){
			this.setState({activated: true});
		}	
	},

	handleUpdateInfo: function(e){
		this.setState({
			keyword: e.target.value
		});
	}, 

	handleKeyPress: function(e){
		if (e.key == "Enter" && this.state.keyword){
			e.preventDefault();
			this.setState({activated: true});
		}	
	},
	
	// when an item from a history list is clicked makes a new API request 
	handleSearchFromHistory: function(e){
		var searchKeyword = e.target.innerHTML;
		this.setState({keyword: searchKeyword},
			this.handleApiRequest
		);
	},

	render: function(){
		return (
			<Viewer 
				activated={this.state.activated}
				requestsInLine={this.state.requestsInLine}
				keyword={this.state.keyword} 
				onUpdateInfo={this.handleUpdateInfo}
				onKeyPress={this.handleKeyPress}
				onActivated={this.handleActivated}
				onApiRequest={this.handleApiRequest}
				recentKeywords = {this.state.keywordsHistory.slice(-7).reverse()}
				onSearchFromHistory = {this.handleSearchFromHistory}
				results={this.state.results}
			/>
		);
	}
});

module.exports = ViewerContainer;