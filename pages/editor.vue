<template>
    <div>
        <div ref="blocklyWarp"/>
        <!-- <LoadingDialog></LoadingDialog> -->
    </div>
</template>
<script>
import BlocklyEditor from '~/components/BlocklyEditor.vue'
import LoadingDialog from '~/components/LoadingDialog.vue'
import toolbarXML from '~/plugins/blockly/toolbar.js'

import Blockly from 'blockly'

export default {
    name:"editor",
    components:{
        BlocklyEditor,
        LoadingDialog
    },
    methods:{
        onLoad(){
            this.blockly = Blockly.inject(this.$refs.blocklyWarp, {
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
        },
        onSave(){
            this.blockly.setVisible(false)
            this.blockly.dispose()
            this.blockly = null
        },
        onChange(){
            this.blockly.setVisible(true)
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