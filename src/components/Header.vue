<template>
    
    <header>
        <div class="container">
            <div class="row justify-content-between">

                <div class="col-4">
                    <router-link :to="{name: 'home'}">
                        <img src="/vite.svg" alt="">
                    </router-link>
                </div>

                <div class="col-4">
                    <ul class="nav-header">
                        <li>
                            <router-link :to="{name: 'home'}">Home</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'projects.index'}">Porfolio</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'about'}">Chi sono</router-link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </header>

</template>

<script>
    export default (await import('vue')).defineComponent({

    })
</script>

<style scoped>

a {
    text-decoration: none;
    color: currentColor;
}
.nav-header{
    display: flex;
    gap: 30px;
    list-style: none;
}

</style>