# cardAlarm

[<img src="img/lovelaceUI_cardAlarm.jpg" align="right" width="300">](img/lovelaceUI_cardAlarm.jpg)

The cardAlarm gives you some input options to enter some protection code. The PIN is sent back to your openHAB software. Every action based on the right or wrong code will be handled in openHAB as well. 

[Example Configuration](openhab_scripts_nspanel1_cardAlarm.md)

**Important:** This *Card* will do nothing if called directly without any context. At least it requires some information about the *NSPanel Item* to work with, which is usually supplied from the *CallBack* calling the script with this *Card*. To [enable direct testing in your Blockly editor](blockLibrary_nspanel_helpers_setNSPanelIfNotContext.md) or to [force the *NSPanel Item*](blockLibrary_nspanel_helpers_startScriptWithContext.md) you can use the related helpers. To get to know [which *NSPanel Item* you are working on](blockLibrary_nspanel_helpers_getContextItem.md), use some helper as well.<br clear="right"/>

## Configuration

<img title="" src="img/blockLibrary_nspanel_cards_cardAlarm.png" alt="" align="right" width="300">

### Standard Top Configuration

- The Page Title which is used for this page.
- The Refresh Time, after that time the page contents got refreshed. This might be useful when displaying some changing entities on the page, like lights or switches, to keep them in sync with their openHAB status (you can also use some rule to trigger the update via the [*Callback* remote control options](blockLibrary_nspanel_callback_callback.md)). This refresh timeout won't work (and will be ignored) when [directly started with context](blockLibrary_nspanel_helpers_startScriptWithContext.md), it needs to be called from *CallBack* for this to work.
- Navigation items (previous, next) to easily enable some link to other cards. Best choose the [Navigation String Helper](blockLibrary_nspanel_helpers_navString.md) from the NSPanel Helpers Menu. These items will be displayed in the top area left or right.

### Special Configuration for cardAlarm

- Add up to 4 different [Alarm Buttons](blockLibrary_nspanel_helpers_alarmButton.md) on the right side of the display to indicate different settings or enable some actions.
- You can add some Icon beside the code to be entered, and decide if a numpad should be shown.
- There is some option for another Icon on the bottom left of the display, which can also trigger some action.<br clear="right"/>

---

[Openhab Blockly Nspanel - Library Documentation](README.md)

---
