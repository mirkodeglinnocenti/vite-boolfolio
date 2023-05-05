<template>

    <div>
        <Default>
        <div class="project-show">

            <div v-if="project" class="container">
                <h1>{{ project.title }}</h1>
                <p>
                    {{ project.description }}
                </p>
                <p class="card-text"><strong>tipologia:</strong> {{ project.type ? project.type.type : " - " }}</p>
                <p><strong>Tecnologie:</strong></p>
                <ul class="d-flex gap-2 justify-content-center" v-if="project.technologies && project.technologies.length > 0">
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
    import ProjectCard from '../components/ProjectCard.vue';
    import axios from 'axios';

    export default (await import('vue')).defineComponent({
        components: {
            Default,
            ProjectCard,
            axios
        },
        data() {
            return {
                project: null,
            }
        },
        props: ['slug'],
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
            this.fetchProject(this.slug);
            console.log("slug", this.slug)
        }
    })
</script>

<style>

.project-show{
    min-height: 60vh;
    padding: 20px 150px;
}

</style>