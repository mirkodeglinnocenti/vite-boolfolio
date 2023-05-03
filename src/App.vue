<script>

import ProjectCard from './components/ProjectCard.vue';
import Default from './layouts/Default.vue';

export default (await import('vue')).defineComponent({
  components: {
    ProjectCard,
    Default
  }
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
