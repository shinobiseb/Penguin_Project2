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

router.get("/seed", (req, res)=> {
    const startSongs = [
        { 
            name: "Draft One", 
            URL: "https://www.youtube.com/embed/pFbDR44m7Hc", 
            artist: "Sketch the Conductor", 
            desc: "Sad song for those who wish to vent frustrations with loss",
            img: "https://angartwork.akamaized.net/?id=133586580&size=640"
        },
        { 
            name: "The Tempo's 100", 
            URL: "https://www.youtube.com/embed/cKdY9NlD6GE", 
            artist: "Sketch the Conductor", 
            desc: "Another rapid fire venting song about depression and suicide",
            img: "https://s.mxmcdn.net/images-storage/albums4/8/1/2/7/9/2/46297218_800_800.jpg"
        },
        { 
            name: "Start a Riot", 
            URL: "https://www.youtube.com/embed/Tzru5OWseZU", 
            artist: "Sketch the conductor", 
            desc: "Hype angry song following the BLM protests",
            img: "https://i1.sndcdn.com/artworks-jIXxnoA28n1TxEKd-bvXDBA-t500x500.jpg"
        },
        { 
            name: "Kira Yoshikage Theme Remix", 
            URL: "https://www.youtube.com/embed/Vjf3xgwQLCM", 
            artist: "ShinobiSyntax", 
            desc: "Hard Trap Song Remix of a Jojo's Bizarre adventure theme",
            img: "https://i1.sndcdn.com/artworks-bA1msZWh3VCftQSR-8Uv09g-t500x500.jpg"
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
    if(req.body.URL.includes('embed') === false) {
  const nonEmbedLink = req.body.URL
  const splitUp = nonEmbedLink.split('?v=');
  const vid = splitUp[1];
  const embedVersion = 'https://www.youtube.com/embed/' + vid;
  req.body.URL = embedVersion
}
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
  if(req.body.URL.includes('embed') === false) {
  const nonEmbedLink = req.body.URL
  const splitUp = nonEmbedLink.split('?v=');
  const vid = splitUp[1];
  const embedVersion = 'https://www.youtube.com/embed/' + vid;
  req.body.URL = embedVersion
}
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