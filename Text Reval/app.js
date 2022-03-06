const tl = gsap.timeline({
  default: { duration: 0.75, ease: "Power3.easeOut" },
});

tl.fromTo(
  ".hero-img",
  { scale: 1.3, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "2rem",
    delay: 0.35,
    duration: 2.5,
    ease: "elastic.out(1.5,1)",
  }
);

tl.fromTo(".cta1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta3", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");

tl.fromTo(".cta4", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
///Split text

const logo = document.querySelector(".logo");
const letter = logo.textContent.split("");
// console.log(letter);
logo.textContent = "";

letter.forEach((letter) => {
  //   console.log(letter);
  logo.innerHTML += '<span class="letter">' + letter + "</span>";
  gsap.set(".letter", { display: "inline-block" });
  gsap.fromTo(
    ".letter",
    { y: "100%" },
    { y: 0, delay: 2, stagger: 0.04, ease: "back.out(3)" }
  );
});
