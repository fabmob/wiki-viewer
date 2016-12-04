var styles = {

	mainDiv: {
		margin: "0",
		padding: "0",
		minHeight: "100%",
		height: "auto",
		minWidth: "100%"
	},

	defaultInput: {
		backgroundColor: "#FFF7CA",
		marginTop: "10%",
		paddingBottom: "1em",
		borderRadius: "5px",
		textAlign: "center",
		fontFamily: "'Montserrat', sans-serif"
	},

	navbar: {
		marginTop: "0",
		// workaround for an easier bootstrap navbar colour change
		backgroundImage: "none",
		backgroundColor: "#EC7619"
	},

	navBrand: {
		color:  "#2C6700",
		fontFamily: "'Montserrat', sans-serif"
	},

	smallNavbar: {
		backgroundColor: "#463E39",
		paddingTop: "20px",
		textAlign: "center"
	},

	ulDiv: {
		marginTop: "60px",
		marginBottom: "20px"
	},

	historyDiv: {
		paddingTop: "80px",
		paddingRight: "2em",
		position: "fixed",
		fontFamily: "'Montserrat', sans-serif",
		textAlign: "center",
		color: "#000"
	},

	itemStyle: {
		listStyle: "none",
		textAlign: "center",
		marginTop: "0.5em",
		backgroundColor: "#fff",
		border: "1px solid black",
		borderRadius: "5px",
		fontFamily: "Arial, Helvetica, sans-serif"
	}, 
	
	hover: {
		listStyle: "none",
		textAlign: "center",
		marginTop: "0.5em",
		backgroundColor: "#FBD7AC",
		border: "1px solid black",
		borderRadius: "5px",
		fontFamily: "Arial, Helvetica, sans-serif"
	}
};

module.exports = styles;