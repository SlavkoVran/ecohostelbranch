<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Eco</span>
        <span class="font-weight-light">Hostel Branch</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/home" class="mr-2">Home</v-btn>
      <v-btn to="/rooms" class="mr-2">Rooms</v-btn>
      <v-btn to="/what" class="mr-2">What to see?</v-btn>
      <v-btn to="/event" class="mr-2">Event</v-btn>
      <v-btn to="/gallery" class="mr-2">Gallery</v-btn>
      <v-btn to="/contact" class="mr-2">Contact</v-btn>
    </v-toolbar>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
