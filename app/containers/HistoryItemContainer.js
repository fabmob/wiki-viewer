var React = require("react");
var PropTypes = React.PropTypes;
var styles = require("../styles/styles");


var HistoryItemContainer = React.createClass({
	
	propTypes: {
		onSearchFromHistory: PropTypes.func.isRequired,
		keyword: PropTypes.string.isRequired
	},

	getInitialState: function(){
		return {hover: false};
	},

	handleMouseEnter: function(){
		this.setState ({hover: true});
	},

	handleMouseLeave: function(){
		this.setState ({hover: false});
	},

	render: function(){
		return(
			<li 
				onClick={this.props.onSearchFromHistory} 
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				style={this.state.hover ? styles.hover : styles.itemStyle} 
			> 
				{this.props.keyword}
			</li>
		);
	}
});

module.exports = HistoryItemContainer;