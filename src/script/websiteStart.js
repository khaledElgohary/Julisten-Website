gsap.from("#logo", {
    duration: 0.75,
    scale: 0.5,
    ease: "bounce.out",
    opacity: 0,
    y: -100
});

gsap.from("header", {
    duration: 1.5,
    scale: 0.9,
    opacity: 0,
    ease: "expo.out",
    y: 20,
    rotationX: 10,
    transformOrigin: "center bottom"
});


var tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.to("#droppable", {
    duration: 4,
    y: "-20px",
    scale: 0.9,
    rotationX: 10,
    rotationY: 5,
    ease: "power1.inOut"
});

tl.to("#droppable", {
    duration: 4,
    y: "0px",
    scale: 1,
    rotationX: 0,
    rotationY: 0,
    ease: "power1.inOut"
});


const links = document.querySelector('nav').children;
function handleLinkClick(event) {

  console.log(links);

  event.preventDefault();

  `links.forEach(link => {
    link.classList.remove('enlarged');
  });`
  for (var i = 0; i < links.length; i++) {
    var child = links[i];
    child.classList.remove('enlarged');
  }

  event.currentTarget.classList.add('enlarged');
}


for (var i = 0; i < links.length; i++) {
  var child = links[i];
  child.addEventListener('click', handleLinkClick);
}

`links.forEach(link => {
  link.addEventListener('click', handleLinkClick);
});`