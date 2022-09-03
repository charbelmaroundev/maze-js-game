addEventListener('load', (event) => { });

// VARIEBBLES
let score = 0
let gameStart = false;
let eventListener = false;
let gameOver = false
let out = true

onload = (event) => {

    // ELEMENTS
    const endEl = document.getElementById('end')
    const gameEl = document.getElementById('game')
    const startEL = document.getElementById('start')
    const statusEL = document.getElementById('status');
    const exampleEl = document.querySelector('.example');
    const boundaryEL = document.querySelectorAll('.boundary');

    gameEl.addEventListener('mouseleave', () => {
        if (eventListener) {
            gameStart = false
            endEl.removeEventListener('mouseover', endFun)
            boundaryEL.forEach(item => {
                item.removeEventListener("mouseover", boundaryFun)
            })
        }
    })

    startHover = () => {
        gameStart = true
        eventListener = true
        exampleEl.style.color = "black"
        if (!gameOver) {
            boundaryEL.forEach(item => {
                item.classList.remove("youlose")

            })
            if (gameStart) {
                endEl.addEventListener('mouseover', endFun)
                boundaryEL.forEach(item => {
                    item.addEventListener("mouseover", boundaryFun)
                })
            }
        }
    }

    startClick = () => {
        score = 0
        gameStart = true
        exampleEl.innerHTML = ""
        statusEL.innerHTML = 'Begin by moving your mouse over the "S".'
    }

    endFun = () => {
        if (eventListener) {
            score += 5;
            gameStart = !gameStart
            statusEL.innerHTML = "You won"
            exampleEl.style.color = "black"
            exampleEl.style.textAlign = "center"
            exampleEl.innerHTML = "Score: " + score
        }
        eventListener = false
    }

    boundaryFun = () => {
        if (eventListener) {
            score -= 10
        }
        boundaryEL.forEach(item => {
            if (gameStart) {
                eventListener = false
                item.classList.add("youlose")
                item.style.backgroundColor = ""
                statusEL.innerHTML = "You lost"
                exampleEl.style.color = "White"
                exampleEl.style.textAlign = "center"
                exampleEl.innerHTML = "Score: " + score
            }
        })
    }

    startEL.addEventListener('click', startClick)
    startEL.addEventListener('mouseover', startHover)
}
