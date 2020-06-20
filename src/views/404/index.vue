<template>
<!-- 当请求一个路径 没有对应规则 则是404请求 -->
  <div class="container">
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  }
}
</script>
<style lang='less' scoped>
.container {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: url(../../assets/images/404.png) no-repeat center;
}
</style>
