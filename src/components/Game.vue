<script setup>
import { ref } from "vue"

const props = defineProps({
    mode: {
        type: String,
        required: true
    }
})

import { jugadores } from "@/data/jugadores"

console.log(jugadores)


jugadores.value.forEach(j => {
  j.usado = false
});

const jugadorActivo = ref(null)

const juegoActivo = ref(false)


const lista = ref([])

const botones = ref([
  {numero: 1, jugador: null},
  {numero: 2, jugador: null},
  {numero: 3, jugador: null},
  /*{numero: 4, jugador: null},
  {numero: 5, jugador: null},
  {numero: 6, jugador: null},
  {numero: 7, jugador: null},
  {numero: 8, jugador: null},
  {numero: 9, jugador: null},
  {numero: 10, jugador: null},
  {numero: 11, jugador: null}*/
])

const sortear = () => {
  lista.value = []
  while (lista.value.length<3) {
    const indice = Math.floor(Math.random() * jugadores.value.length)
    const jugadorRandom = jugadores.value[indice]

    if(jugadorRandom.usado) continue

    if(lista.value.includes(jugadorRandom)) continue

    lista.value.push(jugadorRandom)
  }
}

const seleccionarJugador = (jugador) => {
  console.log(jugador);

  if(jugadorActivo.value?.id === jugador.id){
    jugadorActivo.value = null
  }
  else{
    jugadorActivo.value = jugador
  }
}

const asignarJugador = (boton) => {
  if(boton.jugador) return

  if(!jugadorActivo.value) return

  jugadorActivo.value.usado = true

  boton.jugador = jugadorActivo.value

  sortear()
}

const siguiente = () => {

}

sortear()
</script>


<template>
    <div class="contenedor" id="contenedor">

    </div>

    <section class="game">
        <div class="tablero">
            <div 
                class="jugador-boton"
                v-for="boton in botones"
                :key = "boton.numero"
                :class="{ocupado: boton.jugador != null} ">

                <button
                @click="asignarJugador(boton)"
                >{{ boton.jugador ? boton.jugador.poder : boton.numero }}</button>
                <div class="capa-boton">{{ boton.jugador ? boton.jugador.nombre : "Jugador keke"}}</div>
            </div>
        </div>
        <div class="jugadores" id="jugadores-random">
            <div 
                class="jugadorDiv"
                :class="{ active: jugadorActivo?.id === jugador.id }"
                v-for="jugador in lista"
                :key="jugador.id"
                @click="seleccionarJugador(jugador)"
                >
                <div class="imagen-jugador">
                    <div class="image-wrapper">
                        <img src="" alt="">
                    </div>
                </div>
                <div class="datos-jugador">
                    <h3>{{ jugador.nombre }}</h3>
                    <span>{{ jugador.poder }}</span>
                    <span>{{ jugador.tipo }}</span>
                </div>
            </div>
        </div>
        <div class="equipo-footer">
            <button
            @click="juegoActivo = !juegoActivo"
            >Seguir</button>
        </div>
    </section>

    <section class="pelea"
    :class="{'active': juegoActivo}">
        <div class="pelea-container">

        </div>
    </section>
</template>


<style scoped>

.game{
    max-width: 1200px;
    height: 500px;
    margin: 0 auto;
    background-color: red;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    .tablero{
        width: 100%;
        height: 500px;
        background-color: blue;
         
        .jugador-boton{
            display: flex;
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 8px;
            
            button{
                position: relative;
                padding: 12px 18px;
                border-radius: 100%;
                border: none;
                display: flex;
                justify-content: center;
                align-self: center;
                cursor: pointer;
                &.ocupado{
                    background-color: #666;
                    cursor: default;
                }
            }
        }
    }

    .jugadores{
        width: 100%;
        height: 120px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;

        .jugadorDiv{
            width: 100%;
            height: auto;
            padding: 10px;
            background-color: yellow;
            border-radius: 15px;
            display: flex;
            gap: 10px;
            transition: all 0.35s;

            .imagen-jugador{
                width: 50px;
                height: 50px;
                background-color: black;
                border-radius: 50%;
            }

            .datos-jugador{
                display: flex;
                flex-direction: column;
                gap: 2px;
            }



            &.active{
                transform: scale(1.05);
            }

            &.usado{
                transform: scale(0.85);
            }
        }
    }
}



.pelea{
    max-width: 1200px;
    height: 500px;
    margin: 0 auto;
    background-color: brown;
    display: none;

    &.active{
        display: block;
    }
}
</style>