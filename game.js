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

onload = (event) => {
    console.log("Test");
    const start = document.getElementById('start')
    const end = document.getElementById('end')
    const status = document.getElementById('status');
    const boundary = document.querySelectorAll('.boundary');
    // console.log(start, end, status, boundary);
    start.addEventListener('mouseover', function () {
        console.log("Start");
    })
}
