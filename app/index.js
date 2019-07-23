let document = require("document")
import { Accelerometer } from "accelerometer";

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
