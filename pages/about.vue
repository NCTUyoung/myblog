<template>
    <div>
      <my-nav :nav-index="1"></my-nav>
    </div>
</template>

<script>
    import MyNav from "../components/MyNav";

    export default {
      components: {MyNav},
      name: "about"
    }
</script>

<style scoped>

</style>
