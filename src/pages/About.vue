<template>

    <Default>
        Chi sono
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