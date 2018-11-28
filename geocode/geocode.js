// weather forecast.io
// Api key a3b4862e9775c2cd32af967674fd70cd
//https://api.darksky.net/forecast/a3b4862e9775c2cd32af967674fd70cd/37.8267,-122.4233

const request = require('request');

var geocodeaddress = (address, callback) => {

    var encodedAddress=encodeURIComponent(address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true

}, (error, response, body)=> {
if(error){
    callback('unable to connect to google server');
}
else if (body.status ==="OVER_QUERY_LIMIT")
{
    callback('Key access to Google maps is deprecated');
}
else if (body.status === "OK"){
    callback(undefined, {
        Address: body.results[0].formatted_address
        
    });
     callback(JSON.stringify(body, undefined, 2)); 
}
else if(body.status === 'ZERO_RESULTS')
{
    callback('Unable to fetch query');
}
      
}); 

}

module.exports =
{
    geocodeaddress
} 