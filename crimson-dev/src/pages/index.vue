<template>
  <Home  v-if="install"/>
  <Welcome v-else/> 
   
 



</template>

<script setup>
import { onMounted } from 'vue'
import { install } from '@/globals';


onMounted(() => {
  console.log('Mounted')
  install.value = localStorage.getItem('installed') || null
  console.log(install.value)
})

</script>
