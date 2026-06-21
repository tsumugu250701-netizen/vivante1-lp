// =====================
// Form Step
// =====================
const steps = [...document.querySelectorAll(".form-step")];
const stepLabels = [...document.querySelectorAll(".steps span")];
let current = 0;

function showStep(i){
  current = Math.max(0, Math.min(i, steps.length - 1));

  steps.forEach((step, index) => {
    step.classList.toggle("active", index === current);
  });

  stepLabels.forEach((label, index) => {
    label.classList.toggle("active", index === current);
  });
}

document.querySelectorAll(".form-next").forEach((btn) => {
  btn.addEventListener("click", () => showStep(current + 1));
});

document.querySelectorAll(".form-prev").forEach((btn) => {
  btn.addEventListener("click", () => showStep(current - 1));
});


// =====================
// Spec Modal
// =====================
const modal = document.getElementById("specModal");
const openSpec = document.getElementById("openSpec");
const closeSpec = document.getElementById("closeSpec");

openSpec?.addEventListener("click", () => {
  modal?.classList.add("active");
});

closeSpec?.addEventListener("click", () => {
  modal?.classList.remove("active");
});

modal?.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.classList.remove("active");
  }
});


// =====================
// Mobile Menu
// =====================
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  if(!nav) return;

  if(getComputedStyle(nav).display === "none"){
    nav.style.display = "flex";
    nav.style.position = "fixed";
    nav.style.inset = "84px 0 auto 0";
    nav.style.flexDirection = "column";
    nav.style.background = "rgba(8,6,4,.96)";
    nav.style.padding = "28px";
    nav.style.alignItems = "flex-start";
    nav.style.zIndex = "9999";
  }else{
    nav.removeAttribute("style");
  }
});


// =====================
// Google Form Submit
// =====================
const leadForm = document.getElementById("leadForm");
const thanksMessage = document.getElementById("thanksMessage");

if (leadForm && thanksMessage) {
  leadForm.addEventListener("submit", function () {

    // Googleフォーム完了画面へ遷移させないため、hidden iframeへ送信
    leadForm.setAttribute("target", "hidden_iframe");

    setTimeout(function () {
      leadForm.style.display = "none";
      thanksMessage.style.display = "block";
      thanksMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 900);
  });
}
