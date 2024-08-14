const 정답 = "SORRY";

let attempts = 0;
let index = 0;

const keyboardBtn = document.querySelectorAll(".keyboard__btn");

const keyboardEnterBtn = document.querySelector(".keyboard__btn-enter");
const keyboardDeleteBtn = document.querySelector(".keyboard__btn-delete");

function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "게임이 종료됐습니다.";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.position = "fixed";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.style.backgroundColor = "white";
    div.style.width = "200px";
    div.style.height = "140px";
    div.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    div.style.zIndex = "1000";
    document.body.appendChild(div);
  };

  const gameover = () => {
    window.removeEventListener("keydown", handleKeydown);
    displayGameover();
  };

  const nextLine = () => {
    if (attempts === 6) return gameover;
    attempts += 1;
    index = 0;
  };

  const handleEnterKey = () => {
    let 맞은_갯수 = 0;

    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.answer-box__grid[data-index='${attempts}${i}']`
      );
      const 입력한_글자 = block.innerText;
      const 정답_글자 = 정답[i];

      if (입력한_글자 === 정답_글자) {
        맞은_갯수 += 1;
        block.style.background = "#6AAA64";

        block.classList.add("success__animate");

        setTimeout(() => {
          block.classList.remove("success__animate");
        }, 500);
      } else if (정답.includes(입력한_글자)) block.style.background = "#C9B458";
      else {
        block.style.background = "#787C7E";
        block.classList.add("animate");

        setTimeout(() => {
          block.classList.remove("animate");
        }, 500);
      }

      block.style.color = "white";
    }

    if (맞은_갯수 === 5) {
      gameover();
    }
    nextLine();
  };

  const handleBackspace = () => {
    if (index > 0) {
      const preBlock = document.querySelector(
        `.answer-box__grid[data-index='${attempts}${index - 1}']`
      );
      preBlock.innerText = "";
    }
    if (index !== 0) index -= 1;
  };

  const handleKeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.answer-box__grid[data-index='${attempts}${index}']`
    );

    if (event.key === `Backspace`) handleBackspace();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };

  const handleButtonClick = (event) => {
    const key = event.target.innerText.toUpperCase();
    const thisBlock = document.querySelector(
      `.answer-box__grid[data-index='${attempts}${index}']`
    );

    if (key === "DELETE") {
      handleBackspace();
    } else if (key === "ENTER") {
      handleEnterKey();
    } else {
      if (index < 5) {
        thisBlock.innerText = key;
        index += 1;
      }
    }
  };

  window.addEventListener("keydown", handleKeydown);

  keyboardBtn.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
  });

  keyboardDeleteBtn.addEventListener("click", handleBackspace);
  keyboardEnterBtn.addEventListener("click", handleEnterKey);
}

appStart();
