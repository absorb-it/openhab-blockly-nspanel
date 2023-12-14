# cardEntities

[<img src="img/lovelaceUI_cardEntities.jpg" align="right" width="300">](img/lovelaceUI_cardEntities.jpg)

The cardEntities page gives you the overview of the status of up to 4 different entities. You can modify them directly on this page or access some sub-pages, popups, to do more detailed configurations.

[Example Configuration](openhab_scripts_nspanel1_cardEntities.md)

<br clear="right"/>

## Configuration

[<img src="img/blockLibrary_nspanel_cards_cardEntities.png" align="right" width="300">](img/blockLibrary_nspanel_cards_cardEntities.png)

### Standard Top Configuration

- The *NSPanel Item* which is used to control the panel with MQTT.

- The Page Title which is used for this page.

- The Refresh Time, after that time the page contents got refreshed. This might be useful when displaying some changing entities on the page, like lights or switches, to keep them in sync with their openHAB status (you can also use some rule to trigger the update via the [Callback remote control options](blockLibrary_nspanel_callback_callback.md)).

- Navigation items (previous, next) to easily enable some link to other cards. Best choose the [Navigation String Helper](blockLibrary_nspanel_helpers_navString.md) from the NSPanel Helpers Menu. These items will be displayed in the top area left or right.

### Special Configuration for cardEntities

- Add up to 8 different Entities to indicate different settings or enable some actions. The Icon will be displayed together with the Name, the Value will be ignored. The layout will be automatically changed if slots 7 or 8 are used for some Entity.

- Only some Entities are useful, because there is not enough space on the Grid view to include a lot of additional functions. Choose one of the following entities from the "NSPanel Entities" library:
  
  - [Entity Label](blockLibrary_nspanel_entities_label.md) - some Icon with a Label
  - [Entity Button](blockLibrary_nspanel_entities_button.md) - has some additional Action trigger
  - [Entity Shutter](blockLibrary_nspanel_entities_shutter.md) - looks like the Entity Button, but can open Shutter Popup
  - [Entity Selector](blockLibrary_nspanel_entities_selector.md) - looks like the Entity Button, but can open Selector Popup
  - [Entity Timer](blockLibrary_nspanel_entities_timer.md) - looks like the Entity Button, but can open Timer Popup

---

[Openhab Blockly Nspanel - Library Documentation](README.md)

---
