var axios = require("axios");


function makeApiRequest(keyword){

	var numberOfResults = 12; 

	return ( axios.get("https://wiki.lafabriquedesmobilites.fr//w/api.php?action=opensearch&search=" + keyword 
				+ "&limit=" + numberOfResults + "&origin=*" )
			.then(function(response){
				return response.data;
			})
			);	
} 

module.exports = makeApiRequest;
