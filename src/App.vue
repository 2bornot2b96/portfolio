<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  data () {
    return {
      fadeBox: [],
      screenSize: window.screen.height,
      test: 'null'
    }
  },

  mounted () {
    window.addEventListener('scroll', this.scrollFade)
    document.addEventListener('click', this.scrollFade)
  },

  unmounted () {
    window.removeEventListener('scroll', this.scrollFade)
  },

  methods: {
    scrollFade () {
      this.fadeBox = document.getElementsByClassName('fade-box')
      for (const box of this.fadeBox) {
        if (box.offsetTop < window.scrollY + this.screenSize * 0.6) {
          box.style.opacity = 1
          box.style.bottom = 0
          box.style.left = 0
        }
        if (box.offsetTop > window.scrollY + this.screenSize * 0.6) {
          box.removeAttribute('style')
        }
      }
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Georgia;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 5px 10px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1 {
  font-size: 60px;
}

p {
  font-size: 48px;
}

.fade {
  &-out {
    transition: 1s;
    position: relative;
    bottom: 40px;
    left: 40px;
    opacity: 0;
  }
  &-in {
    transition: 1s;
    position: relative;
    bottom: 0px;
    left: 0px;
    opacity: 1;
  }
}

.fade-box {
  position: relative;
  bottom: 40px;
  left: 40px;
  opacity: 0;
  transition: 1s;
  /* animation-duration: 1s;
  animation-name: fadein; */
}

/* @keyframes fadein {
  from {
    bottom: 40px;
    opacity: 0;
  }
  to {
    bottom: 0px;
    opacity: 1;
  }
} */
</style>
