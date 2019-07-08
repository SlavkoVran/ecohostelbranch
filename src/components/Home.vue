<template>
    <div>
        <Landing/>
        <Rooms/>
        <Footer/>
        
        
    </div>
</template>

<script>
import Landing from './Landing.vue'
import Rooms from './Rooms.vue'
import Footer from './Footer.vue'



export default {
name: 'Home',
components:{
    Landing,
    Rooms,
    Footer
}
}
</script>

<style>
.proba{
    background: #ff000050;
}
</style>
