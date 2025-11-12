var video;

// On load
window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.getElementById('player1')
	video.autoplay = false;
	video.loop = false;
	console.log('Success')
});

// Play
document.querySelector("#play").addEventListener("click", function () {
	document.getElementById('player1').play()
	document.getElementById('volume').textContent = document.querySelector("#slider").value + '%'

	console.log("Played");
});

// Pause
document.querySelector("#pause").addEventListener("click", function () {
	document.getElementById('player1').pause()
	console.log("Paused");
});

// Slow down
document.querySelector("#slower").addEventListener("click", function () {
	video = document.getElementById('player1')
	video.playbackRate = video.playbackRate - 0.10000000000000000000
	console.log('Speed is now ' + video.playbackRate);
});

// Speed up
document.querySelector("#faster").addEventListener("click", function () {
	video = document.getElementById('player1')
	video.playbackRate = (video.playbackRate) + 0.10000000000000000000
	console.log('Speed is now ' + video.playbackRate);
});

// Skip ahead
document.querySelector("#skip").addEventListener("click", function () {
	video = document.getElementById('player1')
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0
	}
	else {
		video.currentTime = video.currentTime + 10
	}

	console.log('Time is now ' + video.currentTime);
});

// Mute & Unmute
document.querySelector("#mute").addEventListener("click", function () {
	video = document.getElementById('player1')
	if (video.muted === true) {
		video.muted = false
		document.getElementById('mute').textContent = 'Mute'
		console.log('Unmuted');
	}
	else {
		video.muted = true
		document.getElementById('mute').textContent = 'Unmute'
		console.log('Muted');
	}
});

// Volume
document.querySelector("#slider").addEventListener("click", function () {
	console.log('Clicked');
	video = document.getElementById('player1')

	document.getElementById('volume').textContent = document.querySelector("#slider").value + '%'

	if (document.querySelector("#slider").value === 0) {
		video.volume = 0
	}
	else {
		video.volume = document.querySelector("#slider").value / 100
	}
});

// Old School Style
document.querySelector("#vintage").addEventListener("click", function () {
	video = document.getElementById('player1')
	video.classList.add("oldSchool");
});

// Original Style
document.querySelector("#orig").addEventListener("click", function () {
	video = document.getElementById('player1')
	video.classList.remove("oldSchool");
});