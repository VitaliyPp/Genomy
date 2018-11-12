

<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @click="someMethod"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
      <Profile/>
      
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Profile from './components/Profile';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Profile,
  },
  data () {
    return {
      //
    }
  },
  methods: {
    someMethod() {
      console.log('Hello!');
    }
  },
}
</script>
