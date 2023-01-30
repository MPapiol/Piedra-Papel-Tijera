//Movimiento jugador
let movimientoJugador = []

//Movimiento CPU
let finalOption
let tirada = document.getElementById('tirada_cpu')

//Resultado
let resultado = document.getElementById('resultado')

//Marcador
let marcador_jugador = document.getElementById('marcador_jugador')
let marcador_cpu = document.getElementById('marcador_cpu')
let contador_jugador = 0
let contador_cpu = 0

function respuesta(movimiento) {
    movimientoJugador[0] = movimiento.value
}

function jugar() {
    //Movimiento CPU
    let opciones = ['Piedra', 'Papel', 'Tijera']
    let opcionesEnImagenes = ['<img id="tipo_movimiento" src="piedra.png">', '<img id="tipo_movimiento" src="papel.png">', '<img id="tipo_movimiento" src="tijera.png">']
    let newOpcion = Math.floor(Math.random() * 3)
    finalOption = opciones[newOpcion]
    if (finalOption === 'Piedra') {
        tirada.innerHTML = opcionesEnImagenes[0]
    }
    if (finalOption === 'Papel') {
        tirada.innerHTML = opcionesEnImagenes[1]
    }
    if (finalOption === 'Tijera') {
        tirada.innerHTML = opcionesEnImagenes[2]
    }
    quienGano()
}

function quienGano() {
    if (movimientoJugador[0] === finalOption) {
        resultado.innerHTML = '¡Vuelve a tirar!'
        reset()
    } else {
        if (movimientoJugador[0] === 'Piedra') {
            if (finalOption === 'Papel') {
                resultado.innerHTML = '¡Has Perdido!'
                contador_cpu ++
                marcador_cpu.innerHTML = contador_cpu
            } else {
                resultado.innerHTML = '¡Has Ganado!'
                contador_jugador ++
                marcador_jugador.innerHTML = contador_jugador
            }
        }

        if (movimientoJugador[0] === 'Papel') {
            if (finalOption === 'Tijera') {
                resultado.innerHTML = '¡Has Perdido!'
                contador_cpu ++
                marcador_cpu.innerHTML = contador_cpu
            } else {
                resultado.innerHTML = '¡Has Ganado!'
                contador_jugador ++
                marcador_jugador.innerHTML = contador_jugador
            }
        }

        if (movimientoJugador[0] === 'Tijera') {
            if (finalOption === 'Piedra') {
                resultado.innerHTML = '¡Has Perdido!'
                contador_cpu ++
                marcador_cpu.innerHTML = contador_cpu
            } else {
                resultado.innerHTML = '¡Has Ganado!'
                contador_jugador ++
                marcador_jugador.innerHTML = contador_jugador
            }
        }
    }
}

function reset() {
    movimientoJugador = []
}