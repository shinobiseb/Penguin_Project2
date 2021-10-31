# Project 2
#### By Seb Patin

## Project Summary

My build will be using Express, Liquid, and Node to create a playlist from multiple streaming platforms. It will also use HTML, CSS, Javascript, Dotenv, Liquid-Express-Views, Method-Override, Mongoose, and Morgan.

## Models

Song
 - name: {type: String, required: true}
 - link: {type: String, required: true}
 - artist: {type: String, required: true}
 - description: String

 User
 - username: {type: String, required: true, unique: true},
 - password: {type: String, required: true}
 
 

## Route Table

(update this)

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

### Video/Audio Playing
By far the hardest challenge of this build was getting the original concept of dynamically added youtube, spotify, and soundcloud links to all play in a consistent playlist.  

First, I started by searching how to dynamically embed videos.  I found a very helpful stack overflow link: 
https://stackoverflow.com/questions/29452134/embedding-youtube-video-dynamically

This link essentially stated three rules, two of which were of use to me.  

The link should be added in jquery, but I thought liquid would work just as well.  The second rule was I would need a youtube api link, and to work with youtube's API for the rest of the journey

#### Youtube API




## List of Technologies

HTML, CSS, Javascript, Dotenv, Liquid-Express-Views, Method-Override, Mongoose, Express, Liquid, Materialise and Morgan