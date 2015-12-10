//Global variables
var picLength; // number of chunks
var myImage = new Image(); // Create a new blank image.
var timeStart = 0;
var timeStop = 0;
var duration = 0;

var context;
var img;
var canvas;
var height;
var width;
// Wait for device API libraries to load
function onBodyLoad () {
   	timeStart = new Date().getTime();
   	document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {
	displayImage();
}

// Called if something bad happens.
//
function onFail(message) {
	alert('Failed because: ' + message);
}

// Load the image and display it.
function displayImage() {

	// Get the canvas element.
 	canvas = document.getElementById("imageSource");

	// Make sure you got it.
	if (canvas.getContext) {
		context = canvas.getContext("2d");
    	img = new Image();

    	img.addEventListener("load", function() {

    var canvas = document.getElementById("imageSource");
    var ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    var imageData = ctx.getImageData(0, 0, img.width, img.height);
    var pixels = imageData.data;
    var i;

    for (i = 0; i < pixels.length*4; i += 4) {
        // Is this pixel *red* ?
            pixels[i] = 255;
            pixels[i + 1] = 0;
            pixels[i + 2] = 0;
    }

    ctx.putImageData(pixels);

});
    	img.src = "img/testimage.jpeg";

    	/*// When the image is loaded, draw it.
    	width = parseInt(img.naturalWidth);
	   	height = parseInt(img.naturalHeight);
    	canvas.height=height;
    	canvas.width=width;
     	context.drawImage(img, 0, 0);

       	//Define lenght of picture
        picLength = width * height;

        var imgd = context.getImageData(0, 0, width, height);
		var pix = imgd.data;

       // Get and modify the image data.
       getColorData();

       // Put the modified image back on the canvas.
       //putColorData();
       context.drawImage(img, 0, 0);*/
	}
    timeStop = new Date().getTime();
	duration = timeStop - timeStart;
	document.getElementById("duration").innerHTML += duration;
}

      function getColorData() {
        // Loop through data.
        for (var i = 0; i < pix.length; i += 4) {
          // First bytes are red bytes.
          pix.data[i] = 0;
          // Second bytes are green bytes.
          pix.data[i+1] = 0;
          // Third bytes are blue bytes.
          pix.data[i+2] = 0;
          // Fourth bytes are alpha bytes
          pix.data[i+3] = 0;
        }
      }

      function putColorData(){
		ctx.putImageData(img, 0, 0,picWidth,picHeight);
      }

      function noPhoto(){
        alert("Something wrong happened !!!!!!");
	  }



