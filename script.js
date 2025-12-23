const quiz = [
  {
    q: "What is my favorite color?",
    o: ["Red", "Blue", "Black", "White"],
    a: 2
  }
];

function load() {
  document.getElementById("question").innerText = quiz[0].q;
  document.getElementById("b0").innerText = quiz[0].o[0];
  document.getElementById("b1").innerText = quiz[0].o[1];
  document.getElementById("b2").innerText = quiz[0].o[2];
  document.getElementById("b3").innerText = quiz[0].o[3];
}

function check(choice) {
  if (choice === quiz[0].a) {
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Wrong!";
  }
}

load();
