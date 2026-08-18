<script setup>
import { ref } from "vue"


import HomeScreen from "./components/HomeScreen.vue"
import TutorialPrompt from "./components/TutorialPrompt.vue"
import TutorialScreen from "./components/TutorialScreen.vue"
import ModeSelect from "./components/ModeSelect.vue"
import Game from "./components/Game.vue"
import Pelea from "./components/Pelea.vue"

const screen = ref("home")
const gameMode = ref(null)
const equipoJugador = ref([])
const equipoRival = ref([])

function goHome() {
  screen.value = "home"
}

function openTutorialQuestion() {
  screen.value = "tutorialPrompt"
}

function startTutorial() {
  screen.value = "tutorial"
}

function skipTutorial() {
  screen.value = "modes"
}

function openModes() {
  screen.value = "modes"
}

function startGame(mode) {
    gameMode.value = mode
    screen.value = "game"
}

function recibirEquipo(datos) {

    equipoJugador.value = datos.equipo
    equipoRival.value = datos.rival
    screen.value = "pelea"

    console.log("Screen:", screen.value)
}

</script>

<template>

    <HomeScreen
    v-if="screen === 'home'"
    @play="openTutorialQuestion"
/>

<TutorialPrompt
    v-else-if="screen === 'tutorialPrompt'"
    @yes="startTutorial"
    @no="skipTutorial"
    @back="goHome"
/>

<TutorialScreen
    v-else-if="screen === 'tutorial'"
    @continue="openModes"
    @back="screen='tutorialPrompt'"
/>

<ModeSelect
    v-else-if="screen === 'modes'"
    @back="goHome"
    @select="startGame"
/>

<Game
    v-else-if="screen === 'game'"
    :mode="gameMode"
    @back="goHome"
    @enviar-equipo="recibirEquipo"
/>

<Pelea
    v-else-if="screen === 'pelea'"
    :equipo="equipoJugador"
    :rival="equipoRival"
/>

</template>


<style scoped>
    body{
        background-image: url(/public/imagenes/img2.png)
    }
</style>
