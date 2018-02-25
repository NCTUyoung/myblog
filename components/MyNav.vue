<template>
  <nav>
    <nuxt-link to="/about">
      <div
        v-bind:class="{'is-active':calNavIndex.index1}">
        About
      </div>
    </nuxt-link>

    <nuxt-link to="/">
      <div
        v-bind:class="{'is-active':calNavIndex.index2}">
        Blog
      </div>
    </nuxt-link>
    <nuxt-link to="/gallery">
      <div
        v-bind:class="{'is-active':calNavIndex.index3}">
        Gallery
      </div>
    </nuxt-link>

  </nav>
</template>

<script>
  export default {
    name: "my-nav",
    methods: {
      jump(index){
        let temp = {
          index1:false,
          index2:false,
          index3:false,
        };

        switch(index){
          case 1:
            this.$router.push('/about')
            break
          case 2:
            this.$router.push('/')
            break
          case 3:
            this.$router.push('/gallery')
            break;
        }
      },
    },
    data () {
      return {
        items: [
          { icon: true, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: '/static/doc-images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: '/static/doc-images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' },
        ],
        listShow:false,
        localIndex:this.navIndex
      }
    },
    props:['navIndex'],
    computed:{
      calNavIndex:function (){
        let temp = {
          index1:false,
          index2:false,
          index3:false,
        };
        switch(this.localIndex){
          case 1:
            temp.index1 = true;
            break
          case 2:
            temp.index2 = true;
            break
          case 3:
            temp.index3 = true;
            break
        }
        return temp
      }
    }
  }
</script>

<style scoped lang="scss">
nav {

  height:3em;
  background: #3b8070;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    color: whitesmoke;
    display: inline-block;
    margin: 0.5em;
    font-size: 1.2em;
    &:hover {
      cursor: pointer;
    }

  }
}
.is-active {
  border-bottom: 2px solid cadetblue;
}
</style>
