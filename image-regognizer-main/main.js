Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });



function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Result").innerHTML = '<img id="captured" src="' + data_uri + '">';

    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tWMJcf6tl/model.json', modelLoaded);

function modelLoaded() {
    console.log("MODEL LOADED SUCCESSFULLY");
};

function identify() {

    img = document.getElementById("captured");
    classifier.classify(img, resultt);
}

function resultt(error, results) {

    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("display_object").innerHTML = results[0].label;
        document.getElementById("display_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}