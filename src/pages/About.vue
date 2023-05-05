<template>

    <div>
        <Default>
        <div class="about">
            <div class="container">
                <h1>Chi sono</h1>
            </div>

            <div class="container">
                <p>Sono un full stack developer junior</p>
            </div>
        </div>
        </Default>
    </div>

</template>

<script>
    import Default from '../layouts/Default.vue';
    export default (await import('vue')).defineComponent({
        components: {
            Default,
        }
    })
</script>

<style>

.about{
    min-height: 60vh;
}

</style>