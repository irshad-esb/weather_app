const request = require("request");

WEATHER_ACCESS_KEY = "5656e9651d53b09ec9efd959f7e7c4d9";
MAPBOX_ACCESS_KEY =
  "pk.eyJ1IjoiaXJzaGFkY2hhdWhhbiIsImEiOiJjbDI2NnlnengwMnMxM2Nwd29la3JoN3RoIn0.his95_QMt1pjNmMZKj6QuQ";

const weatherUrl = `http://api.weatherstack.com/current?access_key=${WEATHER_ACCESS_KEY}&query="Ahmedabad"`;

const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=${MAPBOX_ACCESS_KEY}`;

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log("please check the connectivity");
  } else if (response.body.error) {
    console.log("please enter the details properly");
  } else {
    console.log(response.body.current.feelslike);
  }
});

request({ url: mapboxUrl, json: true }, (error, response) => {
  if (error) {
    console.log("please check the connectivity");
  } else if (response.body.features.length === 0) {
    console.log("please enter the details properly");
  } else {
    console.log(response.body.features[0].center[1]);
  }
});
