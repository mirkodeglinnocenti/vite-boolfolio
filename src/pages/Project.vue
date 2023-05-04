<template>

    <div>
        <Default>
        <div class="about">
            <div class="container">
                <h1>Progetto</h1>
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
            fetchProject(){
                axios.get(`http://127.0.0.1:8000/api/projects/${ slug }`)
                .then(res => {
                    const { results } = res.data;
                    this.project = results;
                })
                .catch(err => {
                    console.log(err);
                })
            }
        },
        mounted() {
            this.fetchProject();
        }
    })
</script>

<style>

</style>