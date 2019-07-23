import { Accelerometer } from "accelerometer";

if (Accelerometer) {
  // sampling at 1Hz (once per second)
  const accel = new Accelerometer({ frequency: 1 });
  accel.addEventListener("reading", () => {
    console.log(
      `ts: ${accel.timestamp}, \
       x: ${accel.x}, \
       y: ${accel.y}, \
       z: ${accel.z}`
    );
  });
  accel.start();
}
