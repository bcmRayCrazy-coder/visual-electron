<template>
	<div>
		<div ref="blocklyWarp" class="blocklyEditorWrapper" />
		<div class="rightWorkspace">
			<div class="console-wrapper" ref="console">
				<p>==输出==</p>
				<p>1111</p>
				<p>2222</p>
			</div>
			<div class="actions-wrapper">
				<v-card elevation="0">
					<v-card-actions>
						<v-btn color="info" text>复制代码</v-btn>
						<v-btn color="orange" text>保存代码</v-btn>
						<v-btn color="purple" text>生成代码</v-btn>
					</v-card-actions>
				</v-card>
			</div>
		</div>
		<LoadingDialog></LoadingDialog>
		<BlocklyDialog></BlocklyDialog>
	</div>
</template>
<script>
import LoadingDialog from '~/components/LoadingDialog.vue'
import toolbarXML from '~/plugins/blockly/toolbar.js'
import BlocklyDialog from '~/components/BlocklyDialog.vue'

import Blockly from 'blockly'

export default {
	name: 'editor',
	components: {
		LoadingDialog,
		BlocklyDialog,
	},
	methods: {
		onLoad() {
			this.blockly = Blockly.inject(this.$refs.blocklyWarp, {
				renderer: 'c_render',
				media: '/media/',
				theme: 'electron_theme',
				toolbox: toolbarXML,
				trashcan: true,
				scrollbars: true,
				zoom: {
					controls: true,
					wheel: true,
					startScale: 1.0,
					maxScale: 3,
					minScale: 0.3,
					scaleSpeed: 1.2,
					pinch: true,
				},
				grid: {
					spacing: 20,
					length: 20,
					colour: '#ECF4FF',
					snap: true,
				},
			})
			this.blockly.addChangeListener(this.onChange)
			this.blockly.addChangeListener(this.onWorkspaceChange)
		},
		onSave() {
			this.blockly.setVisible(false)
			this.blockly.dispose()
			this.blockly = null
		},
		onChange() {
			this.blockly.setVisible(true)
		},
		onWorkspaceChange() {
			console.log('workspace change')
			console.log(this.getCode())
		},

		getCode() {
			return (
				Blockly.JavaScript.workspaceToCode(
					Blockly.getMainWorkspace()
				) || '// 空'
			)
		},
	},
	data() {
		return {
			blockly: null,
		}
	},
	mounted() {
		this.onLoad()
	},
}
</script>
<style lang="sass" scoped>
.blocklyEditorWrapper
    width:65%
    height:100%
    position: absolute
    top:0
    left:0
    z-index: 50

.rightWorkspace
    width:35%
    height:100%
    position: absolute
    top:0
    right:0
    z-index: 49
    background-color: #FBFFFF
    .console-wrapper
        background-color: #111111
        overflow: scroll
        height: 40%
        padding: 10px 20px
        p
            color: #EEEEEE
            line-height: 1
            font-weight: bold
</style>
