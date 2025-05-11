
onload = () =>{
  document.body.classList.remove("container");
};

const hearts = document.querySelectorAll('.heart');
  hearts.forEach((heart, index) => {
    const randomLeft = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    heart.style.left = `${randomLeft}%`;
    heart.style.animationDelay = `${randomDelay}s`;
  });
