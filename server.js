const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const artistRoutes = require("./routes/artistRoutes");


// app.use("/api/v1/user", userRoutes); // NTS: check if needed
// app.use("/api/v1/artist", artistRoutes);

//Api_key : ada165e490f08a5fb48e6945c805519d
//no auth


dotenv.config();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static("public"));
app.use(express.json());
app.use(cors());


app.get("/", function (req, res) {
  res.send("Backend is running successfully....");
});

app.use("/api/v1/artist", artistRoutes);

const PORT = process.env.PORT || 8000;
app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode  on port ${PORT}`
  )
);
// const callLastFMApi = async() =>{
//   try {
//     const apiUrl = ' https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=ada165e490f08a5fb48e6945c805519d&format=json';
//     const postData = {
//       name: "test",
//     };
//     const {data} = await axios.post(apiUrl, postData);
//     const artist = data.results.artistmatches
//     console.log(artist)

//     // Handle the API response and send a response to the client
//     // res.send(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error calling external API');
//   }

// }
// const getArtistInfo = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;
//   await callLastFMApi()
//   console.log("api key")

// });

// module.exports = {
//   getArtistInfo,
// };