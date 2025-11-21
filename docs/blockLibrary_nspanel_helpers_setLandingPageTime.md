# setLandingPageTime

[<img src="img/blockLibrary_nspanel_helpers_setLandingPageTime.png" align="right" width="300">](img/blockLibrary_nspanel_helpers_setLandingPageTime.png)

**Important:** This *helper* will do nothing if called directly without any context. It requires some information about the *NSPanel Item* to work with. If you don't use this helper in any script called by your CallBack (like some Card), you need to [set the context yourself](blockLibrary_nspanel_helpers_startScriptWithContext.md).

## Configuration

Just supply the new timeout to forget the last page if screensaver is shown in seconds (begin again with landingPage Mode). It will get activated immediately trough some [indirect call trough your CallBack](blockLibrary_nspanel_callback_callback.md#newtimeout). Your CallBack has to be configured and working.<br clear="right"/>

---

[Openhab Blockly Nspanel - Library Documentation](README.md)

---
