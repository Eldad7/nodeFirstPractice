var events = require('events');

class Video extends events.EventEmitter{
	constructor(name = 'video', category = 'General'){
		super();
		this.logArray = [];
		this.name = name;
		this.category = category;
		this.rating = 0;
		this.raters = 0;
		events.EventEmitter.call(this);
		this.on("ratingChanged", this.ratingStats);
		var created = `Video created! Name: ${this.name}, Category: ${this.category}`;
		console.log(created);
		this.logArray.push(created);
	}

	voteUp(){
		this.rating++;
		this.raters++;
		this.emit('ratingChanged');
	}

	voteDown(){
		this.raters++;
		this.rating--;
		this.checkMinimum();
		this.emit('ratingChanged');
	}

	checkMinimum(){
		if (this.rating<0){
			var err = "Error - rating can't be negative!";
			console.log(err);
			this.logArray.push(err);
			this.rating = 0;
		}
	}

	getInfo(){
		var info = `Name: ${this.name}, Category: ${this.category}, Total rating: ${this.rating}, Total raters: ${this.raters}

All Messages:
`
		
		for (var i=0; i<this.logArray.length; i++)
			info += `${this.logArray[i]}
`;
		console.log(info);
		return info;
	}


	ratingStats(){
		var stats = `${this.name} rated!! total rating ${this.rating}
total raters ${this.raters}`;
		console.log(stats);
		this.logArray.push(stats);
	}

}

module.exports = function (name, category) {
		var video = new Video(name, category);
		return video;
};