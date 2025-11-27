# Entity Timer

This entity gives you some option to configure a timer (Wakeup or Countdown) and use [helpers](blockLibrary_nspanel_helpers_setTimerAction.md) to trigger some actions if the timer is finished.

## Configuration

[<img src="img/blockLibrary_nspanel_entities_timer.png" align="right" width="300">](img/blockLibrary_nspanel_entities_timer.png)

- Type: There are three different Timer options available

  - Wakeup [Hrs:Min]: you can configure the time with Hours:Minutes and switch between on-time and daily wakeups on the popup page.
  - Countdown [Hrs:Min]: some Countdown with Hours:Minutes to run down.
  - Countdown [Min:Sec]: some Countdown with Minutes:Seconds to run down.

  Because the nspanel firmware only supports Min:Sec in the frontend, you can enter values up to 59 for the Hour Field, this gets fixed when you leave the field.

Depended on the State of the Wakeup/Countdown, you can configure the

- Icon: just enter any character or (short) string, preferably some Icon string. It can be generated with the [getIconForName](blockLibrary_nspanel_helpers_getIconForName.md) helper or just copied manually from the [Material Design Icons](https://docs.nspanel.pky.eu/icon-cheatsheet.html) page.

- Icon Color: use some suitable color for the icon. Be aware, that the color selector will let you choose some 24bit color, while on the display you can only use 16bit colors. The conversion will be done internally.

- Displayed Name: it is usually shown close to the Icon.

- Time Presets: These are the default values for the Wakeup/Countdown, you can reset the Countdown to this value at any time in the popup.

### Action Configuration

There is no need to configure any action, the Timer will work if you call the required [helper](blockLibrary_nspanel_helpers_setTimerAction.md) regularily. But if you like, you can configure some additional Action on every button (text) in the popup.<br clear="right"/>

---

[Openhab Blockly Nspanel - Library Documentation](README.md)

---
