<template lang="pug">
  div(
    class="home")
    img(
      alt="Vue logo"
      src="../assets/logo.png")
    HelloWorld(
      msg="Welcome to Your Vue.js App")
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      // 参数
      fromData: {
        username: '',
        verifyCode: ''
      }
    }
  }
}

</script>
