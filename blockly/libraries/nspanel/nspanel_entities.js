uid: absorb-it:blockly:nspanel_entities
tags: []
props:
  parameters: []
  parameterGroups: []
timestamp: Nov 29, 2023, 8:13:57 AM
component: BlockLibrary
config:
  name: NSPanel Entities
slots:
  blocks:
    - component: BlockType
      config:
        args0:
          - type: input_dummy
            align: CENTER
          - name: ICON
            type: input_value
            check: String
          - name: ICON_COLOR
            type: input_value
            check: Colour
          - name: DISPLAY_NAME
            type: input_value
            check: String
          - name: GETTER
            type: input_value
            check: String
        colour: 90
        helpUrl: ""
        inputsInline: false
        message0: >
          ENTITY LABEL %1 Icon %2 Icon Color %3 Displayed Name %4 Displayed Value %5
        output: nspanel_entityLabelString
        tooltip: "Simple Entity just containing some Icon and some Text. Dependend on the usage, the supplied Value might be shown or not."
        type: absorb_it_nspanel_entityLabel
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                {{utility:absorb_it_nspanel_entityLabel}}({{input:ICON}}, {{input:ICON_COLOR}}, {{input:DISPLAY_NAME}}, {{input:GETTER}})
        toolbox:
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Label
              name: DISPLAY_NAME
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: 1
              name: GETTER
              shadow: true
              type: text
    - component: BlockType
      config:
        args0:
          - type: input_dummy
            align: CENTER
          - name: ICON
            type: input_value
            check: String
          - name: ICON_COLOR
            type: input_value
            check: Colour
          - name: DISPLAY_NAME
            type: input_value
            check: String
          - name: GETTER
            type: input_value
            check: String
          - name: SETTER
            type: input_statement
        colour: 90
        helpUrl: ""
        inputsInline: false
        message0: >
          ENTITY BUTTON %1 Icon %2 Icon Color %3 Displayed Name %4 Displayed Value %5 Buttonpress Action %6
        output: nspanel_entityButtonString
        tooltip: ""
        type: absorb_it_nspanel_entityButton
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                {{utility:absorb_it_nspanel_entityButton}}({{input:ICON}}, {{input:ICON_COLOR}}, {{input:DISPLAY_NAME}}, {{input:GETTER}}, `{{statements:SETTER}}`)
        toolbox:
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Button
              name: DISPLAY_NAME
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: 1
              name: GETTER
              shadow: true
              type: text
    - component: BlockType
      config:
        args0:
          - type: input_dummy
            align: CENTER
          - name: ICON
            type: input_value
            check: String
          - name: ICON_COLOR
            type: input_value
            check: Colour
          - name: DISPLAY_NAME
            type: input_value
            check: String
          - type: input_dummy
          - name: GETTER
            type: input_value
            check: String
          - name: SETTER
            type: input_statement
          - type: input_dummy
          - type: input_dummy
          - type: input_dummy
        colour: 90
        helpUrl: ""
        inputsInline: false
        message0: >
          ENTITY SWITCH %1 Icon %2 Icon Color %3 Displayed Name %4 %5 Switch State ([0,1]) %6 Switch Action %8 - on Entities View: (returnValue=[0,1]) %9 - on other Views: (plain trigger) %10 %7
        output: nspanel_entitySwitchString
        tooltip: ""
        type: absorb_it_nspanel_entitySwitch
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                {{utility:absorb_it_nspanel_entitySwitch}}({{input:ICON}}, {{input:ICON_COLOR}}, {{input:DISPLAY_NAME}}, {{input:GETTER}}, `{{statements:SETTER}}`)
        toolbox:
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Switch
              name: DISPLAY_NAME
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: 1
              name: GETTER
              shadow: true
              type: text
    - component: BlockType
      config:
        message0: >
          ENTITY LIGHT %1 Icon %2 Icon Color %3 Displayed Name %4 %5 Light State ([0,1]) %6 Switch Action %7 - on Entities View: (returnValue=[0,1]) %8 - on other Views: (plain trigger) %9 %10
        args0:
          - type: input_dummy
            align: CENTER
          - name: ICON
            type: input_value
            check: String
          - name: ICON_COLOR
            type: input_value
            check: Colour
          - name: DISPLAY_NAME
            type: input_value
            check: String
          - type: input_dummy
          - name: GETTER
            type: input_value
            check: String
          - type: input_dummy
          - type: input_dummy
          - name: SETTER
            type: input_statement
          - type: input_dummy
        message1: >
          **** POPUP **** %14 %1 Show Color Wheel with Label %2 Set Color Value (returnValue="R|G|B") %3 %4 %5 Show Color Temp Slider with Label %6 Preset Value [0-100] %7 Set Color Temp (returnValue=[0-100]) %8 %9 %10 Show Brightness Slider with Label %11 Preset Value [0-100] %12 Set Brightness (returnValue=[0-100]) %13
        args1:
          - name: COLOR_WHEEL
            type: field_checkbox
          - name: COLOR_WHEEL_LABEL
            type: input_value
            check: String
          - name: SET_COLOR_WHEEL
            type: input_statement
          - type: input_dummy
          - name: COLOR_TEMP
            type: field_checkbox
          - name: COLOR_TEMP_LABEL
            type: input_value
            check: String
          - name: GET_COLOR_TEMP
            type: input_value
            check: Number
          - name: SET_COLOR_TEMP
            type: input_statement
          - type: input_dummy
          - name: BRIGHTNESS
            type: field_checkbox
          - name: BRIGHTNESS_LABEL
            type: input_value
            check: String
          - name: GET_BRIGHTNESS
            type: input_value
            check: Number
          - name: SET_BRIGHTNESS
            type: input_statement
          - type: input_dummy
        inputsInline: false
        colour: 90
        helpUrl: ""
        output: nspanel_entityLightString
        tooltip: ""
        type: absorb_it_nspanel_entityLight
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                {{utility:absorb_it_nspanel_entityLight}}({{input:ICON}}, {{input:ICON_COLOR}}, {{input:DISPLAY_NAME}}, {{input:GETTER}}, `{{statements:SETTER}}`, '{{field:COLOR_WHEEL}}', {{input:COLOR_WHEEL_LABEL}}, `{{statements:SET_COLOR_WHEEL}}`, '{{field:COLOR_TEMP}}', {{input:COLOR_TEMP_LABEL}}, {{input:GET_COLOR_TEMP}}, `{{statements:SET_COLOR_TEMP}}`, '{{field:BRIGHTNESS}}', {{input:BRIGHTNESS_LABEL}}, {{input:GET_BRIGHTNESS}}, `{{statements:SET_BRIGHTNESS}}`)
        toolbox:
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Light
              name: DISPLAY_NAME
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: 1
              name: GETTER
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: Color
              name: COLOR_WHEEL_LABEL
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: Color Temperature
              name: COLOR_TEMP_LABEL
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                NUM: 1
              name: GET_COLOR_TEMP
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                TEXT: Brightness
              name: BRIGHTNESS_LABEL
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                NUM: 1
              name: GET_BRIGHTNESS
              shadow: true
              type: math_number
    - component: BlockType
      config:
        message0: >
          ENTITY SHUTTER %1 Icon %2 Icon Color %3 Displayed Name %4 %5 **** POPUP **** %9 Popup Page Icon %6 Popup Page Subtitle %7 %8
        args0:
          - type: input_dummy
            align: CENTER
          - name: ICON
            type: input_value
            check: String
          - name: ICON_COLOR
            type: input_value
            check: Colour
          - name: DISPLAY_NAME
            type: input_value
            check: String
          - type: input_dummy
          - name: POPUP_ICON
            type: input_value
            check: String
          - name: POPUP_SUBTITLE
            type: input_value
            check: String
          - type: input_dummy
          - type: input_dummy
        message1: >
          Upper Slider (Position) - Label %1 - %2 'UP' Icon %3 - %4 'STOP' Icon %5 - %6 'Down' Icon %7
           - Position ([0-100]) %8
           - Set Position (Main Page and Popup) %9 (returnValue = [0-100|up|stop|down]) %10 %11
        args1:
          - name: UPPER_LABEL
            type: input_value
            check: String
          - name: UPPER_UP_ENABLE
            type: field_checkbox
          - name: UPPER_UP_ICON
            type: input_value
            check: String
          - name: UPPER_STOP_ENABLE
            type: field_checkbox
          - name: UPPER_STOP_ICON
            type: input_value
            check: String
          - name: UPPER_DOWN_ENABLE
            type: field_checkbox
          - name: UPPER_DOWN_ICON
            type: input_value
            check: String
          - name: UPPER_GETTER
            type: input_value
            check: Number
          - type: input_dummy
          - name: UPPER_SETTER
            type: input_statement
          - type: input_dummy
        message2: >
          Lower Slider (Tilt) - Label %1 - %2 'OPEN' Icon %3 - %4 'STOP' Icon %5 - %6 'CLOSE' Icon %7
           - Position ([0-100]) %8
           - Set Position %9 (returnValue = [0-100|open|stop|close]) %10 %11
        args2:
          - name: LOWER_LABEL
            type: input_value
            check: String
          - name: LOWER_LEFT_ENABLE
            type: field_checkbox
          - name: LOWER_LEFT_ICON
            type: input_value
            check: String
          - name: LOWER_STOP_ENABLE
            type: field_checkbox
          - name: LOWER_STOP_ICON
            type: input_value
            check: String
          - name: LOWER_RIGHT_ENABLE
            type: field_checkbox
          - name: LOWER_RIGHT_ICON
            type: input_value
            check: String
          - name: LOWER_GETTER
            type: input_value
            check: Number
          - type: input_dummy
          - name: LOWER_SETTER
            type: input_statement
          - type: input_dummy
        inputsInline: false
        colour: 90
        helpUrl: ""
        output: nspanel_entityShutterString
        tooltip: ""
        type: absorb_it_nspanel_entityShutter
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                {{utility:absorb_it_nspanel_entityShutter}}({{input:ICON}}, {{input:ICON_COLOR}}, {{input:DISPLAY_NAME}}, {{input:POPUP_ICON}}, {{input:POPUP_SUBTITLE}}, {{input:UPPER_LABEL}}, '{{field:UPPER_UP_ENABLE}}', {{input:UPPER_UP_ICON}}, '{{field:UPPER_STOP_ENABLE}}', {{input:UPPER_STOP_ICON}}, '{{field:UPPER_DOWN_ENABLE}}', {{input:UPPER_DOWN_ICON}}, {{input:UPPER_GETTER}}, `{{statements:UPPER_SETTER}}`, {{input:LOWER_LABEL}}, '{{field:LOWER_LEFT_ENABLE}}', {{input:LOWER_LEFT_ICON}}, '{{field:LOWER_STOP_ENABLE}}', {{input:LOWER_STOP_ICON}}, '{{field:LOWER_RIGHT_ENABLE}}', {{input:LOWER_RIGHT_ICON}}, {{input:LOWER_GETTER}}, `{{statements:LOWER_SETTER}}`)
        toolbox:
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Shutter
              name: DISPLAY_NAME
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: "#"
              name: POPUP_ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: Shutter Control
              name: POPUP_SUBTITLE
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: Shutter State
              name: UPPER_LABEL
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: ^
              name: UPPER_UP_ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: x
              name: UPPER_STOP_ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: v
              name: UPPER_DOWN_ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: Tilt State
              name: LOWER_LABEL
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: "{"
              name: LOWER_LEFT_ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: x
              name: LOWER_STOP_ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: "}"
              name: LOWER_RIGHT_ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                NUM: 75
              name: UPPER_GETTER
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 50
              name: LOWER_GETTER
              shadow: true
              type: math_number
    - component: BlockType
      config:
        message0: >
          ENTITY SELECTOR %1 Icon %2 Icon Color %3 Displayed Name %4 %5 Active Option ('option'-label expected) %6 Trigger State Change (call on button press) %7 %8
        args0:
          - type: input_dummy
            align: CENTER
          - name: ICON
            type: input_value
            check: String
          - name: ICON_COLOR
            type: input_value
            check: Colour
          - name: DISPLAY_NAME
            type: input_value
            check: String
          - type: input_dummy
          - name: GET_SELECTION
            type: input_value
            check: String
          - name: TRIGGER_CHANGE
            type: input_statement
          - type: input_dummy
        message1: >
          **** POPUP **** %3 Popup Icon Color %1 %2
        args1:
          - name: POPUP_ICON_COLOR
            type: input_value
            check: Colour
          - type: input_dummy
          - type: input_dummy
        message2: >
          Possible Options (separate by options by '?') %1 Set Item State (returnValue = (index) = [0-X]) %2
        args2:
          - name: GET_OPTIONS
            type: input_value
            check: String
          - name: SETTER
            type: input_statement
        colour: 90
        helpUrl: ""
        inputsInline: false
        output: nspanel_entitySelectorString
        tooltip: ""
        type: absorb_it_nspanel_entitySelector
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                {{utility:absorb_it_nspanel_entitySelector}}({{input:ICON}}, {{input:ICON_COLOR}}, {{input:DISPLAY_NAME}}, {{input:POPUP_ICON_COLOR}}, {{input:GET_OPTIONS}}, {{input:GET_SELECTION}}, `{{statements:SETTER}}`, `{{statements:TRIGGER_CHANGE}}`)
        toolbox:
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Selector
              name: DISPLAY_NAME
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: POPUP_ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: hdmi?dp?vga?usb-c?dvi
              name: GET_OPTIONS
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: usb-c
              name: GET_SELECTION
              shadow: true
              type: text
    - component: BlockType
      config:
        message0: >
          ENTITY FAN %1 Icon %2 Icon Color %3 Displayed Name %4 %5 State of Item ([0,1]) %6 Set Item State (returnValue=[0,1]) %7 %8
        args0:
          - type: input_dummy
            align: CENTER
          - name: ICON
            type: input_value
            check: String
          - name: ICON_COLOR
            type: input_value
            check: Colour
          - name: DISPLAY_NAME
            type: input_value
            check: String
          - type: input_dummy
          - name: GETTER
            type: input_value
            check: String
          - name: SETTER
            type: input_statement
          - type: input_dummy
        message1: >
          **** POPUP **** %1 Popup Source Icon Color %2 %3
        args1:
          - type: input_dummy
          - name: POPUP_ICON_COLOR
            type: input_value
          - type: input_dummy
        message2: >
          Slider Label %1 Slider Value %2 Slider Maximum %3 Set Speed (returnValue = [0-Max]) %4 %5 Possible Modes (separate by '?') %6 Selected Mode %7 Set Mode (returnValue = (index) = [0-X]) %8
        args2:
          - name: LABEL
            type: input_value
            check: String
          - name: SPEED
            type: input_value
            check: Number
          - name: SPEED_MAX
            type: input_value
            check: Number
          - name: SET_SPEED
            type: input_statement
          - type: input_dummy
          - name: MODES
            type: input_value
            check: String
          - name: SELECTED_MODE
            type: input_value
            check: String
          - name: SET_SELECTED_MODE
            type: input_statement
        colour: 90
        helpUrl: ""
        inputsInline: false
        output: nspanel_entityFanString
        tooltip: ""
        type: absorb_it_nspanel_entityFan
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                {{utility:absorb_it_nspanel_entityFan}}({{input:ICON}}, {{input:ICON_COLOR}}, {{input:DISPLAY_NAME}}, {{input:GETTER}}, `{{statements:SETTER}}`, {{input:POPUP_ICON_COLOR}}, {{input:LABEL}}, {{input:SPEED}}, {{input:SPEED_MAX}}, `{{statements:SET_SPEED}}`, {{input:MODES}}, {{input:SELECTED_MODE}}, `{{statements:SET_SELECTED_MODE}}`)
        toolbox:
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Fan
              name: DISPLAY_NAME
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: 1
              name: GETTER
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: POPUP_ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Speed
              name: LABEL
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                NUM: 75
              name: SPEED
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 100
              name: SPEED_MAX
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                TEXT: economy?comfort?luxary
              name: MODES
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: economy
              name: SELECTED_MODE
              shadow: true
              type: text
    - component: BlockType
      config:
        message0: >
          ENTITY TIMER %1 Icon %2 Icon Color %3 Displayed Name %4 Displayed Value %5 %6
        args0:
          - type: input_dummy
            align: CENTER
          - name: ICON
            type: input_value
            check: String
          - name: ICON_COLOR
            type: input_value
            check: Colour
          - name: DISPLAY_NAME
            type: input_value
            check: String
          - name: DISPLAY_VALUE
            type: input_value
            check: String
          - type: input_dummy
        message1: >
          **** POPUP **** %1 Popup Icon Color %2 %3
        args1:
          - type: input_dummy
          - name: POPUP_ICON_COLOR
            type: input_value
            check: Colour
          - type: input_dummy
        message2: >
          Preset Timer Minutes %1 Preset Timer Seconds %2 Editable %3 %4 %5
        args2:
          - name: MIN_REMAINING
            type: input_value
            check: Number
          - name: SEC_REMAINING
            type: input_value
            check: Number
          - name: EDITABLE
            type: field_checkbox
          - type: input_dummy
          - type: input_dummy
        message3: >
          Left Button %1 Left Button Id %2 Middle Button %3 Middle Button Id %4 Right Button %5 Right Button Id %6
        args3:
          - name: LEFT_BTN
            type: input_value
            check: String
          - name: LEFT_BTN_ACTION
            type: input_statement
          - name: MID_BTN
            type: input_value
            check: String
          - name: MID_BTN_ACTION
            type: input_statement
          - name: RIGHT_BTN
            type: input_value
            check: String
          - name: RIGHT_BTN_ACTION
            type: input_statement
        colour: 90
        helpUrl: ""
        inputsInline: false
        output: nspanel_entityTimerString
        tooltip: ""
        type: absorb_it_nspanel_entityTimer
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                {{utility:absorb_it_nspanel_entityTimer}}({{input:ICON}}, {{input:ICON_COLOR}}, {{input:DISPLAY_NAME}}, {{input:DISPLAY_VALUE}}, {{input:POPUP_ICON_COLOR}}, {{input:MIN_REMAINING}}, {{input:SEC_REMAINING}}, '{{field:EDITABLE}}', {{input:LEFT_BTN}}, `{{statements:LEFT_BTN_ACTION}}`, {{input:MID_BTN}}, `{{statements:MID_BTN_ACTION}}`, {{input:RIGHT_BTN}}, `{{statements:RIGHT_BTN_ACTION}}`)
        toolbox:
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Timer
              name: DISPLAY_NAME
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: value
              name: DISPLAY_VALUE
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: POPUP_ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                NUM: 42
              name: MIN_REMAINING
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 13
              name: SEC_REMAINING
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                TEXT: left
              name: LEFT_BTN
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: middle
              name: MID_BTN
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: right
              name: RIGHT_BTN
              shadow: true
              type: text
  utilities:
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(color) {
            let result = (parseInt("0x"+color.substr(1, 2)) << 8) & 0xF800;
            result |= (parseInt("0x"+color.substr(3, 2)) << 3) & 0x07E0;
            result |= (parseInt("0x"+color.substr(5, 2)) >> 3) & 0x001F;
            return result;
          }
        name: absorb_it_nspanel_entities_getRGB565
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
        name: absorb_it_nspanel_entities_checkParam
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(command, returnValue = '') {
            // evaluate command, for 'setter' use returnValue as required conext
            let result = "";
            if (command) {
                try { result = eval(command); }
                catch { console.log("eval failed: '" + command + '"'); }
            }
            return result;
          }
        name: absorb_it_nspanel_entities_safeEval
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}() {
            let ownEntityPos = cache.private.get('entity_pos');
            // prepare Position for next entity
            cache.private.put('entity_pos', parseInt(ownEntityPos) + 1)
            return ownEntityPos;
          }
        name: absorb_it_nspanel_entities_getEntityPos
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(icon, iconColor, displayName, getState, setState) {
            var ownEntityPos = {{absorb_it_nspanel_entities_getEntityPos}}();
            if (ctx.item == ownEntityPos && ctx.request == 'pageUpdate') {
              {{absorb_it_nspanel_entities_safeEval}}(setState, ctx.newState);
              return { "refreshPage": "1" };
            }
            return {
              "resultString": '~switch~' +  ctx.ruleUID + '?' + ownEntityPos + {{absorb_it_nspanel_entities_checkParam}}(icon, 1) + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_entities_checkParam}}(displayName, 1) + {{absorb_it_nspanel_entities_checkParam}}(getState, 1)
            }
          }
        name: absorb_it_nspanel_entitySwitch
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(icon, iconColor, displayName, getState) {
            var ownEntityPos = {{absorb_it_nspanel_entities_getEntityPos}}();
            return {
              "resultString": '~text~' +  ctx.ruleUID + '?' + ownEntityPos + {{absorb_it_nspanel_entities_checkParam}}(icon, 1) + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_entities_checkParam}}(displayName, 1) + {{absorb_it_nspanel_entities_checkParam}}(getState, 1)
            }
          }
        name: absorb_it_nspanel_entityLabel
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(icon, iconColor, displayName, getState, setState) {
            var ownEntityPos = {{absorb_it_nspanel_entities_getEntityPos}}();
            if (ctx.item == ownEntityPos && ctx.request == 'pageUpdate') {
              {{absorb_it_nspanel_entities_safeEval}}(setState, ctx.newState);
              return { "refreshPage": "1" };
            }
            return {
              "resultString": '~button~' +  ctx.ruleUID + '?' + ownEntityPos + {{absorb_it_nspanel_entities_checkParam}}(icon, 1) + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_entities_checkParam}}(displayName, 1) + {{absorb_it_nspanel_entities_checkParam}}(getState, 1)
            }
          }
        name: absorb_it_nspanel_entityButton
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(icon, iconColor, displayName, getState, setState, colorWheel, colorWheelLabel, setColorWheel, colorTemp, colorTempLabel, getColorTemp, setColorTemp, brightness, brightnessLabel, getBrightness, setBrightness) {
            var ownEntityPos = {{absorb_it_nspanel_entities_getEntityPos}}();
            if (ctx.item == ownEntityPos) {
              if (ctx.request == 'pageUpdate') {
                switch (ctx.trigger) {
                  case "OnOff":
                    {{absorb_it_nspanel_entities_safeEval}}(setState, ctx.newState);
                    break;
                  case "colorWheel":
                    {{absorb_it_nspanel_entities_safeEval}}(setColorWheel, ctx.newState);
                    break;
                  case "colorTempSlider":
                    console.log("\n\n\n***\ncolorTempSlider action: " + ctx.newState);
                    {{absorb_it_nspanel_entities_safeEval}}(setColorTemp, ctx.newState);
                    break;
                  case "brightnessSlider":
                    {{absorb_it_nspanel_entities_safeEval}}(setBrightness, ctx.newState);
                    break;
                }
                return { "refreshPage": "1" };
              }
              else if (ctx.request == 'pageOpenDetail') {
                let mqtt = "";
                switch (ctx.trigger) {
                  case "popupLight":
                    mqtt = 'entityUpdateDetail' + {{absorb_it_nspanel_entities_checkParam}}(ctx.ruleUID + '?' + ownEntityPos, 1) + '~' + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_entities_checkParam}}(getState, 1);
                    mqtt += (brightness == "TRUE")?({{absorb_it_nspanel_entities_checkParam}}(getBrightness, 1)):'~disable';
                    mqtt += (colorTemp == "TRUE")?({{absorb_it_nspanel_entities_checkParam}}(getColorTemp, 1)):'~disable';
                    mqtt += (colorWheel == "TRUE")?'~enable':'~disable';
                    mqtt += {{absorb_it_nspanel_entities_checkParam}}(colorWheelLabel, 1) + {{absorb_it_nspanel_entities_checkParam}}(colorTempLabel, 1) + {{absorb_it_nspanel_entities_checkParam}}(brightnessLabel, 1);
                    break;
                }
                return { "sendNow": "1", "resultString": mqtt };
              }
            }
            return {
              "resultString": '~light~' +  ctx.ruleUID + '?' + ownEntityPos + {{absorb_it_nspanel_entities_checkParam}}(icon, 1) + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_entities_checkParam}}(displayName, 1) + {{absorb_it_nspanel_entities_checkParam}}(getState, 1)
            }
          }
        name: absorb_it_nspanel_entityLight
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(icon, iconColor, displayName, popupIcon, popupSubtitle, upperLabel, upperUpEnable, upperUpIcon, upperStopEnable, upperStopIcon,
                            upperDownEnable, upperDownIcon, upperGetter, upperSetter, lowerLabel, lowerLeftEnable, lowerLeftIcon, lowerStopEnable, lowerStopIcon,
                            lowerRightEnable, lowerRightIcon, lowerGetter, lowerSetter) {
            var ownEntityPos = {{absorb_it_nspanel_entities_getEntityPos}}();
            if (ctx.item == ownEntityPos) {
              if (ctx.request == 'pageUpdate') {
                switch (ctx.trigger) {
                  case "tiltOpen":
                    {{absorb_it_nspanel_entities_safeEval}}(lowerSetter, "open");
                    break;
                  case "tiltStop":
                    {{absorb_it_nspanel_entities_safeEval}}(lowerSetter, "stop");
                    break;
                  case "tiltClose":
                    {{absorb_it_nspanel_entities_safeEval}}(lowerSetter, "close");
                    break;
                  case "tiltSlider":
                    {{absorb_it_nspanel_entities_safeEval}}(upperSetter, ctx.newState);
                    break;
                  case "up":
                  case "stop":
                  case "down":
                    {{absorb_it_nspanel_entities_safeEval}}(upperSetter, ctx.trigger);
                    break;
                  case "positionSlider":
                    {{absorb_it_nspanel_entities_safeEval}}(upperSetter, ctx.newState);
                    break;
                }
                return { "refreshPage": "1" };
              }
              else if (ctx.request == 'pageOpenDetail') {
                let mqtt = "";
                switch (ctx.trigger) {
                  case "popupShutter":
                    mqtt = 'entityUpdateDetail' + {{absorb_it_nspanel_entities_checkParam}}(ctx.ruleUID + '?' + ownEntityPos, 1) + {{absorb_it_nspanel_entities_checkParam}}(upperGetter, 1) + {{absorb_it_nspanel_entities_checkParam}}(popupSubtitle, 1) + {{absorb_it_nspanel_entities_checkParam}}(upperLabel, 1) + {{absorb_it_nspanel_entities_checkParam}}(popupIcon, 1) + {{absorb_it_nspanel_entities_checkParam}}(upperUpIcon, 1) + {{absorb_it_nspanel_entities_checkParam}}(upperStopIcon, 1) + {{absorb_it_nspanel_entities_checkParam}}(upperDownIcon, 1);
                    mqtt += (upperUpEnable == "TRUE")?'~enable':'~disable';
                    mqtt += (upperStopEnable == "TRUE")?'~enable':'~disable';
                    mqtt += (upperDownEnable == "TRUE")?'~enable':'~disable';
                    mqtt += {{absorb_it_nspanel_entities_checkParam}}(lowerLabel, 1) + {{absorb_it_nspanel_entities_checkParam}}(lowerLeftIcon, 1) + {{absorb_it_nspanel_entities_checkParam}}(lowerStopIcon, 1) + {{absorb_it_nspanel_entities_checkParam}}(lowerRightIcon, 1);
                    mqtt += (lowerLeftEnable == "TRUE")?'~enable':'~disable';
                    mqtt += (lowerStopEnable == "TRUE")?'~enable':'~disable';
                    mqtt += (lowerRightEnable == "TRUE")?'~enable':'~disable';
                    mqtt += {{absorb_it_nspanel_entities_checkParam}}(lowerGetter, 1);
                    break;
                }
                return { "sendNow": "1", "resultString": mqtt };
              }
            }
            return {
              "resultString": '~shutter~' +  ctx.ruleUID + '?' + ownEntityPos + {{absorb_it_nspanel_entities_checkParam}}(icon, 1) + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_entities_checkParam}}(displayName, 1) + '~'
            }
          }
        name: absorb_it_nspanel_entityShutter
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(icon, iconColor, displayName, popupIconColor, getOptions, getSelection, setOption, triggerChange) {
            var ownEntityPos = {{absorb_it_nspanel_entities_getEntityPos}}();
            if (ctx.item == ownEntityPos) {
              if (ctx.request == 'pageUpdate') {
                switch (ctx.trigger) {
                  case "button":
                    {{absorb_it_nspanel_entities_safeEval}}(triggerChange);
                    break;
                  default:
                    {{absorb_it_nspanel_entities_safeEval}}(setOption, ctx.newState);
                }
                return { "refreshPage": "1" };
             }
              else if (ctx.request == 'pageOpenDetail') {
                let mqtt = "";
                switch (ctx.trigger) {
                  case "popupInSel":
                    mqtt = 'entityUpdateDetail2' + {{absorb_it_nspanel_entities_checkParam}}(ctx.ruleUID + '?' + ownEntityPos, 1) + '~' + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(popupIconColor), 1)+ '~' + {{absorb_it_nspanel_entities_checkParam}}(getSelection, 1) + {{absorb_it_nspanel_entities_checkParam}}(getOptions, 1);
                    break;
                }
                return { "sendNow": "1", "resultString": mqtt };
              }
            }
            return {
              "resultString": '~input_sel~' +  ctx.ruleUID + '?' + ownEntityPos + {{absorb_it_nspanel_entities_checkParam}}(icon, 1) + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_entities_checkParam}}(displayName, 1) + {{absorb_it_nspanel_entities_checkParam}}(getSelection, 1)
            }
          }
        name: absorb_it_nspanel_entitySelector
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(icon, iconColor, displayName, getter, setter, popupIconColor, label, speed, speedMax, setSpeed, modes, selectedMode, setSelectedMode) {
            var ownEntityPos = {{absorb_it_nspanel_entities_getEntityPos}}();
            if (ctx.item == ownEntityPos) {
              if (ctx.request == 'pageUpdate') {
                switch (ctx.trigger) {
                  case "OnOff":
                    {{absorb_it_nspanel_entities_safeEval}}(setter, ctx.newState);
                    break;
                  case "number-set":
                    {{absorb_it_nspanel_entities_safeEval}}(setSpeed, ctx.newState);
                    break;
                  case "mode-preset_modes":
                    {{absorb_it_nspanel_entities_safeEval}}(setSelectedMode, ctx.newState);
                    break;
                }
                return { "refreshPage": "1" };
              }
              else if (ctx.request == 'pageOpenDetail') {
                let mqtt = "";
                switch (ctx.trigger) {
                  case "popupFan":
                    mqtt = 'entityUpdateDetail' + {{absorb_it_nspanel_entities_checkParam}}(ctx.ruleUID + '?' + ownEntityPos, 1) + '~' + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(popupIconColor), 1)+ {{absorb_it_nspanel_entities_checkParam}}(getter, 1) + {{absorb_it_nspanel_entities_checkParam}}(speed, 1) + {{absorb_it_nspanel_entities_checkParam}}(speedMax, 1)+ {{absorb_it_nspanel_entities_checkParam}}(label, 1) + {{absorb_it_nspanel_entities_checkParam}}(selectedMode, 1) + {{absorb_it_nspanel_entities_checkParam}}(modes, 1)
                    break;
                }
                return { "sendNow": "1", "resultString": mqtt };
              }
            }
            return {
              "resultString": '~fan~' +  ctx.ruleUID + '?' + ownEntityPos + {{absorb_it_nspanel_entities_checkParam}}(icon, 1) + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_entities_checkParam}}(displayName, 1) + {{absorb_it_nspanel_entities_checkParam}}(getter, 1)
            }
          }
        name: absorb_it_nspanel_entityFan
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(icon, iconColor, displayName, displayValue, popupIconColor, minRemaining, secRemaining, editable, leftBtn, leftBtnAction, midBtn, midBtnAction, rightBtn, rightBtnAction) {
            var ownEntityPos = {{absorb_it_nspanel_entities_getEntityPos}}();
            if (ctx.item == ownEntityPos) {
              if (ctx.request == 'pageUpdate') {
                switch (ctx.trigger) {
                  case "timer-left":
                    {{absorb_it_nspanel_entities_safeEval}}(leftBtnAction, ctx.newState);
                    break;
                  case "timer-middle":
                    {{absorb_it_nspanel_entities_safeEval}}(midBtnAction, ctx.newState);
                    break;
                  case "timer-right":
                    {{absorb_it_nspanel_entities_safeEval}}(rightBtnAction, ctx.newState);
                    break;
                }
                return { "refreshPage": "1" };
              }
              else if (ctx.request == 'pageOpenDetail') {
                let mqtt = "";
                switch (ctx.trigger) {
                  case "popupTimer":
                    mqtt = 'entityUpdateDetail' + {{absorb_it_nspanel_entities_checkParam}}(ctx.ruleUID + '?' + ownEntityPos, 1) + '~' + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_entities_checkParam}}(ctx.ruleUID + '?' + ownEntityPos, 1) + {{absorb_it_nspanel_entities_checkParam}}(minRemaining, 1) + {{absorb_it_nspanel_entities_checkParam}}(secRemaining, 1);
                    mqtt += (editable == "TRUE")?'~1':'~0';
                    mqtt += "~left~mid~right" + {{absorb_it_nspanel_entities_checkParam}}(leftBtn, 1) + {{absorb_it_nspanel_entities_checkParam}}(midBtn, 1) + {{absorb_it_nspanel_entities_checkParam}}(rightBtn, 1);
                    break;
                }
                return { "sendNow": "1", "resultString": mqtt };
              }
            }
            return {
              "resultString": '~timer~' +  ctx.ruleUID + '?' + ownEntityPos + {{absorb_it_nspanel_entities_checkParam}}(icon, 1) + {{absorb_it_nspanel_entities_checkParam}}({{absorb_it_nspanel_entities_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_entities_checkParam}}(displayName, 1) + {{absorb_it_nspanel_entities_checkParam}}(displayValue, 1)
            }
          }
        name: absorb_it_nspanel_entityTimer
