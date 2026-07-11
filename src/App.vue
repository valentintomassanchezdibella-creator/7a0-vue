<script setup>
import { ref } from "vue"


import HomeScreen from "./components/HomeScreen.vue"
import TutorialPrompt from "./components/TutorialPrompt.vue"
import TutorialScreen from "./components/TutorialScreen.vue"
import ModeSelect from "./components/ModeSelect.vue"
import Game from "./components/Game.vue"

const screen = ref("home")
const gameMode = ref(null)

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

</script>

<template>

    <Transition name="fade" mode="out-in">

        <HomeScreen
            v-if="screen==='home'"
            @play="openTutorialQuestion"
        />

        <TutorialPrompt
            v-else-if="screen==='tutorialPrompt'"
            @yes="startTutorial"
            @no="skipTutorial"
            @back="goHome"
        />

        <TutorialScreen
            v-else-if="screen==='tutorial'"
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
        />

    </Transition>

</template>



