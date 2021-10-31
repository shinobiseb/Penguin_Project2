////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Song = require("../models/song");
/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
// router.get("/", (req, res) => {
//   res.render("your server is running... better catch it.");
// });

router.get("/playlist/seed", (req, res)=> {
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
router.get("/", async (req, res) => {
  const songs = await Song.find({});
  res.render("songs/index.liquid", { songs });
});

// new route
router.get("/new", (req, res) => {
  res.render("songs/new.liquid");
});

// create route
router.post("/", (req, res) => {
  // create the new fruit
  Song.create(req.body)
    .then((song) => {
      // redirect user to index page if successfully created item
      res.redirect("/playlist");
    })
    // send error as json
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});


// edit route
router.get("/:id/edit", (req, res) => {
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
router.put("/:id", (req, res) => {
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

//delete
router.delete("/:id", (req, res) => {
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
router.get("/:id", (req, res) => {
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



//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;