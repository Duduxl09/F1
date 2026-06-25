document.addEventListener("DOMContentLoaded", function(){

/*//////////*///////
//////MENU///////////////
//////////////////


const togglealex = document.getElementById("menuTogglealex");
const menualex = document.getElementById("sideMenualex");
const overlayalex = document.getElementById("overlayalex");
const closealex = document.getElementById("closeMenualex");

const linksMenualex = document.querySelectorAll(".side-menu-alex a");

function fecharMenualex() {
  if (menualex) menualex.classList.remove("active");
  if (overlayalex) overlayalex.classList.remove("active");
}

if (togglealex) {
  togglealex.addEventListener("click", () => {
    menualex?.classList.add("active");
    overlayalex?.classList.add("active");
  });
}

if (closealex) {
  closealex.addEventListener("click", fecharMenualex);
}

if (overlayalex) {
  overlayalex.addEventListener("click", fecharMenualex);
}

linksMenualex.forEach(link => {
  link.addEventListener("click", fecharMenualex);
});

/*//////////*///////
//////SCROLL///////////////
//////////////////

(function scrollLinksalex() {

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

const alexBanner = document.querySelector(".alex-banner-bg");

if(alexBanner){

  alexBanner.addEventListener("mousemove", (e)=>{

    const rect = alexBanner.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    alexBanner.style.setProperty("--mouse-x", x + "px");
    alexBanner.style.setProperty("--mouse-y", y + "px");

  });

}

/*//////////*///////
//////SLIDER///////////////
//////////////////

const track =
  document.querySelector(".slider-alex-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-alex");

  const dotsContainer =
    document.querySelector(".dots-alex");

  const bg =
    document.querySelector(".bg-slider-alex");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-alex");

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
    document.querySelectorAll(".dot-alex");

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

  const secao = document.querySelector(".numeros-alex");
  const bg = document.querySelector(".bg-numeros-alex");

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

const cards = document.querySelectorAll(".animar-alex");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-alex");

        const barra =
          card.querySelector(".barra-velocidade-alex");

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
    document.querySelector(".titulo-animar-alex");

  if(!titulo) return;

  const pos =
    titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){

    titulo.classList.add("show");

  }

});



const alexTemporadas = {
     
     "2019": [
  { gp:"Australia", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Bahrain", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"China", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Spain", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Monaco", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Canada", pos:"P19", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"France", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Austria", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Great Britain", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Germany", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },
  { gp:"Hungary", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Toro Rosso", logo:"RB/toro.png" },

  { gp:"Belgium", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png", troca:true },
  { gp:"Italy", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Singapore", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Russia", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Japan", pos:"P4", pontos:"12", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Mexico", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"United States", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Brazil", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" }
],
     
     "2020": [
  { gp:"Austria", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Styria", pos:"P4", pontos:"12", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Hungary", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"70th Anniversary", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Spain", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Belgium", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Italy", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Tuscany", pos:"P3", pontos:"15", tipo:"alex-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Russia", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Eifel", pos:"P17", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Portugal", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Emilia Romagna", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Turkey", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Bahrain", pos:"P3", pontos:"15", tipo:"alex-podio", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Sakhir", pos:"P6", pontos:"8", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" },
  { gp:"Abu Dhabi", pos:"P4", pontos:"12", tipo:"alex-pontos", equipe:"Red Bull", logo:"icons/redbull.png" }
],
     
     "2022": [
  { gp:"Bahrain", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Australia", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Emilia Romagna", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Miami", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P18", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P18", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P20", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"France", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P17", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P17", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P20", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico City", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"São Paulo", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],
     
    "2023": [
  { gp:"Bahrain", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P19", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Australia", pos:"P19", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Miami", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P16", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P16", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico City", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"São Paulo", pos:"P19", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Las Vegas", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
], 
     
     "2024": [
  { gp:"Bahrain", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Australia", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P20", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Miami", pos:"P18", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Emilia Romagna", pos:"P20", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P17", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P18", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Hungary", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P20", pontos:"0", tipo:"alex-dnf", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P16", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico City", pos:"P19", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"São Paulo", pos:"P18", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Las Vegas", pos:"P19", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
],
     
     "2025": [
  { gp:"Australia", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"China", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Japan", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Bahrain", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Saudi Arabia", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Miami", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Emilia Romagna", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Monaco", pos:"P9", pontos:"2", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Spain", pos:"P10", pontos:"1", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Canada", pos:"P8", pontos:"4", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Austria", pos:"P15", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Great Britain", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Belgium", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Netherlands", pos:"P5", pontos:"10", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Italy", pos:"P7", pontos:"6", tipo:"alex-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Azerbaijan", pos:"P13", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Singapore", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"United States", pos:"P14", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Mexico City", pos:"P12", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"São Paulo", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Las Vegas", pos:"P16", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Qatar", pos:"P11", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" },
  { gp:"Abu Dhabi", pos:"P16", pontos:"0", tipo:"alex-sem-pontos", equipe:"Williams", logo:"icons/WilliamsF1.png" }
]
     
     
     
};
const alexCampeonato = {
    
    "2019": {
  posicao: "8º",
  pontos: 92
},
    
  "2020": {
  posicao: "7º",
  pontos: 105
},  
    
  "2022": {
  posicao: "19º",
  pontos: 4
},  
    
   "2023": {
  posicao: "13º",
  pontos: 27
},

     "2024": {
  posicao: "16º",
  pontos: 12
},

    "2025": {
  posicao: "11º",
  pontos: 43
} 
     
     
};


const alexContainer =
document.querySelector(".alex-corridas-container");

const alexSummary =
document.querySelector(".alex-season-summary");

const alexBtns =
document.querySelectorAll(".alex-ano-btn");



if (alexContainer && alexBtns.length > 0) {

  function carregarTemporada(ano) {

    alexContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = alexTemporadas[ano];

const anos = Object.keys(alexTemporadas);

const indexAno = anos.indexOf(ano);

const anoAnterior = anos[indexAno - 1];

let equipeTemporadaAnterior = null;

if (anoAnterior) {

  const ultimaCorrida =
  alexTemporadas[anoAnterior]
  [alexTemporadas[anoAnterior].length - 1];

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
      `alex-corrida-card ${corrida.tipo}`;

if (mudouEquipe) {
  card.classList.add("alex-team-change");
}

if (mudouEquipe) {
  transferHTML = `
    <div class="transfer-tag-alex">
      TRANSFER → ${corrida.equipe}
    </div>
  `;
}


card.innerHTML = `
${transferHTML}

  <span class="alex-gp">
    ${corrida.gp} GP
  </span>

  <div class="alex-team">
    <img src="${corrida.logo}" class="alex-team-logo">
  </div>

  <span class="alex-resultado">
    ${corrida.pos}
  </span>

  <span class="alex-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;
      

      alexContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);
      
equipeAnterior = corrida.equipe;

    });

    /* ===== RESUMO ===== */

    const resumo = alexCampeonato[ano];

    if (alexSummary) {

      alexSummary.innerHTML = `
        <div class="alex-summary-card show">

          <h3 class="alex-summary-title">
            Season ${ano}
          </h3>

          <div class="alex-summary-stats">

            <div class="alex-summary-box">

              <span class="alex-summary-label">
                Position
              </span>

              <span class="alex-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="alex-summary-box">

              <span class="alex-summary-label">
                Points
              </span>

              <span class="alex-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  alexBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      alexBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2019");

}


/*//////////*///////
//////PILOTAGEM///////////////
//////////////////


const elementos = document.querySelectorAll(".reveal-alex");

function animarPilotagem() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      el.classList.add("active");

      /* ANIMAR BARRAS */
      const barra = el.querySelector(".barra-alex div");

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

  const grafico = document.querySelector(".linha-alex");

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {
    grafico.style.strokeDashoffset = "0";
  }

}

window.addEventListener("scroll", animarGrafico);


/*//////////////////////////////////////////
RADIO
//*////////////////////////////////////////

const section = document.querySelector(".radio-f1-alex");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-alex");

const fraseEng = '"P1 alex, amazing race!"';
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

const spans = document.querySelectorAll(".wave-alex span");

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
  
  
  
  const itens = document.querySelectorAll(".item-galeria-alex");
const lightbox = document.querySelector(".lightbox-alex");
const imgLightbox = document.querySelector(".img-lightbox-alex");
const fechar = document.querySelector(".fechar-alex");

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



const albonData=[



{

first:"DANIIL",

last:"KVYAT",

img:"alex/kvyat.png",

years:"2019",

stats:{

quali:[10,2],

races:[8,4],

podiums:[0,1],

wins:[0,0],

pole:[0,0],

points:[76,37]

}

},


	
{

first:"MAX",

last:"VERSTAPPEN",

img:"alex/verstappen.png",

years:"2019 — 2020",

stats:{

quali:[1,25],

races:[9,17],

podiums:[2,15],

wins:[0,3],

pole:[0,1],

points:[181,311]

}

},

{

first:"NICHOLAS",

last:"LATIFI",

img:"alex/latifi.png",

years:"2022 — 2023",

stats:{

quali:[42,2],

races:[24,10],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[54,23]

}

},

{

first:"LOGAN",

last:"SARGEANT",

img:"alex/sargeant.png",

years:"2023 — 2024",

stats:{

quali:[34,7],

races:[22,10],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[39,1]

}

},

{

first:"FRANCO",

last:"COLAPINTO",

img:"alex/colapinto.png",

years:"2024",

stats:{

quali:[6,3],

races:[6,2],

podiums:[0,0],

wins:[0,0],

pole:[0,0],

points:[12,5]

}

},

{

first:"CARLOS",

last:"SAINZ",

img:"alex/sainz.png",

years:"2025",

stats:{

quali:[10,14],

races:[14,9],

podiums:[0,2],

wins:[0,0],

pole:[0,0],

points:[73,64]

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
"albonYears"
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
"albonQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"albonQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"albonRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"albonRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"albonPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"albonPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"albonWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"albonWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"albonPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"albonPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"albonPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"albonPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"albonBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"albonBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"albonBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"albonBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"albonBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"albonBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"albonBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"albonBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"albonBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"albonBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"albonBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"albonBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
albonData[
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
".albon-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.albon-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".albon-tab"
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
".albon-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

albonData
.length-1



render(
current
)

}



document
.querySelector(
".albon-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
albonData.length

)

current=0



render(
current
)

}



render(0) 