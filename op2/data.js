var APP_DATA = {
  "scenes": [
    {
      "id": "0-adelante",
      "name": "Adelante",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.018798056480992642,
        "pitch": 0.000006152419615546023,
        "fov": 1.3460472818770246
      },
      "linkHotspots": [
        {
          "yaw": 0.0520944518483244,
          "pitch": 0.2931417431611152,
          "rotation": 0,
          "target": "1-centro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-centro",
      "name": "Centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3460472818770246
      },
      "linkHotspots": [
        {
          "yaw": 0.06430807692542473,
          "pitch": 0.22018603324108277,
          "rotation": 0,
          "target": "2-atrs"
        },
        {
          "yaw": -3.1210875065757993,
          "pitch": 0.21280492965098574,
          "rotation": 0,
          "target": "0-adelante"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-atrs",
      "name": "Atrás",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.078781812514004,
        "pitch": 0.3666082754131672,
        "fov": 1.3460472818770246
      },
      "linkHotspots": [
        {
          "yaw": -3.1291645995488704,
          "pitch": 0.7404705579714417,
          "rotation": 0,
          "target": "1-centro"
        },
        {
          "yaw": -3.1090997533118347,
          "pitch": 0.11653325913926338,
          "rotation": 0,
          "target": "0-adelante"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Sprinter op2",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
