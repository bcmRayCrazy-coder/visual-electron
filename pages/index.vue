<template>
  <div>
     <LoadingDialog></LoadingDialog>
     <n-link to="/editor">编辑器</n-link>
  </div>
</template>

<script>
import LoadingDialog from '~/components/LoadingDialog.vue'

export default {
  name: 'IndexPage',
  data() {
    return {
    }
  },
  components: {
    LoadingDialog
  },
}
</script>
