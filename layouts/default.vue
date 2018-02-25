<template>
  <v-app>
    <nuxt/>
  </v-app>
</template>
<script>

  import MyFooter from "../components/MyFooter";
  export default {
    components:{

      MyFooter
    }
  }
</script>
<style>


*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.application {
  min-height: 100vh;
  font-family: "Microsoft JhengHei","Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
