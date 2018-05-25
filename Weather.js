
const request=require('request');
var getWeather=(lat,lng,callback)=>
{

      request({
    url:`https://api.darksky.net/forecast/cda055ff9067d07b4e83ad95367f664d/${lat},${lng}`,
    json:true

  },(error,response,body)=>
  {
    /*
    if(!error&&response.statuscode===200)
    {
    callback(undefined,{
      temperature:body.currently.temperature,
      apparentTemperature:body.currently.apparentTemperature
    })
  }else {
    console.log('unable to fetch weather');
  }
    */
    if(error)
    {
      callback("unable to connect weather app");
    }
    else if(response.statusCode===400)
    {
      callback('unable to fetch weather');
    }
    else if(response.statusCode===200)
    {
      callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature
      })
    //  console.log("Today temperature in "+process.argv[3]+" : "+);
    }
  });

};

module.exports.getWeather=getWeather;
