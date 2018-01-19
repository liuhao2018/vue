<template>
  <div id="not-found">
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  name: "not-found",
  data: () => ({
    msg:'您来到了知识的荒漠'
  })
}
</script>
<style scoped>
  p {
    font-size: 14px;
    color: #000;
  }
</style>
