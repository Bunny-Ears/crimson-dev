<template>
    <v-main>
        <h1>
            Welcome
        </h1>
        <v-btn @click="uninstall">
            Click to uninstall
        </v-btn>
    </v-main>
</template>

<script setup>

function uninstall() {
    localStorage.removeItem('installed');
    window.location.reload();
}

</script>