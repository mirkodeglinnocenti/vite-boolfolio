<template>

    <div class="card" v-for="project in projects" :key="project.id">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
            <p class="card-text">{{ project.title }}</p>
            <a :href="project.url" target="_blank" class="card-link">{{ project.title }}</a>
        </div>
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


</style>