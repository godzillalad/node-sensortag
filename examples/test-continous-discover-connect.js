var SensorTag = require('../sensortag');

console.log("Don't forget to turn on and start the Sensor Tag BLE connect. You should see the Green LED flash");

function sensorTagDisovered(sensorTag) {
  console.log('discovered: ' + sensorTag);

  sensorTag.once('disconnect', function() {
    console.log('disconnected');
  });

  sensorTag.connectAndSetUp(function(err) {
    // restart discovery
    SensorTag.discover(sensorTagDisovered);

    if (err) {
      console.log('error occurred on connect or set up!');
      return;
    }

    console.log('connected');

    // do some stuff with the sensorTag ...
  });
}

// start discovery of a SensorTag
SensorTag.discover(sensorTagDisovered);
