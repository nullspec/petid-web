<template>
  <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      right
      app
      disable-route-watcher
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>mood</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="gray darken-3" dark fixed app>
      <div class="d-flex align-center" style="margin-left: auto">
        <img src="./assets/paw-full.png">
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>

    <v-footer color="gray darken-3" dark app>
      <v-spacer></v-spacer>
      <span class="white--text">&copy; 2017</span>
    </v-footer>

  </v-app>
</template>

<style scoped>
  .container {
    padding: 0px;
  }
</style>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
  }),
  watch: {
    drawer() {
      console.log('drawer');
    },
  },
};
</script>
