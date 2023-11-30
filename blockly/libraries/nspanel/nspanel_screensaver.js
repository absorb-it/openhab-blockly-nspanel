uid: absorb-it:blockly:nspanel_screensaver
tags: []
props:
  parameters: []
  parameterGroups: []
timestamp: Nov 30, 2023, 7:45:09 PM
component: BlockLibrary
config:
  name: NSPanel Screensaver/Notification
slots:
  blocks:
    - component: BlockType
      config:
        args0:
          - align: CENTER
            type: input_dummy
          - check: oh_item
            name: TARGET
            type: input_value
          - type: input_dummy
        args1:
          - align: CENTER
            type: input_dummy
          - check:
              - String
              - nspanel_entityLabelString
            name: MAIN
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: FORECAST_1
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: FORECAST_2
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: FORECAST_3
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: FORECAST_4
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: ALTERNATIVE
            type: input_value
        colour: 90
        helpUrl: https://docs.nspanel.pky.eu/config-screensaver/
        inputsInline: false
        message0: UPDATE Standard Screensaver %1 Display on %2 %3
        message1: >
          choose Label Entities (see NSPanel Entities) %1 Weather MainIcon %2 1st Forecast %3 2nd Forecast %4 3rd Forecast %5 4th Forecast %6 2nd Weather MainIcon (4th Forecast ignored) %7
        nextStatement: ""
        previousStatement: ""
        tooltip: Call this regularily with a rule triggering on any Weather Update.
        type: absorb_it_nspanel_weatherupdate
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: "{{utility:absorb_it_nspanel_weatherupdate}}({{input:TARGET}}, [{{input:MAIN}}, {{input:FORECAST_1}}, {{input:FORECAST_2}}, {{input:FORECAST_3}}, {{input:FORECAST_4}}, {{input:ALTERNATIVE}}]);"
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
    - component: BlockType
      config:
        args0:
          - align: CENTER
            type: input_dummy
          - check: oh_item
            name: TARGET
            type: input_value
          - type: input_dummy
        args1:
          - align: CENTER
            type: input_dummy
          - check:
              - String
              - nspanel_entityLabelString
            name: MAIN
            type: input_value
          - type: input_dummy
        args2:
          - align: CENTER
            type: input_dummy
          - check:
              - String
              - nspanel_entityLabelString
            name: LEFT_1
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: LEFT_2
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: LEFT_3
            type: input_value
          - type: input_dummy
        args3:
          - align: CENTER
            type: input_dummy
          - check:
              - String
              - nspanel_entityLabelString
            name: BOTTOM_1
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: BOTTOM_2
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: BOTTOM_3
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: BOTTOM_4
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: BOTTOM_5
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: BOTTOM_6
            type: input_value
          - type: input_dummy
        args4:
          - align: CENTER
            type: input_dummy
          - check:
              - String
              - nspanel_entityLabelString
            name: INDICATOR_1
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: INDICATOR_2
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: INDICATOR_3
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: INDICATOR_4
            type: input_value
          - check:
              - String
              - nspanel_entityLabelString
            name: INDICATOR_5
            type: input_value
        colour: 90
        helpUrl: https://docs.nspanel.pky.eu/config-screensaver/
        inputsInline: false
        message0: UPDATE Complex Screensaver %1 Display on %2 %3
        message1: choose Label Entities (see NSPanel Entities) %1 Main Entity %2 %3
        message2: >
          left Entities %1 1st Entity %2 2nd Entity %3 3rd Entity %4 %5
        message3: >
          bottom Entities %1 1st Entity %2 2nd Entity %3 3rd Entity %4 4th Entity %5 5th Entity %6 6th Entity %7 %8
        message4: >
          Indicator Entities %1 1st Entity %2 2nd Entity %3 3rd Entity %4 4th Entity %5 5th Entity %6
        nextStatement: ""
        previousStatement: ""
        tooltip: Call this regularily with a rule triggering on any State Update when using complex Screensaver.
        type: absorb_it_nspanel_weatherupdate2
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: "{{utility:absorb_it_nspanel_weatherupdate}}({{input:TARGET}}, [{{input:MAIN}}, {{input:LEFT_1}}, {{input:LEFT_2}}, {{input:LEFT_3}}, {{input:BOTTOM_1}}, {{input:BOTTOM_2}}, {{input:BOTTOM_3}}, {{input:BOTTOM_4}}, {{input:BOTTOM_5}}, {{input:BOTTOM_6}}, {{input:INDICATOR_1}}, {{input:INDICATOR_2}}, {{input:INDICATOR_3}}, {{input:INDICATOR_4}}, {{input:INDICATOR_5}}]);"
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
    - component: BlockType
      config:
        args0:
          - align: CENTER
            type: input_dummy
          - check: oh_item
            name: TARGET
            type: input_value
          - type: input_dummy
        args1:
          - align: CENTER
            type: input_dummy
          - check: String
            name: HEADER
            type: input_value
          - check: String
            name: TEXT
            type: input_value
        colour: 90
        helpUrl: https://docs.nspanel.pky.eu/notifications/
        inputsInline: false
        message0: SCREENSAVER NOTIFICATION %1 Display on %2 %3
        message1: (use empty fields to cancel previous notification) %1 Header %2 Text %3
        nextStatement: ""
        previousStatement: ""
        tooltip: Show some Notification directly on the Screensaver.
        type: absorb_it_nspanel_notify
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: "{{utility:absorb_it_nspanel_notify}}({{input:TARGET}}, {{input:HEADER}}, {{input:TEXT}});"
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: Header
              name: HEADER
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: Text
              name: TEXT
              required: false
              shadow: true
              type: text
    - component: BlockType
      config:
        args0:
          - align: CENTER
            type: input_dummy
          - name: TARGET
            type: input_value
          - type: input_dummy
        args1:
          - name: LEFT_FONT
            options:
              - - Small
                - "0"
              - - Normal
                - "1"
            type: field_dropdown
          - name: LEFT_ICON
            type: input_value
          - name: LEFT_ICON_COLOR
            type: input_value
          - type: input_dummy
          - name: RIGHT_FONT
            options:
              - - Small
                - "0"
              - - Normal
                - "1"
            type: field_dropdown
          - name: RIGHT_ICON
            type: input_value
          - name: RIGHT_ICON_COLOR
            type: input_value
        colour: 90
        helpUrl: https://docs.nspanel.pky.eu/config-screensaver/
        inputsInline: false
        message0: SCREENSAVER STATUS Icons %1 Display on %2 %3
        message1: >
          Left Icon (Font Size %1) %2 Left Icon Color %3 %4 Right Icon (Font Size %5) %6 Right Icon Color %7
        nextStatement: ""
        previousStatement: ""
        tooltip: Update Status Icons of Screensaver. Standard Screensaver has these Icons on Top, complex Screensaver has these Icons on Bottom.
        type: absorb_it_nspanel_status
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: "{{utility:absorb_it_nspanel_status}}({{input:TARGET}}, {{input:LEFT_ICON}}, {{input:LEFT_ICON_COLOR}}, '{{field:LEFT_ICON_FONT}}', {{input:RIGHT_ICON}}, {{input:RIGHT_ICON_COLOR}}, '{{field:RIGHT_ICON_FONT}}');"
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: LEFT_ICON
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00ee00"
              name: LEFT_ICON_COLOR
              required: false
              shadow: true
              type: colour_picker
          - component: PresetField
            config:
              name: LEFT_FONT
              required: true
              shadow: false
              value: "0"
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: RIGHT_ICON
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00ee00"
              name: RIGHT_ICON_COLOR
              required: false
              shadow: true
              type: colour_picker
          - component: PresetField
            config:
              name: RIGHT_FONT
              required: true
              shadow: false
              value: "0"
    - component: BlockType
      config:
        args0:
          - align: CENTER
            type: input_dummy
          - check: oh_item
            name: TARGET
            type: input_value
          - type: input_dummy
        args1:
          - check: Colour
            name: COLOR_background
            type: input_value
          - check: Colour
            name: COLOR_tTime
            type: input_value
          - check: Colour
            name: COLOR_timeAMPM
            type: input_value
          - check: Colour
            name: COLOR_tDate
            type: input_value
          - check: Colour
            name: COLOR_tMainText
            type: input_value
          - check: Colour
            name: COLOR_tForecast1
            type: input_value
          - check: Colour
            name: COLOR_tForecast2
            type: input_value
          - check: Colour
            name: COLOR_tForecast3
            type: input_value
          - check: Colour
            name: COLOR_tForecast4
            type: input_value
          - check: Colour
            name: COLOR_tForecast1Val
            type: input_value
          - check: Colour
            name: COLOR_tForecast2Val
            type: input_value
          - check: Colour
            name: COLOR_tForecast3Val
            type: input_value
          - check: Colour
            name: COLOR_tForecast4Val
            type: input_value
          - check: Colour
            name: COLOR_bar
            type: input_value
          - check: Colour
            name: COLOR_tMainTextAlt2
            type: input_value
          - check: Colour
            name: COLOR_tTimeAdd
            type: input_value
          - type: input_dummy
          - type: input_dummy
          - type: input_dummy
        colour: 90
        helpUrl: https://docs.nspanel.pky.eu/config-screensaver/
        inputsInline: false
        message0: SCREENSAVER COLORS %1 Display on %2 %3
        message1: >
          Background %1 Horizontal Bar %14 %19 Main Text %5 Main Text (alt2) %15 %18 Time %2 AM/PM %3 Date %4 Time (add) %16 %17 Forecast 1 %6 Forecast 1 (value) %10 Forecast 2 %7 Forecast 2 (value) %11 Forecast 3 %8 Forecast 3 (value) %12 Forecast 4 %9 Forecast 4 (value) %13
        nextStatement: ""
        previousStatement: ""
        tooltip: Configure all Colors of the Screensaver.
        type: absorb_it_nspanel_color
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: "{{utility:absorb_it_nspanel_color}}({{input:TARGET}}, {{input:COLOR_background}}, {{input:COLOR_tTime}}, {{input:COLOR_timeAMPM}}, {{input:COLOR_tDate}}, {{input:COLOR_tMainText}}, {{input:COLOR_tForecast1}}, {{input:COLOR_tForecast2}}, {{input:COLOR_tForecast3}}, {{input:COLOR_tForecast4}}, {{input:COLOR_tForecast1Val}}, {{input:COLOR_tForecast2Val}}, {{input:COLOR_tForecast3Val}}, {{input:COLOR_tForecast4Val}}, {{input:COLOR_bar}}, {{input:COLOR_tMainTextAlt2}}, {{input:COLOR_tTimeAdd}});"
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                COLOUR: "#000000"
              name: COLOR_background
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#eeeeee"
              name: COLOR_tTime
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#eeeeee"
              name: COLOR_timeAMPM
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#eeeeee"
              name: COLOR_tDate
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#ffffff"
              name: COLOR_tMainText
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00dd00"
              name: COLOR_tForecast1
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00dd00"
              name: COLOR_tForecast2
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00dd00"
              name: COLOR_tForecast3
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00dd00"
              name: COLOR_tForecast4
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000dd"
              name: COLOR_tForecast1Val
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000dd"
              name: COLOR_tForecast2Val
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000dd"
              name: COLOR_tForecast3Val
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000dd"
              name: COLOR_tForecast4Val
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#eeeeee"
              name: COLOR_bar
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#eeeeee"
              name: COLOR_tMainTextAlt2
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                COLOUR: "#eeeeee"
              name: COLOR_tTimeAdd
              shadow: true
              type: colour_picker
    - component: Separator
      config:
        gap: 48
    - component: BlockType
      config:
        args0:
          - align: CENTER
            type: input_dummy
          - check: oh_item
            name: TARGET
            required: true
            type: input_value
          - type: input_dummy
        args1:
          - check: String
            name: NOTIFICATION
            type: input_value
          - check: Colour
            name: NOTIFICATION_COLOR
            type: input_value
          - check: Number
            name: TIMEOUT
            type: input_value
          - name: FONT_ID
            options:
              - - 24 (special Chars)
                - "0"
              - - 32 (with Icons)
                - "1"
              - - 32 (special Chars)
                - "2"
              - - 48 (with Icons)
                - "3"
              - - 80 (with Icons)
                - "4"
              - - 128 (only ASCII)
                - "5"
            type: field_dropdown
          - type: input_dummy
          - type: input_dummy
        args2:
          - check: String
            name: HEADING
            type: input_value
          - check: Colour
            name: HEADING_COLOR
            type: input_value
          - name: SHOW_ICON
            type: field_checkbox
          - check: String
            name: ICON
            type: input_value
          - check: Colour
            name: ICON_COLOR
            type: input_value
          - check: String
            name: BTN_LEFT
            type: input_value
          - check: Colour
            name: BTN_LEFT_COLOR
            type: input_value
          - check: String
            name: BTN_RIGHT
            type: input_value
          - check: Colour
            name: BTN_RIGHT_COLOR
            type: input_value
          - type: input_dummy
        args3:
          - name: ACTION_LEFT
            type: input_statement
          - name: ACTION_RIGHT
            type: input_statement
        colour: 90
        helpUrl: https://docs.nspanel.pky.eu/notifications/
        inputsInline: false
        message0: >
          FULLSIZE NOTIFICATION %1 Display on %2 %3
        message1: >
          Notification %1 Color %2 Font Size %4 %5 Close Event Trigger Timeout %3 %6
        message2: >
          Heading %1 Heading Color %2 Icon %3 %4 Icon Color %5 Button Left %6 Button Left Color %7 Button Right %8 Button Right Color %9 %10
        message3: >
          Left Button Action %1 Right Button Action %2
        nextStatement: ""
        previousStatement: ""
        tooltip: Show Notification as a own Page using the whole display.
        type: absorb_it_nspanel_popupNotify
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: "{{utility:absorb_it_nspanel_setupPopupNotification}}({{input:TARGET}}, {{input:NOTIFICATION}}, {{input:NOTIFICATION_COLOR}}, {{input:TIMEOUT}}, '{{field:FONT_ID}}', {{input:HEADING}}, {{input:HEADING_COLOR}}, '{{field:SHOW_ICON}}', {{input:ICON}}, {{input:ICON_COLOR}}, {{input:BTN_LEFT}}, {{input:BTN_LEFT_COLOR}}, {{input:BTN_RIGHT}}, {{input:BTN_RIGHT_COLOR}}, `{{statements:ACTION_LEFT}}`, `{{statements:ACTION_RIGHT}}`)"
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: Notification!
              name: NOTIFICATION
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#ee8888"
              name: NOTIFICATION_COLOR
              required: false
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                NUM: 20
              name: TIMEOUT
              required: false
              shadow: true
              type: math_number
          - component: PresetField
            config:
              name: FONT_ID
              value: 0
          - component: PresetInput
            config:
              fields:
                TEXT: Header
              name: HEADING
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: HEADING_COLOR
              required: false
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: "#"
              name: ICON
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#008888"
              name: ICON_COLOR
              required: false
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Left
              name: BTN_LEFT
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00aa00"
              name: BTN_LEFT_COLOR
              required: false
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Right
              name: BTN_RIGHT
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00aa00"
              name: BTN_RIGHT_COLOR
              required: false
              shadow: true
              type: colour_picker
  utilities:
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(command, returnValue = '') {
            // evaluate command, for 'setter' use retrunValue as required conext
            let result = "";
            if (command) {
                try { result = eval(command); }
                catch { console.log("eval failed: '" + command + '"'); }
            }
            return result;
          }
        name: absorb_it_nspanel_ssaver_safeEval
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(color) {
            let result = (parseInt("0x"+color.substr(1, 2)) << 8) & 0xF800;
            result |= (parseInt("0x"+color.substr(3, 2)) << 3) & 0x07E0;
            result |= (parseInt("0x"+color.substr(5, 2)) >> 3) & 0x001F;
            return result;
          }
        name: absorb_it_nspanel_ssaver_getRGB565
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(param, noOfItems) {
            let result = String(param);
            if (result.charAt(0) != '~')
                result = '~' + result;
            while ((result.match(/~/g) || []).length < noOfItems)
                result += '~'
            while ((result.match(/~/g) || []).length > noOfItems)
                result = result.replace(/~/, '');
            return result;
          }
        name: absorb_it_nspanel_ssaver_checkParam
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, entities) {
            let mqtt = 'weatherUpdate';
            for (let i = 0; i < entities.length; i++) {
              let result = entities[i];
              mqtt += {{absorb_it_nspanel_ssaver_checkParam}}(result.resultString, 6);
            }
            items.getItem(target).sendCommand(mqtt);
          }
        name: absorb_it_nspanel_weatherupdate
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, header, text) {
            items.getItem(target).sendCommand('notify' + {{absorb_it_nspanel_ssaver_checkParam}}(header, 1) + {{absorb_it_nspanel_ssaver_checkParam}}(text, 1));
          }
        name: absorb_it_nspanel_notify
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, notification, notificationColor, timeout, fontId, heading, headingColor, showIcon, icon, iconColor, btnLeft, btnLeftColor, btnRight, btnRightColor, actionLeft, actionRight) {
            if (ctx.request == 'pageUpdate') {
              switch (ctx.trigger) {
                case "no":
                  {{absorb_it_nspanel_ssaver_safeEval}}(actionLeft);
                  break;
                case "yes":
                  {{absorb_it_nspanel_ssaver_safeEval}}(actionRight);
                  break;
              }
              return;
            }
            let mqtt = 'entityUpdateDetail' + {{absorb_it_nspanel_ssaver_checkParam}}(ctx.ruleUID, 1) + {{absorb_it_nspanel_ssaver_checkParam}}(heading, 1) + {{absorb_it_nspanel_ssaver_checkParam}}({{absorb_it_nspanel_ssaver_getRGB565}}(headingColor), 1) + {{absorb_it_nspanel_ssaver_checkParam}}(btnLeft, 1) + {{absorb_it_nspanel_ssaver_checkParam}}({{absorb_it_nspanel_ssaver_getRGB565}}(btnLeftColor), 1) + {{absorb_it_nspanel_ssaver_checkParam}}(btnRight, 1) + {{absorb_it_nspanel_ssaver_checkParam}}({{absorb_it_nspanel_ssaver_getRGB565}}(btnRightColor), 1) + {{absorb_it_nspanel_ssaver_checkParam}}(notification, 1) + {{absorb_it_nspanel_ssaver_checkParam}}({{absorb_it_nspanel_ssaver_getRGB565}}(notificationColor), 1) + {{absorb_it_nspanel_ssaver_checkParam}}(timeout, 1) + {{absorb_it_nspanel_ssaver_checkParam}}(fontId, 1);
            if (showIcon == "TRUE")
                mqtt += {{absorb_it_nspanel_ssaver_checkParam}}(icon, 1) + {{absorb_it_nspanel_ssaver_checkParam}}({{absorb_it_nspanel_ssaver_getRGB565}}(iconColor), 1)
            items.getItem(target).sendCommand("pageType~popupNotify");
            items.getItem(target).sendCommand(mqtt);
          }
        name: absorb_it_nspanel_setupPopupNotification
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, leftIcon, leftIconColor, leftIconFont, rightIcon, rightIconColor, rightIconFont) {
            mqtt = {{absorb_it_nspanel_ssaver_checkParam}}(leftIcon, 1) + {{absorb_it_nspanel_ssaver_checkParam}}({{absorb_it_nspanel_ssaver_getRGB565}}(leftIconColor), 1) + {{absorb_it_nspanel_ssaver_checkParam}}(rightIcon, 1) + {{absorb_it_nspanel_ssaver_checkParam}}({{absorb_it_nspanel_ssaver_getRGB565}}(rightIconColor), 1);
            mqtt += (leftIconFont == '1')?{{absorb_it_nspanel_ssaver_checkParam}}(leftIconFont, 1):'~';
            mqtt += (rightIconFont == '1')?{{absorb_it_nspanel_ssaver_checkParam}}(rightIconFont, 1):'~';
            items.getItem(target).sendCommand('statusUpdate' + mqtt);
          }
        name: absorb_it_nspanel_status
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, background, tTime, timeAMPM, tDate, tMainText, tForecast1, tForecast2,
                            tForecast3, tForecast4, tForecast1Val, tForecast2Val, tForecast3Val,
                            tForecast4Val, bar, tMainTextAlt2, tTimeAdd) {
            items.getItem(target).sendCommand('color~' + {{absorb_it_nspanel_ssaver_getRGB565}}(background) + '~' +
                {{absorb_it_nspanel_ssaver_getRGB565}}(tTime) + '~' + {{absorb_it_nspanel_ssaver_getRGB565}}(timeAMPM) + '~' + {{absorb_it_nspanel_ssaver_getRGB565}}(tDate) + '~' +
                {{absorb_it_nspanel_ssaver_getRGB565}}(tMainText) + '~' + {{absorb_it_nspanel_ssaver_getRGB565}}(tForecast1) + '~' + {{absorb_it_nspanel_ssaver_getRGB565}}(tForecast2) + '~' +
                {{absorb_it_nspanel_ssaver_getRGB565}}(tForecast3) + '~' + {{absorb_it_nspanel_ssaver_getRGB565}}(tForecast4) + '~' + {{absorb_it_nspanel_ssaver_getRGB565}}(tForecast1Val) + '~' +
                {{absorb_it_nspanel_ssaver_getRGB565}}(tForecast2Val) + '~' + {{absorb_it_nspanel_ssaver_getRGB565}}(tForecast3Val) + '~' + {{absorb_it_nspanel_ssaver_getRGB565}}(tForecast4Val) + '~' +
                {{absorb_it_nspanel_ssaver_getRGB565}}(bar) + '~' + {{absorb_it_nspanel_ssaver_getRGB565}}(tMainTextAlt2) + '~' + {{absorb_it_nspanel_ssaver_getRGB565}}(tTimeAdd) );
          }
        name: absorb_it_nspanel_color
