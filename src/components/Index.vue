<template>
  <div id="index">
    {{message}}
    <button v-on:click="handleClick">Greet</button>
  </div>
</template>
<script>
import router from "../router";
export default {
  name: "index",
  data: () => ({
    message:'hello index'
  }),
  methods: {
    handleClick() {
      console.log('click');
      router.push({name:'show'});
    }
  }
}
</script>
<style scoped>
</style>
