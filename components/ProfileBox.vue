<template>
  <div class="card">
    <div class="title">
      <span class="heading">About Me</span>
    </div>
    <img src="sherlock.jpg" alt="Avatar" class="avatar" >
    <div class="container-box">
      <h4><b>Jimmy Young</b></h4>
      <p>
        我目前是交大電子系學生，
        平時喜歡研究前端技術，
        使用的技術主要是VUE
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "profile-box"
  }
</script>

<style scoped lang="scss">
  @import "../assets/global/card";
  p {
    text-align: left;
  }
</style>
