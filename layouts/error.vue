<template>
  <v-app dark>
    <!-- <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink> -->
    <v-dialog
      v-model="dialog" 
      persistent :overlay="false"
      max-width="500px"
      transition="slide-y-transition"
    >
      <v-card
        color="red"
        width="500px"
        dark
      >
        <v-card-title primary-title>
          页面无法显示
        </v-card-title>
        <v-card-text v-if="error.statusCode === 404">
          {{ pageNotFound }}
          <br>
          {{ addon }}
        </v-card-text>
        <v-card-text v-else>
          {{ otherError }}
          <br>
          {{ addon }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            plain
            @click="toUrl('/')"
          >返回</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 页面未找到',
      otherError: '出现了错误',
      addon: '看来这个页面不能使用了',
      dialog:true
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  methods: {
    toUrl(url) {
      this.$router.push(url);
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
