import Blockly from 'blockly'

export default {
	lable: '事件',
	colour: '#0033FF',
	blocks: {
		app_event_on: {
			define: {
				init: function () {
					this.appendDummyInput()
						.appendField('app事件')
						.appendField(
							new Blockly.FieldDropdown([
								['即将启动完成', 'will-finish-launching'],
								['就绪', 'ready'],
								['所有窗口都已关闭', 'window-all-closed'],
								['关闭前', 'before-quit'],
								['即将关闭', 'will-quit'],
								['关闭', 'quit'],
								['窗口模糊', 'browser-window-blur'],
								['打开文件(MacOs)', 'open-file'],
								['打开网址(MacOs)', 'open-url'],
								['激活(MacOs)', 'activate'],
								['已被激活(MacOs)', 'did-become-active'],
								['新标签页(MacOs)', 'new-window-for-tab'],
							]),
							'event_type'
						)
					this.appendValueInput('function_name')
						.appendField('函数名')
						.setCheck('String')
					this.setStyle('event_block')
				},
			},
			code(block) {
				const event_type = block.getFieldValue('event_type')
				var function_name = Blockly.JavaScript.valueToCode(
					block,
					'function_name',
					Blockly.JavaScript.ORDER_ATOMIC
				)
				function_name = function_name.replace(/'/g, '')
				return `app.on('${event_type}',${function_name}());\n`
			},
			innerXml: '<lable text="触发app事件"/>',
		},
		window_event_on: {
			define: {
				init: function () {
					this.appendDummyInput()
						.appendField('窗口事件')
						.appendField(
							new Blockly.FieldDropdown([
								['窗口激活', 'activate'],
							]),
							'event_type'
						)
					this.appendValueInput('function_name')
						.appendField('函数名')
						.setCheck('String')
					this.setStyle('event_block')
				},
			},
			code(block) {
				const event_type = block.getFieldValue('event_type')
				var function_name = Blockly.JavaScript.valueToCode(
					block,
					'function_name',
					Blockly.JavaScript.ORDER_ATOMIC
				)
				function_name = function_name.replace(/'/g, '')
				return `window.on('${event_type}',${function_name}());\n`
			},
			innerXml: '<lable text="触发窗口事件"/>',
		},
	},
}
