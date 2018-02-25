<template>
  <div class="main">
    <my-nav :nav-index="2"></my-nav>
    <v-content >
      <v-container fluid grid-list-xl>
        <v-layout row wrap 	>
          <v-flex md8 >
            <v-layout row wrap justify-center>

              <v-flex md10 >
                <vue-markdown>{{title}}</vue-markdown>
              </v-flex>


              <v-flex md10 >
                <chat-board></chat-board>
              </v-flex>

            </v-layout>


          </v-flex>
          <v-flex md4 hidden-sm-and-down>
            <v-layout row wrap justify-center>

              <v-flex md10>
                <profile-box></profile-box>
              </v-flex>

              <v-flex md10>
                <recent-post-box></recent-post-box>
              </v-flex>

              <v-flex md10>
                <contact-me-box></contact-me-box>
              </v-flex>

            </v-layout>
          </v-flex>

        </v-layout>
      </v-container>



    </v-content>
    <my-footer></my-footer>
  </div>

</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import ChatBoard from "../components/ChatBoard";
import MyNav from "../components/MyNav";
import ProfileBox from "../components/ProfileBox";
import ContactMeBox from "../components/ContactMeBox";
import RecentPostBox from "../components/RecentPostBox";
import axios from 'axios'
import VueMarkdown from 'vue-markdown'
import MyFooter from "../components/MyFooter";
export default {
  components: {
    MyFooter,
    RecentPostBox,
    ContactMeBox,
    ProfileBox,
    MyNav,
    ChatBoard,
    AppLogo,
    VueMarkdown
  },
  async asyncData ({ params }) {
    let { data } = await axios.get(`https://raw.githubusercontent.com/vuetifyjs/vuetify/dev/README.md`)
    return { title: data }
    // console.log('async Data')
    // console.log(params)
  },
  head:{
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/prism.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.6.0/themes/prism.min.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/katex@0.6.0/dist/katex.min.css' },
    ]
  },
}
</script>

<style scoped lang="scss">
.main {
  min-height: 100vh;

}
.container {

  display: flex;
  /*justify-content: center;*/
  /*align-items: center;*/
  /*text-align: center;*/

}

</style>
