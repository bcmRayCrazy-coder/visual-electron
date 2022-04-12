import Blockly from 'blockly'

export default {
	lable: '窗口',
	colour: '#0033FF',
	blocks: {
		create_window: {
			define: {
				init: function () {
					this.appendDummyInput()
						.appendField('创建窗口 宽度')
						.appendField(new Blockly.FieldTextInput('100'), 'width')
						.appendField('高度')
						.appendField(
							new Blockly.FieldTextInput('100'),
							'height'
						)
					this.setStyle('window_block')
				},
			},
			code() {
				let width = this.getFieldValue('width')
				let height = this.getFieldValue('height')
				return `new Window({
                    width:${width}, 
                    height:${height}
                });\n`
			},

			innerXml: '<lable text="创建窗口"/>',
		},
	},
}
