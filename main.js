const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diana Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
];

// View Object
const view = {
  score: document.querySelector("#score strong"),
  question: document.getElementById("question"),
  result: document.getElementById("result"),
  info: document.getElementById("info"),
  start: document.getElementById("start"),
  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  },
};

const game = {
  start(quiz) {
    this.questions = [...quiz];
    this.score = 0;

    // main game loop
    for (const question of this.questions) {
      this.question = question;
      this.ask();
    }
    // end of main game loop
    this.gameOver();
  },

  ask() {
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question, question);
    const response = prompt(question);
    this.check(response);
  },
  check(response) {
    const answer = this.question.realName;
    if (response === answer) {
      view.render(view.result, "Correct!", { class: "correct" });
      alert("Correct!");
      this.score++;
      view.render(view.score, this.score);
    } else {
      view.render(view.result, `Wrong! The correct answer was ${answer}`, {
        class: "wrong",
      });
      alert(`Wrong! The correct answer was ${answer}`);
    }
  },
  gameOver() {
    view.render(
      view.info,
      `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`
    );
  },
};

/*const quiz = [    
["What is Superman's real name?","Clark Kent"],    
["What is Wonder Woman's real name?","Diana Prince"],   
["What is Batman's real name?","Bruce Wayne"]
];*/

/*function start(quiz) {
  let score = 0;
  // main game loop
  for (const [question, answer] of quiz) {
    const response = ask(question);
    check(response, answer);
  }
  // end of main game loop

  gameOver();

  // function declarations
  function ask(question) {
    return prompt(question);
  }
  function check(response, answer) {
    if (response === answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  }

  function gameOver() {
    alert(`Game Over, you scored ${score} point${score !== 1 ? "s" : ""}`);
  }
}*/

/*My objects: I will be using these to keep my notes*/

const frontendDirectory = [
  {
    title: "Programming Basics: Making Computer Remember Me (localStorage)",
  },
  {
    title: "Arrays, Logic, Loops & Functions",
  },
  {
    title: "Objects, DOM and Events",
  },
  {
    title: "Forms, OOP and Modern Javascript",
  },
  {
    title: "Testing and Debugging",
  },
  {
    title: "My First Javascript Project - TodoList",
  },
  {
    title: "Further Functions and Ajax",
  },
  {
    title: "Transforms, transitions, SVGs and Canvas",
  },
  {
    title: "Window Object and the HTML5 APIs",
  },
  {
    title: "Validating Forms and Using Fetch.",
  },
  {
    title: "Practice",
  },
  {
    title: "Practice",
  },
  {
    title: "Practice",
  },
  {
    title: "Final Project",
  },
];

const linksList = document.getElementsByClassName("linksList")[0];

console.log(window.URL);

frontendDirectory.forEach((product, index) => {
  index++;
  product.url = `week${index}`;
  product.label = `week ${index}`;
  let atag = document.createElement("a");
  atag.setAttribute("href", product.url);
  let linkTexts = document.createTextNode(
    `${product.label}:  ${product.title}`
  );
  let linkItem = document.createElement("li");

  //append each of the created elements and nodes
  linkItem.appendChild(linkTexts);
  atag.appendChild(linkItem);
  linksList.appendChild(atag);
});

function quizNinja() {
  alert("Welcome to Quiz Ninja!");
}
