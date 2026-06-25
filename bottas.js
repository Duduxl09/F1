document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglebottas = document.getElementById("menuTogglebottas");
const menubottas = document.getElementById("sideMenubottas");
const overlaybottas = document.getElementById("overlaybottas");
const closebottas = document.getElementById("closeMenubottas");

const linksMenubottas = document.querySelectorAll(".side-menu-bottas a");

function fecharMenubottas() {
  if (menubottas) menubottas.classList.remove("active");
  if (overlaybottas) overlaybottas.classList.remove("active");
}

if (togglebottas) {
  togglebottas.addEventListener("click", () => {
    menubottas?.classList.add("active");
    overlaybottas?.classList.add("active");
  });
}

if (closebottas) {
  closebottas.addEventListener("click", fecharMenubottas);
}

if (overlaybottas) {
  overlaybottas.addEventListener("click", fecharMenubottas);
}

linksMenubottas.forEach(link => {
  link.addEventListener("click", fecharMenubottas);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksbottas() {

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

const bottasBanner = document.querySelector(".bottas-banner-bg");

if(bottasBanner){

  bottasBanner.addEventListener("mousemove", (e)=>{

    const rect = bottasBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    bottasBanner.style.setProperty("--mouse-x", x + "px");
    bottasBanner.style.setProperty("--mouse-y", y + "px");

  });

}


/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-bottas-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-bottas");

  const dotsContainer =
    document.querySelector(".dots-bottas");

  const bg =
    document.querySelector(".bg-slider-bottas");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-bottas");

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
    document.querySelectorAll(".dot-bottas");

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

  const secao = document.querySelector(".numeros-bottas");
  const bg = document.querySelector(".bg-numeros-bottas");

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

const cards = document.querySelectorAll(".animar-bottas");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-bottas");

        const barra =
          card.querySelector(".barra-velocidade-bottas");

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
    document.querySelector(".titulo-animar-bottas");

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

const bottasTemporadas = {
     "2013": [
  { gp:"Australia", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Germany", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Korea", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"India", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
], 
     
   "2014": [
  { gp:"Australia", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Germany", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P10", pontos:"1", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"30", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],  
     
  "2015": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P9", pontos:"2", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],
 "2016": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P9", pontos:"2", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Russia", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Europe", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United Kingdom", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P9", pontos:"2", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Germany", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Malaysia", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Brazil", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
], 
 "2017": [
  { gp:"Australia", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"China", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United Kingdom", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Malaysia", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Brazil", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],
 "2018": [
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"China", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"France", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United Kingdom", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Germany", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Russia", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Brazil", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],
 "2019": [
  { gp:"Australia", pos:"P1", pontos:"26", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Bahrain", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"China", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Canada", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"France", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United Kingdom", pos:"P2", pontos:"19", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Germany", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Singapore", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Japan", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P4", pontos:"13", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Brazil", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],
 "2020": [
  { gp:"Austria", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Styria", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United Kingdom", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"70th Anniversary", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Tuscany", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Russia", pos:"P1", pontos:"26", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Eifel", pos:"PDNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Portugal", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Emilia Romagna", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Turkey", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Sakhir", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],
 "2021": [
  { gp:"Bahrain", pos:"P3", pontos:"16", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Emilia Romagna", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Portugal", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Spain", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Monaco", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Azerbaijan", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"France", pos:"P4", pontos:"12", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Styria", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Austria", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United Kingdom", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Hungary", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Belgium", pos:"P3", pontos:"7.5", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Netherlands", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Italy", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Russia", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Turkey", pos:"P1", pontos:"25", tipo:"bottas-vitoria", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"United States", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Mexico", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Brazil", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Qatar", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Saudi Arabia", pos:"P3", pontos:"15", tipo:"bottas-podio", equipe:"Mercedes", logo:"icons/Mercedesa.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Mercedes", logo:"icons/Mercedesa.png" }
],
 
 "2022": [
  { gp:"Bahrain", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Saudi Arabia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Australia", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Emilia Romagna", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Miami", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Spain", pos:"P6", pontos:"8", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"United Kingdom", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"France", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Hungary", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Netherlands", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Italy", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Japan", pos:"P5", pontos:"10", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"United States", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Mexico", pos:"P10", pontos:"1", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Brazil", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" }
],
 
"2023": [
  { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Saudi Arabia", pos:"P18", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Azerbaijan", pos:"P18", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Miami", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Monaco", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Spain", pos:"P19", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Austria", pos:"P10", pontos:"1", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"United Kingdom", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Hungary", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Netherlands", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Italy", pos:"P10", pontos:"1", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Singapore", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Qatar", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"United States", pos:"P8", pontos:"4", tipo:"bottas-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Brazil", pos:"P17", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Las Vegas", pos:"P17", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" },
  { gp:"Abu Dhabi", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Alfa Romeo", logo:"audi/alfa.png" }
],  
 "2024": [
  { gp:"Bahrain", pos:"P19", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Saudi Arabia", pos:"P17", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Australia", pos:"DNF", pontos:"0", tipo:"bottas-dnf", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Japan", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"China", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Miami", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Emilia Romagna", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Monaco", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Austria", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"United Kingdom", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Hungary", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Netherlands", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Italy", pos:"P18", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Singapore", pos:"P15", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"United States", pos:"P16", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Mexico", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Brazil", pos:"P12", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Las Vegas", pos:"P17", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Qatar", pos:"P14", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" },
  { gp:"Abu Dhabi", pos:"P17", pontos:"0", tipo:"bottas-sem-pontos", equipe:"Kick Sauber", logo:"icons/kick.png" }
] 
     



};
const bottasCampeonato = {
     "2013": {
  posicao: "17º",
  pontos: 4
},
"2014": {
  posicao: "4º",
  pontos: 186
},
     
  "2015": {
  posicao: "5º",
  pontos: 136
},   
"2016": {
  posicao: "8º",
  pontos: 85
},
 "2017": {
  posicao: "3º",
  pontos: 305
},  
"2018": {
  posicao: "5º",
  pontos: 247
},  
 "2019": {
  posicao: "2º",
  pontos: 326
}, 
 "2020": {
  posicao: "2º",
  pontos: 223
}, 
 "2021": {
  posicao: "3º",
  pontos: 226
}, 
  "2022": {
  posicao: "10º",
  pontos: 49
},
 "2023": {
  posicao: "15º",
  pontos: 10
}, 
   
  "2024": {
  posicao: "22º",
  pontos: 0
}
   
     

};
     
     const bottasContainer =
document.querySelector(".bottas-corridas-container");

const bottasSummary =
document.querySelector(".bottas-season-summary");

const bottasBtns =
document.querySelectorAll(".bottas-ano-btn");



if (bottasContainer && bottasBtns.length > 0) {

  function carregarTemporada(ano) {

    bottasContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = bottasTemporadas[ano];

const anos = Object.keys(bottasTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  bottasTemporadas[anoAnterior]
  [bottasTemporadas[anoAnterior].length - 1];

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
      `bottas-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("bottas-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-bottas">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="bottas-gp">
    ${corrida.gp} GP
  </span>

  <div class="bottas-team">
    <img src="${corrida.logo}" class="bottas-team-logo">
  </div>

  <span class="bottas-resultado">
    ${corrida.pos}
  </span>

  <span class="bottas-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      bottasContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = bottasCampeonato[ano];

    if (bottasSummary) {

      bottasSummary.innerHTML = `
        <div class="bottas-summary-card show">

          <h3 class="bottas-summary-title">
            Season ${ano}
          </h3>

          <div class="bottas-summary-stats">

            <div class="bottas-summary-box">

              <span class="bottas-summary-label">
                Position
              </span>

              <span class="bottas-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="bottas-summary-box">

              <span class="bottas-summary-label">
                Points
              </span>

              <span class="bottas-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  bottasBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      bottasBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2013");

}
     

/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-bottas");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-bottas div");

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

  const grafico = document.querySelector(".linha-bottas");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-bottas");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-bottas");

const fraseEng = '"P1 bottas, amazing race!"';
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

const spans = document.querySelectorAll(".wave-bottas span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-bottas");
const lightbox = document.querySelector(".lightbox-bottas");
const imgLightbox = document.querySelector(".img-lightbox-bottas");
const fechar = document.querySelector(".fechar-bottas");

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


const valteriData=[

{

first:"PASTOR",

last:"MALDONADO",

img:"bottas/maldonado.png",

years:"2013",

stats:{

quali:[14,5],

races:[10,8],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[4,1]

}

},

{

first:"FELIPE",

last:"MASSA",

img:"bottas/massa.png",

years:"2014 — 2016",

stats:{

quali:[41,17],

races:[28,28],

podiums:[9,8],

wins:[0,0],

pole:[1,1],

points:[411,362]

}

},

{

first:"LEWIS",

last:"HAMILTON",

img:"bottas/hamilton.png",

years:"2017 — 2021",

stats:{

quali:[26,71],

races:[25,74],

podiums:[58,78],

wins:[10,50],

pole:[20,42],

points:[1038,1413]

}

},

{

first:"ZHOU",

last:"GUANYU",

img:"bottas/zhou.png",

years:"2022 — 2024",

stats:{

quali:[44,18],

races:[29,22],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[59,16]

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
"valteriYears"
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
"valteriQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"valteriQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"valteriRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"valteriRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"valteriPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"valteriPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"valteriWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"valteriWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"valteriPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"valteriPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"valteriPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"valteriPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"valteriBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"valteriBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"valteriBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"valteriBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"valteriBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"valteriBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"valteriBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"valteriBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"valteriBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"valteriBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"valteriBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"valteriBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
valteriData[
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
".valteri-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.valteri-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".valteri-tab"
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
".valteri-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

valteriData
.length-1



render(
current
)

}



document
.querySelector(
".valteri-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
valteriData.length

)

current=0



render(
current
)

}



render(0) 