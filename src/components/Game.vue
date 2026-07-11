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

    <section class="equipo">
        <div class="equipo-container">
            <div class="equipo-left">
                <div class="left-header">
                    <div class="roll">
                        <h3>//Seleccion//</h3>
                        <div class="img-wrapper">
                            <img src="" alt="">
                        </div>
                        <button>Roll</button>
                    </div>

                </div>

                <div class="left-body">
                    <div class="jugadores" id="jugadores-random">
                      <div 
                        class="jugadorDiv"
                        :class="{ active: jugadorActivo?.id === jugador.id }"
                        v-for="jugador in lista"
                        :key="jugador.id"
                        @click="seleccionarJugador(jugador)"
                        >
                        <h3>{{ jugador.nombre }}</h3>
                        <span>{{ jugador.poder }}</span><br>
                        <span>{{ jugador.tipo }}</span>
                      </div>
                    </div>
                </div>
            </div>

            <div class="equipo-right" id="botonContainer">
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

.equipo{
    background-color: blue;
    width: 100%;
    height: auto;

    .equipo-footer{
        margin: 0 auto;
        max-width: 1200px;

        button{
            width: 100%;
        }
    }

    .equipo-container{
        margin: 0 auto;
        height: 500px;
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1fr 2.5fr;

        .equipo-left{
            width: 100%;
            height: 100%;
            background-color: blueviolet;

            .left-header{
                background-color: black;
                height: 30%;
                display: flex;
                justify-content: space-between;
                padding:0px 20px;
                

                .roll{
                    color: aqua;
                    width: 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                    .img-wrapper{
                        background-color: antiquewhite;
                        width: 80px;
                        height: 20px;

                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }

                    button{
                        padding: 2px 10px;
                    }
                }

                .left-right{
                    background-color: blue;
                    width: 100px;
                }

            }

            .left-body{
                background-color: rgb(46, 37, 37);
                height: 70%;
                .jugadores{
                    margin: 0px 50px;
                    height: 100%; 
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 10px;

                    .jugadorDiv{
                        width: 100%;
                        height: auto;
                        background-color: rgb(111, 94, 82);
                        display: flex;
                        gap: 0px;
                        justify-content: space-between;
                        align-items: center;
                        transition: all .3s;

                        &.active{
                            transform: scale(1.06);
                        }

                        &.usado{
                            background-color: rgb(145, 124, 109);
                        }
                    }
                }
            }
        }

        .equipo-right{
            width: 100%;
            height: 100%;
            background-color: rgb(111, 88, 133);

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