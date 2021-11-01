# Project 2
#### By Seb Patin

## Project Summary

My build will be using Express, Liquid, and Node to create a list of your favorite songs from Youtube and include pictures and videos of the song. It will also use HTML, CSS, Javascript, Dotenv, Liquid-Express-Views, Method-Override, Mongoose, and Morgan.

## Models

Song
 - name: {type: String, required: true}
 - link: {type: String, required: true}
 - artist: {type: String, required: true}
 - description: String
 
## Route Table

List your routes in a table

| Route Name | URL | HTTP | Description |
|-----------|------|-------|-------------|
| INDEX |/playlist| get | get all songs iny your playlist
| NEW |/playlist/new| get | Submit a form to add song to playlist
| SHOW |/playlist/:id| get | Show specific song
| CREATE |/playlist| POST | Add new song to playlist
| UPDATE |/playlist/:id| PUT |Updates a song to the playlist and redirects back to playlist
| DELETE |/playlist| DELETE | delete a song from the playlist

---

## User Stories

As a user I want to be able to add songs to a playlist where they can share it to others. 

I want to be able to save the playlist to a database under a username and password

I also want to be able to delete, edit and add new songs to my playlist

I want to be able to customize my playlist title

I want to be able to stream music from any platform in one place

---
## Challenges

### MVC Formatting
Trying to get through the MVC formatting process was somewhat difficult even with assitance. Still a bit fuzzy on how it works but that's a work in progress.

### Materialize
Something that was also challenging was working with the JS and CSS of a new library.  Reading the documentation of the library proved to be a bit more difficult than I expected.  A lot of properties seemed hidden, and certain effects were very confusing to me as to how to make work such as transitions and icon types. (add examples)

### Responsive Styling
Learning Materialize's grid system and responsive styling was extremely difficult and I'm still not very comfortable with it.  

I ended up using media queries to fill in the gaps of my understanding of the styling.

### Video/Audio Playing
By far the hardest challenge of this build was getting the original concept of dynamically added youtube, spotify, and soundcloud links to all play in a consistent playlist.  

First, I started by searching how to dynamically embed videos, which showed a lot of results that were for different types of data retrieval.  None of which were of use to me.

Asking a developer friend, I found that using the split method when pasting a link into the edit or new song field, would allow me to use youtube's embed feature pretty easily.  With some tweaking I was able to get youtube videos links running.

In the end, I ended up settling with the concept of a list of your favorite songs and a link to the song via a link on youtube.

I still need to do some work on getting the songs to play in a playlist format, and for other platforms though.

## List of Technologies

HTML, CSS, Javascript, Dotenv, Liquid-Express-Views, Method-Override, JQuery, Mongoose, Express, Liquid, Materialise and Morgan