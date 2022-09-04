addEventListener('load', (event) => { });

// VARIEBBLES
let score = 0
let gameStart = false;
let eventListener = false;
let gameOver = false
let out = true
let userName = ""
let level = 0
let timer = 60

onload = (event) => {


    // ELEMENTS
    const endEl = document.getElementById('end')
    const gameEl = document.getElementById('game')
    const startEL = document.getElementById('start')
    const statusEL = document.getElementById('status');
    const exampleEl = document.querySelector('.example');
    const boundaryEL = document.querySelectorAll('.boundary');
    const timmerEl = document.querySelector("#game div.boundary + div.boundary");



    let div = document.createElement("Button");
    div.style.display = "Block"
    div.style.border = "1px solid Black"
    div.style.margin = "1rem 0"
    div.style.textAlign = "center"
    div.style.width = "50px";
    div.style.height = "20px";
    div.style.background = "#eeeeee";
    div.innerHTML = "Save";
    document.querySelector("p").appendChild(div);
    const saveEl = document.querySelector("p")




    timmerEl.style.textAlign = "center"
    timmerEl.style.padding = "0.2rem 0"




    let counter = 60 / (level + 1);
    let interval = setInterval(() => {
        console.log(counter);
        counter--;

        if (counter < 0) {
            clearInterval(interval);
            console.log('Ding!');
        }
    }, 1000);





    function myStopFunction() {
        clearTimeout(interval);
    }






    function greetMessage() {
        let text;
        userName = prompt("Please enter your username: ", "Here...");
        //userName = "Charbel"
        if (userName == null || userName == "" || userName == "Here...") {
            userName = "Unknown";

        } else {
            score = Number(localStorage.getItem(userName));
            // console.log(score);
            level = Math.floor(score / 10) + 1
            text = "Hello " + userName + "! Your level is " + level;
            document.querySelector('.example').innerHTML = "Score: " + score
            //console.log(level);
            exampleEl.style.textAlign = "center"
        }
        document.querySelector("h1").innerHTML = text;
    }
    greetMessage()



    saveEl.addEventListener('click', () => {
        localStorage.setItem(userName, score);
        text = "Hello " + userName + "! Your level is " + level;
    })









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





        myStopFunction()
        let counter = 60 / (level + 1);
        interval = setInterval(() => {
            console.log(counter);
            counter--;

            if (counter < 0) {
                clearInterval(interval);
                console.log('Ding!');
            }
        }, 1000);





        gameStart = true
        eventListener = true
        timmerEl.innerHTML = ""
        exampleEl.style.color = "black"
        level = Math.floor(score / 10) + 1
        document.querySelector("h1").innerHTML = "Hello " + userName + "! Your level is " + level;
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
        level = Math.floor(score / 10) + 1
        statusEL.innerHTML = 'Begin by moving your mouse over the "S".'
        document.querySelector("h1").innerHTML = "Hello " + userName + "! Your level is " + level;
    }

    endFun = () => {
        if (eventListener) {




            score += 5;
            gameStart = !gameStart
            statusEL.innerHTML = "You won"
            exampleEl.style.color = "black"
            level = Math.floor(score / 10) + 1
            exampleEl.style.textAlign = "center"
            exampleEl.innerHTML = "Score: " + score
            document.querySelector("h1").innerHTML = "Hello " + userName + "! Your level is " + level;
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
