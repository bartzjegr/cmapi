cmapi.channel["map.view.center.bounds"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.view.center.bounds",
    "description": "Center the map on a particular bounding box. The map may also be zoomed to show the entire bounds (if possible) or to show a given range.",
    "type": "object",
    "properties": {
      "bounds": {
        "description": "Bounding box of area to be centered in map.",
        "type": "object",
        "default": " ",
        "properties": {
          "southWest": {
            "description": "Bottom right of the bounds",
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "description": "The latitude value of the point",
                "minimum": "-90",
                "maximum": "90"
              },
              "lon": {
                "type": "number",
                "description": "The longitude value of the point",
                "minimum": "-180",
                "maximum": "180"
              }
            },
            "required": ["lat", "lon"]
          },
          "northEast": {
            "description": "Top left of the bounds",
            "type": "object",
            "properties": {
              "lat": {
                "type": "number",
                "description": "The latitude value of the point",
                "minimum": "-90",
                "maximum": "90"
              },
              "lon": {
                "type": "number",
                "description": "The longitude value of the point",
                "minimum": "-180",
                "maximum": "180"
              }
            },
            "required": ["lat", "lon"]
          }
        },
        "required": ["southWest", "northEast"]
      },
      "zoom": {
        "description": "Attribute that defines the zoom behaviour of the map. If auto, map will adjust to zoom as close as possible to the given location in the user's viewable area. If a number, map will zoom to specified range in meters. If no zoom attribute is included, no zoom is performed.",
        "type": ["string", "number"],
        "default": " "
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string",
        "status": "new",
        "extension": "User Manipulation - Message Complete"
      }
    },
    "required": ["bounds"]
  },
  "notes": []
};