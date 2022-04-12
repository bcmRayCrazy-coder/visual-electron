import * as Blockly from 'blockly';

try {
    const theme = new Blockly.Theme(
        'electron_theme',

        {
            list_blocks: {
                colourPrimary: "#F9CC37",
                colourTertiary: "#C4A12B"
            },
            logic_blocks: {
                colourPrimary: "#68CDFF",
                colourTertiary: "#53A2C9"
            },
            loop_blocks: {
                colourPrimary: "#68CDFF",
                colourTertiary: "#53A2C9"
            },
            math_blocks: {
                colourPrimary: "#A073FF",
                colourTertiary: "#7E5BC9"
            },
            procedure_blocks: {
                colourPrimary: "#5574F8",
                colourTertiary: "#4259C2"
            },
            text_blocks: {
                colourPrimary: "#F88767",
                colourTertiary: "#E17A5D"
            },
            variable_blocks: {
                colourPrimary: "#E04852",
                colourTertiary: "#AB373E"
            },
            variable_dynamic_blocks: {
                colourPrimary: "310"
            },
            hat_blocks: {
                colourPrimary: "330",
                hat: "cap"
            },

            // 自定义方块
            event_block: {
                colourPrimary: "#0033FF",
                colourTertiary: "#0028CC",
            },
            window_block: {
                colourPrimary: "#FF69B4",
                colourTertiary: "#F26F90"
            }
        }, {
            event_category: {
                colour: "#6DACFF"
            },
            list_category: {
                colour: "#F9CC37"
            },
            logic_category: {
                colour: "#68CDFF"
            },
            loop_category: {
                colour: "120"
            },
            math_category: {
                colour: "#A073FF"
            },
            procedure_category: {
                colour: "#5574F8"
            },
            text_category: {
                colour: "#F88767"
            },
            variable_category: {
                colour: "#E04852"
            },
            variable_dynamic_category: {
                colour: "310"
            }
        }, {
            workspaceBackgroundColour: "#F5F9FF"
        }
    )
} catch (e) {
    console.log(e)
}