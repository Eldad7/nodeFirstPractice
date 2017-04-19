'use strict'

var events = require('events');
var config = require('./config');

var video = config("Kutner", "Music");

video.voteUp();
video.voteUp();
video.voteDown();
video.getInfo();
video.voteDown();
video.voteDown();
video.getInfo();