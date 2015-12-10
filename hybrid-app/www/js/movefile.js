var timeStart = 0;
var timeStop = 0;
var duration = 0;

function onBodyLoad () {
    timeStart = new Date().getTime();
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  displayImage();
}

function displayImage() {
  var canvas = document.getElementById('imageSource');
  var ctx = canvas.getContext('2d');

  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);

    var imageData = ctx.getImageData(0, 0, img.width, img.height);
    var filtered = ImageFilters.Redify(imageData);
    ctx.putImageData(filtered, 0, 0);

    timeStop = new Date().getTime();
    duration = timeStop - timeStart;
    var pEl = document.getElementById("duration");
    pEl.innerHTML += duration;
  }
  img.src = "img/testimage.jpeg";
  canvas.width = img.width;
  canvas.height = img.height;
}
