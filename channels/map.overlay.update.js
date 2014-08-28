cmapi.channel["map.overlay.update"] = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.overlay.update",
    "description": "Update an existing overlay.",
    "properties": {
      "name": {
        "description": "The new name of the overlay. Note that overlay names do not have to be unique and are intended for display purposes only.",
        "type": "string",
        "default": "N/A"
      },
      "overlayId": {
        "description": "The unique ID of the overlay being updated. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. If an overlay with the given ID already exists, this message will update that overlay. If an overlay with the given ID does not exist, an error is generated.  Note that overlay IDs MUST be unique even across multiple parent overlays.",
        "type": "string",
        "default": "sending widget's ID"
      },
      "parentId": {
        "description": "The ID of the parent overlay that is associated with this overlay.  If no ID is provided, the overlay will keep its existing parentage.  If a parentId is provided, the parentage of the overlay will be changed to the new parentId.  If an overlay with an ID of parentId does not exist, a new overlay will be created and the parentage of the overlay identified by overlayId will be changed to the newly created parent overlay.",
        "type": "string",
        "default": "N/A"
      },
      "properties": {
        "description": "A free form object that can contain any additional properties the widget wants sent with this item.  Any unsupported properties on this channel should be stored in the properties object to avoid polluting the root payload of the message.  A set of optional standardized values within the properties object MAY be added in future versions.",
        "type": "object",
        "status": "new"
      },
      "messageId": {
        "description": "A globally unique ID that identifies a particular message.  This ID SHALL be used for the lifetime of the message and is used to identify map.message.progress and map.message.complete messages that correlate to the original message with the same ID.  When sending a messageId a map that supports the user manipulation extension SHALL send map.message.progress and map.message.complete messages where appropriate.  See the map.message channels under the User Manipulation extension for more information.",
        "type": "string",
        "status": "new",
        "extension": "User Manipulation - Message Complete"
      },
      "menuId": {
        "description": "The id of a context menu that was registered in map.menu.create.  If populated, when the feature is right-clicked the context menu associated with this id will appear allowing the user to perform custom actions on the feature handled by the widget which registered the context menu.  If no menuId is assigned, the feature will not have a context menu associated when right-clicked.",
        "type": "string",
        "status": "new",
        "extension": "User Manipulation - Context Menus"
      }
    },
    "required": []
  },
  "notes": [],
  "changeLog": [{
    "version": "1.3.0",
    "change": "Added optional messageId parameter to support user manipulation extension"
  }, {
    "version": "1.3.0",
    "change": "Added optional properties object"
  }, {
    "version": "1.3.0",
    "change": "Added optional menuId parameter"
  }]
};
