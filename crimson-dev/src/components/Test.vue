<template class="ma-n4">
    
    <div style="position: absolute;">
    <v-btn  @click="hi(element)" >Hello</v-btn>
    <v-btn @click="savepdf(element)">Save as PDF</v-btn>
    </div>
    <iframe   id="frame" src="https://refreshed-guides-930179.framer.app/" style="height: 100dvh;width: 100dvw; border: 0; scrollbar-width: none;" ></iframe>
</template>

<script setup>
import { savepdf } from '@/globals';



var element = document.getElementById('frame');

function hi(element) {
    alert('hi');
    savepdf(element);
}

    


html2pdf(element);

</script>