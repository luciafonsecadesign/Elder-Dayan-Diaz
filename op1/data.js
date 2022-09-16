var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
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
        "yaw": 0.09129414548893777,
        "pitch": 0.2897891958426939,
        "fov": 1.4210867929104314
      },
      "linkHotspots": [
        {
          "yaw": 0.05679509287486262,
          "pitch": 0.18609188692213863,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05545759403762318,
          "pitch": 0.12352904730627046,
          "rotation": 0,
          "target": "2-atras"
        },
        {
          "yaw": -3.1373638480256076,
          "pitch": 0.3098041329604335,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-atras",
      "name": "Atras",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0999638601767483,
          "pitch": 0.4855246539889908,
          "rotation": 0,
          "target": "1-centro"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Van Sprinter Alejandro",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
