<template>
  <v-app>
    <v-container class="ma-3">
      <v-container v-if="install">
    <v-bottom-navigation rounded="pill" class="ma-5" grow mandatory mode="shift" style="width: calc(100% - 40px);" bg-color="red-lighten-2">
      <v-btn @click="this.$router.push('/')" rounded="pill">

        <v-icon><span class="material-symbols-rounded">home</span></v-icon>
        <span>Home</span>
      </v-btn>
      <v-btn @click="this.$router.push('/history')" rounded="pill">
        <v-icon><span class="material-symbols-rounded">history</span></v-icon>
        <span>History</span>
      </v-btn>
        
      <v-btn @click="this.$router.push('/')" rounded="pill">
        <v-icon><span class="material-symbols-rounded">cloud</span></v-icon>
        <span>Weather</span>
      </v-btn>
    </v-bottom-navigation>
    <v-fab rounded="lg" size="x-large"  app class="mb-9" location="bottom" @click="hit" color="red">
      <span class="material-symbols-rounded">add</span>
    </v-fab>
  </v-container>
    <v-main>
      <router-view />
    </v-main>
  </v-container>
  </v-app>
</template>

<script setup>
//
import { install } from './globals';

function hit() {
  alert(" Oi! You hit me :(")
}
</script>

