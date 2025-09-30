const btnNo = document.querySelector("#btn-no");
const btnYes = document.querySelector("#btn-yes");
const img = document.querySelector("#tonton");
const h1 = document.querySelector("h1");
const clickSound = document.querySelector("#clickSound");
const clickSoundCry = document.querySelector("#cry");

let padding = 10;
let fontsize = 20;
btnYes.addEventListener("click", () => {
  h1.textContent = "Yehh Yehh I Love you so much😭❤️";
  clickSound.currentTime = 0;
  clickSound.play();
  clickSoundCry.pause();
  clickSoundCry.currentTime = 0;
  btnNo.disabled = true;
  btnNo.style.opacity = "0.5";
  btnNo.style.cursor = "not-allowed";

  img.src =
    "https://imgs.search.brave.com/-xV4JmaosreZVeKwwlvANYW0UqZurZanqrGxWPiDHJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvZ29vZC1u/aWdodC1sb3ZlLXlv/dS1idW5ueS1jb3Vw/bGUtY2hlZWstaGVh/cnRzLTg1a2ttc2Nh/ajFpM2NyeXguZ2lm.gif";
  btnNo.removeAttribute("id");
});
btnNo.addEventListener("click", () => {
  fontsize += 10;
  clickSoundCry.currentTime = 0;
  clickSoundCry.play();
  clickSound.pause();
  clickSound.currentTime = 0;
  h1.textContent = "I'm Cry I'm so sad😭";
  btnYes.style.fontSize = `${fontsize}px`;
  img.src =
    "https://imgs.search.brave.com/7r5Jd8iobNABgAw12-oGaoS3Pdsyr9j_Yus8dFKxqKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/a1owWFBzdnRxdzhB/QUFBai9jYXQtZmFy/c2ktc2FkLmdpZg.gif";
  btnNo.style.fontSize = `${padding}px`;
});
