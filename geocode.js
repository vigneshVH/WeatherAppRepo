const request=require('request');
var geocodeAdress=(address,callback)=>
{

var encodeAdress =encodeURIComponent(address);

request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAdress}`,
  json:true
},(error,response,body)=>
{
  if(error)
  {
    callback('unable to connect google server :(  ');
  }
  else if(body.status==='OVER_QUERY_LIMIT')
  {
    callback("unable to find that address   :(");
  }
else if(body.status==='OK')
{
  callback(undefined,{
    address:body.results[0].formatted_address,
    lattitude:body.results[0].geometry.location.lat,
    langitude:body.results[0].geometry.location.lng,

  });

}

});
}

module.exports.geocodeAdress=geocodeAdress;



//cda055ff9067d07b4e83ad95367f664d
