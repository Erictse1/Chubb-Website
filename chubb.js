const one = document.getElementById("commercial");
const two = document.getElementById("personal");
const three = document.getElementById("customer");
const allgridBox = document.querySelectorAll(".girdBox3");
const gridBox = document.querySelector(".girdBox");
const gridBox1 = document.querySelector(".girdBox1");
const gridBox4 = document.querySelector(".girdBox4"); //personal insurance
const gridBox2 = document.querySelector(".girdBox2"); //customer
const focalP = document.querySelector(".focalpoint");
const section1 = document.querySelector(".section1");
const secreplace = document.querySelector(".ThirdSecondTitle");
const topbar = document.querySelector(".topbar");
const chgFocalP = function (a) {
  focalP.textContent = `焦點 ${a}/3`;
};

one.addEventListener("click", function (e) {
  //   const clicked = e.target.dataset.no;
  allgridBox.forEach((a) => a.classList.remove("active"));
  //   document.querySelector(`.emtpy${clicked}`).classList.add("active");
  document.querySelector(".emtpy1").classList.add("active");
  gridBox.style.background = "#01c1d6";
  gridBox1.style.background = "#01c1d6";
  gridBox2.style.background = "white";
  gridBox4.style.background = "white";

  //   document.querySelector(`.girdBox${clicked}`).style.opact = "#01c1d6";
});
two.addEventListener("click", function (e) {
  //personal insurance
  const clicked = e.target.dataset.no;
  allgridBox.forEach((a) => a.classList.remove("active"));
  gridBox.classList.add(`.girdBoxColor${clicked}`);
  document.querySelector(`.emtpy${clicked}`).classList.add("active");
  gridBox4.style.background = "#ffb617";
  gridBox.style.background = "#ffb617";
  gridBox2.style.background = "#fff";
  gridBox1.style.background = "#fff";
});
three.addEventListener("click", function (e) {
  const clicked = e.target.dataset.no;
  allgridBox.forEach((a) => a.classList.remove("active"));
  document.querySelector(`.emtpy${clicked}`).classList.add("active");
  gridBox.style.background = "#150f96";
  gridBox4.style.background = "#fff";
  gridBox2.style.background = "#150f96";
  gridBox1.style.background = "#fff";
});

//moiving picture

const pics = document.querySelectorAll(".flexbox");
const split = function (a) {
  pics.forEach(
    (pic, i) => (pic.style.transform = `translateX(${100 * (i - a)}%)`)
  );
};
const init = function () {
  split(0);
  chgFocalP(0 + 1);
};
init();
const butnRight = document.querySelector(".right");
const butnLeft = document.querySelector(".left");
let numeb = 0;

butnRight.addEventListener("click", function () {
  if (numeb < pics.length - 1) {
    numeb = numeb + 1;
  } else {
    numeb = 0;
  }
  split(numeb);
  chgFocalP(numeb + 1);
});

butnLeft.addEventListener("click", function () {
  if (numeb > 0) {
    numeb = numeb - 1;
  } else {
    numeb = pics.length - 1;
  }
  split(numeb);
  chgFocalP(numeb + 1);
});
//topbar

const topbarN = new IntersectionObserver(
  function (b) {
    // console.log(b[0]);
    if (b[0].isIntersecting === false) {
      topbar.classList.add("topbaractive");
    }
    if (b[0].isIntersecting === true) {
      topbar.classList.remove("topbaractive");
    }
  },
  {
    // intersectionRatio: 0.5,
    // root: null,
    // threshold: 0,
    // rootMargin: "30%",
  }
);
topbarN.observe(secreplace);

const activebar = document.querySelectorAll(".activebar");

// topbar.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".activebar");

//   activebar.forEach((a) => (a.style.background = "#fff"));
//   clicked.style.background = "#01c1d6";
// });

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");

color2.addEventListener("click", function (e) {
  e.preventDefault();
  color1.style.background = "#FFF";
  color2.style.background = "#ffb617";
  color3.style.background = "#FFF";
  color3.style.color = "black";
});

color1.addEventListener("click", function (e) {
  e.preventDefault();
  color2.style.background = "#FFF";
  color1.style.background = "#01c1d6";
  color3.style.background = "#FFF";
  color3.style.color = "black";
});
color3.addEventListener("click", function (e) {
  e.preventDefault();
  color2.style.background = "#FFF";
  color3.style.background = "#150f96";
  color1.style.background = "#FFF";
  color3.style.color = "#FFF";
});
//topbar shown
const oneLi = document.querySelector(".oneLi");

const section6 = document.querySelector(".section6");

const topli = document.querySelector(".topli");

topli.addEventListener("mouseover", function () {
  section6.style.display = "block";
});
topli.addEventListener("mouseout", function () {
  section6.style.display = "none";
});

section6.addEventListener("mouseover", function () {
  section6.style.display = "block";
});
section6.addEventListener("mouseout", function () {
  section6.style.display = "none";
});
