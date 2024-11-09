<template>
    <v-main>
        <h1>
            Hello World
        </h1>

        <v-btn @click="setStorage">Add install</v-btn>
        <v-btn @click="this.$router.push('/test')">Test</v-btn>
    </v-main>
</template>

<script setup>
import { notApp } from '@/globals';
import { onMounted } from 'vue';

onMounted(()=> {
    notApp.value = true;
});

function setStorage() {
    localStorage.setItem("installed", "yes");
    console.log("it worked");
    window.location.reload();

}

</script>