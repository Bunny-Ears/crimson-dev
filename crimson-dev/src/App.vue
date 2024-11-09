<template>
  <v-app>
    <v-container class="ma-3">
      <v-container v-if="install">
        <v-bottom-navigation class="ma-5 elevation-0" grow mandatory mode="shift" style="width: calc(100% - 40px);"
          bg-color="inversePrimary" color="onSurface" base-color="onSurfaceVariant">
          <v-btn @click="this.$router.push('/')" rounded="pill">

            <v-icon><span class="material-symbols-rounded">home</span></v-icon>
            <span>Home</span>
          </v-btn>
          <v-btn @click="this.$router.push('/history')" rounded="pill">
            <v-icon><span class="material-symbols-rounded">history</span></v-icon>
            <span>History</span>
          </v-btn>

          <v-btn @click="this.$router.push('/settings')" rounded="pill">
            <v-icon><span class="material-symbols-rounded">settings</span></v-icon>
            <span>Settings</span>
          </v-btn>
        </v-bottom-navigation>
        <v-fab elevation="3" size="x-large" app class="mb-9" location="bottom" @click="hit" color="primaryContainer"
          max-width="70px" min-width="70px" max-height="70px" min-height="70px" style="border-radius:16px !important;">
          <span class="material-symbols-rounded" style="font-size: 4rem;">add</span>
        </v-fab>
      </v-container>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script setup>

import { install } from './globals';



function hit() {
  alert(" Oi! You hit me :(")
}
</script>
<style lang="css">
.v-btn--active {
  background-color: rgb(var(--v-theme-secondaryContainer)) !important;
}

.v-btn--active>.v-btn__overlay {
  opacity: 0 !important;
}
</style>