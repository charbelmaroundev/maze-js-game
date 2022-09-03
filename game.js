addEventListener('load', (event) => { });

let score = 0
let on = false;
let eventListener = false;

onload = (event) => {
    console.log("Test");
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
    })

    end.addEventListener('mouseover', function () {
        if (eventListener) {
            console.log(event);
            on = false
            console.log(on);
            score += 5;
            example.innerHTML = "Score: " + score
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
                    item.style.backgroundColor = "red"
                    status.innerHTML = "You lost"
                    example.innerHTML = "Score: " + score
                    example.style.color = "White"
                    example.style.textAlign = "center"
                    console.log(score);
                    eventListener = false
                }
            })
        })
    })

    start.addEventListener('click', function () {
        on = true
        status.innerHTML = 'Begin by moving your mouse over the "S".'
        example.innerHTML = ""
        boundary.forEach(item => {
            item.style.backgroundColor = "#eeeeee"
        })
    })





}
