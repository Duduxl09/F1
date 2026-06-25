document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglecharles = document.getElementById("menuTogglecharles");
const menucharles = document.getElementById("sideMenucharles");
const overlaycharles = document.getElementById("overlaycharles");
const closecharles = document.getElementById("closeMenucharles");

const linksMenucharles = document.querySelectorAll(".side-menu-charles a");

function fecharMenucharles() {
  if (menucharles) menucharles.classList.remove("active");
  if (overlaycharles) overlaycharles.classList.remove("active");
}

if (togglecharles) {
  togglecharles.addEventListener("click", () => {
    menucharles?.classList.add("active");
    overlaycharles?.classList.add("active");
  });
}

if (closecharles) {
  closecharles.addEventListener("click", fecharMenucharles);
}

if (overlaycharles) {
  overlaycharles.addEventListener("click", fecharMenucharles);
}

linksMenucharles.forEach(link => {
  link.addEventListener("click", fecharMenucharles);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinkscharles() {

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

/*//////////*///////
//////BANNER///////////////
//////////////////

const charlesBanner = document.querySelector(".charles-banner-bg");

if(charlesBanner){

  charlesBanner.addEventListener("mousemove", (e)=>{

    const rect = charlesBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    charlesBanner.style.setProperty("--mouse-x", x + "px");
    charlesBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-charles-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-charles");

  const dotsContainer =
    document.querySelector(".dots-charles");

  const bg =
    document.querySelector(".bg-slider-charles");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-charles");

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
    document.querySelectorAll(".dot-charles");

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

  const nextBtn =
    document.querySelector(".next");

  const prevBtn =
    document.querySelector(".prev");

  if(nextBtn){

    nextBtn.onclick = ()=>{

      index++;

      if(index >= slides.length){
        index = 0;
      }

      updateSlide();

    };

  }

  if(prevBtn){

    prevBtn.onclick = ()=>{

      index--;

      if(index < 0){
        index = slides.length - 1;
      }

      updateSlide();

    };

  }

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

    if(diff > 50) index++;

    if(diff < -50) index--;

    if(index >= slides.length){
      index = 0;
    }

    if(index < 0){
      index = slides.length - 1;
    }

    updateSlide();

  });

  updateSlide();

}

/*//////////*///////
//////NUMEROS///////////////
//////////////////

window.addEventListener("scroll", function(){

  const secao = document.querySelector(".numeros-charles");
  const bg = document.querySelector(".bg-numeros-charles");

  if(!secao || !bg) return;

  const rect = secao.getBoundingClientRect();
  const alturaTela = window.innerHeight;

  if(rect.top < alturaTela && rect.bottom > 0){

    let progresso = rect.top / alturaTela;

    bg.style.transform =
      "translateY(" + progresso * 80 + "px) scale(1.05)";
  }

});


/* =========================
   CONTADORES
========================= */

const cards = document.querySelectorAll(".animar-charles");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-charles");

        const barra =
          card.querySelector(".barra-velocidade-charles");

        if(!contador.classList.contains("contado")){

          contador.classList.add("contado");

          const target =
            +contador.getAttribute("data-target");

          let count = 0;

          const update = ()=>{

            const increment = target / 200;

            if(count < target){

              count += increment;

              contador.innerText =
                Math.floor(count);

              if(barra){
                barra.style.width =
                  (count/target*100)+"%";
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

window.addEventListener("scroll", animar);
animar();

/* =========================
   TITULO ANIMADO
========================= */

window.addEventListener("scroll", ()=>{

  const titulo =
    document.querySelector(".titulo-animar-charles");

  if(!titulo) return;

  const pos =
    titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){

    titulo.classList.add("show");

  }

});


/*//////////*///////
//////TEMPORADAS///////////////
//////////////////

const charlesTemporadas = {
    "2018": [
  { gp:"Australia", pos:"P13", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"China", pos:"P19", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Azerbaijan", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Spain", pos:"P10", pontos:"1", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Monaco", pos:"P18", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Canada", pos:"P10", pontos:"1", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"France", pos:"P10", pontos:"1", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Austria", pos:"P9", pontos:"2", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Great Britain", pos:"P19", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Germany", pos:"P15", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Hungary", pos:"P20", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Belgium", pos:"P18", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Italy", pos:"P11", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Singapore", pos:"P9", pontos:"2", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Russia", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Japan", pos:"P18", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"United States", pos:"P15", pontos:"0", tipo:"charles-sem-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Mexico", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Brazil", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" },
  { gp:"Abu Dhabi", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Sauber", logo:"audi/sauber.png" }
],

     "2019": [
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P3", pontos:"16", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P5", pontos:"11", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"France", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Germany", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P1", pontos:"25", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P4", pontos:"13", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P4", pontos:"13", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],
   
 "2020": [
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Styria", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"70th Anniversary", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Tuscany", pos:"P8", pontos:"4", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Russia", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Eifel", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Portugal", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Turkey", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Sakhir", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
],  
   
 "2021": [
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Portugal", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"DNS", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"France", pos:"P16", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Styria", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P8", pontos:"4", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P8", pontos:"2", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Russia", pos:"P15", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Turkey", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P8", pontos:"4", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" }
],  
   
   "2022": [
  { gp:"Bahrain", pos:"P1", pontos:"26", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P2", pontos:"19", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"P1", pontos:"26", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P6", pontos:"15", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P1", pontos:"32", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"France", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],
   
"2023": [
  { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P9", pontos:"2", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P7", pontos:"6", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Las Vegas", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],   
   
   "2024": [
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P3", pontos:"16", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"charles-dnf", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Canada", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Great Britain", pos:"P14", pontos:"0", tipo:"charles-sem-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Hungary", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Netherlands", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"United States", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Las Vegas", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Qatar", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" }
],
   
   "2025": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"China", pos:"P5", pontos:"10", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Saudi Arabia", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Miami", pos:"P4", pontos:"12", tipo:"charles-pontos", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"charles-podio", equipe:"Ferrari", logo:"icons/ferrari.png" },
  { gp:"Monaco", pos:"P1", pontos:"25", tipo:"charles-vitoria", equipe:"Ferrari", logo:"icons/ferrari.png" }
]
   
     
     
     
};
const charlesCampeonato = {
   "2018": {
  posicao: "13º",
  pontos: 39
},  
     
 "2019": {
  posicao: "4º",
  pontos: 264
},  

"2020": {
  posicao: "8º",
  pontos: 98
},
   
   "2021": {
  posicao: "7º",
  pontos: 159
},
   
   "2022": {
  posicao: "2º",
  pontos: 308
},
     
     "2023": {
  posicao: "5º",
  pontos: 206
},
     
     "2024": {
  posicao: "3º",
  pontos: 356
},
     
 "2025": {
  posicao: "3º",
  pontos: 114
}
     
};


const charlesContainer =
document.querySelector(".charles-corridas-container");

const charlesSummary =
document.querySelector(".charles-season-summary");

const charlesBtns =
document.querySelectorAll(".charles-ano-btn");



if (charlesContainer && charlesBtns.length > 0) {

  function carregarTemporada(ano) {

    charlesContainer.innerHTML = "";

   let equipeAnterior = null;

    const temporada = charlesTemporadas[ano];

    temporada.forEach((corrida, index) => {

      const card = document.createElement("div");

     const mudouEquipe =
(index === 0 && ano !== "2018") ||
(equipeAnterior && equipeAnterior !== corrida.equipe);

let transferHTML = "";

      card.className =
      `charles-corrida-card ${corrida.tipo}`;

       if (mudouEquipe) {
  card.classList.add("charles-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-charles">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}



      card.innerHTML = `
      ${transferHTML}
      
  <span class="charles-gp">
    ${corrida.gp} GP
  </span>

  <div class="charles-team">
    <img src="${corrida.logo}" class="charles-team-logo">
  </div>

  <span class="charles-resultado">
    ${corrida.pos}
  </span>

  <span class="charles-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;

      charlesContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);

     equipeAnterior = corrida.equipe;

    });
    

    /* ===== RESUMO ===== */

    const resumo = charlesCampeonato[ano];

    if (charlesSummary) {

      charlesSummary.innerHTML = `
        <div class="charles-summary-card show">

          <h3 class="charles-summary-title">
            Season ${ano}
          </h3>

          <div class="charles-summary-stats">

            <div class="charles-summary-box">

              <span class="charles-summary-label">
                Position
              </span>

              <span class="charles-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="charles-summary-box">

              <span class="charles-summary-label">
                Points
              </span>

              <span class="charles-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  charlesBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      charlesBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2018");


}

/*//////////*///////
//////GALERIA///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-charles");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-charles div");

      if (barra && !barra.classList.contains("ativo")) {
        barra.classList.add("ativo");

        const width = barra.getAttribute("data-width");
        barra.style.width = width;
      }
    }
  });
}

window.addEventListener("scroll", animarPilotagem);
animarPilotagem();

function animarGrafico() {

  const grafico = document.querySelector(".linha-charles");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-charles");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-charles");

const fraseEng = '"P1 charles, amazing race!"';
const frasePil = '"Thank you guys, car was perfect!"';

let i = 0;
let j = 0;
let timeouts = [];

/* RESET */
function resetar() {
  audio.pause();
  audio.currentTime = 0;

  engText.innerHTML = "";
  pilText.innerHTML = "";

  i = 0;
  j = 0;

  card.classList.remove("ativo", "falando", "saindo");

  /* 👇 fecha conteúdo */
  content.style.height = "0px";

  timeouts.forEach(t => clearTimeout(t));
  timeouts = [];
}

/* ESCREVER ENGENHEIRO */
function escreverEng() {
  if (i < fraseEng.length) {
    engText.innerHTML += fraseEng[i++];
    timeouts.push(setTimeout(escreverEng, 20));
  }
}

/* ESCREVER PILOTO */
function escreverPil() {
  if (j < frasePil.length) {
    pilText.innerHTML += frasePil[j++];
    timeouts.push(setTimeout(escreverPil, 20));
  }
}

/* INICIAR */
function iniciar() {
  resetar();

card.classList.remove("mostrar-texto");

  audio.currentTime = 0;
  audio.play().catch(()=>{});

  card.classList.add("ativo");

  content.style.height = "0px";
  content.offsetHeight;

  // wave liga
  timeouts.push(setTimeout(() => {
    card.classList.add("falando");
  }, 300));

  // 👇 cresce + sobe (engenheiro)
  timeouts.push(setTimeout(() => {
    content.style.height = "120px";
    card.classList.add("mostrar-texto");
    escreverEng();
  }, 800));

  // 👇 expande mais (piloto)
  timeouts.push(setTimeout(() => {
    content.style.height = "220px";
  }, 2000));

  // piloto
  timeouts.push(setTimeout(() => {
    escreverPil();
  }, 2100));

  // desliga rádio
  timeouts.push(setTimeout(() => {
    card.classList.remove("falando");
  }, 3000));

  // some
  timeouts.push(setTimeout(() => {
    card.classList.add("saindo");
  }, 3500));
}

/* CLIQUE */
section.addEventListener("click", iniciar);

const spans = document.querySelectorAll(".wave-charles span");

spans.forEach((span, index) => {
  span.style.setProperty("--i", index);
});


const topBtn = document.querySelector('a[href="#top"]');

if(topBtn){
  topBtn.addEventListener("click", function(e){
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
  
  
      /*/////////////////////////////////////
  GALERIA
  ////////////////////////////////////*/
  
  
  
  const itens = document.querySelectorAll(".item-galeria-charles");
const lightbox = document.querySelector(".lightbox-charles");
const imgLightbox = document.querySelector(".img-lightbox-charles");
const fechar = document.querySelector(".fechar-charles");

/* ABRIR */
itens.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img").src;
    imgLightbox.src = img;
    lightbox.style.display = "flex";
  });
});

/* FECHAR */
fechar.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target !== imgLightbox) {
    lightbox.style.display = "none";
  }
};





const leclercData=[

{

first:"MARCUS",

last:"ERICSSON",

img:"charles/ericsson.png",

years:"2018",

stats:{

quali:[17,4],

races:[10,9],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[39,9]

}

},



{

first:"SEBASTIAN",

last:"VETTEL",

img:"charles/vettel.png",

years:"2019 — 2020",

stats:{

quali:[29,12],

races:[20,14],

podiums:[14,12],

wins:[2,1],

pole:[10,2],

points:[362,258]

}

},



{

first:"CARLOS",

last:"SAINZ",

img:"charles/sainz.png",

years:"2021 — 2024",

stats:{

quali:[58,30],

races:[43,41],

podiums:[43,25],

wins:[8,4],

pole:[20,5],

points:[932,847]

}

},



{

first:"LEWIS",

last:"HAMILTON",

img:"charles/lewis.png",

years:"2025",

stats:{

quali:[19,5],

races:[20,4],

podiums:[7,0],

wins:[0,0],

pole:[1,0],

points:[242,156]

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
"leclercYears"
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
"leclercQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"leclercQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"leclercRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"leclercRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"leclercPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"leclercPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"leclercWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"leclercWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"leclercPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"leclercPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"leclercPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"leclercPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"leclercBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"leclercBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"leclercBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"leclercBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"leclercBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"leclercBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"leclercBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"leclercBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"leclercBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"leclercBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"leclercBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"leclercBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
leclercData[
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
".leclerc-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.leclerc-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".leclerc-tab"
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
".leclerc-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

leclercData
.length-1



render(
current
)

}



document
.querySelector(
".leclerc-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
leclercData.length

)

current=0



render(
current
)

}



render(0) 