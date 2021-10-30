# Project 2
#### By Seb Patin

## Project Summary

My build will be using Mongoose,Express, Liquid, and Node to create a playlist from multiple streaming platforms. It will also use HTML, CSS, Javascript, Dotenv, Liquid-Express-Views, Method-Override, Mongoose, and Morgan.

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


## User Stories

As a user I want to be able to add songs to a playlist where they can share it to others. 

I want to be able to save the playlist to a database under a username and password

I also want to be able to delete, edit and add new songs to my playlist

I want to be able to customize my playlist title

I want to be able to stream music from any platform in one place

## Challenges

- detail roadblocks and anything you did to overcome whether you did or didn't

## List of Technologies