# API to change Settings of the Callback (including Options of Complex Callback)

[<img src="img/openhab_scripts_nspanel1_postUpdate.png" align="right" width="300">](img/openhab_scripts_nspanel1_postUpdate.png)

The Callback is made to forward the received MQTT message from the Item to the last active script (Card / Page). Beside, it will actively check if the received MQTT is some result of the calling card and give this information to the script as well. Some special options, which might be triggered by directly changing the state of the *NSPanel Item*, can modify this behavior a little bit.

## refresh

The current card just gets refreshed. Maybe something in the openHAB environment changed and you like to display this change on the current card? Just set the state of the *NSPanel Item* to 'refresh'.

## refreshTimer

The 'refreshTimer' option is mainly used internally to auto-refresh some page. You can find the related configuration option on every card. The difference to a plain 'refresh' is, that the refresh is only done if the screen saver is not shown.

## loadPage

If you set the state of the *NSPanel Item* to 'loadPage?yourScriptID' (and replace yourScriptID with a script you created, which displays a Card), you can load this Card. The difference compared to start the script directly is, that the callback will remember this Card and might display a screen saver over it, go back to this Card when the screen saver is finished or do a refresh of this Card without any further information. The same can be done [in blockly with the loadpage helper](blockLibrary_nspanel_helpers_loadPage.md).

## loadScreensaver

Set the *NSPanel Item* to 'loadScreensaver' and it directly activates the screensaver. The same can be done [in blockly with the loadpage helper](blockLibrary_nspanel_helpers_loadScreensaver.md).

## newTimeout

Provide the new screensaver timeout as a parameter to the state change of the *NSPanel Item*, like 'newTimeout?30' to set the timeout to 30 seconds.

## newBrightness

You can also modify the brightness settings of the display on the fly, maybe to dim the panel down by night. Just provide the screensaver brightness as the first parameter, the normal brightness as the second parameter. For instance by setting the *NSPanel Item* at 'newBrightness?35?80'. The same can be done [in blockly with the setBrightness helper](blockLibrary_nspanel_helpers_setBrightness.md).

## complexScreenSaver

You can decide, if you like to change to the more complex screensaver or change back to the normal one. Supply 'complexScreenSaver?TRUE' or 'complexScreenSaver?FALSE' to the *NSPanel Item*, however you like this. Be aware that this will only take effect onc the screensaver is shown again. If you like this change to be immediate, than [reload the Screensaver](blockLibrary_nspanel_helpers_loadScreensaver.md) manually.

## screensaverScriptName

Set some new script for configuration of the screensaver (script will run after the screensaver is shown). Set the *NSPanel Item* to 'screensaverScriptName?ScriptID' and from this time on the scipt with the Id (not the label) ScriptID will get called.

## startupScriptName

Set some new script to run when the panel ist activated. Set the *NSPanel Item* to 'startupScriptName?ScriptID' and the next time your panel will start this startup Script is called.

## touchScriptName, swipeLeftScriptName, swipeRightScriptName, swipeUpScriptName, swipeDownScriptName

Usually you will end on the page where the screensaver got activated when you leave the screensaver again. You might have choosen some landing page feature by activating the "use LandingPage Mode" option for your startup script.

Here you can change your scripts and also this behavior. Just set your *NSPanel Item* to '...ScriptName?ScriptID?landingPageMode' and the new script will be set  . At the same time the Landing Page Mode can be changed.

Ok, some examples: Send "swipeLeftScriptName?nspanel_cardMedia?TRUE" to your *NSPanel Item* and whenever you swipe left on your screensaver, the script "nspanel_cardMedia" is called. As a LandingPage, it is always called when you swipe left. Or send "touchScriptName?nspanel_cardGrid?FALSE" to your *NSPanel Item* and when you touch the screensaver, the script "nspanel_cardGrid" might be called - if there is no known previous page.

All of this can be more comfortably done in blockly with the [setScreensaverScripts](blockLibrary_nspanel_helpers_setScreenSaverScriptsComplex.md) or with the [setScreensaverScriptsLandingPage](blockLibrary_nspanel_helpers_setScreenSaverScriptsComplex_LandingPage.md).
