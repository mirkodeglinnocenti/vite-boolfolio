<template>

    <div>
        <Default>
        <div class="about">

            <div v-if="project" class="container">
                <h1>{{ project.title }}</h1>
                <p>
                    {{ project.description }}
                </p>
                <p class="card-text"><strong>tipologia:</strong> {{ project.type ? project.type.type : " - " }}</p>
                <p><strong>Tecnologie:</strong></p>
                <ul class="d-flex gap-2" v-if="project.technologies && project.technologies.length > 0">
                    <li class="badge rounded-pill text-bg-warning" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</li>
                </ul>
                <p v-else>-</p>
            </div>

        </div>
        </Default>
    </div>

</template>

<script>
    import Default from '../layouts/Default.vue';
    import axios from 'axios';

    export default (await import('vue')).defineComponent({
        components: {
            Default,
            axios
        },
        data() {
            return {
                project: null,
            }
        },
        methods: {
            fetchProject(slug){
                axios.get(`http://127.0.0.1:8000/api/projects/${ slug }`)
                .then(res => {
                    console.log("data", res.data)
                    const { results } = res.data;
                    this.project = results;
                    console.log("project", this.project)
                })
                .catch(err => {
                    console.log(err);
                })
            }
        },
        created() {
            this.fetchProject("nemo-fugit-odit");
            console.log(this.slug)
        }
    })
</script>

<style>

</style>