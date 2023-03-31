# Artists_Rest_Api

ARTIST SEARCH APPLICATION:

This is a Node.js application that allows users to search for artists using the Last.fm API. The application uses the Express framework to handle HTTP requests and responses.



GETTING STARTED:

To run the application, you'll need to have Node.js and npm installed on your machine.
Once you have Node.js and npm installed, follow these steps:


1- Clone the repository to your local machine.
2- Navigate to the project directory in your terminal or command prompt.
3- Install the project dependencies by running npm install.
4- Start the application by running npm start.
5- Open your browser and go to http://localhost:3000. (in this case, you can change the port in >server.js > line 23)


USAGE:

1- Server runs on port 3000 > localhost:3000 > Backend is running successfully should be logged.
2- Using POSTMAN:
3- Run API : localhost:3000/api/v1/artist/info
                        ^
   * If you use another port, you have to change the port in the link.
using the POST method.
            > Body > raw > JSON
Paste:

{
    "name": "test"
}
Replace "test" with the artist name: EX: "Hind"

> the csv file generated will be saved in the file public, in the project.




ACKNOWLEDGEMENT:
This application uses the Last.fm API to retrieve artist information. You can find more information about the Last.fm API at https://www.last.fm/api.


// .env still in configuration