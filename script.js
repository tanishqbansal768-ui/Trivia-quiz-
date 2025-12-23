const quiz = [
  {
    q: "What is my favorite color?",
    o: ["Red", "Blue", "Black", "White"],
    a: 2
  },
  {
    q: "What do I like more?",
    o: ["Pizza", "Burger", "Momos", "Pasta"],
    a: 2
  },
  {
    q: "Where did we first meet?",
    o: ["School", "Gym", "Online", "Party"],
    a: 0
  }
];

let i = 0;
let score = 0;

function load() {
  document.getElementById("question").innerText = quiz[i].q;
  document.getElementById("b0").innerText = quiz[i].o[0];
  document.getElementById("b1").innerText = quiz[i].o[1];
  document.getElementById("b2").innerText = quiz[i].o[2];
  document.getElementById("b3").innerText = quiz[i].o[3];
  document.getElementById("progress").innerText =
    `Question ${i + 1} of ${quiz.length}`;
}

function check(choice) {
  if (choice === quiz[i].a) score++;
  i++;

  if (i < quiz.length) {
    load();
  } else {
    document.querySelector(".quiz-box").innerHTML =
      `<h2>Your Score</h2>
       <h1>${score}/${quiz.length}</h1>
       <p>Share this quiz with friends!</p>`;
  }
}

load();
