<template>
    <div>
        <LoadingDialog></LoadingDialog>
        <BlocklyEditor></BlocklyEditor>
    </div>
</template>
<script>
import BlocklyEditor from '~/components/BlocklyEditor.vue'
import LoadingDialog from '~/components/LoadingDialog.vue'

export default {
    name:"editor",
    components:{
        BlocklyEditor,
        LoadingDialog
    },
}
</script>