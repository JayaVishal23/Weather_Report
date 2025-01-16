import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const api_id = process.env.API_KEY;;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const loc = req.body.uloc;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${api_id}`
    );

    const data = response.data;
    //   console.log(data);
    const descrip = data.weather[0].description;
    const temp = data.main.temp - 273;
    const tempC = temp.toFixed(2);
    const feels = data.main.feels_like - 273;
    const feelsC = feels.toFixed(2);
    const wspd = data.wind.speed;
    res.render("index.ejs", {
      location: loc,
      description: descrip,
      temperature: tempC,
      feelslike: feelsC,
      windspeed: wspd,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log("Listening");
});
