<script>

import ProjectCard from './components/ProjectCard.vue';

export default (await import('vue')).defineComponent({
  components: {
    ProjectCard,
  }
})
</script>

<template>
  <div class="container">

    <h2 class="mb-4">Lista Progetti</h2>

    <div class="my-grid">
      <ProjectCard />
    </div>

  </div>
</template>

<style scoped>
.my-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

</style>
