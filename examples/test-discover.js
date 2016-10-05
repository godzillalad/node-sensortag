var SensorTag = require('../lib/sensortag');

function onDiscover(sensorTag) {
  console.log('discovered: ' + sensorTag.id + ', type = ' + sensorTag.type);
}


console.log("Don't forget to turn on and start the Sensor Tag BLE connect. You should see the Green LED flash");

// Discover all Sensor Tags
SensorTag.discoverAll(onDiscover);

//Discovery by ID
//SensorTag.discoverById('3d7bd14925ad4f69b73a98cbc998c4db', onDiscover);

//Discovery by MAC address
//SensorTag.discoverByAddress('90:59:af:0a:ab:34', onDiscover);
