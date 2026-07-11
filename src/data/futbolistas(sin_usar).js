const jugadores = ref([
    // GK (1-5)
    { id: 1, nombre: "Clownpiece", apellido: "Buffon", posicion: "GK", pais: "Italia", equipo: "Juventus", anio: 2006, media: 93 },
    { id: 2, nombre: "Iker", apellido: "Casillas", posicion: "GK", pais: "España", equipo: "Real Madrid", anio: 2008, media: 91 },
    { id: 3, nombre: "Manuel", apellido: "Neuer", posicion: "GK", pais: "Alemania", equipo: "Bayern Munich", anio: 2014, media: 90 },
    { id: 4, nombre: "Jan", apellido: "Oblak", posicion: "GK", pais: "Eslovenia", equipo: "Atletico Madrid", anio: 2021, media: 91 },
    { id: 5, nombre: "Thibaut", apellido: "Courtois", posicion: "GK", pais: "Belgica", equipo: "Real Madrid", anio: 2024, media: 90 },
    
    // CB (6-10)
    { id: 6, nombre: "Fabio", apellido: "Cannavaro", posicion: "CB", pais: "Italia", equipo: "Real Madrid", anio: 2006, media: 92 },
    { id: 7, nombre: "Alessandro", apellido: "Nesta", posicion: "CB", pais: "Italia", equipo: "Milan", anio: 2007, media: 91 },
    { id: 8, nombre: "Sergio", apellido: "Ramos", posicion: "CB", pais: "España", equipo: "Real Madrid", anio: 2014, media: 89 },
    { id: 9, nombre: "Virgil", apellido: "van Dijk", posicion: "CB", pais: "Paises Bajos", equipo: "Liverpool", anio: 2020, media: 90 },
    { id: 10, nombre: "Ruben", apellido: "Dias", posicion: "CB", pais: "Portugal", equipo: "Manchester City", anio: 2024, media: 89 },
    
    // LB (11-15)
    { id: 11, nombre: "Roberto", apellido: "Carlos", posicion: "LB", pais: "Brasil", equipo: "Real Madrid", anio: 2006, media: 83 },
    { id: 12, nombre: "Ashley", apellido: "Cole", posicion: "LB", pais: "Inglaterra", equipo: "Chelsea", anio: 2008, media: 88 },
    { id: 13, nombre: "Marcelo", apellido: "", posicion: "LB", pais: "Brasil", equipo: "Real Madrid", anio: 2017, media: 89 },
    { id: 14, nombre: "Andrew", apellido: "Robertson", posicion: "LB", pais: "Escocia", equipo: "Liverpool", anio: 2020, media: 87 },
    { id: 15, nombre: "Theo", apellido: "Hernandez", posicion: "LB", pais: "Francia", equipo: "Milan", anio: 2024, media: 87 },
    
    // RB (16-20)
    { id: 16, nombre: "Cafu", apellido: "", posicion: "RB", pais: "Brasil", equipo: " AC Milan", anio: 2006, media: 90 },
    { id: 17, nombre: "Philipp", apellido: "Lahm", posicion: "RB", pais: "Alemania", equipo: "Bayern Munich", anio: 2010, media: 89 },
    { id: 18, nombre: "Dani", apellido: "Alves", posicion: "RB", pais: "Brasil", equipo: "Barcelona", anio: 2012, media: 88 },
    { id: 19, nombre: "Dani", apellido: "Carvajal", posicion: "RB", pais: "España", equipo: "Real Madrid", anio: 2022, media: 86 },
    { id: 20, nombre: "Achraf", apellido: "Hakimi", posicion: "RB", pais: "Marruecos", equipo: "PSG", anio: 2024, media: 85 },
    
    // LWB (21-25)
    { id: 21, nombre: "Aleksandar", apellido: "Kolarov", posicion: "LWB", pais: "Serbia", equipo: "Inter", anio: 2022, media: 77 },
    { id: 22, nombre: "Marcos", apellido: "Alonso", posicion: "LWB", pais: "España", equipo: "Chelsea", anio: 2018, media: 82 },
    { id: 23, nombre: "Robin", apellido: "Gosens", posicion: "LWB", pais: "Alemania", equipo: "Atalanta", anio: 2021, media: 84 },
    { id: 24, nombre: "Federico", apellido: "Dimarco", posicion: "LWB", pais: "Italia", equipo: "Inter", anio: 2024, media: 84 },
    { id: 25, nombre: "Ian", apellido: "Maatsen", posicion: "LWB", pais: "Paises Bajos", equipo: "Chelsea", anio: 2024, media: 79 },

    // RWB (26-30)
    { id: 26, nombre: "Maicon", apellido: "", posicion: "RWB", pais: "Brasil", equipo: "Inter", anio: 2010, media: 86 },
    { id: 27, nombre: "Juan", apellido: "Cuadrado", posicion: "RWB", pais: "Colombia", equipo: "Juventus", anio: 2018, media: 84 },
    { id: 28, nombre: "Joao", apellido: "Cancelo", posicion: "RWB", pais: "Portugal", equipo: "Manchester City", anio: 2022, media: 88 },
    { id: 29, nombre: "Reece", apellido: "James", posicion: "RWB", pais: "Inglaterra", equipo: "Chelsea", anio: 2023, media: 84 },
    { id: 30, nombre: "Jeremie", apellido: "Frimpong", posicion: "RWB", pais: "Paises Bajos", equipo: "Leverkusen", anio: 2024, media: 84 },

    // CDM (31-35)
    { id: 31, nombre: "Claude", apellido: "Makelele", posicion: "CDM", pais: "Francia", equipo: "Chelsea", anio: 2006, media: 87 },
    { id: 32, nombre: "Michael", apellido: "Essien", posicion: "CDM", pais: "Ghana", equipo: "Chelsea", anio: 2009, media: 88 },
    { id: 33, nombre: "Sergio", apellido: "Busquets", posicion: "CDM", pais: "España", equipo: "Barcelona", anio: 2015, media: 87 },
    { id: 34, nombre: "NGolo", apellido: "Kante", posicion: "CDM", pais: "Francia", equipo: "Chelsea", anio: 2021, media: 90 },
    { id: 35, nombre: "Rodri", apellido: "", posicion: "CDM", pais: "España", equipo: "Manchester City", anio: 2024, media: 91 },

    // CM (36-40)
    { id: 36, nombre: "Xavi", apellido: "", posicion: "CM", pais: "España", equipo: "Barcelona", anio: 2011, media: 87 },
    { id: 37, nombre: "Andres", apellido: "Iniesta", posicion: "CM", pais: "España", equipo: "Barcelona", anio: 2013, media: 91 },
    { id: 38, nombre: "Luka", apellido: "Modric", posicion: "CM", pais: "Croacia", equipo: "Real Madrid", anio: 2019, media: 91 },
    { id: 39, nombre: "Toni", apellido: "Kroos", posicion: "CM", pais: "Alemania", equipo: "Real Madrid", anio: 2023, media: 88 },
    { id: 40, nombre: "Jude", apellido: "Bellingham", posicion: "CM", pais: "Inglaterra", equipo: "Real Madrid", anio: 2025, media: 90 },

    // CAM (41-45)
    { id: 41, nombre: "Ronaldinho", apellido: "", posicion: "CAM", pais: "Brasil", equipo: "Barcelona", anio: 2006, media: 91 },
    { id: 42, nombre: "Kaka", apellido: "", posicion: "CAM", pais: "Brasil", equipo: "Milan", anio: 2007, media: 91 },
    { id: 43, nombre: "Mesut", apellido: "Ozil", posicion: "CAM", pais: "Alemania", equipo: "Arsenal", anio: 2015, media: 88 },
    { id: 44, nombre: "Kevin", apellido: "De Bruyne", posicion: "CAM", pais: "Belgica", equipo: "Manchester City", anio: 2022, media: 91 },
    { id: 45, nombre: "Martin", apellido: "Odegaard", posicion: "CAM", pais: "Noruega", equipo: "Arsenal", anio: 2024, media: 89 },

    // LM (46-51)
    { id: 46, nombre: "Ryan", apellido: "Giggs", posicion: "LM", pais: "Gales", equipo: "Manchester United", anio: 2006, media: 90 },
    { id: 47, nombre: "Franck", apellido: "Ribery", posicion: "LM", pais: "Francia", equipo: "Bayern Munich", anio: 2013, media: 90 },
    { id: 48, nombre: "Heung-Min", apellido: "Son", posicion: "LM", pais: "Corea del Sur", equipo: "Tottenham", anio: 2021, media: 89 },
    { id: 49, nombre: "Ivan", apellido: "Perisic", posicion: "LM", pais: "Croacia", equipo: "Tottenham", anio: 2022, media: 84 },
    { id: 50, nombre: "Kingsley", apellido: "Coman", posicion: "LM", pais: "Francia", equipo: "Bayern Munich", anio: 2024, media: 86 },
    
    // RM (51-55)
    { id: 51, nombre: "David", apellido: "Beckham", posicion: "RM", pais: "Inglaterra", equipo: "Real Madrid", anio: 2006, media: 89 },
    { id: 52, nombre: "Arjen", apellido: "Robben", posicion: "RM", pais: "Paises Bajos", equipo: "Bayern Munich", anio: 2014, media: 90 },
    { id: 53, nombre: "Angel", apellido: "Di Maria", posicion: "RM", pais: "Argentina", equipo: "PSG", anio: 2018, media: 87 },
    { id: 54, nombre: "Bernardo", apellido: "Silva", posicion: "RM", pais: "Portugal", equipo: "Manchester City", anio: 2023, media: 88 },
    { id: 55, nombre: "Bukayo", apellido: "Saka", posicion: "RM", pais: "Inglaterra", equipo: "Arsenal", anio: 2025, media: 89 },

    // LW (56-60)
    { id: 56, nombre: "Cristiano", apellido: "Ronaldo", posicion: "LW", pais: "Portugal", equipo: "Real Madrid", anio: 2017, media: 94 },
    { id: 57, nombre: "Neymar", apellido: "Junior", posicion: "LW", pais: "Brasil", equipo: "PSG", anio: 2018, media: 92 },
    { id: 58, nombre: "Sadio", apellido: "Mane", posicion: "LW", pais: "Senegal", equipo: "Liverpool", anio: 2020, media: 90 },
    { id: 59, nombre: "Vinicius", apellido: "Junior", posicion: "LW", pais: "Brasil", equipo: "Real Madrid", anio: 2024, media: 89 },
    { id: 60, nombre: "Rafael", apellido: "Leao", posicion: "LW", pais: "Portugal", equipo: "Milan", anio: 2024, media: 86 },
    
    // RW (60-65)
    { id: 61, nombre: "Cristiano", apellido: "Ronaldo", posicion: "RW", pais: "Portugal", equipo: "Manchester United", anio: 2008, media: 91 },
    { id: 62, nombre: "Lionel", apellido: "Fressi", posicion: "RW", pais: "Argentina", equipo: "Barcelona", anio: 2009, media: 90 },
    { id: 63, nombre: "Mohamed", apellido: "Salah", posicion: "RW", pais: "Egipto", equipo: "Liverpool", anio: 2020, media: 90 },
    { id: 64, nombre: "Rodrygo", apellido: "", posicion: "RW", pais: "Brasil", equipo: "Real Madrid", anio: 2024, media: 86 },
    { id: 65, nombre: "Lamine", apellido: "Yamal", posicion: "RW", pais: "España", equipo: "Barcelona", anio: 2025, media: 85 },

    // LF (66-70)
    { id: 66, nombre: "Thierry", apellido: "Henry", posicion: "LF", pais: "Francia", equipo: "Arsenal", anio: 2006, media: 91 },
    { id: 67, nombre: "David", apellido: "Villa", posicion: "LF", pais: "España", equipo: "Valencia", anio: 2009, media: 89 },
    { id: 68, nombre: "Robin", apellido: "van Persie", posicion: "LF", pais: "Paises Bajos", equipo: "Arsenal", anio: 2012, media: 88 },
    { id: 69, nombre: "Marcus", apellido: "Rashford", posicion: "LF", pais: "Inglaterra", equipo: "Manchester United", anio: 2023, media: 85 },
    { id: 70, nombre: "Joao", apellido: "Felix", posicion: "LF", pais: "Portugal", equipo: "Atletico Madrid", anio: 2021, media: 83 },

    // RF (71-75)
    { id: 71, nombre: "Alessandro", apellido: "Del Piero", posicion: "RF", pais: "Italia", equipo: "Juventus", anio: 2006, media: 89 },
    { id: 72, nombre: "Wayne", apellido: "Rooney", posicion: "RF", pais: "Inglaterra", equipo: "Manchester United", anio: 2010, media: 90 },
    { id: 73, nombre: "Paulo", apellido: "Dybala", posicion: "RF", pais: "Argentina", equipo: "Juventus", anio: 2018, media: 89 },
    { id: 74, nombre: "Antoine", apellido: "Griezmann", posicion: "RF", pais: "Francia", equipo: "Atletico Madrid", anio: 2024, media: 88 },
    { id: 75, nombre: "Dejan", apellido: "Kulusevski", posicion: "RF", pais: "Suecia", equipo: "Tottenham", anio: 2024, media: 84 },

    // CF (76-80)
    { id: 76, nombre: "Francesco", apellido: "Totti", posicion: "CF", pais: "Italia", equipo: "Roma", anio: 2006, media: 91 },
    { id: 77, nombre: "Dennis", apellido: "Bergkamp", posicion: "CF", pais: "Paises Bajos", equipo: "Arsenal", anio: 2006, media: 89 },
    { id: 78, nombre: "Thomas", apellido: "Muller", posicion: "CF", pais: "Alemania", equipo: "Bayern Munich", anio: 2015, media: 86 },
    { id: 79, nombre: "Roberto", apellido: "Firmino", posicion: "CF", pais: "Brasil", equipo: "Liverpool", anio: 2020, media: 87 },
    { id: 80, nombre: "Kai", apellido: "Havertz", posicion: "CF", pais: "Alemania", equipo: "Arsenal", anio: 2024, media: 84 },

    // ST (81-85)
    { id: 81, nombre: "Samuel", apellido: "Etoo", posicion: "ST", pais: "Camerun", equipo: "Barcelona", anio: 2006, media: 90 },
    { id: 82, nombre: "Zlatan", apellido: "Ibrahimovic", posicion: "ST", pais: "Suecia", equipo: "Inter", anio: 2009, media: 89 },
    { id: 83, nombre: "Robert", apellido: "Lewandowski", posicion: "ST", pais: "Polonia", equipo: "Barcelona", anio: 2023, media: 91 },
    { id: 84, nombre: "Kylian", apellido: "Mbappe", posicion: "ST", pais: "Francia", equipo: "PSG", anio: 2024, media: 91 },
    { id: 85, nombre: "Erling", apellido: "Haaland", posicion: "ST", pais: "Noruega", equipo: "Manchester City", anio: 2025, media: 91 },
])
