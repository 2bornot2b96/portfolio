<template>
    <div>
        <h1 class="project-title fade-box">{{ project.name }}</h1>
        <div v-if="project.paragraphs">
        <div v-for="paragraph, index in project.paragraphs" :key="paragraph" class="project-paragraph fade-box">
          <img v-if="paragraph.img" :src="require(`@/assets/image/${project.imgFolder}/${paragraph.img}`)" alt="" class="project-image" :class="index % 2 ? 'odd':''">
          <p v-if="paragraph.description">{{ paragraph.description }}</p>
        </div>
        </div>
        <div v-else>
            <p>{{ project.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectReview',
  props: {
    project: Object
  }
}
</script>

<style lang="scss" scoped>
.odd {
  order: 1;
}

.project{
  &-title{
    text-align: center;
  }
  &-paragraph{
    display: flex;
    justify-content: space-around;
    p{
      font-size:30px ;
    }
  }
  &-image {
  height:300px;
    width: auto;
  }
}

</style>
