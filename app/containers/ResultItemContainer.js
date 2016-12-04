var React = require("react");
var PropTypes = React.PropTypes;
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var styles = require("../styles/styles");


var ResultItemContainer = React.createClass({

	propTypes: {
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired, 
		link: PropTypes.string.isRequired
	},	
	
	getInitialState: function(){
		return {
			showModal: false,
			hover: false 
		};
	}, 

	close: function(){
		this.setState ({showModal: false});
	}, 

	open: function(){
		this.setState ({showModal: true});
	},

	handleMouseEnter: function(){
		this.setState ({hover: true});
	},

	handleMouseLeave: function(){
		this.setState ({hover: false});
	},

	render: function(){
		var itemText = this.props.description.slice(0, 60) + "...";

		return(
			<li 
				style={this.state.hover ? styles.hover : styles.itemStyle} 
				onClick={this.open} 
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<h4><strong>{this.props.name}</strong></h4>
				{itemText}
				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p> {this.props.description} </p>
						<p> More: <a href={this.props.link} target="_blank">Wiki article</a></p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</li>	
		);
	}
});

module.exports = ResultItemContainer;