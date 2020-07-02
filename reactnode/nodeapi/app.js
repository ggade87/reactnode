const express = require("express");
const app = express();
const port = 5000;
const request = require("request");
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/getWhetherNewyork", (req, res) => {
  const city = req.query.city;
  console.log(
    "http://api.weatherstack.com/current?access_key=7bb08735772a60a6040cab3ca2f695de&query=$('city')"
  );
  request(
    "http://api.weatherstack.com/current?access_key=7bb08735772a60a6040cab3ca2f695de&query=" +
      city,
    function (error, response, body) {
      if (!error && response.statusCode == 200);
      {
        var pasrsedBody = JSON.parse(body);
        var temp_c = pasrsedBody["current"]["temperature"];

        res.send({ temp_c });
      }
    }
  );
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
