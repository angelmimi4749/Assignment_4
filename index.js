
function output() {
   document.getElementById("right_btn2").style.backgroundColor = "black";
   document.getElementById("Text").innerHTML = "I'm right";
   document.getElementById("right_btn1").style.backgroundColor = "gray";
}

function output2() {
   document.getElementById("right_btn1").style.backgroundColor = "black";
   document.getElementById("Text").innerHTML = "No, I'm right!";
   document.getElementById("right_btn2").style.backgroundColor = "gray";
}

function onAlert() {
   alert("Hey, I told you not to hover over me!");
}


function matchPass() {
   var pass = document.getElementById("password").value;
   if (pass != "12345678") {
      alert("Wrong Password");
   }
   else {
      var complete =  document.getElementById("complete");
      complete.innerHTML = "Form Submission Completed";
   }
}

function volumeOfSphere() {
   let radius = document.getElementById("radius").value;
   let volume = (4/3)* Math.PI * Math.pow(radius, 3);
   document.getElementById("volume").innerHTML = "The volume of this sphere is: "+volume.toFixed(2);
}
