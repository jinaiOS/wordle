const answer_1 = document.getElementById("1-1");
const answer_2 = document.getElementById("1-2");
const answer_3 = document.getElementById("1-3");
const answer_4 = document.getElementById("1-4");
const answer_5 = document.getElementById("1-5");

const keyboardBtn = document.querySelectorAll(".keyboard__btn");

const keyboardEnterBtn = document.querySelector(".keyboard__btn-enter");
const keyboardDeleteBtn = document.querySelector(".keyboard__btn-delete");

const toast = document.querySelector(".toast");

function 클릭시_실행될_함수(event) {
  const buttonText = event.target.innerText;

  if (answer_1.innerText === "") {
    answer_1.innerText = buttonText;
    answer_1.style.borderColor = "#808080";
  } else if (answer_2.innerText === "") {
    answer_2.innerText = buttonText;
    answer_2.style.borderColor = "#808080";
  } else if (answer_3.innerText === "") {
    answer_3.innerText = buttonText;
    answer_3.style.borderColor = "#808080";
  } else if (answer_4.innerText === "") {
    answer_4.innerText = buttonText;
    answer_4.style.borderColor = "#808080";
  } else if (answer_5.innerText === "") {
    answer_5.innerText = buttonText;
    answer_5.style.borderColor = "#808080";
  }

  console.log("버튼 클릭:", buttonText);
}

function 삭제버튼_클릭시_실행될_함수() {
  if (answer_5.innerText != "") {
    answer_5.innerText = "";
    answer_5.style.borderColor = "#DBDBDB";
  } else if (answer_4.innerText != "") {
    answer_4.innerText = "";
    answer_4.style.borderColor = "#DBDBDB";
  } else if (answer_3.innerText != "") {
    answer_3.innerText = "";
    answer_3.style.borderColor = "#DBDBDB";
  } else if (answer_2.innerText != "") {
    answer_2.innerText = "";
    answer_2.style.borderColor = "#DBDBDB";
  } else if (answer_1.innerText != "") {
    answer_1.innerText = "";
    answer_1.style.borderColor = "#DBDBDB";
  }
}

function 엔터버튼_클릭시_실행될_함수() {
  if (answer_5.innerText === "") {
    alert("Not enough letters");
  } else {
    alert("Not in word list");
  }
}

keyboardBtn.forEach((btn) => {
  btn.addEventListener("click", 클릭시_실행될_함수);
});

keyboardDeleteBtn.addEventListener("click", 삭제버튼_클릭시_실행될_함수);

keyboardEnterBtn.addEventListener("click", 엔터버튼_클릭시_실행될_함수);
