# cardThermo

[<img src="img/lovelaceUI_cardThermo.jpg" align="right" width="300">](img/lovelaceUI_cardThermo.jpg)

The cardThermo is made to control one or two temperature settings for your home evironment.

[Example Configuration](openhab_scripts_nspanel1_cardThermo.md)

<br clear="right"/>

## Configuration

[<img src="img/blockLibrary_nspanel_cards_cardThermo.png" align="right" width="300">](img/blockLibrary_nspanel_cards_cardThermo.png)

### Standard Top Configuration

- The *NSPanel Item* which is used to control the panel with MQTT.

- The Page Title which is used for this page.

- The Refresh Time, after that time the page contents got refreshed. This might be useful when displaying some changing entities on the page, like lights or switches, to keep them in sync with their openHAB status (you can also use some rule to trigger the update via the [Callback remote control options](blockLibrary_nspanel_callback_callback.md)).

- Navigation items (previous, next) to easily enable some link to other cards. Best choose the [Navigation String Helper](blockLibrary_nspanel_helpers_navString.md) from the NSPanel Helpers Menu. These items will be displayed in the top area left or right.

### Special Configuration for cardThermo

- Set the *Target Temperature* as the temperature displayed in the indicator.

- Decide, if you like to display and control a second temperature and set the displayed value.

- Configure minimum and maximum temperature, the temperature steps and the temperature unit for both main and second temperature.

- Configure the texts displayed on the left side.

- Add up to 8 [HVAC buttons](blockLibrary_nspanel_helpers_hvacButton.md) below the other controls. Only the Icon is shown, you can press theses buttons to start some action.

- Configure some action, which is triggered if the temperature is changed. If you control two temperatures, the returValue variable contains always both temperatures separated by '|'.

- You can add some popup page and configure it here using the [popupThermo](blockLibrary_nspanel_cards_popupThermo.md) module from the cards toolbox.

---

[<p style="text-align: center;">Openhab Blockly Nspanel - Library Documentation</p>](README.md)

---
