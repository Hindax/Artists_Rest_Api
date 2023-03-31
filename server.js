const asyncHandler = require("express-async-handler");
const axios = require('axios');

// app.use("/api/v1/user", userRoutes); // NTS: check if needed
// app.use("/api/v1/artist", artistRoutes);

//Api_key : ada165e490f08a5fb48e6945c805519d
//no auth
const callLastFMApi = async() =>{
  try {
    const apiUrl = ' https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=ada165e490f08a5fb48e6945c805519d&format=json';
    const postData = {
      name: "test",
    };
    const {data} = await axios.post(apiUrl, postData);
    const artist = data.results.artistmatches
    console.log(artist)

    // Handle the API response and send a response to the client
    // res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error calling external API');
  }

}
const getArtistInfo = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  await callLastFMApi()
  console.log("api key")

});

module.exports = {
  getArtistInfo,
};