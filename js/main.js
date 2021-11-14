const background = document.querySelector(".bg");
const block1 = document.querySelector(".block-1");
const block2 = document.querySelector(".block-2");
const block3 = document.querySelector(".block-3");


function slider() {
    background.style.backgroundImage = "url(https://www.packaging-gateway.com/wp-content/uploads/sites/2/2021/04/Starbucks.jpg)";
    background.style.backgroundPosition = "15% 25%";
    setTimeout(() => {
      background.style.backgroundImage = "url(https://wallpapercave.com/wp/wp2955671.jpg)";
    },3000)

  setTimeout(() => {
    background.style.backgroundPosition = "55% 45%";
    background.style.backgroundImage = "url(https://wallpapercave.com/wp/99KlGYb.jpg)";
  },6000)
}


window.addEventListener('scroll', () => {
  if(window.scrollY > 500){
    block1.style.opacity = 100 + "%";
  }

  if(window.scrollY > 1500){
    block2.style.opacity = 100 + "%";
  }

  if(window.scrollY > 2500){
    block3.style.opacity = 100 + "%";
  }
})



slider();
setInterval(slider,9000);




