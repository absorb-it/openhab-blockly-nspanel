# reloadPage

[<img src="img/blockLibrary_nspanel_helpers_reloadPage.png" align="right" width="300">](img/blockLibrary_nspanel_helpers_reloadPage.png)

**Important:** This *helper* will do nothing if called directly without any context. It requires some information about the *NSPanel Item* to work with. If you don't use this helper in any script called by your CallBack (like some Card), you need to [set the context yourself](blockLibrary_nspanel_helpers_startScriptWithContext.md).

## Configuration

There is no further configuration required. The local page (the current Script) will be reloaded trough some [indirect call trough your CallBack](blockLibrary_nspanel_callback_callback.md#loadpage), therefore your CallBack has to be configured and working. Be aware that you might end in some endless loop if you don't use this helper the right way.<br clear="right"/>

---

[Openhab Blockly Nspanel - Library Documentation](README.md)

---
