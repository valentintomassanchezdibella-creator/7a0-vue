<script setup>
import { ref, computed, onMounted} from "vue"

const emit = defineEmits(["enviar-equipo"])

const props = defineProps({
    mode: {
        type: String,
        required: true
    }
})

const jugadores = ref([])



onMounted(async () => {
    const respuesta = await fetch('http://localhost/php/php/personajes.php')
    jugadores.value = await respuesta.json()
    
    jugadores.value.forEach(j => {
        j.usado = false
    })

    sortear()
})
console.log(jugadores)

const jugadorActivo = ref(null)

const juegoActivo = ref(false)


const lista = ref([])
const rival = ref([])

const botones = ref([
  {numero: 1, jugador: null},
  {numero: 2, jugador: null},
  {numero: 3, jugador: null}
])

const tableroCompleto = computed(() => {
    return botones.value.every(b => b.jugador !== null)
})
    

const sortear = () => {
  lista.value = []
  rival.value = []
  while (lista.value.length<3) {
    const indice = Math.floor(Math.random() * jugadores.value.length)
    const jugadorRandom = jugadores.value[indice]

    if(jugadorRandom.usado) continue

    if(lista.value.includes(jugadorRandom)) continue

    lista.value.push(jugadorRandom)
  }

  while (rival.value.length<3){
    const indice2 = Math.floor(Math.random() * jugadores.value.length)
    const jugadorRandom2 = jugadores.value[indice2]

    if(jugadorRandom2.usado) continue

    if(rival.value.includes(jugadorRandom2)) continue

    rival.value.push(jugadorRandom2)
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

const enviarEquipo = () =>{
    const equipo = botones.value.map(b => b.jugador)

    emit("enviar-equipo", {equipo: equipo, rival: rival.value})
}

</script>


<template>
    <div class="contenedor" id="contenedor">

    </div>

    <section class="game">
        <h2>Tablero de batalla</h2>
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
        <p>Selecciona un personaje y colocalo en el tablero</p>
        <div 
        v-if="!tableroCompleto"
        class="jugadores" id="jugadores-random">
            <div 
                class="jugadorDiv"
                :class="{ active: jugadorActivo?.id === jugador.id }"
                v-for="jugador in lista"
                :key="jugador.id"
                @click="seleccionarJugador(jugador)"
                >
                <div class="imagen-jugador">
                    <div class="image-wrapper">
                        <img :src="jugador.img">
                    </div>
                </div>
                <div class="datos-jugador">
                    <h3>{{ jugador.nombre }}</h3>
                    <span>{{ jugador.poder }}</span>
                    <p>{{ jugador.tipo }}</p>
                </div>
            </div>
        </div>
        <div  
        v-else 
        class="seguir">
            <button
            @click="enviarEquipo"
            >Seguir</button>
        </div>
    </section>
</template>


<style scoped>

.game{
    height: 100vh;
    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.76)), 
      url(/public/imagenes/img2.png);
    background-position:bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 50px;

    h2{
        text-align: center;
        color: #9e7d4b;
        text-transform: uppercase;
        font-size: 35px;
    }

    p{
        color: #9e7d4b;
        text-align: center;
        font-size: 20px;

    }

    .tablero{
        width: 100%;
        height: 70%;
        background-image: url(/public/imagenes/img1.png);
        background-position: center -132px;
        background-size: cover;
        position: relative;

        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            
            border: 3px solid #724d21;
            border-radius: 20px;
        }
         
        .jugador-boton{
            display: flex;
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 8px;
            
            button{
                position: relative;
                padding: 30px;
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
        height: 30%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;

        .jugadorDiv{
            width: 100%;
            height: auto;
            padding: 25px 20px;
            background-color: transparent;
            border: 2px solid #724d21;
            border-radius: 15px;
            display: flex;
            justify-content: left;
            gap: 25px;
            transition: all 0.35s;

            .imagen-jugador{
                width: 100px;
                height: 100px;
                background-color: black;
                border-radius: 50%;
                overflow: hidden;

                img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }

            .datos-jugador{
                display: flex;
                flex-direction: column;
                gap: 5px;

                h3{
                    font-size: 30px;
                    color: #d1bb94;
                }

                span{
                    font-size: 27px;
                    color: purple;
                    font-weight: 700;
                }

                p{
                    font-size: 24px;
                    text-align: left;
                }
            }




            &.active{
                transform: scale(1.05);
            }

            &.usado{
                transform: scale(0.85);
            }
        }
    }

    .seguir{
        button{
            width: 100%;
            height: 120px;
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