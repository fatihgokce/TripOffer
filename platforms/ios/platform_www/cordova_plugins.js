cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
        "id": "cordova-plugin-geolocation.Coordinates",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "id": "cordova-plugin-geolocation.PositionError",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/Position.js",
        "id": "cordova-plugin-geolocation.Position",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
        "id": "cordova-plugin-geolocation.geolocation",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-geolocation": "2.0.1-dev",
    "cordova-plugin-whitelist": "1.2.0",
    "cordova-plugin-device": "1.1.1"
}
// BOTTOM OF METADATA
});