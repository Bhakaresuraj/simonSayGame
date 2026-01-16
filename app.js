let gameseq = [];
let userseq = [];
let maxscore=0;

let start = false;
let level = 0;
let btns = ["box1", "box2", "box3", "box4"];
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (start == false) {
        start = true;
    }
    levelup();
})

function levelup() {
    level++;
    userseq = [];
    let k = Math.floor(Math.random() * 4) + 1;
    h2.innerText = `Level ${level}`;
    // choose random button
    let idx = Math.floor(Math.random() * 4);
    let randbut = btns[idx];
    gameseq.push(randbut);
    console.log(gameseq);
    let randaccess = document.querySelector(`.${randbut}`);
    flashbtn(randaccess);

}

function flashbtn(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 150);
}

function checkseq(curr) {
    if (userseq[curr] === gameseq[curr]) {
        if (userseq.length == gameseq.length) {
            setTimeout(() => { levelup(); }, 500);
        }
    } else {
        maxscore=Math.max(maxscore,level);
        let body =document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(function () {
            body.style.backgroundColor = "white";
        }, 300);
        h2.innerHTML = `Game over ! Your score was <b>${level} </b> <br> Maximum Score Was <b>${maxscore}</b> <br>Press any key to start Again ..!`;

        reset();
    }
}
function butpressed() {
    flashbtn(this);
    let userenter = this.getAttribute("id");
    userseq.push(userenter);
    checkseq(userseq.length - 1);
}
let allbtn = document.querySelectorAll(".box");
for (btn of allbtn) {
    btn.addEventListener("click", butpressed);
}

function reset() {
    start = false;
    gameseq = [];
    userseq = [];
    level = 0;
}