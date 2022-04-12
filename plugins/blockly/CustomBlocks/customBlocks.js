import events from './Blocks/event.js'
import windows from './Blocks/window.js'
import { XMLBuilder } from 'fast-xml-parser'
import Blockly from 'blockly'

const builder = new XMLBuilder({
	attributeNamePrefix: '@',
	ignoreAttributes: false,
	arrayNodeName: 'category',
})

function toXml(p) {
	const obj = {
		category: {
			'@name': p.lable,
			'@colour': p.colour,
			block: [],
		},
	}
	for (const blockKey in p.blocks) {
		if (Object.hasOwnProperty.call(p.blocks, blockKey)) {
			const block = p.blocks[blockKey]
			Blockly.Blocks[blockKey] = block.define
			Blockly.JavaScript[blockKey] = block.code
			const blockObj = {
				'@type': blockKey,
				'@colour': p.colour,
			}
			if (block.innerXml) {
				blockObj['#text'] = block.innerXml
			}
			obj.category.block.push(blockObj)
		}
	}
	const xml = builder.build(obj)
	return xml
}

var addonXml = toXml(events)
addonXml += toXml(windows)

export default addonXml
