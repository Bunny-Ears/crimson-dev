<template>
    <v-main>
        <h1>
            Welcome
        </h1>
        <h2>Hello {{ name }}</h2>
        <v-text-field clearable autocomplete="name" label="Enter your name" class="ma-3" style="max-width: 80dvw;" variant="outlined" v-model.trim="name" @input="updateStorage('username', name)"></v-text-field>
        <v-btn @click="uninstall">
            Click to uninstall
        </v-btn>
    </v-main>
</template>

<script setup>
import { onUpdated } from 'vue';
import { name, updateStorage } from '@/globals';

function uninstall() {
    localStorage.clear();
    window.location.reload();
};


onUpdated(()=> {
    const namejson = localStorage.getItem('username');
    name.value = JSON.parse(namejson);
    console.log(name.value);  
});


</script>