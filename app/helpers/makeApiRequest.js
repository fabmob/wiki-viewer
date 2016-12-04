var axios = require("axios");


function makeApiRequest(keyword){

	var numberOfResults = 12; 

	return ( axios.get("https://en.wikipedia.org//w/api.php?action=opensearch&search=" + keyword 
				+ "&limit=" + numberOfResults + "&origin=*" )
			.then(function(response){
				return response.data;
			})
			);	
} 

module.exports = makeApiRequest;