const request=require('request');
const yargs=require('yargs');
const weather=require('./Weather.js');
const argv=yargs.options(
  {
    a:{
      demand:true,
      alias:'address',
      describe:'addrress for weather',
      string:true
    }
  }
).help().alias('help','h').argv;

//we need to pass lat lan,callback
const geocode=require('./geocode.js');

geocode.geocodeAdress(argv.address,(errorMessage,results)=>
{
  if(errorMessage)
  {
    console.log(errorMessage);
  }
  else
   {
     console.log(results.address);
     weather.getWeather(results.lattitude,results.langitude,(errorMessage,weatherResults)=>
     {
       if(errorMessage)
       {
         console.log(errorMessage);
       }else
       {
       console.log(`The current temperature is ${weatherResults.temperature} and the apparentTemperature is ${weatherResults.apparentTemperature}`);
       }
     });


  }
});
