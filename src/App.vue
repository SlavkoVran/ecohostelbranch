<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav" absolute dark class="pozadinaCrna">
      <v-list >
        <v-list-tile  v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content >{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed dark class="pozadinaCrna">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        Eco
        <span class="font-weight-light">Hostel Branch</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn  flat v-for="item in menuItems" :key="item.title">{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>
<script>
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon: "home", title: "Home", link: "" },
        { icon: "room", title: "Rooms", link: "" },
        { icon: "visibility", title: "What to see?", link: "" },
        { icon: "grade", title: "Events", link: "" },
        { icon: "photo_camera", title: "Gallery", link: "" },
        { icon: "contacts", title: "Contact", link: "" }
      ]
    };
  }
};
</script>
