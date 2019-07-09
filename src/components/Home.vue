<template>
    <div>
        <Landing/>
        <Rooms/>
        <grid/>
        <Footer/>
        
        
    </div>
</template>

<script>
import Landing from './Landing.vue'
import Rooms from './Rooms.vue'
import Footer from './Footer.vue'
import grid from './grid.vue' 



export default {
name: 'Home',
components:{
    Landing,
    Rooms,
    Footer,
    grid
}
}
</script>

<style>
.proba{
    background: #ff000050;
}
</style>
