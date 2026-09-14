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

    font-size: min(40px, 8.5vw);

    text-align:center;
}

.buttons{

    display:flex;

    gap:80px;
}

@media(max-width:700px){
    .buttons{
        flex-direction: column;
        gap:0;
    }
}

</style>