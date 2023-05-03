<template>

    <Default>
        <div class="home">
            <div class="center">
                <h1 class="title">Home</h1>
            </div>
        </div>
    </Default>

</template>

<script>
import Default from '../layouts/Default.vue';

export default (await import('vue')).defineComponent({
    components: {
        Default
    }
})
</script>

<style>

.home{
    background-image: url(https://fastly.picsum.photos/id/116/3504/2336.jpg?hmac=C46vgpj3R407e8pCyy8NhIsNaBZCjb4r5d71keNgMJY);
    background-size: cover;
    height: 600px;
}

img{
    max-width: 100%;
}

.center{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.title{
    font-size: 80px;
    color: beige;
}

</style>