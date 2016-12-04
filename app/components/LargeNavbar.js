var React = require("react");
var PropTypes = React.PropTypes;
var Navbar = require("react-bootstrap").Navbar;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var Button = require("react-bootstrap").Button;
var styles = require("../styles/styles");
	
	
function LargeNavbar(props){
	return(
				<Navbar fixedTop style={styles.navbar}>
						<Navbar.Header>
							<Navbar.Brand>
								<a 
									href="https://en.wikipedia.org/wiki/Special:Random" 
									target="_blank"
									style={styles.navBrand}
								>Random article</a>
							</Navbar.Brand>
						</Navbar.Header>
						<Navbar.Form pullRight>
							<FormGroup>
								<FormControl 
									type="text"
									placeholder="Search Wikipedia" 
									onChange={props.onUpdateInfo}
									value={props.keyword}
									onKeyPress={props.onKeyPress} 
								/>
							</FormGroup>
							<Button
								type="button" 
								disabled={props.requestsInLine > 0}
								bsStyle="success"
								onClick={props.onApiRequest}
							>{props.requestsInLine > 0 ? "Searching" : "Search"}</Button>
						</Navbar.Form>
				</Navbar>
	);
}

LargeNavbar.propTypes = {
	onUpdateInfo: PropTypes.func.isRequired,
	keyword: PropTypes.string.isRequired,
	requestsInLine: PropTypes.number.isRequired,
	onKeyPress: PropTypes.func.isRequired,
	onApiRequest: PropTypes.func.isRequired
};

module.exports = LargeNavbar;