# Server - rgb-led-wifi

RGB led strip manager via wifi using a nodemcu chip with J5

## Requirements

* NodeMCU
* Led Strip

## Development Setup

Start server!

```bash
npm start
```

In the case you want to try socket connection without having your NodeMcu connected, you can run this script to disable it, and pretend that everything is connected properly.

```bash
DISABLE_BOARD=true npm start
```

### Setup your NodeMCU

#### Download Wifi Enabled Firmata

You can obtain the WiFi-enabled version of Firmata from the [FirmataBuilder](http://firmatabuilder.com/) web site.

* Under "Configure Connection" choose "WiFi" as the "Connection Type".
* Choose "ESP8266" from "Wi-Fi board or shield".
* Enter your network's SSID under "SSID"
* Make sure you choose all of the needed "Core Features", which are normally:
  * DigitalInputFirmata
  * DigitalOutputFirmata
  * AnalogInputFirmata
  * AnalogOutputFirmata
  * I2CFirmata
* Now you can "Build and Download" your custom Firmata.

#### Flash the ESP8266 With Firmata

Once the ESP8266 board addon is installed, and you have downloaded your custom Firmata sketch, you are ready to flash your ESP8266.

* Open the custom Firmata you downloaded from FirmataBuilder with the Arduino IDE.
* Customize the sketch with the WPA passphrase for your network settings.
* Make sure your ESP8266 is plugged into your USB port.
* Choose your ESP8266 model from the "Tools > Boards" menu.
* Click on the "Upload" button. Your ESP8266 should now be ready.
