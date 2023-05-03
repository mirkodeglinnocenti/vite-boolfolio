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

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
