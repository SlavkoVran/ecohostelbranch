<template>
    <div>
        <Landing/>
        <Rooms/>
        <Events/>
        
    </div>
</template>

<script>
import Landing from './Landing.vue'
import Rooms from './Rooms.vue'
import Events from './Events.vue'



export default {
name: 'Home',
components:{
    Landing,
    Rooms,
    Events
}
}
</script>

<style>

</style>
