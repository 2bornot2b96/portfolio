<template>
  <div class="home">
    <button v-if="projIndex!='home'" id="return-button" @click="changeIndex('home')">x</button>
    <div v-if="projIndex=='home'" class="description">
      <h1>Cyril Adamo</h1>
      <p>Développeur web VueJs/Symfony</p>
    </div>
    <ProjectReview v-else :project="projects[projIndex]" class="description"></ProjectReview>
    <div class="project-review">
      <button v-for="project, index in projects" :key="project" v-on:click="changeIndex(index)">
        <img :src="require(`@/assets/image/${project.imgFolder}/${project.img}`)" class="thumbnail" alt="">
        <p>{{ project.name }}</p>
      </button>
    </div>
  </div>
</template>

<script>
import Projects from '@/assets/project.json'
import ProjectReview from '@/components/ProjectReview.vue'

export default {
  components: {
    ProjectReview
  },
  data () {
    return {
      projects: Projects,
      projIndex: 'home'
    }
  },
  methods: {
    changeIndex (index) {
      this.projIndex = index
    }
  }
}

</script>

<style scoped lang="scss">
.home{
  display: flex;
}
.description {
  width: 65%;
  padding: 0 10px;
}
.thumbnail {
  height: 150px;
  max-width: 100%;
}
.project-review {
  display: flex;
  button{
    cursor: pointer;
    margin: 20px;
    width: 40%;
    height: 250px;
    p {
      font-size: 35px;
    }
  }
}
#return-button {
  position: absolute;
}

</style>
