<template>
  <div>
    <my-nav :nav-index="3"></my-nav>
    <v-container grid-list-md class="main">
      <v-layout class="title" row justify-center >

        <v-flex md8 >
          <v-card color="transparent" class="black--text">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex xs8 >
                  <v-btn-toggle v-model="toggle_exclusive">
                    <v-btn flat color="teal darken-2">
                      Inkscape
                    </v-btn>
                    <v-btn flat color="teal darken-2">
                      Pottery
                    </v-btn>
                    <v-btn flat color="teal darken-2">
                      Neural Style
                    </v-btn>
                  </v-btn-toggle>
                </v-flex>

                <v-flex v-show="getActive(0)" xs7>
                  <div>
                    <div class="headline teal--text text--darken-2">Inkscape</div>
                    <p class="grey--text ">
                      -免費的向量軟體
                    </p>
                    <p class="grey--text ">
                      餘閒的創作，
                      希望大家喜歡
                    </p>
                  </div>
                </v-flex>

                <v-flex v-show="getActive(1)" xs7>
                  <div>
                    <div class="headline teal--text text--darken-2">Pottery</div>
                    <p class="grey--text ">
                      -交大陶藝工作室
                    </p>
                    <p class="grey--text ">
                      陶土的特性，
                      自由地任人變換
                    </p>
                  </div>
                </v-flex>
                <v-flex xs7 v-show="getActive(2)">
                  <div>
                    <div class="headline teal--text text--darken-2">Neural Style</div>
                    <p class="grey--text ">
                      -深度學習
                    </p>
                    <p class="grey--text ">
                      課業的研究，
                      科技與藝術的結合
                    </p>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media
                    src="/galleryImg/fox.png"
                    height="125px"
                    contain
                  ></v-card-media>
                </v-flex>

              </v-layout>
            </v-container>
          </v-card>
        </v-flex>


      </v-layout>
      <v-layout row wrap>
        <template v-for="item in galleryList.Img" >
          <v-flex class="imgcard" md4 :key="item.id" @click="openModal(item.filename)">
            <v-card >
              <v-card-media
                class="white--text"
                height="200px"
                :src= getImgPath(item)
              >
              </v-card-media>
              <v-card-title class="lighten-3" v-bind:class="item.color">
                <div>
                  <span class="white--text">{{item.time}}</span><br>
                  <span>{{item.title}}</span><br>
                  <span>{{item.content}}</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </template>
      </v-layout>

    </v-container>
    <!-- Images used to open the lightbox -->
    <!-- The Modal/Lightbox -->

    <div v-show="showModal"   class="modal" @click="showModal = false" >
      <span class="close cursor" @click="closeModal">&times;</span>
      <div class="img" ref="imgModal" v-bind:style="{backgroundImage:`url(${modalImgname})`}"></div>
    </div>


  </div>

</template>

<script>
    import MyNav from "../components/MyNav"
    import axios from 'axios'


    export default {
      components: {MyNav},
      name: "gallery",
      data () {
        return {
          toggle_exclusive: 0,
          galleryList:'',
          showModal:false,
          modalImgname:'/galleryImg/fox.png'
        }
      },
      methods:{
        getActive:function(index){
          if(index==this.toggle_exclusive){
            return true;
          }
        },
        getGalleryList:async function(){
          let data = await axios.get('/galleryImg/galleryList.json')
          this.galleryList = data.data
        },
        getImgPath:function(item){

          return "/galleryImg/"+item.filename
        },
        getColor:function(color){
          return {
            colorClass: color,
          }
        },
        closeModal:function(){
          this.showModal = false
        },
        openModal:function(filename){
          this.modalImgname = '/galleryImg/'+filename;
          this.showModal = true
        },
        escapeKeyListener: function(evt) {
          if (evt.keyCode === 27 && this.showModal) {
            this.showModal = false;
          }
        }
      },
      computed:{

      },
      destroyed: function() {
        document.removeEventListener('keyup', this.escapeKeyListener);
      },
      mounted:function(){
        this.getGalleryList()
        document.addEventListener('keyup', this.escapeKeyListener);
      }
    }
</script>

<style scoped lang="scss">
  @import "../assets/global/modal.scss";
  .imgcard {
    &:hover {
      cursor: pointer;
    }
  }
  .main {

  }

  .btn-toggle--selected {
    box-shadow: none;
    background: transparent;
  }
  .title {
    .card {
      box-shadow: none;
    }
  }
.card__title {
  background: #3b8070;
}

</style>
