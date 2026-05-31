const steps = [...document.querySelectorAll(".form-step")];
const stepLabels = [...document.querySelectorAll(".steps span")];
let current = 0;
function showStep(i){
  current = Math.max(0, Math.min(i, steps.length-1));
  steps.forEach((s,idx)=>s.classList.toggle("active", idx===current));
  stepLabels.forEach((s,idx)=>s.classList.toggle("active", idx===current));
}
document.querySelectorAll(".form-next").forEach(btn=>btn.addEventListener("click",()=>showStep(current+1)));
document.querySelectorAll(".form-prev").forEach(btn=>btn.addEventListener("click",()=>showStep(current-1)));

const modal = document.getElementById("specModal");
document.getElementById("openSpec")?.addEventListener("click",()=>modal.classList.add("active"));
document.getElementById("closeSpec")?.addEventListener("click",()=>modal.classList.remove("active"));
modal?.addEventListener("click",(e)=>{ if(e.target===modal) modal.classList.remove("active") });

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
menu?.addEventListener("click",()=>{
  if(getComputedStyle(nav).display === "none"){
    nav.style.display = "flex";
    nav.style.position = "fixed";
    nav.style.inset = "84px 0 auto 0";
    nav.style.flexDirection = "column";
    nav.style.background = "rgba(8,6,4,.96)";
    nav.style.padding = "28px";
    nav.style.alignItems = "flex-start";
  }else{
    nav.removeAttribute("style");
  }
});