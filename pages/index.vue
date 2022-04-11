<template>
  <div>
     <LoadingDialog></LoadingDialog>
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
