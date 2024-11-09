<template>
 <h1>Settings</h1>
 <v-main>

    <v-switch inset label="Settings" color="primary" v-model="checked" @change="updateStorage('settings', checked)"></v-switch>

 </v-main>
</template>

<script setup>

import { onUpdated } from 'vue'
import { checked, updateStorage } from '@/globals'


onUpdated(()=> {
    const checkedjson = localStorage.getItem('settings');
    checked.value = JSON.parse(checkedjson);
    console.log(checked.value);  
})







</script>