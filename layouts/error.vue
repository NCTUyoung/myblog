<template>
  <div class="cloak">
    <div class="main" v-cloak>
      <v-container >
        <v-layout row wrap align-center justify-center >
          <v-flex md3 xs12 justify-center class="dis-flex">
            <v-btn  nuxt to="/" ripple  large outline color="teal lighten-4">Back to Blog</v-btn>
          </v-flex >
          <v-flex md9 xs9 align-center justify-center class="dis-flex">
            <img ref="img" :src="image404"/>
          </v-flex>
        </v-layout>
      </v-container>



    </div>
    <my-footer class="error-404-nav"></my-footer>
  </div>

</template>

<script>
    import MyNav from "../components/MyNav";
    import MyFooter from "../components/MyFooter";

    export default {
      components: {
        MyFooter,
        MyNav},
      name: "error",
      data(){
        return {

          isMobile: false
        }
      },
      mounted () {
        this.onResize()
        this.$el.style.visibility='visible';
        window.addEventListener('resize', this.onResize, { passive: true })
      },
      beforeDestroy () {
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', this.onResize, { passive: true })
        }
      },
      methods: {
        onResize () {
          this.isMobile = window.innerWidth < 600
          if(this.isMobile){
            this.$refs.img.style.width = '100%';
          }
          else {
            this.$refs.img.style.width = '100%';
          }
        }
      },
      computed: {
        image404 () {
          if(this.isMobile) {

            return '404-m.png'
          }
          else {
            return '404.png'
          }
        }
      }

    }
</script>

<style scoped lang="scss">
.cloak {
  visibility: hidden;
}
  .dis-flex {
    display: flex;
  }
.main {


  padding: 1em;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: $green;
  overflow: hidden;
  img {
    width: 50%;
  }
}
  .error-404-nav {
    background: $green;
    color: white;
  }

  .fill {
    height: 100%;
  }
</style>
