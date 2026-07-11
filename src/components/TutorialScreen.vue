<script setup>
const emit = defineEmits([
  "continue",
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

    <h1 class="title">
        ¿CÓMO JUGAR?
    </h1>

    <div class="cards">

        <div class="card">

            <div class="card-title">
                1) Duelos
            </div>

            <p>
                "Eligiras 1 personaje de 3 opciones aleatorias

                Al elegir la dificultad:
                
            </p>
            <ul>
                
                <li>Facil: Tu personaje combatirá con 3 adversarios</li>
    
                <li>Normal: Tu personaje combatirá con 5 adversarios</li>
    
                <li>Dificil: Tu personaje combatirá con 10 adversarios</li>
    
                <li>Infinito: Tu personaje combatirá con todos los adversarios que aguante</li>
            </ul>


        </div>

        <div class="card">

            <div class="card-title">
                2) Equipos
            </div>

            <p>
                Eligiras 3 personajes de 9 opciones aleatorias

                Al elegir la dificultad:

            </p>
            <ul>
                
                <li>Facil: Tu equipo combatirá contra un solo equipo enemigo</li>
    
                <li>Normal: Tu equipo combatira con 3 equipos enemigos</li>
    
                <li>Dificil: Tu equipo combatira con 5 equipos enemigos</li>
    
                <li>Infinito: Tu personaje combatirá con todos los equipos enemigos que aguante</li>
            </ul>

        </div>

        <div class="card">

            <div class="card-title">
                3) TORNEO
            </div>

            <p>
                Se preparan 16 personajes que combatitan para ver quien queda como el último en pie

                Al elegir el tipo de torneo:
            </p>
            <ul>
                
                <li>Clásico: Los 16 personajes se eligen de forma completamente aleatoria</li>
    
                <li>Personalizado: Los 16 personajes los elegirás vos</li>
            </ul>

        </div>



    </div>

    <button
        class="red-button continue"
        @click="emit('continue')"
    >
        CONTINUAR
    </button>

</section>

</template>

<style scoped>

.title{

    font-size:54px;

    margin-bottom:60px;

    font-weight:900;
}

.cards{

    display:flex;

    gap:35px;

    margin-bottom:60px;

    flex-wrap:wrap;

    justify-content:center;
}

.card{

    width:28%;

    background:white;

    border:5px solid black;

    border-radius:22px;

    padding:28px;

    box-shadow:10px 10px black;

    transition:.25s;
}

.card:hover{

    transform:translateY(-8px);
}

.card-title{

    background:#d81d1d;

    color:white;

    font-size:28px;

    font-weight:bold;

    text-align:center;

    padding:12px;

    border-radius:12px;

    margin-bottom:25px;
}

.card p{

    font-size:19px;

    line-height:1.7;

    text-align:center;
}

.continue{

    width:320px;
}

@media(max-width:1000px){

.cards{

    flex-direction:column;
}

.title{

    font-size:40px;
}

}

</style>