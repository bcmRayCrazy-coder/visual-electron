<template>
    <div>
        <div ref="blocklyWarp" class="blocklyEditorWrapper"/>
        <LoadingDialog></LoadingDialog>
    </div>
</template>
<script>
import LoadingDialog from '~/components/LoadingDialog.vue'
import toolbarXML from '~/plugins/blockly/toolbar.js'

import Blockly from 'blockly'

export default {
    name:"editor",
    components:{
        LoadingDialog
    },
    methods:{
        onLoad(){
            this.blockly = Blockly.inject(this.$refs.blocklyWarp, {
                renderer:'c_render',
                theme:'electron_theme',
                toolbox:toolbarXML,
                trashcan: true,
                scrollbars: true,
                zoom:
                {
                    controls: true,
                    wheel: true,
                    startScale: 1.0,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2,
                    pinch: true
                },
                grid:
                {
                    spacing: 20,
                    length: 20,
                    colour: '#ECF4FF',
                    snap: true
                },
            })
            this.blockly.addChangeListener(this.onChange);
            this.blockly.addChangeListener(this.onWorkspaceChange);
        },
        onSave(){
            this.blockly.setVisible(false)
            this.blockly.dispose()
            this.blockly = null
        },
        onChange(){
            this.blockly.setVisible(true)
        },
        onWorkspaceChange(){
            console.log("workspace change");
            console.log(this.getCode());
        },

        getCode(){
            return Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace()) || '// 空';
        }
    },
    data(){
        return {
            blockly:null
        }
    },
    mounted(){
        this.onLoad()
    }
}
</script>
<style lang="sass" scoped>
.blocklyEditorWrapper
    width:100%
    height:100%
    position: absolute
    top:0
    left:0
    z-index: 50
</style>