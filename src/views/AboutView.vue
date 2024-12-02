<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <input type="text" v-model="pos">
  <button @click="testa">click</button>
  <div ref="test" class="fade-out">
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
    },

    fadeBox (e) {
      console.log(this.$refs.test)
      const posY = this.$refs.test.offsetTop
      const fadeMin = window.scrollY + window.screen.height * 0.6
      if (posY < fadeMin) {
        return true
      } else {
        return false
      }
    },

    testa () {
      console.log(this.$refs.test)
      if (this.$refs.test.classList.contains('fade-out')) {
        this.$refs.test.classList.remove('fade-out')
        this.$refs.test.classList.add('fade-in')
      } else {
        this.$refs.test.classList.remove('fade-in')
        this.$refs.test.classList.add('fade-out')
      }
    }
  }
}
</script>
