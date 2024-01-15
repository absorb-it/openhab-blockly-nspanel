# setBrightness

[<img src="img/blockLibrary_nspanel_helpers_setBrightness.png" align="right" width="300">](img/blockLibrary_nspanel_helpers_setBrightness.png)

**Important:** This *helper* will do nothing if called directly without any context. It requires some information about the *NSPanel Item* to work with. If you don't use this helper in any script called by your CallBack (like some Card), you need to [set the context yourself](blockLibrary_nspanel_helpers_startScriptWithContext.md).

## Configuration

Just supply the new brightness settings for your panel as values between 0 and 100. They will get activated immediately trough some [indirect call trough your CallBack](blockLibrary_nspanel_callback_callback.md#newbrigthness). Your CallBack has to be configured and working.<br clear="right"/>

---

[Openhab Blockly Nspanel - Library Documentation](README.md)

---


