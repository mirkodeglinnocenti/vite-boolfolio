<template>
    <div class="card" v-for="project in projects" :key="project.id">
        <p>{{ project.title }}</p>
        <p>{{ project.description }}</p>
        <a :href="project.url" target="_blank">{{ project.url }}</a>
    </div>
</template>

<script>
import axios from 'axios';

export default (await import('vue')).defineComponent({
  data() {
    return {
        projects: [],
    }
  },
  methods:{
    fetchProjects(){
        axios.get('http://127.0.0.1:8000/api/projects')
        .then(res => {
            // console.log(res);
            const { results } = res.data; // oppure const results = res.data.results
            this.projects = results;
        })
        .catch(err => {
            console.log(err)
        })
    }
  },
  mounted(){
    this.fetchProjects()
  }
})
</script>

<style>

.card {
    
}

</style>