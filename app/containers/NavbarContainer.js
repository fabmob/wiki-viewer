var React = require("react");
var PropTypes = React.PropTypes;
var LargeNavbar = require("../components/LargeNavbar");
var SmallNavbar = require("../components/SmallNavbar");
var MediaQuery = require("react-responsive");


var NavbarContainer = React.createClass({

	propTypes: {
		onUpdateInfo: PropTypes.func.isRequired,
		keyword: PropTypes.string.isRequired,
		requestsInLine: PropTypes.number.isRequired,
		onApiRequest: PropTypes.func.isRequired
	},

	/*this container is initialized after app state is set to activated:true;
	container replaces default input component*/
	componentDidMount: function(){
			this.props.onApiRequest();
	},

	handleKeyPress: function(e){
		if (e.key == "Enter" ){
			e.preventDefault();
			this.props.onApiRequest();
		}
	},

	render: function(){
		return (
			<div>
				<MediaQuery minDeviceWidth={768}>
					<LargeNavbar 
						onUpdateInfo={this.props.onUpdateInfo}
						keyword={this.props.keyword}
						requestsInLine={this.props.requestsInLine}
						onKeyPress={this.handleKeyPress}
						onApiRequest={this.props.onApiRequest}
				/>
				</MediaQuery>
				<MediaQuery maxDeviceWidth={767}>
					<SmallNavbar 
						onUpdateInfo={this.props.onUpdateInfo}
						keyword={this.props.keyword}
						requestsInLine={this.props.requestsInLine}
						onKeyPress={this.handleKeyPress}
						onApiRequest={this.props.onApiRequest}
					/>
				</MediaQuery>
			</div>
		);
	}
});

module.exports = NavbarContainer;