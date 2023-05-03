<template>
    
    <footer class="main-footer">
        <div class="container">
            <div class="row justify-content-between">

                <div class="col-4">
                    <router-link :to="{name: 'home'}">
                        <img class="logo" src="/vite.svg" alt="">
                    </router-link>
                </div>

                <div class="col-4">
                    <ul class="">
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
    </footer>

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

ul,
li,
menu {
    list-style: none;
    color: rgb(233, 233, 233);
}

.main-footer{
    background-color: rgb(54, 51, 51);
    padding: 50px 0; 
}

.logo {
    width: 60px;
}

</style>