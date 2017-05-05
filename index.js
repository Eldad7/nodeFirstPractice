'use strict'

var events = require('events'),
	http = require('http'),
	config = require('./config'),
	videos = 0;

http.createServer(function (req,res) {
	var video = config(`video_${++videos}`, "Music");
	video.voteUp();
	video.voteUp();
	video.voteDown();
	var data = video.getInfo();
	video.voteDown();
	video.voteDown();
	data = video.getInfo();
	res.writeHeader(200);
	res.end(data);
}).listen(process.env.PORT || 8080);
console.log('listening on port 8080');

