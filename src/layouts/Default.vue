<template>

    <Header />

    <main>
        <slot />
    </main>

    <Footer />

</template>

<script>
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';

    export default (await import('vue')).defineComponent({
        components: {
            Header,
            Footer
        }
    })
</script>

<style>


</style>