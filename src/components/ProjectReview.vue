<template>
    <div>
        <h1>{{ project.name }}</h1>
        <div v-if="project.paragraphs">
        <p v-for="paragraph in project.paragraphs" :key="paragraph">
            {{ paragraph.description }}
        </p>
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
