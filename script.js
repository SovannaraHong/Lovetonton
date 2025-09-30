const btnNo = document.querySelector("#btn-no");
const btnYes = document.querySelector("#btn-yes");
const img = document.querySelector("#tonton");
const h1 = document.querySelector("h1");
const clickSound = document.querySelector("#clickSound");

btnYes.addEventListener("click", () => {
  h1.textContent = "Yehh Yehh i'm so happy love you too😭❤️";
  clickSound.pause();
  clickSound.currentTime = 3.13; // jump to 3.13s
  clickSound.play();
  img.src =
    "https://imgs.search.brave.com/-xV4JmaosreZVeKwwlvANYW0UqZurZanqrGxWPiDHJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvZ29vZC1u/aWdodC1sb3ZlLXlv/dS1idW5ueS1jb3Vw/bGUtY2hlZWstaGVh/cnRzLTg1a2ttc2Nh/ajFpM2NyeXguZ2lm.gif";
});

btnNo.addEventListener("mouseover", () => {
  btnNo.classList.add("active");
  const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
  const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);

  btnNo.style.left = `${x}px`;
  btnNo.style.top = `${y}px`;
});
