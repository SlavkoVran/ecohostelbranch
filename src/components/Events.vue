<template>
  <v-carousel>
    <router-link to="events">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    <v-layout  column align-center justify-center fill-height pa-2 class="lightbox yel3g--text">
          
          <v-flex shrink style="width:40%">
            <div class="display-1">{{item.title}}</div>
            <div class="subheading">{{item.date}}</div>
            <div class="title"> {{item.text}} </div>
          </v-flex>
        </v-layout>
    </v-carousel-item>
    </router-link>
  </v-carousel>
</template>

<script>
  export default {
      name: 'Events',
    data () {
      return {
        items: [
          {
            title: 'Event1',
            date: '06.07.2019',
            text: 'Cupcake ipsum dolor sit amet candy canes brownie.',
            src: require('../assets/events/cupcakes.jpg')
          },
          {
            title: 'Event2',
            date: '12.07.2019',
            text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.',  
            src: require('../assets/events/zombies.jpg')
          },
          {
            title: 'Event3',
            date: '22.07.2019.',
            text: "I'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out...",
            src: require('../assets/events/cat.jpg')
          },
          
        ]
      }
    }
  }
</script>
<style scoped>
.lightbox {
    background: rgba(0,0,0,0.5);
  
}
a {
  text-decoration: none;
}
</style>
