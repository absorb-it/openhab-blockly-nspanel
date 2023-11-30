uid: absorb-it:blockly:nspanel_cards
tags: []
props:
  parameters: []
  parameterGroups: []
timestamp: Nov 30, 2023, 10:17:45 AM
component: BlockLibrary
config:
  name: NSPanel Cards
slots:
  blocks:
    - component: BlockType
      config:
        args0:
          - type: input_dummy
            align: CENTER
          - name: TARGET
            type: input_value
            check: oh_item
          - name: TITLE
            type: input_value
            check: String
          - name: REFRESH
            type: input_value
            check: Number
          - type: input_dummy
        args1:
          - type: input_dummy
            align: CENTER
          - name: NAV_PREV
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - name: NAV_NEXT
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - type: input_dummy
        args2:
          - name: ENTITY_1
            type: input_value
            check:
              - String
              - nspanel_entitySwitchString
              - nspanel_entityLabelString
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityLightString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityFanString
              - nspanel_entityTimerString
          - name: ENTITY_2
            type: input_value
            check:
              - String
              - nspanel_entitySwitchString
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityLightString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityFanString
              - nspanel_entityTimerString
          - name: ENTITY_3
            type: input_value
            check:
              - String
              - nspanel_entitySwitchString
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityLightString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityFanString
              - nspanel_entityTimerString
          - name: ENTITY_4
            type: input_value
            check:
              - String
              - nspanel_entitySwitchString
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityLightString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityFanString
              - nspanel_entityTimerString
          - type: input_dummy
        colour: 90
        helpUrl: ""
        inputsInline: false
        message0: CARD ENTITIES %1 Display on NSPanel Item %2 Page Title %3 Refresh Time (Seconds, 0 - disable) %4 %5
        message1: Navigation (use NSPanel Helpers) %1 - previous %2 - next %3 %4
        message2: "choose any Entity (use NSPanel Entities): %5 Entity 1 %1 Entity 2 %2 Entity 3 %3 Entity 4 %4"
        nextStatement: ""
        previousStatement: ""
        tooltip: ""
        type: absorb_it_nspanel_cardEntities
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                cache.private.put('entity_pos', '0'); {{utility:absorb_it_nspanel_showCardEntities}}(
                    {{input:TARGET}},
                    {{input:TITLE}},
                    [
                        {{input:NAV_PREV}},
                        {{input:NAV_NEXT}}
                    ],
                    [
                        {{input:ENTITY_1}},
                        {{input:ENTITY_2}},
                        {{input:ENTITY_3}},
                        {{input:ENTITY_4}}
                    ],
                    {{input:REFRESH}}
                  );
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: Entities
              name: TITLE
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                NUM: 30
              name: REFRESH
              shadow: true
              type: math_number
    - component: BlockType
      config:
        args0:
          - type: input_dummy
            align: CENTER
          - name: TARGET
            type: input_value
            check: oh_item
          - name: TITLE
            type: input_value
            check: String
          - name: REFRESH
            type: input_value
            check: Number
          - type: input_dummy
        args1:
          - type: input_dummy
            align: CENTER
          - name: NAV_PREV
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - name: NAV_NEXT
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - type: input_dummy
        args2:
          - name: ENTITY_1
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityTimerString
          - name: ENTITY_2
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityTimerString
          - name: ENTITY_3
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityTimerString
          - name: ENTITY_4
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityTimerString
          - name: ENTITY_5
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityTimerString
          - name: ENTITY_6
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityTimerString
          - name: ENTITY_7
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityTimerString
          - name: ENTITY_8
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
              - nspanel_entityTimerString
          - type: input_dummy
          - type: input_dummy
        colour: 90
        helpUrl: ""
        inputsInline: false
        message0: CARD GRID %1 Display on NSPanel Item %2 Page Title %3 Refresh Time (Seconds, 0 - disable) %4 %5
        message1: Navigation (use NSPanel Helpers) %1 - previous %2 - next %3 %4
        message2: "choose Label, Button, Shutter, %10 Selector or Timer (use NSPanel Entities): %9 Entity 1 %1 Entity 2 %2 Entity 3 %3 Entity 4 %4 Entity 5 %5 Entity 6 %6 Entity 7 %7 Entity 8 %8"
        nextStatement: ""
        previousStatement: ""
        tooltip: ""
        type: absorb_it_nspanel_cardGrid
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                cache.private.put('entity_pos', '0'); {{utility:absorb_it_nspanel_showCardGrid}}(
                    {{input:TARGET}},
                    {{input:TITLE}},
                    [
                        {{input:NAV_PREV}},
                        {{input:NAV_NEXT}}
                    ],
                    [
                        {{input:ENTITY_1}}, {{input:ENTITY_2}}, {{input:ENTITY_3}},
                        {{input:ENTITY_4}}, {{input:ENTITY_5}}, {{input:ENTITY_6}},
                        {{input:ENTITY_7}}, {{input:ENTITY_8}}
                    ],
                    {{input:REFRESH}}
                  );
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: Grid
              name: TITLE
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                NUM: 30
              name: REFRESH
              shadow: true
              type: math_number
    - component: BlockType
      config:
        args0:
          - name: TYPE
            options:
              - - Bars
                - cardChart
              - - Lines
                - cardLChart
            type: field_dropdown
          - type: input_dummy
            align: CENTER
          - name: TARGET
            type: input_value
            check: oh_item
          - name: TITLE
            type: input_value
            check: String
          - name: REFRESH
            type: input_value
            check: Number
          - type: input_dummy
        args1:
          - type: input_dummy
            align: CENTER
          - name: NAV_PREV
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - name: NAV_NEXT
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - type: input_dummy
        args2:
          - name: ITEM
            type: input_value
            check: oh_item
          - name: SCALING
            type: input_value
            check: Number
          - name: NUMBER_VALUES
            type: input_value
            check: Number
          - name: OFFSET_UNIT
            options:
              - - nanos
                - Nanos
              - - seconds
                - Seconds
              - - minutes
                - Minutes
              - - hours
                - Hours
              - - days
                - Days
              - - weeks
                - Weeks
              - - months
                - Months
              - - years
                - Years
            type: field_dropdown
          - name: OFFSET
            type: input_value
            check: Number
          - type: input_dummy
        args3:
          - name: CHART_COLOR
            type: input_value
            check: Colour
          - name: AXIS_LABEL
            type: input_value
            check: String
          - name: NUMBER_X_LABELS
            type: input_value
            check: Number
        colour: 90
        helpUrl: ""
        inputsInline: false
        message0: CARD CHART %1 %2 Display on NSPanel Item %3 Page Title %4 Refresh Time (Seconds, 0 - disable) %5 %6
        message1: Navigation (use NSPanel Helpers) %1 - previous %2 - next %3 %4
        message2: >
          State Values from %1 Scaling of State Value (*scale) %2 Number of Values %3 Offset between Values %4 %5 %6
        message3: >
          Chart Color %1 Y-Axis Label %2 Number of X-Labels %3
        nextStatement: ""
        previousStatement: ""
        tooltip: While creating a Bar-Chart, resulting Values should fi the vertical scale of the display and therefore should not be bigger than 196.
        type: absorb_it_nspanel_cardChart
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                cache.private.put('entity_pos', '0'); {{utility:absorb_it_nspanel_showCardChart}}(
                    '{{field:TYPE}}',
                    {{input:TARGET}},
                    {{input:TITLE}},
                    [
                        {{input:NAV_PREV}},
                        {{input:NAV_NEXT}}
                    ],
                    {{input:ITEM}},
                    {{input:SCALING}},
                    {{input:AXIS_LABEL}},
                    {{input:CHART_COLOR}},
                    {{input:NUMBER_VALUES}},
                    '{{field:OFFSET_UNIT}}',
                    {{input:OFFSET}},
                    {{input:NUMBER_X_LABELS}},
                    {{input:REFRESH}}
                )
        toolbox:
          - component: PresetField
            config:
              name: TYPE
              value: cardChart
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: Chart
              name: TITLE
              shadow: true
              type: text
          - component: PresetInput
            config:
              name: ITEM
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: Axis Label
              name: AXIS_LABEL
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00eeee"
              name: CHART_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                NUM: 22
              name: NUMBER_VALUES
              shadow: true
              type: math_number
          - component: PresetField
            config:
              name: OFFSET_UNIT
              value: Minutes
          - component: PresetInput
            config:
              fields:
                NUM: 10
              name: OFFSET
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 4
              name: NUMBER_X_LABELS
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 1
              name: SCALING
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 0
              name: REFRESH
              shadow: true
              type: math_number
    - component: BlockType
      config:
        args0:
          - type: input_dummy
            align: CENTER
          - name: TARGET
            type: input_value
            check: oh_item
          - name: TITLE
            type: input_value
            check: String
          - name: REFRESH
            type: input_value
            check: Number
          - type: input_dummy
        args1:
          - type: input_dummy
            align: CENTER
          - name: NAV_PREV
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - name: NAV_NEXT
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - type: input_dummy
        args2:
          - name: TARGET_TEMP
            type: input_value
            check: Number
          - name: SHOW_SECOND_TEMP
            type: field_checkbox
          - name: SECOND_TEMP
            type: input_value
            check: Number
          - name: MIN_TEMP
            type: input_value
            check: Number
          - name: MAX_TEMP
            type: input_value
            check: Number
          - name: TEMP_STEPS
            type: input_value
            check: Number
          - name: TEMP_UNIT
            options:
              - - °C
                - °C
              - - °F
                - °F
            type: field_dropdown
          - type: input_dummy
          - type: input_dummy
        args3:
          - name: LABEL_1stline
            type: input_value
            check: String
          - name: LABEL_2ndline
            type: input_value
            check: String
          - name: LABEL_3rdline
            type: input_value
            check: String
          - name: LABEL_4thline
            type: input_value
            check: String
          - type: input_dummy
        args4:
          - name: HVAC_ACTION_1
            type: input_value
            check:
              - String
              - nspanel_hvacButtonString
          - name: HVAC_ACTION_2
            type: input_value
            check:
              - String
              - nspanel_hvacButtonString
          - name: HVAC_ACTION_3
            type: input_value
            check:
              - String
              - nspanel_hvacButtonString
          - name: HVAC_ACTION_4
            type: input_value
            check:
              - String
              - nspanel_hvacButtonString
          - name: HVAC_ACTION_5
            type: input_value
            check:
              - String
              - nspanel_hvacButtonString
          - name: HVAC_ACTION_6
            type: input_value
            check:
              - String
              - nspanel_hvacButtonString
          - name: HVAC_ACTION_7
            type: input_value
            check:
              - String
              - nspanel_hvacButtonString
          - name: HVAC_ACTION_8
            type: input_value
            check:
              - String
              - nspanel_hvacButtonString
          - type: input_dummy
          - type: input_dummy
            align: CENTER
          - type: input_dummy
          - type: input_dummy
          - name: TMP_UPDATE_ACTION
            type: input_statement
          - type: input_dummy
          - name: TMP_POPUP
            type: input_value
            check:
              - String
              - nspanel_popupThermoString
            align: RIGHT
          - type: input_dummy
            align: CENTER
          - type: input_dummy
        colour: 90
        helpUrl: ""
        message0: CARD THERMO %1 Display on NSPanel Item %2 Page Title %3 Refresh Time (Seconds, 0 - disable) %4 %5
        message1: Navigation (use NSPanel Helpers) %1 - previous %2 - next %3 %4
        message2: >
          Target Temperature %1 Second Target Temp. %2 %3 Min. Temperature %4 Max. Temperature %5 Temperature Steps %6 Unit %7 %8 %9
        message3: >
          Text Box 1st Line %1 Text Box 2nd Line %2 Text Box 3rd Line %3 Text Box 4th Line %4 %5
        message4: >
          HVAC Action Buttons (use NSPanel Helpers) %16 HVAC Action 1 %1 HVAC Action 2 %2 HVAC Action 3 %3 HVAC Action 4 %4 HVAC Action 5 %5 HVAC Action 6 %6 HVAC Action 7 %7 HVAC Action 8 %8 %9 Temperature Change Action %10 - One Target: (returnVal=Temp) %11 - Two Targets: (returnVal=RightTemp|LeftTemp) %12 %13 %14 Enable Popup Page %17 add config here (use NSPanel Helpers) %15
        nextStatement: ""
        previousStatement: ""
        tooltip: ""
        type: absorb_it_nspanel_cardThermo
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                cache.private.put('entity_pos', '0'); {{utility:absorb_it_nspanel_showCardThermo}}(
                    {{input:TARGET}},
                    {{input:TITLE}},
                    [
                        {{input:NAV_PREV}},
                        {{input:NAV_NEXT}}
                    ],
                    {{input:TARGET_TEMP}},
                    '{{field:SHOW_SECOND_TEMP}}',
                    {{input:SECOND_TEMP}},
                    {{input:MIN_TEMP}},
                    {{input:MAX_TEMP}},
                    {{input:TEMP_STEPS}},
                    '{{field:TEMP_UNIT}}',
                    {{input:LABEL_1stline}},
                    {{input:LABEL_2ndline}},
                    {{input:LABEL_3rdline}},
                    {{input:LABEL_4thline}},
                    [
                        {{input:HVAC_ACTION_1}}, {{input:HVAC_ACTION_2}}, {{input:HVAC_ACTION_3}},
                        {{input:HVAC_ACTION_4}}, {{input:HVAC_ACTION_5}}, {{input:HVAC_ACTION_6}},
                        {{input:HVAC_ACTION_7}}, {{input:HVAC_ACTION_8}}
                    ],
                    `{{statements:TMP_UPDATE_ACTION}}`,
                    [
                        {{input:TMP_POPUP}}
                    ],
                    {{input:REFRESH}}
                  )
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: Thermo
              name: TITLE
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                NUM: 21
              name: TARGET_TEMP
              shadow: true
              type: math_number
              check: Number
          - component: PresetInput
            config:
              fields:
                NUM: 21
              name: SECOND_TEMP
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 12
              name: MIN_TEMP
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 25
              name: MAX_TEMP
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 0.5
              name: TEMP_STEPS
              shadow: true
              type: math_number
          - component: PresetField
            config:
              name: TEMP_UNIT
              value: °C
          - component: PresetInput
            config:
              fields:
                TEXT: 1st
              name: LABEL_1stline
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: 2nd
              name: LABEL_2ndline
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: 3rd
              name: LABEL_3rdline
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: 4th
              name: LABEL_4thline
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                NUM: 30
              name: REFRESH
              shadow: true
              type: math_number
    - component: BlockType
      config:
        args0:
          - type: input_dummy
          - name: ICON
            type: input_value
          - name: ICON_COLOR
            required: true
            type: input_value
          - type: input_dummy
        args1:
          - name: TOP_HEADING
            type: input_value
          - name: TOP_OPTIONS
            type: input_value
          - name: TOP_SELECTED
            type: input_value
          - name: TOP_ACTION
            type: input_statement
          - type: input_dummy
        args2:
          - name: MID_HEADING
            type: input_value
          - name: MID_OPTIONS
            type: input_value
          - name: MID_SELECTED
            type: input_value
          - name: MID_ACTION
            type: input_statement
          - type: input_dummy
        args3:
          - name: LOW_HEADING
            type: input_value
          - name: LOW_OPTIONS
            type: input_value
          - name: LOW_SELECTED
            type: input_value
          - name: LOW_ACTION
            type: input_statement
        colour: 90
        helpUrl: ""
        inputsInline: false
        message0: >
          POPUP THERMO PAGE %1 Top Left Icon %2 Top Left Icon Color %3 %4
        message1: >
          Upper Row Heading %1 - Options (separate by '?') %2 - Selected Option %3 - Action Trigger (returnValue = (index) = [0-X]) %4 %5
        message2: >
          Middle Row Heading %1 - Options (separate by '?') %2 - Selected Option %3 - Action Trigger (returnValue = (index) = [0-X]) %4 %5
        message3: >
          Lower Row Heading %1 - Options (separate by '?') %2 - Selected Option %3 - Action Trigger (returnValue = (index) = [0-X]) %4
        output: nspanel_popupThermoString
        nextStatement: ""
        previousStatement: ""
        tooltip: ""
        type: absorb_it_nspanel_popupThermo
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >
                {{utility:absorb_it_nspanel_setupPopupThermo}}({{input:ICON}}, {{input:ICON_COLOR}}, {{input:TOP_HEADING}}, {{input:TOP_OPTIONS}}, {{input:TOP_SELECTED}}, `{{statements:TOP_ACTION}}`, {{input:MID_HEADING}}, {{input:MID_OPTIONS}}, {{input:MID_SELECTED}}, `{{statements:MID_ACTION}}`, {{input:LOW_HEADING}}, {{input:LOW_OPTIONS}}, {{input:LOW_SELECTED}}, `{{statements:LOW_ACTION}}`)
        toolbox:
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: ICON
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#ee0000"
              name: ICON_COLOR
              required: false
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Heading_1
              name: TOP_HEADING
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: opt1?opt2?opt3
              name: TOP_OPTIONS
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: opt1
              name: TOP_SELECTED
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: Heading_2
              name: MID_HEADING
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: warm?cold
              name: MID_OPTIONS
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: cold
              name: MID_SELECTED
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: Heading_3
              name: LOW_HEADING
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: mode1?mode2?mode3?mode4?mode5
              name: LOW_OPTIONS
              required: false
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: mode4
              name: LOW_SELECTED
              required: false
              shadow: true
              type: text
    - component: BlockType
      config:
        args0:
          - type: input_dummy
            align: CENTER
          - name: TARGET
            type: input_value
            check: oh_item
          - name: TITLE
            type: input_value
            check: String
          - name: REFRESH
            type: input_value
            check: Number
          - type: input_dummy
        args1:
          - type: input_dummy
            align: CENTER
          - name: NAV_PREV
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - name: NAV_NEXT
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - type: input_dummy
        args2:
          - name: TEXT_1st
            type: input_value
            check: String
          - name: COLOR_1st
            type: input_value
            check: Colour
          - name: TEXT_2nd
            type: input_value
            check: String
          - name: COLOR_2nd
            type: input_value
            check: Colour
          - name: Volume
            type: input_value
            check: Number
          - name: PLAY_PAUSE_ICON
            type: input_value
            check: String
          - name: ON_OFF_BTN_ENABLE
            type: field_checkbox
          - name: ON_OFF_BTN_COLOR
            type: input_value
            check: Colour
          - name: SHUFFLE_ICON_ENABLE
            type: field_checkbox
          - name: SHUFFLE_ICON
            type: input_value
            check: String
          - type: input_dummy
        args3:
          - name: MEDIA_ICON
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
          - name: ENTITY_1
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
          - name: ENTITY_2
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
          - name: ENTITY_3
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
          - name: ENTITY_4
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
          - name: ENTITY_5
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
              - nspanel_entityShutterString
              - nspanel_entitySelectorString
          - type: input_dummy
          - type: input_dummy
          - type: input_dummy
        args4:
          - type: input_dummy
            align: CENTER
          - name: ACTION_BACK
            type: input_statement
          - name: ACTION_PAUSE
            type: input_statement
          - name: ACTION_NEXT
            type: input_statement
          - name: ACTION_VOLUME
            type: input_statement
          - name: ACTION_ONOFF
            type: input_statement
          - name: ACTION_SHUFFLE
            type: input_statement
        colour: 90
        helpUrl: ""
        inputsInline: false
        message0: CARD MEDIA %1 Display on NSPanel Item %2 Page Title %3 Refresh Time (Seconds, 0 - disable) %4 %5
        message1: Navigation (use NSPanel Helpers) %1 - previous %2 - next %3 %4
        message2: >
          Song Title %1 - Color %2 Author %3 - Color %4 Volume %5 Play/Pause Icon %6 ON/OFF Btn %7 Color %8 Shuffle Icon %9 Icon%10 %11
        message3: >
          choose Button, Shutter or Selector %9 (use NSPanel Entities): %8 Up Left Media Icon %1 Entity 1 %2 Entity 2 %3 Entity 3 %4 Entity 4 %5 Entity 5 %6 %7
        message4: >
          Media Player Control Actions: %1 - Back: %2 - Play/Pause:  %3 - Next:  %4 - Volume (returnValue = [0-100]):  %5 - ON/OFF:  %6 - Shuffle:  %7
        nextStatement: ""
        previousStatement: ""
        tooltip: ""
        type: absorb_it_nspanel_cardMedia
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                cache.private.put('entity_pos', '0'); {{utility:absorb_it_nspanel_showCardMedia}}(
                    {{input:TARGET}},
                    {{input:TITLE}},
                    [
                        {{input:NAV_PREV}},
                        {{input:NAV_NEXT}}
                    ],
                    {{input:TEXT_1st}},
                    {{input:COLOR_1st}},
                    {{input:TEXT_2nd}},
                    {{input:COLOR_2nd}},
                    {{input:Volume}},
                    {{input:PLAY_PAUSE_ICON}},
                    '{{field:ON_OFF_BTN_ENABLE}}',
                    {{input:ON_OFF_BTN_COLOR}},
                    '{{field:SHUFFLE_ICON_ENABLE}}',
                    {{input:SHUFFLE_ICON}},
                    [
                        {{input:MEDIA_ICON}},
                        {{input:ENTITY_1}},
                        {{input:ENTITY_2}},
                        {{input:ENTITY_3}},
                        {{input:ENTITY_4}},
                        {{input:ENTITY_5}}
                    ],
                    `{{statements:ACTION_BACK}}`,
                    `{{statements:ACTION_PAUSE}}`,
                    `{{statements:ACTION_NEXT}}`,
                    `{{statements:ACTION_VOLUME}}`,
                    `{{statements:ACTION_ONOFF}}`,
                    `{{statements:ACTION_SHUFFLE}}`,
                    {{input:REFRESH}}
                )
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: Media
              name: TITLE
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: Title
              name: TEXT_1st
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: COLOR_1st
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: Author
              name: TEXT_2nd
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#0000ee"
              name: COLOR_2nd
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                NUM: 90
              name: Volume
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                TEXT: ">"
              name: PLAY_PAUSE_ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00ee00"
              name: ON_OFF_BTN_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: "*"
              name: SHUFFLE_ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                NUM: 30
              name: REFRESH
              shadow: true
              type: math_number
    - component: BlockType
      config:
        args0:
          - type: input_dummy
            align: CENTER
          - name: TARGET
            type: input_value
            check: oh_item
          - name: TITLE
            type: input_value
            check: String
          - name: REFRESH
            type: input_value
            check: Number
          - type: input_dummy
        args1:
          - type: input_dummy
            align: CENTER
          - name: NAV_PREV
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - name: NAV_NEXT
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - type: input_dummy
        args2:
          - name: BUTTON_1
            type: input_value
            check:
              - String
              - nspanel_alarmBtnString
          - name: BUTTON_2
            type: input_value
            check:
              - String
              - nspanel_alarmBtnString
          - name: BUTTON_3
            type: input_value
            check:
              - String
              - nspanel_alarmBtnString
          - name: BUTTON_4
            type: input_value
            check:
              - String
              - nspanel_alarmBtnString
          - type: input_dummy
          - name: ICON
            type: input_value
            check: String
          - name: ICON_COLOR
            type: input_value
            check: Colour
          - name: FLASH_ICON
            type: field_checkbox
          - type: input_dummy
          - name: NUMPAD
            type: field_checkbox
          - type: input_dummy
          - type: input_dummy
          - name: BTM_LEFT_ICON
            type: input_value
            check: String
          - name: BTM_LEFT_COLOR
            type: input_value
            check: Colour
          - name: BTM_LEFT_ACTION
            type: input_statement
          - type: input_dummy
        colour: 90
        helpUrl: ""
        message0: CARD ALARM %1 Display on NSPanel Item %2 Page Title %3 Refresh Time (Seconds, 0 - disable) %4 %5
        message1: Navigation (use NSPanel Helpers) %1 - previous %2 - next %3 %4
        message2: >
          Alarm Buttons (use NSPanel Helpers) %16 Button 1 %1 Button 2 %2 Button 3 %3 Button 4 %4 %5 Icon next to Code %6 Icon Color %7 flashing Icon %8 %9 show Numpad %10 %11 %12 Icon bottom left %13 Icon Color %14 Icon Button Action %15
        nextStatement: ""
        previousStatement: ""
        tooltip: ""
        type: absorb_it_nspanel_cardAlarm
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                cache.private.put('entity_pos', '0'); {{utility:absorb_it_nspanel_showCardAlarm}}(
                    {{input:TARGET}},
                    {{input:TITLE}},
                    [
                        {{input:NAV_PREV}},
                        {{input:NAV_NEXT}}
                    ],
                    [
                        {{input:BUTTON_1}},
                        {{input:BUTTON_2}},
                        {{input:BUTTON_3}},
                        {{input:BUTTON_4}}
                    ],
                    {{input:ICON}},
                    {{input:ICON_COLOR}},
                    '{{field:FLASH_ICON}}',
                    '{{field:NUMPAD}}',
                    {{input:BTM_LEFT_ICON}},
                    {{input:BTM_LEFT_COLOR}},
                    `{{statements:BTM_LEFT_ACTION}}`,
                    {{input:REFRESH}}
                )
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: Alarm
              name: TITLE
              shadow: true
              type: text
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
                COLOUR: "#00ee00"
              name: ICON_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                TEXT: "#"
              name: BTM_LEFT_ICON
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                COLOUR: "#00eeee"
              name: BTM_LEFT_COLOR
              shadow: true
              type: colour_picker
          - component: PresetInput
            config:
              fields:
                NUM: 30
              name: REFRESH
              shadow: true
              type: math_number
    - component: BlockType
      config:
        args0:
          - type: input_dummy
            align: CENTER
          - name: TARGET
            type: input_value
            check: oh_item
          - name: TITLE
            type: input_value
            check: String
          - name: REFRESH
            type: input_value
            check: Number
          - type: input_dummy
        args1:
          - type: input_dummy
            align: CENTER
          - name: NAV_PREV
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - name: NAV_NEXT
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - type: input_dummy
        args2:
          - type: input_dummy
            align: CENTER
          - name: HOME_VALUE
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
          - name: ABOVE_HOME
            type: input_value
            check: String
          - type: input_dummy
        args3:
          - type: input_dummy
            align: CENTER
          - name: ENTITY_1
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
          - name: SPEED_1
            type: input_value
            check: Number
          - name: ENTITY_2
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
          - name: SPEED_2
            type: input_value
            check: Number
          - name: ENTITY_3
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
          - name: SPEED_3
            type: input_value
            check: Number
        args4:
          - type: input_dummy
            align: CENTER
          - name: ENTITY_4
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
          - name: SPEED_4
            type: input_value
            check: Number
          - name: ENTITY_5
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
          - name: SPEED_5
            type: input_value
            check: Number
          - name: ENTITY_6
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
          - name: SPEED_6
            type: input_value
            check: Number
        colour: 90
        helpUrl: ""
        inputsInline: false
        message0: CARD POWER %1 Display on NSPanel Item %2 Page Title %3 Refresh Time (Seconds, 0 - disable) %4 %5
        message1: Navigation (use NSPanel Helpers) %1 - previous %2 - next %3 %4
        message2: >
          choose Label as Entitiy (use NSPanel Entities): %4 Home Area %1 Entity %2 Text above %3
        message3: >
          Left Side %1 Upper Entity %2 -  (-120 - 120) speed %3 Middle Entity %4 -  (-120 - 120) speed %5 Lower Entity %6 -  (-120 - 120) speed %7
        message4: >
          Right Side %1 Upper Entity %2 -  (-120 - 120) speed %3 Middle Entity %4 -  (-120 - 120) speed %5 Lower Entity %6 -  (-120 - 120) speed %7
        nextStatement: ""
        previousStatement: ""
        tooltip: ""
        type: absorb_it_nspanel_cardPower
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                cache.private.put('entity_pos', '0'); {{utility:absorb_it_nspanel_showCardPower}}(
                    {{input:TARGET}},
                    {{input:TITLE}},
                    [
                        {{input:NAV_PREV}},
                        {{input:NAV_NEXT}}
                    ],
                    {{input:ABOVE_HOME}},
                    [
                        {{input:HOME_VALUE}},
                        {{input:ENTITY_1}},
                        {{input:ENTITY_2}},
                        {{input:ENTITY_3}},
                        {{input:ENTITY_4}},
                        {{input:ENTITY_5}},
                        {{input:ENTITY_6}}
                    ],
                    {{input:SPEED_1}},
                    {{input:SPEED_2}},
                    {{input:SPEED_3}},
                    {{input:SPEED_4}},
                    {{input:SPEED_5}},
                    {{input:SPEED_6}},
                    {{input:REFRESH}}
                );
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: Power
              name: TITLE
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: top
              name: ABOVE_HOME
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                NUM: 120
              name: SPEED_1
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 120
              name: SPEED_2
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 120
              name: SPEED_3
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: -120
              name: SPEED_4
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: -120
              name: SPEED_5
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: -120
              name: SPEED_6
              shadow: true
              type: math_number
          - component: PresetInput
            config:
              fields:
                NUM: 30
              name: REFRESH
              shadow: true
              type: math_number
    - component: BlockType
      config:
        args0:
          - type: input_dummy
            align: CENTER
          - name: TARGET
            type: input_value
            check: oh_item
          - name: TITLE
            type: input_value
            check: String
          - name: REFRESH
            type: input_value
            check: Number
          - type: input_dummy
        args1:
          - type: input_dummy
            align: CENTER
          - name: NAV_PREV
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - name: NAV_NEXT
            type: input_value
            check:
              - String
              - nspanel_navigationString
          - type: input_dummy
        args2:
          - name: SSID
            type: input_value
            check: String
          - name: PASSWORD
            type: input_value
            check: String
          - name: ENCRYPTION
            options:
              - - WPA
                - WPA
              - - WEP
                - WEP
              - - OFF
                - ""
            type: field_dropdown
          - type: input_dummy
          - type: input_dummy
        args3:
          - type: input_dummy
          - name: ENTITY_1
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
          - name: ENTITY_2
            type: input_value
            check:
              - String
              - nspanel_entityLabelString
              - nspanel_entityButtonString
        colour: 90
        helpUrl: ""
        inputsInline: false
        message0: CARD QR %1 Display on NSPanel Item %2 Page Title %3 Refresh Time (Seconds, 0 - disable) %4 %5
        message1: Navigation (use NSPanel Helpers) %1 - previous %2 - next %3 %4
        message2: >
          WIFI SSID %1 WIFI Password %2 WIFI Encryption %3 %4 %5
        message3: >
          Right Side Buttons (use NSPanel Entitites) %1 Upper Entity %2 Lower Entity %3
        nextStatement: ""
        previousStatement: ""
        tooltip: ""
        type: absorb_it_nspanel_cardQR
      slots:
        code:
          - component: BlockCodeTemplate
            config:
              template: >-
                cache.private.put('entity_pos', '0'); {{utility:absorb_it_nspanel_showCardQR}}(
                    {{input:TARGET}},
                    {{input:TITLE}},
                    [
                        {{input:NAV_PREV}},
                        {{input:NAV_NEXT}}
                    ],
                    {{input:SSID}},
                    {{input:PASSWORD}},
                    '{{field:ENCRYPTION}}',
                    [
                        {{input:ENTITY_1}},
                        {{input:ENTITY_2}}
                    ],
                    {{input:REFRESH}}
                )
        toolbox:
          - component: PresetInput
            config:
              name: TARGET
              shadow: true
              type: oh_item
          - component: PresetInput
            config:
              fields:
                TEXT: WIFI QR
              name: TITLE
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: SSID
              name: SSID
              shadow: true
              type: text
          - component: PresetInput
            config:
              fields:
                TEXT: PASSWORD
              name: PASSWORD
              shadow: true
              type: text
          - component: PresetField
            config:
              name: ENCRYPTION
              value: WPA
          - component: PresetInput
            config:
              fields:
                NUM: 30
              name: REFRESH
              shadow: true
              type: math_number
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
        name: absorb_it_nspanel_cards_getRGB565
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(title, navigation) {
            return 'entityUpd' + {{absorb_it_nspanel_cards_checkParam}}(title, 1) +
                {{absorb_it_nspanel_cards_checkParam}}((navigation[0])?navigation[0].resultString:'', 6) +
                {{absorb_it_nspanel_cards_checkParam}}((navigation[1])?navigation[1].resultString:'', 6);
          }
        name: absorb_it_nspanel_cards_getPreamble
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}() {
            if (cache.shared.exists('absorb_it_nspanel_refreshTimer'))
              cache.shared.remove('absorb_it_nspanel_refreshTimer').cancel();
          }
        name: absorb_it_nspanel_cards_killRefreshTimer
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, refresh) {
            {{absorb_it_nspanel_cards_killRefreshTimer}}(); // just to be 100% shure
            refresh = parseInt(refresh);
            if (refresh != 0) {
              cache.shared.put('absorb_it_nspanel_refreshTimer',
                actions.ScriptExecution.createTimer(
                  'absorb_it_nspanel_refreshTimer',
                  time.ZonedDateTime.now().plusSeconds(refresh),
                  function () {
                    items.getItem(target).postUpdate('refreshTimer');
                  }
                )
              );
            }
          }
        name: absorb_it_nspanel_cards_startRefreshTimer
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
        name: absorb_it_nspanel_cards_safeEval
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(result, target) {
              if (result && result.sendNow) {
                if (result.resultString)
                  items.getItem(target).sendCommand(result.resultString);
                return 1;
              } else if (result && result.refreshPage) {
                items.getItem(target).sendCommand('refresh');
                return 1;
              }
              return 0;
          }
        name: absorb_it_nspanel_cards_checkResult
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(context) {
            console.log("starting script '" + context + "'");
          }
        name: absorb_it_nspanel_cards_startupLogging
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
        name: absorb_it_nspanel_cards_checkParam
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, title, navigation, entities, refresh) {
            {{absorb_it_nspanel_cards_startupLogging}}(ctx);
            {{absorb_it_nspanel_cards_killRefreshTimer}}();
            let mqtt = {{absorb_it_nspanel_cards_getPreamble}}(title, navigation);
            for (let i = 0; i < 4; i++) {
              let result = entities[i];
              if (result === undefined) {
                  mqtt += {{absorb_it_nspanel_cards_checkParam}}("", 6);
                  continue;
              }
              if ({{absorb_it_nspanel_cards_checkResult}}(result, target)) {
                {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
                return;
              }
              mqtt += {{absorb_it_nspanel_cards_checkParam}}(result.resultString, 6);
            }
            if (ctx.previousPage !== ctx.ruleUID)
              items.getItem(target).sendCommand("pageType~cardEntities");
            items.getItem(target).sendCommand(mqtt);
            {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
          }
        name: absorb_it_nspanel_showCardEntities
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, title, navigation, entities, refresh) {
            {{absorb_it_nspanel_cards_startupLogging}}(ctx);
            {{absorb_it_nspanel_cards_killRefreshTimer}}();
            let mqtt = {{absorb_it_nspanel_cards_getPreamble}}(title, navigation);
            let type = "cardGrid";
            for (let i = 0; i < 8; i++) {
              if (i >= 6 && entities[i])
                type = "cardGrid2";
              let result = entities[i];
              if (result === undefined) {
                  mqtt += {{absorb_it_nspanel_cards_checkParam}}("", 6);
                  continue;
              }
              if ({{absorb_it_nspanel_cards_checkResult}}(result, target)) {
                {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
                return;
              }
              mqtt += {{absorb_it_nspanel_cards_checkParam}}(result.resultString, 6);
            }
            if (ctx.previousPage !== ctx.ruleUID)
              items.getItem(target).sendCommand("pageType~" + type);
            items.getItem(target).sendCommand(mqtt);
            {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
          }
        name: absorb_it_nspanel_showCardGrid
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(type, target, title, navigation, item, scaling, AxisLabel, chartColorRGB888, NumberOfValues, OffsetUnit, Offset, NumberOfXLabels, refresh) {
            {{absorb_it_nspanel_cards_startupLogging}}(ctx);
            {{absorb_it_nspanel_cards_killRefreshTimer}}();
            maxValue = 0; MAX_VALUE_BY_DESIGN = 196;
            let dataset = '';

            for (i = NumberOfValues - 1; i >= 1; i--) {
              targetValue = parseFloat(items.getItem(item).history.historicState(time.ZonedDateTime.now()['minus'+OffsetUnit](i*Offset))?.state) * scaling;
              if (type == 'cardLChart' && !targetValue)
                continue;
              dataset += '~';
              if (type == 'cardLChart') {
                dataset += String(NumberOfValues - i) + ":";
              }
              if (type == 'cardChart' && targetValue > MAX_VALUE_BY_DESIGN)
                targetValue = MAX_VALUE_BY_DESIGN;
              if (targetValue > maxValue) {
                maxValue = targetValue;
              }
              dataset += String(Math.ceil(targetValue));
              if (type == 'cardChart' && i % Math.floor((NumberOfValues / (NumberOfXLabels - 1))) === 0) {
                dataset += '^-' + String(i*Offset) + OffsetUnit.substring(0,1).toLowerCase();
              }
            }
            dataset += '~';
            if (type == 'cardLChart') {
              dataset += String(NumberOfValues) + ":";
            }
            targetValue = parseFloat(items.getItem(item).state) * scaling;
            if (type == 'cardChart' && targetValue > MAX_VALUE_BY_DESIGN)
              targetValue = MAX_VALUE_BY_DESIGN;
            if (targetValue > maxValue) {
              maxValue = targetValue;
            }
            dataset += String(Math.ceil(targetValue));
            if (type == 'cardChart') {
              dataset += '^now';
            }

            let mqtt = {{absorb_it_nspanel_cards_getPreamble}}(title, navigation);
            mqtt += {{absorb_it_nspanel_cards_checkParam}}({{absorb_it_nspanel_cards_getRGB565}}(chartColorRGB888), 1) + {{absorb_it_nspanel_cards_checkParam}}(AxisLabel, 1);

            let scale = 1
            while (maxValue > 10) {
              maxValue = Math.ceil((maxValue / 10));
              scale *= 10;
            }

            mqtt += '~0';
            for (j = 1; j <= maxValue; j ++) {
              mqtt += ':' + String(j * scale);
            }
            if (type == 'cardLChart') {
              mqtt += "~1";
              mqtt += '^-' + String((NumberOfValues - 1)*Offset) + OffsetUnit.substring(0,1).toLowerCase();
            }
            mqtt += String(dataset);
            if (ctx.previousPage !== ctx.ruleUID)
              items.getItem(target).sendCommand("pageType~" + type);
            items.getItem(target).sendCommand(mqtt);
            {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
          }
        name: absorb_it_nspanel_showCardChart
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, title, navigation, target_temp, show_second_temp, second_temp, min_temp, max_temp, temp_steps, temp_unit, tCurTempLbl, currentTemp, tStateLbl, status, actions, tempChangeAction, pagePopupAction, refresh) {
            {{absorb_it_nspanel_cards_startupLogging}}(ctx);
            {{absorb_it_nspanel_cards_killRefreshTimer}}();
            if (ctx.request == "pageOpenDetail" && ctx.item === null) {
                let result = pagePopupAction[0];
                if ({{absorb_it_nspanel_cards_checkResult}}(result, target)) {
                  {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
                  return;
                }
            }
            if (ctx.request == "pageUpdate" && ctx.item === null) {
                let result = {};
                if (ctx.trigger == "tempUpdHighLow" || ctx.trigger == "tempUpd") {
                    let newState = ctx.newState.split('|');
                    let newValue = String(parseInt(newState[0])/100);
                    if (newState[1] !== undefined)
                        newValue += '|' + String(parseInt(newState[1])/100);
                    {{absorb_it_nspanel_cards_safeEval}}(tempChangeAction, newValue);
                    result = { "refreshPage": "1" }
                }
                else {
                    // popupPage triggered change.
                    result = pagePopupAction[0];
                }
                if ({{absorb_it_nspanel_cards_checkResult}}(result, target)) {
                  {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
                  return;
                }
            }
            let mqtt = {{absorb_it_nspanel_cards_getPreamble}}(title, navigation);
            mqtt += {{absorb_it_nspanel_cards_checkParam}}(ctx.ruleUID, 1) + {{absorb_it_nspanel_cards_checkParam}}(currentTemp, 1) + {{absorb_it_nspanel_cards_checkParam}}(target_temp * 10, 1) + {{absorb_it_nspanel_cards_checkParam}}(status, 1) + {{absorb_it_nspanel_cards_checkParam}}(min_temp * 10, 1) + {{absorb_it_nspanel_cards_checkParam}}(max_temp * 10, 1) +
            {{absorb_it_nspanel_cards_checkParam}}(temp_steps * 10, 1);
            for (let i = 0; i < 8; i++) {
              let result = actions[i];
              if (result === undefined) {
                  mqtt += {{absorb_it_nspanel_cards_checkParam}}("", 4);
                  continue;
              }
              if ({{absorb_it_nspanel_cards_checkResult}}(result, target)) {
                {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
                return;
              }
              mqtt += {{absorb_it_nspanel_cards_checkParam}}((result.resultString)?result.resultString:'', 4);
            }
            mqtt += {{absorb_it_nspanel_cards_checkParam}}(tCurTempLbl, 1) + {{absorb_it_nspanel_cards_checkParam}}(tStateLbl, 1) + '~' + {{absorb_it_nspanel_cards_checkParam}}(temp_unit, 1);
            mqtt += (show_second_temp == "TRUE")?({{absorb_it_nspanel_cards_checkParam}}(second_temp*10, 1)):'~';
            mqtt += (pagePopupAction[0])?'~0':'~1';
            if (ctx.previousPage !== ctx.ruleUID)
              items.getItem(target).sendCommand("pageType~cardThermo");
            items.getItem(target).sendCommand(mqtt);
            {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
          }
        name: absorb_it_nspanel_showCardThermo
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(icon, iconColor, topHeading, topOptions, topSelected, topAction, midHeading, midOptions, midSelected, midAction, lowHeading, lowOptions, lowSelected, lowAction) {
            if (ctx.request == 'pageUpdate') {
              switch (ctx.trigger) {
                case "mode-0":
                  {{absorb_it_nspanel_cards_safeEval}}(topAction, ctx.newState);
                  break;
                case "mode-1":
                  {{absorb_it_nspanel_cards_safeEval}}(midAction, ctx.newState);
                  break;
                case "mode-2":
                  {{absorb_it_nspanel_cards_safeEval}}(lowAction, ctx.newState);
                  break;
              }
              return { "sendNow": "1" };
            }
            return {
                "sendNow": "1",
                "resultString": 'entityUpdateDetail' + {{absorb_it_nspanel_cards_checkParam}}(ctx.ruleUID, 1) + {{absorb_it_nspanel_cards_checkParam}}(icon, 1) + {{absorb_it_nspanel_cards_checkParam}}({{absorb_it_nspanel_cards_getRGB565}}(iconColor), 1) + {{absorb_it_nspanel_cards_checkParam}}(topHeading, 1) + {{absorb_it_nspanel_cards_checkParam}}("0", 1) + {{absorb_it_nspanel_cards_checkParam}}(topSelected, 1) + {{absorb_it_nspanel_cards_checkParam}}(topOptions, 1) + {{absorb_it_nspanel_cards_checkParam}}(midHeading, 1) + {{absorb_it_nspanel_cards_checkParam}}("1", 1) + {{absorb_it_nspanel_cards_checkParam}}(midSelected, 1) + {{absorb_it_nspanel_cards_checkParam}}(midOptions, 1) + {{absorb_it_nspanel_cards_checkParam}}(lowHeading, 1) + {{absorb_it_nspanel_cards_checkParam}}("2", 1) + {{absorb_it_nspanel_cards_checkParam}}(lowSelected, 1) + {{absorb_it_nspanel_cards_checkParam}}(lowOptions, 1)
            }
          }
        name: absorb_it_nspanel_setupPopupThermo
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, title, navigation, text_1st, color_1st, text_2nd, color_2nd,
                            volume, playPauseIcon, onOffBtn_enabled, onOffBtnColor, shuffleIcon_enabled,
                            shuffleIcon, entities, actionBack, actionPause, actionNext, actionVolume, actionOnOff, actionShuffle, refresh) {
            // starting script '{request=pageUpdate, item=null, ruleUID=nspanel1_cardMedia, trigger=button, previousPage=nspanel1_cardGrid, newState=null}'
            {{absorb_it_nspanel_cards_startupLogging}}(ctx);
            {{absorb_it_nspanel_cards_killRefreshTimer}}();
            if (ctx.request == "pageUpdate" && ctx.item === null) {
              switch (ctx.trigger) {
                case "media-back":
                    {{absorb_it_nspanel_cards_safeEval}}(actionBack);
                    break;
                case "media-pause":
                    {{absorb_it_nspanel_cards_safeEval}}(actionPause);
                    break;
                case "media-next":
                    {{absorb_it_nspanel_cards_safeEval}}(actionNext);
                    break;
                case "volumeSlider":
                    {{absorb_it_nspanel_cards_safeEval}}(actionVolume, ctx.newState);
                    break;
                case "media-OnOff":
                    {{absorb_it_nspanel_cards_safeEval}}(actionOnOff);
                    break;
                case "media-shuffle":
                    {{absorb_it_nspanel_cards_safeEval}}(actionShuffle);
                    break;
              }
              {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
              return;
            }
            let mqtt = {{absorb_it_nspanel_cards_getPreamble}}(title, navigation);
            mqtt += {{absorb_it_nspanel_cards_checkParam}}(ctx.ruleUID, 1) + {{absorb_it_nspanel_cards_checkParam}}(text_1st, 1) + {{absorb_it_nspanel_cards_checkParam}}({{absorb_it_nspanel_cards_getRGB565}}(color_1st), 1) + {{absorb_it_nspanel_cards_checkParam}}(text_2nd, 1) + {{absorb_it_nspanel_cards_checkParam}}({{absorb_it_nspanel_cards_getRGB565}}(color_2nd), 1) + {{absorb_it_nspanel_cards_checkParam}}(volume, 1) + {{absorb_it_nspanel_cards_checkParam}}(playPauseIcon, 1);
            mqtt += (onOffBtn_enabled == "TRUE")?({{absorb_it_nspanel_cards_checkParam}}({{absorb_it_nspanel_cards_getRGB565}}(onOffBtnColor), 1)):'~disable';
            mqtt += (shuffleIcon_enabled == "TRUE")?({{absorb_it_nspanel_cards_checkParam}}(shuffleIcon, 1)):'~disable';
            for (let i = 0; i < 6; i++) {
              let result = entities[i];
              if (result === undefined) {
                  mqtt += {{absorb_it_nspanel_cards_checkParam}}("", 6);
                  continue;
              }
              if ({{absorb_it_nspanel_cards_checkResult}}(result, target)) {
                {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
                return;
              }
              mqtt += {{absorb_it_nspanel_cards_checkParam}}(result.resultString, 6);
            }
            if (ctx.previousPage !== ctx.ruleUID)
              items.getItem(target).sendCommand("pageType~cardMedia");
            items.getItem(target).sendCommand(mqtt);
            {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
          }
        name: absorb_it_nspanel_showCardMedia
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, title, navigation, buttons, icon, iconColor, flashIcon, numpad, btmLeftIcon, btmLeftColor, btmLeftAction, refresh) {
            {{absorb_it_nspanel_cards_startupLogging}}(ctx);
            {{absorb_it_nspanel_cards_killRefreshTimer}}();
            if (ctx.request == "pageUpdate" && ctx.item === null) {
              {{absorb_it_nspanel_cards_safeEval}}(btmLeftAction);
              if ({{absorb_it_nspanel_cards_checkResult}}({ "refreshPage": "1" }, target)) {
                {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
                return;
              }
            }
            let mqtt = {{absorb_it_nspanel_cards_getPreamble}}(title, navigation);
            mqtt += {{absorb_it_nspanel_cards_checkParam}}(ctx.ruleUID, 1);
            for (let i = 0; i < 4; i++) {
              let result = buttons[i];
              if (result === undefined) {
                  mqtt += {{absorb_it_nspanel_cards_checkParam}}("", 2);
                  continue;
              }
              if ({{absorb_it_nspanel_cards_checkResult}}(result, target)) {
                {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
                return;
              }
              mqtt += {{absorb_it_nspanel_cards_checkParam}}(result.resultString, 2);
            }
            mqtt += {{absorb_it_nspanel_cards_checkParam}}(icon, 1) + {{absorb_it_nspanel_cards_checkParam}}({{absorb_it_nspanel_cards_getRGB565}}(iconColor), 1);
            mqtt += (numpad == "TRUE")?'~enable':'~disable';
            mqtt += (flashIcon == "TRUE")?'~enable':'~disable';
            mqtt += {{absorb_it_nspanel_cards_checkParam}}(btmLeftIcon, 1) + {{absorb_it_nspanel_cards_checkParam}}({{absorb_it_nspanel_cards_getRGB565}}(btmLeftColor), 1);
            if (ctx.previousPage !== ctx.ruleUID)
              items.getItem(target).sendCommand("pageType~cardAlarm");
            items.getItem(target).sendCommand(mqtt);
            {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
          }
        name: absorb_it_nspanel_showCardAlarm
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, title, navigation, aboveHome, entities, speed_1, speed_2, speed_3, speed_4, speed_5, speed_6, refresh) {
            {{absorb_it_nspanel_cards_startupLogging}}(ctx);
            {{absorb_it_nspanel_cards_killRefreshTimer}}();
            let mqtt = {{absorb_it_nspanel_cards_getPreamble}}(title, navigation);
            mqtt += {{absorb_it_nspanel_cards_checkParam}}((entities[0])?entities[0].resultString:'', 6) + {{absorb_it_nspanel_cards_checkParam}}('', 6) + {{absorb_it_nspanel_cards_checkParam}}(aboveHome, 1) +
            '~';
            mqtt +=  {{absorb_it_nspanel_cards_checkParam}}((entities[1])?entities[1].resultString:'', 6) + {{absorb_it_nspanel_cards_checkParam}}(speed_1, 1);
            mqtt +=  {{absorb_it_nspanel_cards_checkParam}}((entities[2])?entities[2].resultString:'', 6) + {{absorb_it_nspanel_cards_checkParam}}(speed_2, 1);
            mqtt +=  {{absorb_it_nspanel_cards_checkParam}}((entities[3])?entities[3].resultString:'', 6) + {{absorb_it_nspanel_cards_checkParam}}(speed_3, 1);
            mqtt +=  {{absorb_it_nspanel_cards_checkParam}}((entities[4])?entities[4].resultString:'', 6) + {{absorb_it_nspanel_cards_checkParam}}(speed_4, 1);
            mqtt +=  {{absorb_it_nspanel_cards_checkParam}}((entities[5])?entities[5].resultString:'', 6) + {{absorb_it_nspanel_cards_checkParam}}(speed_5, 1);
            mqtt +=  {{absorb_it_nspanel_cards_checkParam}}((entities[6])?entities[6].resultString:'', 6) + {{absorb_it_nspanel_cards_checkParam}}(speed_6, 1);
            if (ctx.previousPage !== ctx.ruleUID)
              items.getItem(target).sendCommand("pageType~cardPower");
            items.getItem(target).sendCommand(mqtt);
            {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
          }
        name: absorb_it_nspanel_showCardPower
    - component: UtilityFunction
      config:
        code: >-
          function {{name}}(target, title, navigation, ssid, password, encryption, entities, refresh) {
            {{absorb_it_nspanel_cards_startupLogging}}(ctx);
            {{absorb_it_nspanel_cards_killRefreshTimer}}();
            let mqtt = {{absorb_it_nspanel_cards_getPreamble}}(title, navigation);
            mqtt += {{absorb_it_nspanel_cards_checkParam}}('~WIFI:S:' + ssid + ';T:' + encryption + ';P:' + password + ';;', 1);
            for (let i = 0; i < 2; i++) {
              let result = entities[i];
              if (result === undefined) {
                  mqtt += {{absorb_it_nspanel_cards_checkParam}}("x", 6); // required, if only one and only first param is used QR is not shown
                  continue;
              }
              if ({{absorb_it_nspanel_cards_checkResult}}(result, target)) {
                {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
                return;
              }
              mqtt += {{absorb_it_nspanel_cards_checkParam}}(result.resultString, 6);
            }
            if (ctx.previousPage !== ctx.ruleUID)
              items.getItem(target).sendCommand("pageType~cardQR");
            items.getItem(target).sendCommand(mqtt);
            {{absorb_it_nspanel_cards_startRefreshTimer}}(target, refresh);
          }
        name: absorb_it_nspanel_showCardQR
