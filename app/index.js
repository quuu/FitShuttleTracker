import document from "document";
import * as messaging from "messaging";
import { Accelerometer } from "accelerometer";


// listen for an onopen connection
messaging.peerSocket.onopen = function(evt) {

  const shuttle = document.getElementById("json")
  //shuttle.text = JSON.stringify(evt.data)


  console.log("the socket is open");
  console.log(messaging.peerSocket.MAX_MESSAGE_SIZE);
}





// accelerometer code used for later
  /*
if (Accelerometer) {
  // sampling at 1Hz (once per second)
  const accel = new Accelerometer({ frequency: 1 });
  accel.addEventListener("reading", () => {

    var x = document.getElementById("x")
    var y = document.getElementById("y")
    var z = document.getElementById("z")

    x.text= accel.x
    y.text= accel.y
    z.text= accel.z


    // make socket connection with companion

    console.log(
      `ts: ${accel.timestamp}, \
       x: ${accel.x}, \
       y: ${accel.y}, \
       z: ${accel.z}`
    );
  });
  accel.start();
}


  */
