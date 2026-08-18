<script setup>

import { ref, computed} from "vue"
import { jugadores } from "@/data/jugadores"

const iniciar = ref(false)

const iniciarBatalla = () => {
    iniciar.value = !iniciar.value
}

const props = defineProps({
    equipo: {
        type: Array,
        required: true
    },
    rival: {
        type: Array,
        required: true
    }
})

console.log("Equipo Seleccionado", props.equipo)
console.log("Equipo Rival", props.rival)


const poderJugador = computed(() => {
    return props.equipo.reduce((total, j) =>{
        return total + j.poder
    }, 0)
})

const poderRival = computed(() => {
    return props.rival.reduce((total, j) => {
        return total + j.poder
    }, 0)
})

console.log("Poder del jugador: ", poderJugador.value)
console.log("Poder del equipo rival: ", poderRival.value)


</script>

<template>
    <section class="batalla">
        <div class="equipo-propio">
            <div
            v-for="jugador in equipo" :key="jugador.id"
            class="personaje">
                <div class="image-wrapper">
                    <img :src="jugador.img">
                </div>
                <div class="personaje-txt">
                    <span class="nombre">{{ jugador.nombre }}</span>
                    <span class="media">{{ jugador.poder }}</span>
                </div>
            </div>
        </div>

        <div class="resultado">
            <div class="tablero">
                <div
                v-if="iniciar"
                >
                    <span v-if="poderJugador>poderRival">
                        GANASTE
                    </span>
                    <span v-if="poderJugador<poderRival">
                        PERDISTE BOLOH
                    </span>
                    <span v-if="poderJugador==poderRival">
                        EMPATE C GAME F1 Y AL LOBBY
                    </span>
                </div>
                <button
                @click="iniciarBatalla"
                >Simular Batalla</button>
            </div>
        </div>

        <div class="equipo-propio">
            <div
            v-for="jugador in rival" :key="jugador.id"
            class="personaje">
                <div class="image-wrapper">
                    <img :src="jugador.img">
                </div>
                <div class="personaje-txt">
                    <span class="nombre">{{ jugador.nombre }}</span>
                    <span class="media">{{ jugador.poder }}</span>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
    .batalla{
        display: flex;
        justify-content: space-between;
        height: 100vh;
        background-image:
        linear-gradient(rgba(0, 0, 0, 0.8)),
        url(/public/imagenes/img2.png);
        background-size: cover;
        background-repeat: no-repeat;
    }

    .resultado{
        height: 100%;
        min-width: 1300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px;
    }

    .tablero{
        height: 800px;
        width: 100%;
        background-image: url(/public/imagenes/img1.png);
        background-position: center ;
        background-size: cover;
        background-repeat: no-repeat;
        border: 3px solid #38170b;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #9e7d4b;

        span{
            color: #9e7d4b;
            font-size: 32px;
            font-weight: 700;
        }

        button{
            height: 50px;
            width: 200px;
        }
    }

    .equipo-propio{
        width: 500px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        justify-content: center;
        border: 1px solid red;

        .personaje{
            width: 180px;
            height: 270px;
            border: 3px solid #724d21;
            border-radius: 70px;
            overflow: hidden;

            .image-wrapper{
                height: 70%;
                width: 100%;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .personaje-txt{
                height: 30%;
                width: 100%;
                background-color: #523519;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #b79e65;
                
            }


        }
    }

    
</style>