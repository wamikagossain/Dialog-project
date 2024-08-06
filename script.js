const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const initialNoBtnPosition = {
  left: noBtn.style.left || "0px",
  top: noBtn.style.top || "0px",
};

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yayyyy!! What took you thiss long? :)";
  noBtn.style.left = initialNoBtnPosition.left;
  noBtn.style.top = initialNoBtnPosition.top;

  confetti({
    particleCount: 200,
    spread: 200,
    origin: { x: 0.5, y: 0.5 },
  });
});
yesBtn.classList.add("animate");

noBtn.addEventListener("mouseover", () => {
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
  noBtn.style.left = `${i}px`;
  noBtn.style.top = `${j}px`;
});
