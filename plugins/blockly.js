import setCustomDialog from './blockly/dialog.js';
import setMsg from './blockly/msg.js';

// Blockly.Blocks['blockly_plus_minus'] = {
//     init: function() {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldPlusMinus("+"), "PLUSMINUS");
//         this.setOutput(true, "Number");
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

/**
 * @description 初始化blockly
 */
function blocklySetter() {
    setCustomDialog();
    setMsg();
}

var blocklySetter = blocklySetter();