document.addEventListener("DOMContentLoaded", function(){

const togglerussell = document.getElementById("menuTogglerussell");
const menurussell = document.getElementById("sideMenurussell");
const overlayrussell = document.getElementById("overlayrussell");
const closerussell = document.getElementById("closeMenurussell");

const linksMenurussell = document.querySelectorAll(".side-menu-russell a");

function fecharMenurussell() {
  if (menurussell) menurussell.classList.remove("active");
  if (overlayrussell) overlayrussell.classList.remove("active");
}

if (togglerussell) {
  togglerussell.addEventListener("click", () => {
    menurussell?.classList.add("active");
    overlayrussell?.classList.add("active");
  });
}

if (closerussell) {
  closerussell.addEventListener("click", fecharMenurussell);
}

if (overlayrussell) {
  overlayrussell.addEventListener("click", fecharMenurussell);
}

linksMenurussell.forEach(link => {
  link.addEventListener("click", fecharMenurussell);
});

(function scrollLinksrussell() {

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });

})();


});

/* =========================
   LUZ SEGUINDO MOUSE
========================= */

const russellBanner = document.querySelector(".russel-banner-bg");

if(russellBanner){

  russellBanner.addEventListener("mousemove", (e)=>{

    const rect = russellBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    russellBanner.style.setProperty("--mouse-x", x + "px");
    russellBanner.style.setProperty("--mouse-y", y + "px");

  });

}

const track =
  document.querySelector(".slider-russell-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-russell");

  const dotsContainer =
    document.querySelector(".dots-russell");

  const bg =
    document.querySelector(".bg-slider-russell");

  let index = 0;

  /* =========================
     CRIAR DOTS
  ========================= */

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-russell");

    if(i === 0){
      dot.classList.add("active");
    }

    dot.addEventListener("click", ()=>{

      index = i;

      updateSlide();

    });

    dotsContainer.appendChild(dot);

  });

  const dots =
    document.querySelectorAll(".dot-russell");

  /* =========================
     UPDATE SLIDE
  ========================= */

  function updateSlide(){

    track.style.transform =
      `translateX(-${index * 100}%)`;

    dots.forEach(dot =>
      dot.classList.remove("active")
    );

    dots[index].classList.add("active");

    const img =
      slides[index].querySelector("img");

    if(img && bg){

      bg.style.backgroundImage =
        `url(${img.src})`;

    }

  }

  /* =========================
     BOTÃO NEXT
  ========================= */

  const nextBtn =
    document.querySelector(".btn-russell.next");

  if(nextBtn){

    nextBtn.onclick = ()=>{

      index++;

      if(index >= slides.length){
        index = 0;
      }

      updateSlide();

    };

  }

  /* =========================
     BOTÃO PREV
  ========================= */

  const prevBtn =
    document.querySelector(".btn-russell.prev");

  if(prevBtn){

    prevBtn.onclick = ()=>{

      index--;

      if(index < 0){
        index = slides.length - 1;
      }

      updateSlide();

    };

  }

  /* =========================
     SWIPE MOBILE
  ========================= */

  let startX = 0;
  let endX = 0;

  track.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

  });

  track.addEventListener("touchmove",(e)=>{

    endX = e.touches[0].clientX;

  });

  track.addEventListener("touchend",()=>{

    let diff = startX - endX;

    if(diff > 50){
      index++;
    }

    if(diff < -50){
      index--;
    }

    if(index >= slides.length){
      index = 0;
    }

    if(index < 0){
      index = slides.length - 1;
    }

    updateSlide();

  });

  /* =========================
     INICIAR
  ========================= */

  updateSlide();

}

window.addEventListener("scroll", function(){

  const secao =
    document.querySelector(".numeros-russell");

  const bg =
    document.querySelector(".bg-numeros-russell");

  if(!secao || !bg) return;

  const rect =
    secao.getBoundingClientRect();

  const alturaTela =
    window.innerHeight;

  if(rect.top < alturaTela && rect.bottom > 0){

    let progresso =
      rect.top / alturaTela;

    bg.style.transform =
      "translateY(" + progresso * 80 + "px) scale(1.05)";
  }

});


/* =========================
   CONTADORES
========================= */

const cards =
  document.querySelectorAll(".animar-russell");

function animarRussell(){

  const topoTela =
    window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao =
      card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-russell");

        const barra =
          card.querySelector(".barra-velocidade-russell");

        if(!contador.classList.contains("contado")){

          contador.classList.add("contado");

          const target =
            +contador.getAttribute("data-target");

          let count = 0;

          const update = ()=>{

            const increment =
              target / 200;

            if(count < target){

              count += increment;

              contador.innerText =
                Math.floor(count);

              if(barra){

                barra.style.width =
                  (count / target * 100) + "%";
              }

              setTimeout(update,40);

            }else{

              contador.innerText = target;

              if(barra){

                barra.style.width = "100%";
              }

            }

          };

          update();

        }

      }, index * 300);

    }

  });

}

window.addEventListener("scroll", animarRussell);

animarRussell();


/* =========================
   TITULO ANIMADO
========================= */

window.addEventListener("scroll", ()=>{

  const titulo =
    document.querySelector(".titulo-animar-russell");

  if(!titulo) return;

  const pos =
    titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){

    titulo.classList.add("show");

  }

});


 const russellTemporadas = {

  "2019": [
    { gp:"Australia", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"China", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Azerbaijan", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Spain", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Monaco", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Canada", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"France", pos:"P19", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Austria", pos:"P18", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Great Britain", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Germany", pos:"P11", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Hungary", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Belgium", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Italy", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"russell-dnf",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Russia", pos:"DNF", pontos:"0", tipo:"russell-dnf",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Japan", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Mexico", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"United States", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Brazil", pos:"P12", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
    { gp:"Abu Dhabi", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" }
  ],


 "2020": [
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"russell-dnf",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Styria", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P18", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P12", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"70th Anniversary", pos:"P18", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P19", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Tuscan", pos:"P11", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P18", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Eifel", pos:"P20", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Portugal", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Emilia Romagna", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Turkey", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Sakhir", pos:"P9", pontos:"3", tipo:"russell-pontos",  equipe:"Mercedes",  logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" }
],

 "2021": [
  { gp:"Bahrain", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Emilia Romagna", pos:"P19", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Portugal", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"France", pos:"P12", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Styria", pos:"P19", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P12", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"russell-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P2", pontos:"9", tipo:"russell-podio",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"russell-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"russell-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Turkey", pos:"P15", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P14", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P16", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"São Paulo", pos:"P13", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P17", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P19", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P18", pontos:"0", tipo:"russell-sem-pontos",  equipe:"Williams",  logo:"icons/WilliamsF1.png" }
],

 "2022": [
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Miami", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Great Britain", pos:"P18", pontos:"0", tipo:"russell-sem-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"France", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Netherlands", pos:"P2", pontos:"18", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P14", pontos:"0", tipo:"russell-sem-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P8", pontos:"4", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P5", pontos:"11", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P4", pontos:"13", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"São Paulo", pos:"P1", pontos:"26", tipo:"russell-vitoria" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"russell-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],

 "2023": [
  { gp:"Bahrain", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P8", pontos:"5", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Miami", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Great Britain", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Netherlands", pos:"P17", pontos:"0", tipo:"russell-sem-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Qatar", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"São Paulo", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Las Vegas", pos:"P8", pontos:"4", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"russell-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],

 "2024": [
  { gp:"Bahrain", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Miami", pos:"P8", pontos:"4", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P1", pontos:"25", tipo:"russell-vitoria" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Great Britain", pos:"DNF", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"DSQ", pontos:"0", tipo:"russell-dnf" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Netherlands", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"São Paulo", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Las Vegas", pos:"P1", pontos:"25", tipo:"russell-vitoria" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Qatar", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"russell-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],

 "2025": [
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"China", pos:"P3", pontos:"20", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Miami", pos:"P3", pontos:"20", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"russell-sem-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P1", pontos:"25", tipo:"russell-vitoria" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Great Britain", pos:"P10", pontos:"1", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P1", pontos:"25", tipo:"russell-vitoria" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P6", pontos:"15", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Brazil", pos:"P4", pontos:"18", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Las Vegas", pos:"P2", pontos:"18", tipo:"russell-podio" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Qatar", pos:"P6", pontos:"15", tipo:"russell-pontos" , equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P5", pontos:"10", tipo:"russell-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
]

};

const russellCampeonato = {

  "2019": {
    posicao: "20º",
    pontos: 0
  },

  "2020": {
    posicao: "18º",
    pontos: 3
  },

  "2021": {
    posicao: "15º",
    pontos: 16
  },

  "2022": {
    posicao: "4º",
    pontos: 275
  },

  "2023": {
    posicao: "8º",
    pontos: 175
  },

  "2024": {
    posicao: "6º",
    pontos: 245
  },

  "2025": {
    posicao: "4º",
    pontos: 339
  }

};

const russellContainer =
document.querySelector(".russell-corridas-container");

const russellSummary =
document.querySelector(".russell-season-summary");

const russellBtns =
document.querySelectorAll(".russell-ano-btn");



if (russellContainer && russellBtns.length > 0) {

  function carregarTemporada(ano) {

    russellContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = russellTemporadas[ano];

const anos = Object.keys(russellTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  russellTemporadas[anoAnterior]
  [russellTemporadas[anoAnterior].length - 1];

  equipeTemporadaAnterior = ultimaCorrida.equipe;
}


    temporada.forEach((corrida, index) => {

      const card = document.createElement("div");

const mudouEquipe =
(index === 0 &&
equipeTemporadaAnterior &&
equipeTemporadaAnterior !== corrida.equipe)
||
(equipeAnterior && equipeAnterior !== corrida.equipe);

let transferHTML = "";

      card.className =
      `russell-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("russell-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-russell">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="russell-gp">
    ${corrida.gp} GP
  </span>

  <div class="russell-team">
    <img src="${corrida.logo}" class="russell-team-logo">
  </div>

  <span class="russell-resultado">
    ${corrida.pos}
  </span>

  <span class="russell-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      russellContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = russellCampeonato[ano];

    if (russellSummary) {

      russellSummary.innerHTML = `
        <div class="russell-summary-card show">

          <h3 class="russell-summary-title">
            Season ${ano}
          </h3>

          <div class="russell-summary-stats">

            <div class="russell-summary-box">

              <span class="russell-summary-label">
                Position
              </span>

              <span class="russell-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="russell-summary-box">

              <span class="russell-summary-label">
                Points
              </span>

              <span class="russell-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  russellBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      russellBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2019");

}


const elementosRussell =
document.querySelectorAll(".reveal-russell");

function animarPilotagemRussell(){

  const alturaTela = window.innerHeight;

  elementosRussell.forEach(el => {

    const topo =
    el.getBoundingClientRect().top;

    if(topo < alturaTela - 100){

      el.classList.add("active");

      /* ===== BARRAS ===== */
      const barra =
      el.querySelector(".barra-russell div");

      if(barra && !barra.classList.contains("ativo")){

        barra.classList.add("ativo");

        const width =
        barra.getAttribute("data-width");

        barra.style.width = width;

      }

    }

  });

}

window.addEventListener(
  "scroll",
  animarPilotagemRussell
);

animarPilotagemRussell();



/* ===== GRÁFICO ===== */

function animarGraficoRussell(){

  const grafico =
  document.querySelector(".linha-russell");

  if(!grafico) return;

  const pos =
  grafico.getBoundingClientRect().top;

  if(pos < window.innerHeight - 100){

    grafico.style.strokeDashoffset = "0";

  }

}

window.addEventListener(
  "scroll",
  animarGraficoRussell
);

animarGraficoRussell();


const sectionRussell =
document.querySelector(".radio-f1-russell");

const cardRussell =
document.getElementById("radioCardRussell");

const audioRussell =
document.getElementById("radio-audio-russell");

const engTextRussell =
document.getElementById("eng-text-russell");

const pilTextRussell =
document.getElementById("pil-text-russell");

const contentRussell =
document.querySelector(".content-russell");

const fraseEngRussell =
'"George, that was absolutely brilliant!"';

const frasePilRussell =
'"Amazing job guys, the car was unbelievable!"';

let iRussell = 0;
let jRussell = 0;

let timeoutsRussell = [];

/* RESET */
function resetarRadioRussell(){

  if(audioRussell){

    audioRussell.pause();

    audioRussell.currentTime = 0;

  }

  if(engTextRussell){
    engTextRussell.innerHTML = "";
  }

  if(pilTextRussell){
    pilTextRussell.innerHTML = "";
  }

  iRussell = 0;
  jRussell = 0;

  if(cardRussell){

    cardRussell.classList.remove(
      "ativo",
      "falando",
      "saindo",
      "mostrar-texto"
    );

  }

  if(contentRussell){
    contentRussell.style.height = "0px";
  }

  timeoutsRussell.forEach(t =>
    clearTimeout(t)
  );

  timeoutsRussell = [];

}

/* ESCREVER ENGENHEIRO */
function escreverEngRussell(){

  if(!engTextRussell) return;

  if(iRussell < fraseEngRussell.length){

    engTextRussell.innerHTML +=
    fraseEngRussell[iRussell++];

    timeoutsRussell.push(

      setTimeout(
        escreverEngRussell,
        20
      )

    );

  }

}

/* ESCREVER PILOTO */
function escreverPilRussell(){

  if(!pilTextRussell) return;

  if(jRussell < frasePilRussell.length){

    pilTextRussell.innerHTML +=
    frasePilRussell[jRussell++];

    timeoutsRussell.push(

      setTimeout(
        escreverPilRussell,
        20
      )

    );

  }

}

/* INICIAR */
function iniciarRadioRussell(){

  resetarRadioRussell();

  if(audioRussell){

    audioRussell.currentTime = 0;

    audioRussell.play().catch(() => {});

  }

  if(cardRussell){
    cardRussell.classList.add("ativo");
  }

  if(contentRussell){

    contentRussell.style.height = "0px";

    contentRussell.offsetHeight;

  }

  /* WAVE */
  timeoutsRussell.push(

    setTimeout(() => {

      if(cardRussell){
        cardRussell.classList.add("falando");
      }

    }, 300)

  );

  /* TEXTO ENGENHEIRO */
  timeoutsRussell.push(

    setTimeout(() => {

      if(contentRussell){
        contentRussell.style.height = "120px";
      }

      if(cardRussell){
        cardRussell.classList.add("mostrar-texto");
      }

      escreverEngRussell();

    }, 800)

  );

  /* EXPANDE */
  timeoutsRussell.push(

    setTimeout(() => {

      if(contentRussell){
        contentRussell.style.height = "220px";
      }

    }, 2000)

  );

  /* TEXTO PILOTO */
  timeoutsRussell.push(

    setTimeout(() => {

      escreverPilRussell();

    }, 2100)

  );

  /* PARA ONDA */
  timeoutsRussell.push(

    setTimeout(() => {

      if(cardRussell){
        cardRussell.classList.remove("falando");
      }

    }, 3000)

  );

  /* SOME */
  timeoutsRussell.push(

    setTimeout(() => {

      if(cardRussell){
        cardRussell.classList.add("saindo");
      }

    }, 3500)

  );

}

/* CLIQUE */
if(sectionRussell){

  sectionRussell.addEventListener(
    "click",
    iniciarRadioRussell
  );

}

/* WAVES */
const spansRussell =
document.querySelectorAll(
  ".wave-russell span"
);

spansRussell.forEach((span, index) => {

  span.style.setProperty("--i", index);

});

const itensRussell =
document.querySelectorAll(".item-galeria-russell");

const lightboxRussell =
document.querySelector(".lightbox-russell");

const imgLightboxRussell =
document.querySelector(".img-lightbox-russell");

const fecharRussell =
document.querySelector(".fechar-russell");

/* ABRIR LIGHTBOX */
itensRussell.forEach(item => {

  item.addEventListener("click", ()=>{

    const img =
    item.querySelector("img");

    if(img && lightboxRussell && imgLightboxRussell){

      imgLightboxRussell.src = img.src;

      lightboxRussell.style.display =
      "flex";

      document.body.style.overflow =
      "hidden";

    }

  });

});

/* FECHAR */
function fecharLightboxRussell(){

  if(lightboxRussell){

    lightboxRussell.style.display =
    "none";

  }

  document.body.style.overflow =
  "auto";

}

if(fecharRussell){

  fecharRussell.addEventListener(
    "click",
    fecharLightboxRussell
  );

}

/* FECHAR CLICANDO FORA */
if(lightboxRussell){

  lightboxRussell.addEventListener(
    "click",
    (e)=>{

      if(e.target === lightboxRussell){

        fecharLightboxRussell();

      }

    }
  );

}

/* ESC FECHA */
document.addEventListener(
  "keydown",
  (e)=>{

    if(e.key === "Escape"){

      fecharLightboxRussell();

    }

  }
);


const russellData = [

{

first:"ROBERT",

last:"KUBICA",

img:"russell/kubica.png",

years:"2019",

stats:{

quali:[21,0],

races:[11,10],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[0,1]

}

},

{

first:"NICHOLAS",

last:"LATIFI",

img:"russell/latifi.png",

years:"2020 — 2021",

stats:{

quali:[33,5],

races:[18,16],

podiums:[1,0],

wins:[0,0],

pole:[0,0],

points:[74,7]

}

},

{

first:"LEWIS",

last:"HAMILTON",

img:"russell/lewis.png",

years:"2022 — 2024",

stats:{

quali:[38,30],

races:[34,34],

podiums:[13,17],

wins:[3,2],

pole:[5,3],

points:[685,697]

}

},

{

first:"KIMI",

last:"ANTONELLI",

img:"russell/antonelli.png",

years:"2025",

stats:{

quali:[22,2],

races:[22,2],

podiums:[9,3],

wins:[2,0],

pole:[2,0],

points:[318,150]

}

}

]

	



let current=0



const mateImg=
document.getElementById(
"mateImg"
)

const mateFirst=
document.getElementById(
"mateFirst"
)

const mateLast=
document.getElementById(
"mateLast"
)

const years=
document.getElementById(
"russellYears"
)



function setBar(
id,
value,
max
){

document
.getElementById(id)
.style.width=

(value/max*100)

+"%"

}



function animateNumber(
el,
target
){

let value=0

const speed=
target/30



const timer=
setInterval(()=>{

value+=speed



if(
value>=target
){

value=
target

clearInterval(
timer
)

}



el.textContent=

Math.floor(
value
)

},20)

}





function updateStats(
data
){

const maxQuali=
Math.max(
...data.stats.quali
)

const maxRace=
Math.max(
...data.stats.races
)

const maxPod=
Math.max(
...data.stats.podiums
)

const maxWin=
Math.max(
...data.stats.wins
)

const maxPole=
Math.max(
...data.stats.pole
)

const maxPoints=
Math.max(
...data.stats.points
)



animateNumber(

document.getElementById(
"russellQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"russellQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"russellRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"russellRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"russellPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"russellPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"russellWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"russellWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"russellPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"russellPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"russellPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"russellPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"russellBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"russellBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"russellBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"russellBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"russellBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"russellBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"russellBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"russellBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"russellBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"russellBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"russellBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"russellBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
russellData[
index
]



mateImg.style.opacity=0



setTimeout(()=>{

mateImg.src=
d.img

mateImg.style.opacity=1

},250)



mateFirst.textContent=
d.first

mateLast.textContent=
d.last

years.textContent=
d.years



updateStats(
d
)



document
.querySelectorAll(
".russell-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.russell-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".russell-tab"
)

.forEach(

btn=>{

btn.onclick=()=>{

current=

Number(

btn.dataset.id

)



render(
current
)

}

}

)



document
.querySelector(
".russell-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

russellData
.length-1



render(
current
)

}



document
.querySelector(
".russell-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
russellData.length

)

current=0



render(
current
)

}



render(0) 