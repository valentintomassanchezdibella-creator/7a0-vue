<script setup>
const emit = defineEmits(["select", "back"])
</script>

<template>

<section class="screen">

    <div
        class="back"
        @click="emit('back')"
    >
        ←
    </div>

    <h1 class="title">
        SELECCIONÁ UN MODO
    </h1>

    <div class="mode-buttons">

        <button class="mode-button"  @click="emit('select','duel')">
            DUELO
        </button>

        <button class="mode-button" @click="emit('select','teams')">
            EQUIPOS
        </button>

        <button class="mode-button" @click="emit('select','tournament')">
            TORNEO
        </button>

    </div>

</section>

</template>

<style scoped>

.title{

    font-size:54px;

    margin-bottom:80px;

    font-weight:900;

    text-align:center;
}

.mode-buttons{

    display:flex;

    flex-direction:column;

    gap:35px;
}

.mode-button{

    width:420px;

    height:95px;

    font-size:34px;

    font-weight:bold;

    color:white;

    background:#d71d1d;

    border:none;

    cursor:pointer;

    clip-path:polygon(
        8% 0,
        92% 0,
        100% 20%,
        95% 50%,
        100% 80%,
        92% 100%,
        8% 100%,
        0 80%,
        5% 50%,
        0 20%
    );

    transition:.25s;

    box-shadow:8px 8px black;

    animation:appear .6s;
}

.mode-button:hover{

    transform:scale(1.05);

    background:#ff3535;
}

.mode-button:active{

    transform:scale(.95);
}

@keyframes appear{

    from{

        opacity:0;

        transform:translateY(40px);
    }

    to{

        opacity:1;

        transform:translateY(0);
    }

}

@media(max-width:700px){

.mode-button{

    width:90vw;

    font-size:28px;
}

.title{

    font-size:38px;
}

}

</style>