/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path")

/////////////////////////////////////////////
// Database Connection
/////////////////////////////////////////////
// Setup inputs for our connect function
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG);

// Events for when connection opens/disconnects/errors
mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make song schema
const songSchema = new Schema({
  name: {type: String, required: true},
  URL: {type: String, required: true},
  artist: {type: String, required: true},
  desc: String,
  img: String,
});

// make song model
const Song = model("Song", songSchema);

/////////////////////////////////////////////////
// Create our Express Application Object Bind Liquid Templating Engine
/////////////////////////////////////////////////
const app = require("liquid-express-views")(express(), {root: [path.resolve(__dirname, 'views/')]})

// ### Register our Middleware

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get("/", (req, res) => {
  res.render("your server is running... better catch it.");
});

app.get("/playlist/seed", (req, res)=> {
    const startSongs = [
        { 
            name: "Draft One", 
            URL: "https://www.youtube.com/watch?v=pFbDR44m7Hc", 
            artist: "Sketch the Conductor", 
            desc: "Sad song about someone",
            img: "https://i2.wp.com/www.zigzagtrails.com/wp-content/uploads/2018/05/01A5330-Edit.jpg?fit=1400%2C933&ssl=1"
        },
        { 
            name: "Midnight Tokyo", 
            URL: "https://open.spotify.com/track/2rBZ51poWPQH9Fx8nTJv53?si=39ab4c7d7b0e4928", 
            artist: "Deko", 
            desc: "Some song by Deko",
            img: "https://i.ytimg.com/vi/OqJi_n3AcV4/maxresdefault.jpg"
        },
        { 
            name: "Love You like a Love song", 
            URL: "https://www.youtube.com/watch?v=EgT_us6AsDg", 
            artist: "Selena Gomez", 
            desc: "Disney star song",
            img: "https://i1.sndcdn.com/artworks-yn6i6oIe3RmXrgEz-kAev0Q-t500x500.jpg"
        },
        { 
            name: "KERAUNOS", 
            URL: "https://www.youtube.com/watch?v=D52kastH1R8", 
            artist: "PlayaPhonk", 
            desc: "Phonk song",
            img: "https://i.ytimg.com/vi/whep_5RCU6g/maxresdefault.jpg"
        },
    ]
    Song.deleteMany({})
    .then((data) => {
        // seed starter fruits
        Song.create(startSongs)
        .then((data) => {
            res.json(data)
        })
    })
})

// index route
app.get("/playlist", async (req, res) => {
  const songs = await Song.find({});
  res.render("songs/index.liquid", { songs });
});

// new route
app.get("/playlist/new", (req, res) => {
  res.render("songs/new.liquid");
});

// edit route
app.get("/playlist/:id/edit", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // get the fruit from the database
  Song.findById(id)
    .then((song) => {
      // render edit page and send fruit data
      res.render("songs/edit.liquid", { song });
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

  //update route
app.put("/playlist/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // update the fruit
  Song.findByIdAndUpdate(id, req.body, { new: true })
    .then((song) => {
      // redirect to main page after updating
      res.redirect("/playlist");
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

app.delete("/playlist/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // delete the fruit
  Song.findByIdAndRemove(id)
    .then((song) => {
      // redirect to main page after deleting
      res.redirect("/playlist");
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// show route
app.get("/playlist/:id", (req, res) => {
  // get the id from params
  const id = req.params.id;
  // find the particular fruit from the database
  Song.findById(id)
    .then((song) => {
      // render the template with the data from the database
      res.render("songs/show.liquid", { song });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});








//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));