<script setup>

const emit = defineEmits([
    "yes",
    "no",
    "back"
])

</script>

<template>

<section class="screen">

    <div
        class="back"
        @click="emit('back')"
    >
        ←
    </div>

    <h2 class="subtitle">

        ¿Querés ver el tutorial
        <br>
        antes de empezar?

    </h2>

    <div class="buttons">

        <button
            class="red-button"
            @click="emit('yes')"
        >
            SI
        </button>

        <button
            class="red-button"
            @click="emit('no')"
        >
            NO
        </button>

    </div>

</section>

</template>

<style scoped>

.subtitle{

    margin-bottom:60px;

    font-size:40px;

    text-align:center;
}

.buttons{

    display:flex;

    gap:80px;
}

</style>