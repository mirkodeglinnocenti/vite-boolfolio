<template>

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

</style>