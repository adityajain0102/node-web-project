const request = require('request');

var getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/a3b4862e9775c2cd32af967674fd70cd/${lat},${lng}`,
        json: true
    
    }, (error, response, body) =>{
    
        //method 1
        // if(error)
        // {
        //     console.log('Unable to connect to forecast.io');
        // }
        // else if(response.statusCode === 400)
        // {
        //     console.log('unable to fetch weather');
        // }
        // else if (response.statusCode === 200)
        // {
        //     console.log(body.timezone);
        // }
        // else{
        //     console.log(response.statusCode);
        // }
        
        //method 2
    if(error)
    {
        callback('unable to connect to weather forecast.io');
    }
        else if(!error & response.statusCode ===200)
        {
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else if(!error & response.statusCode === 400)
        {
            callback('Unable to fetch weather');
        }
        else
        {
            callback('unable to connect to weather forecast.io');
        }
    });
}

module.exports.getWeather = getWeather;
