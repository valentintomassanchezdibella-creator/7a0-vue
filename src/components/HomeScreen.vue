<script setup>
const emit = defineEmits(["play"])
</script>

<template>
    <section class="screen">

        <h1 class="logo">
            VERSUS!
        </h1>

        <button
            class="red-button"
            @click="emit('play')"
        >
            JUGAR
        </button>

    </section>
</template>

<style scoped>

.logo{

    margin-bottom:80px;

    font-size:140px;

    font-family:Bangers,cursive;

    color:black;

    text-shadow:
    5px 5px white,
    10px 10px black;
}

</style>