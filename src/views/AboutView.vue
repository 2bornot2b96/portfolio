<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <input type="text" v-model="pos">
  <div :class="fade() ? 'fade-in' : 'fade-out'">
    <p>un test</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pos: 0
    }
  },

  methods: {
    fade (e) {
      console.log(e)
      const posY = this.pos
      const fadeMin = window.scrollY + window.screen.height * 0.6
      if (posY < fadeMin) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
