<template>
    <div>
        <Landing/>
        <Rooms/>
        
        
    </div>
</template>

<script>
import Landing from './Landing.vue'
import Rooms from './Rooms.vue'



export default {
name: 'Home',
components:{
    Landing,
    Rooms
}
}
</script>

<style>
.proba{
    background: #ff000050;
}
</style>
