# Screensaver Notification

This notification will be shown inside your screensaver, hiding some of the screensaver icons. To hide the notification, just send some empty notification to the *NSPanel Item*.

**Important:** This module will do nothing if called directly without any context. At least it requires some information about the *NSPanel Item* to work with, which is usually supplied from the *CallBack* calling the script with this module. To [enable direct testing in your Blockly editor](blockLibrary_nspanel_helpers_setNSPanelIfNotContext.md) or to [force the *NSPanel Item*](blockLibrary_nspanel_helpers_startScriptWithContext.md) you can use the related helpers. To get to know [which *NSPanel Item* you are working on](blockLibrary_nspanel_helpers_getContextItem.md), use some helper as well.

## Configuration

[<img src="img/blockLibrary_nspanel_screensaver_screensaverNotification.png" align="right" width="300">](img/blockLibrary_nspanel_screensaver_screensaverNotification.png)

- Configure a Header and some descriptional Text.<br clear="right"/>

---

[Openhab Blockly Nspanel - Library Documentation](README.md)

---
