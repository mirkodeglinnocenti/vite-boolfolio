<template>

<div>
  <Default>
  
  <div class="my-grid">
    <div class="card my-card" v-for="project in projects" :key="project.id">
      <div class="card-body my-card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text"><strong>tipologia:</strong> {{ project.type ? project.type.type : " - " }}</p>
        <p><strong>Tecnologie:</strong></p>
        <ul class="d-flex gap-2" v-if="project.technologies && project.technologies.length > 0">
            <li class="badge rounded-pill text-bg-warning" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</li>
        </ul>
        <p v-else>-</p>
        <p class="card-text">{{ project.description }}</p>
        <a :href="project.url" target="_blank" class="card-link">{{ project.url }}</a>
      </div>
    </div>
  </div>
    
  </Default>
</div>
    
</template>

<script>
import axios from 'axios';
import Default from '../layouts/Default.vue';

export default (await import('vue')).defineComponent({

  components: {
    Default,
  },
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

.my-card{
    overflow: hidden;
}

.my-card-body{
    height: 400px;
    overflow: auto;
}

.my-card-body::-webkit-scrollbar {
  display: none;
}

.my-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

</style>