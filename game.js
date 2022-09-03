addEventListener('load', (event) => { });

let score = 0
let on = false;
let eventListener = false;
let backgroundColor = false;

onload = (event) => {
    // console.log("Test");
    const start = document.getElementById('start')
    const end = document.getElementById('end')
    const status = document.getElementById('status');
    const boundary = document.querySelectorAll('.boundary');
    const example = document.querySelector('.example');
    // console.log(start, end, status, boundary);
    start.addEventListener('mouseover', function () {
        on = true
        eventListener = true
        console.log(on);
        console.log(score);
        example.style.color = "black"
        if (!backgroundColor) {
            boundary.forEach(item => {
                item.style.backgroundColor = "#eeeeee"
            })
        }
    })


    end.addEventListener('mouseover', function () {
        if (eventListener) {
            on = false
            score += 5;
            example.innerHTML = "Score: " + score
            example.style.color = "black"
            example.style.textAlign = "center"
            status.innerHTML = "You won"
            console.log(on);
            console.log(score);
        }
        eventListener = false
    })

    boundary.forEach(item => {
        item.addEventListener("mouseover", function () {
            if (eventListener) {
                score -= 10
            }
            boundary.forEach(item => {
                if (on) {
                    // item.classList.remove("boundary")
                    item.style.backgroundColor = ""
                    item.classList.add("youlose")
                    status.innerHTML = "You lost"
                    example.innerHTML = "Score: " + score
                    example.style.color = "White"
                    example.style.textAlign = "center"
                    eventListener = false
                    console.log(score);
                }
            })
        })
    })

    start.addEventListener('click', function () {
        score = 0
        on = true
        status.innerHTML = 'Begin by moving your mouse over the "S".'
        example.innerHTML = ""
        boundary.forEach(item => {
            item.style.backgroundColor = "#eeeeee"
        })
    })
}
