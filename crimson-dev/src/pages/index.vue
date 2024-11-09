<template>
  <Home  v-if="install"/>
  <Welcome v-else/> 
   
 



</template>

<script setup>
import { onMounted } from 'vue'
import { install, checked, name, notApp } from '@/globals';
import { useRouter } from 'vue-router';


onMounted(() => {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('standalone');
    localStorage.setItem('installed', 'yes');
    if (notApp.value) {
      useRouter().push("/");
      
    };
  }
  console.log('Mounted');
  install.value = localStorage.getItem('installed') || null;
  const checkedjson = localStorage.getItem('settings');  
  name.value = localStorage.getItem('username');
  checked.value = JSON.parse(checkedjson);
  
  console.log(install.value);
  console.log(checked.value);
});

</script>
