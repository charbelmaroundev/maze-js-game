// const element = document.getElementsByClassName('start');
// // const start = document.querySelector('start');

// if (element) {
//     element.addEventListener("click", run)

// }
// function run() {
//     console.log("hello");
//     document.getElementById("status").innerHTML = "hello"
// }

// const el = document.getElementById('boundary1');

// el.addEventListener('click', swapper);
// // console.log("hahha");

// function swapper() {
//     console.log("hahah");
// }

// document.querySelectorAll(".boundary").forEach(div => {
//     div.addEventListener('mouseover', redBorder)
// })

// document.querySelectorAll("#start").forEach(div => {
//     div.addEventListener('click', reset)
// })


// // document.getElementById('start').addEventListener("click", reset)

// // document.body.style.border = "red";
// // el.addEventListener('click', hello)

// // function hello() {
// //     console.log("hahhah");
// // }

// function redBorder() {
//     const redBorder = "1px solid red"
//     document.querySelector("#game div.boundary").style.borderBottom = redBorder
//     document.querySelector("#game div.boundary").style.borderRight = redBorder
//     document.querySelector("#game div.boundary+div.boundary").style.borderBottom = redBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary").style.borderLeft = redBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary").style.borderBottom = redBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary+div.boundary ").style.borderTop = redBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary+div.boundary+div.boundary").style.borderTop = redBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary+div.boundary+div.boundary").style.borderRight = redBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary+div.boundary+div.boundary").style.borderLeft = redBorder
//     document.getElementById('status').innerHTML = "You lost"
// }


// function reset() {
//     const blackBorder = "1px solid black"
//     document.querySelector("#game div.boundary").style.borderBottom = blackBorder
//     document.querySelector("#game div.boundary").style.borderRight = blackBorder
//     document.querySelector("#game div.boundary+div.boundary").style.borderBottom = blackBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary").style.borderLeft = blackBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary").style.borderBottom = blackBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary+div.boundary ").style.borderTop = blackBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary+div.boundary+div.boundary").style.borderTop = blackBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary+div.boundary+div.boundary").style.borderRight = blackBorder
//     document.querySelector("#game div.boundary+div.boundary+div.boundary+div.boundary+div.boundary").style.borderLeft = blackBorder
// }


// document.addEventListener("DOMContentLoaded", ready);
// window.addEventListener("beforeunload", function (event) { ... });
// window.onbeforeunload = function (event) { ... };

// function ready() {
//     alert('DOM is ready');

//     // image is not yet loaded (unless it was cached), so the size is 0x0
//     alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
//   }



// function checkLoaded() {
//     return document.readyState === "complete";
//     console.log("haha");
// }

// window.onload = (event) => {
//     console.log('page is fully loaded');
// };

addEventListener('load', (event) => { });

let score = 0
let on = false

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
        console.log(on);
    })

    end.addEventListener('mouseover', function () {
        on = false
        console.log(on);
    })

    boundary.forEach(item => {
        item.addEventListener("mouseover", function () {
            boundary.forEach(item => {
                if (on) {
                    item.style.backgroundColor = "red"
                    status.innerHTML = "You lost"
                    example.innerHTML = "Score: " + score
                    example.style.color = "White"
                    example.style.textAlign = "center"
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





    // console.log(on);

    // if (on) {
    //     console.log("Trueeee");
    // }








}



// if (on) {
//     boundary.forEach(item => {
//         console.log(item);
//         item.addEventListener("mouseover", redBorder)
//     })
// }