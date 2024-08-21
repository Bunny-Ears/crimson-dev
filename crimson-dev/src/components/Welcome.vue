<template>
    <v-main>
        <h1>
            Hello World
        </h1>
        <v-btn @click="setStorage">Add install</v-btn>
    </v-main>
</template>

<script setup>
function setStorage() {
    localStorage.setItem("installed", "yes");
    console.log("it worked");
    window.location.reload();

}

</script>