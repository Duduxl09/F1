document.addEventListener("DOMContentLoaded", function(){

/* =========================
   PARALLAX + ZOOM
========================= */

window.addEventListener("scroll", function(){

  const secao = document.querySelector(".numeros-piastri");
  const bg = document.querySelector(".bg-numeros-piastri");

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

const cards = document.querySelectorAll(".animar-piastri");

function animar(){

  const topoTela = window.innerHeight;

  cards.forEach((card,index)=>{

    const posicao = card.getBoundingClientRect().top;

    if(posicao < topoTela - 100){

      setTimeout(()=>{

        card.classList.add("ativo");

        const contador =
          card.querySelector(".contador-piastri");

        const barra =
          card.querySelector(".barra-velocidade-piastri");

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
    document.querySelector(".titulo-animar-piastri");

  if(!titulo) return;

  const pos =
    titulo.getBoundingClientRect().top;

  if(pos < window.innerHeight - 120){

    titulo.classList.add("show");

  }

});


/* =========================
   REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revelar() {

  const windowHeight = window.innerHeight;

  reveals.forEach(el => {

    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - 100) {

      el.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revelar);
revelar();

/* =========================
   SLIDER
========================= */

const track =
  document.querySelector(".slider-piastri-track");

if(track){

  const slides =
    document.querySelectorAll(".slide-piastri");

  const dotsContainer =
    document.querySelector(".dots-piastri");

  const bg =
    document.querySelector(".bg-slider-piastri");

  let index = 0;

  slides.forEach((_, i) => {

    const dot = document.createElement("div");

    dot.classList.add("dot-piastri");

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
    document.querySelectorAll(".dot-piastri");

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

/* ===== TEMPORADAS ===== */

const piastriTemporadas = {

  "2023": [
    { gp:"Bahrain", pos:"DNF", pontos:"0", tipo:"piastri-dnf" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Saudi Arabia", pos:"P15", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Australia", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Azerbaijan", pos:"P11", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Miami", pos:"P19", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Monaco", pos:"P10", pontos:"1", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Spain", pos:"P13", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Canada", pos:"P11", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Austria", pos:"P16", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Hungary", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Belgium", pos:"DNF", pontos:"0", tipo:"piastri-dnf" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Netherlands", pos:"P9", pontos:"2", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Italy", pos:"P12", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Singapore", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Japan", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Qatar", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"United States", pos:"DNF", pontos:"0", tipo:"piastri-dnf" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Mexico", pos:"P7", pontos:"6", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Brazil", pos:"P14", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Las Vegas", pos:"P10", pontos:"1", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Abu Dhabi", pos:"P6", pontos:"8", tipo:"piastri-pontos",equipe:"Mclaren", logo:"icons/mclaren.png" }
  ],

  "2024": [
    { gp:"Bahrain", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Saudi Arabia", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Australia", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Japan", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"China", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Miami", pos:"P13", pontos:"0", tipo:"piastri-sem-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Emilia Romagna", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Monaco", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Canada", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Spain", pos:"P7", pontos:"6", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Austria", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Great Britain", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Hungary", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Belgium", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Netherlands", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Italy", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Azerbaijan", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Singapore", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"United States", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Mexico", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Brazil", pos:"P8", pontos:"4", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Las Vegas", pos:"P7", pontos:"6", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Qatar", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Abu Dhabi", pos:"P10", pontos:"1", tipo:"piastri-pontos",equipe:"Mclaren", logo:"icons/mclaren.png" }
  ],

  "2025": [
    { gp:"Australia", pos:"P9", pontos:"2", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"China", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Japan", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Bahrain", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Saudi Arabia", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Miami", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Emilia Romagna", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Monaco", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Spain", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Canada", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Austria", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Great Britain", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Belgium", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Hungary", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Netherlands", pos:"P1", pontos:"25", tipo:"piastri-vitoria" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Italy", pos:"P3", pontos:"15", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Azerbaijan", pos:"DNF", pontos:"0", tipo:"piastri-dnf" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Singapore", pos:"P4", pontos:"12", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"United States", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Mexico", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Brazil", pos:"P5", pontos:"10", tipo:"piastri-pontos" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Las Vegas", pos:"DSQ", pontos:"0", tipo:"piastri-dnf" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Qatar", pos:"P2", pontos:"18", tipo:"piastri-podio" , equipe:"Mclaren", logo:"icons/mclaren.png" },
    { gp:"Abu Dhabi", pos:"P2", pontos:"18", tipo:"piastri-podio",equipe:"Mclaren", logo:"icons/mclaren.png" }
  ]

};



const piastriCampeonato = {

  "2023": {
    posicao: "9º",
    pontos: 97
  },

  "2024": {
    posicao: "4º",
    pontos: 292
  },

  "2025": {
    posicao: "3º",
    pontos: 410
  }

};



const piastriContainer =
document.querySelector(".piastri-corridas-container");

const piastriSummary =
document.querySelector(".piastri-season-summary");

const piastriBtns =
document.querySelectorAll(".piastri-ano-btn");



if (piastriContainer && piastriBtns.length > 0) {

  function carregarTemporada(ano) {

    piastriContainer.innerHTML = "";

    let equipeAnterior = null;

    const temporada = piastriTemporadas[ano];

    temporada.forEach((corrida, index) => {

      const card = document.createElement("div");

const mudouEquipe = equipeAnterior && equipeAnterior !== corrida.equipe;

      card.className =
      `piastri-corrida-card ${corrida.tipo}`;

     if (mudouEquipe) {
  card.classList.add("piastri-team-change");

}

  if (mudouEquipe) {
  const tag = document.createElement("div");
  tag.className = "transfer-tag-piastri";
  tag.textContent = `TRANSFER → ${corrida.equipe}`;

  card.appendChild(tag);
}

card.innerHTML = `
  <span class="piastri-gp">
    ${corrida.gp} GP
  </span>

  <div class="piastri-team">
    <img src="${corrida.logo}" class="piastri-team-logo">
  </div>

  <span class="piastri-resultado">
    ${corrida.pos}
  </span>

  <span class="piastri-pontos-texto">
    ${corrida.pontos} pts
  </span>
`;



      
      piastriContainer.appendChild(card);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 70);

     equipeAnterior = corrida.equipe;
    });

    /* ===== RESUMO ===== */

    const resumo = piastriCampeonato[ano];

    if (piastriSummary) {

      piastriSummary.innerHTML = `
        <div class="piastri-summary-card show">

          <h3 class="piastri-summary-title">
            Season ${ano}
          </h3>

          <div class="piastri-summary-stats">

            <div class="piastri-summary-box">

              <span class="piastri-summary-label">
                Position
              </span>

              <span class="piastri-summary-value">
                ${resumo.posicao}
              </span>

            </div>

            <div class="piastri-summary-box">

              <span class="piastri-summary-label">
                Points
              </span>

              <span class="piastri-summary-value">
                ${resumo.pontos}
              </span>

            </div>

          </div>

        </div>
      `;

    }

  }



  piastriBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      piastriBtns.forEach(b => {
        b.classList.remove("active");
      });

      btn.classList.add("active");

      carregarTemporada(btn.dataset.year);

    });

  });



  carregarTemporada("2023");

}



/* ===== PILOTAGEM ===== */

const elementos = document.querySelectorAll(".reveal-piastri");

function animarPilotagem() {

  const alturaTela = window.innerHeight;

  elementos.forEach(el => {

    const topo = el.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {

      el.classList.add("active");

      /* ===== BARRAS ===== */
      const barra = el.querySelector(".barra-piastri div");

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



/* ===== GRÁFICO ===== */

function animarGrafico() {

  const grafico = document.querySelector(".linha-piastri");

  if (!grafico) return;

  const pos = grafico.getBoundingClientRect().top;

  if (pos < window.innerHeight - 100) {

    grafico.style.strokeDashoffset = "0";

  }

}

window.addEventListener("scroll", animarGrafico);

animarGrafico();


/* =========================================
   RADIO F1 PIastri
========================================= */

const section = document.querySelector(".radio-f1-piastri");
const card = document.getElementById("radioCard");
const audio = document.getElementById("radio-audio");

const engText = document.getElementById("eng-text");
const pilText = document.getElementById("pil-text");

const content = document.querySelector(".content-piastri");

const fraseEng = '"P1 Oscar, amazing race!"';
const frasePil = '"Thank you guys, car was perfect!"';

let i = 0;
let j = 0;
let timeouts = [];

/* RESET */
function resetarRadio() {

  if(audio){
    audio.pause();
    audio.currentTime = 0;
  }

  if(engText) engText.innerHTML = "";
  if(pilText) pilText.innerHTML = "";

  i = 0;
  j = 0;

  if(card){
    card.classList.remove(
      "ativo",
      "falando",
      "saindo",
      "mostrar-texto"
    );
  }

  if(content){
    content.style.height = "0px";
  }

  timeouts.forEach(t => clearTimeout(t));
  timeouts = [];

}

/* ESCREVER ENGENHEIRO */
function escreverEng() {

  if (!engText) return;

  if (i < fraseEng.length) {

    engText.innerHTML += fraseEng[i++];

    timeouts.push(
      setTimeout(escreverEng, 20)
    );

  }

}

/* ESCREVER PILOTO */
function escreverPil() {

  if (!pilText) return;

  if (j < frasePil.length) {

    pilText.innerHTML += frasePil[j++];

    timeouts.push(
      setTimeout(escreverPil, 20)
    );

  }

}

/* INICIAR */
function iniciarRadio() {

  resetarRadio();

  if(audio){
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  if(card){
    card.classList.add("ativo");
  }

  if(content){
    content.style.height = "0px";
    content.offsetHeight;
  }

  /* WAVE */
  timeouts.push(setTimeout(() => {

    if(card){
      card.classList.add("falando");
    }

  }, 300));

  /* TEXTO ENGENHEIRO */
  timeouts.push(setTimeout(() => {

    if(content){
      content.style.height = "120px";
    }

    if(card){
      card.classList.add("mostrar-texto");
    }

    escreverEng();

  }, 800));

  /* EXPANDE */
  timeouts.push(setTimeout(() => {

    if(content){
      content.style.height = "220px";
    }

  }, 2000));

  /* TEXTO PILOTO */
  timeouts.push(setTimeout(() => {

    escreverPil();

  }, 2100));

  /* PARA ONDA */
  timeouts.push(setTimeout(() => {

    if(card){
      card.classList.remove("falando");
    }

  }, 3000));

  /* SOME */
  timeouts.push(setTimeout(() => {

    if(card){
      card.classList.add("saindo");
    }

  }, 3500));

}

/* CLIQUE */
if(section){

  section.addEventListener(
    "click",
    iniciarRadio
  );

}

/* WAVES */
const spans = document.querySelectorAll(".wave-piastri span");

spans.forEach((span, index) => {

  span.style.setProperty("--i", index);

});

/* =========================================
   GALERIA + LIGHTBOX PIastri
========================================= */

const itensGaleria =
document.querySelectorAll(".item-galeria-piastri");

const lightbox =
document.querySelector(".lightbox-piastri");

const imgLightbox =
document.querySelector(".img-lightbox-piastri");

const fecharLightbox =
document.querySelector(".fechar-piastri");

/* ABRIR LIGHTBOX */
itensGaleria.forEach(item => {

  item.addEventListener("click", () => {

    const img = item.querySelector("img");

    if(!img || !imgLightbox || !lightbox) return;

    imgLightbox.src = img.src;

    lightbox.style.display = "flex";

  });

});

/* FECHAR NO X */
if(fecharLightbox){

  fecharLightbox.onclick = () => {

    if(lightbox){
      lightbox.style.display = "none";
    }

  };

}

/* FECHAR FORA DA IMAGEM */
if(lightbox){

  lightbox.onclick = (e) => {

    if(e.target !== imgLightbox){

      lightbox.style.display = "none";

    }

  };

}


const togglepiastri = document.getElementById("menuTogglepiastri");
const menupiastri = document.getElementById("sideMenupiastri");
const overlaypiastri = document.getElementById("overlaypiastri");
const closepiastri = document.getElementById("closeMenupiastri");

const linksMenupiastri = document.querySelectorAll(".side-menu-piastri a");

function fecharMenupiastri() {
  if (menupiastri) menupiastri.classList.remove("active");
  if (overlaypiastri) overlaypiastri.classList.remove("active");
}

if (togglepiastri) {
  togglepiastri.addEventListener("click", () => {
    menupiastri?.classList.add("active");
    overlaypiastri?.classList.add("active");
  });
}

if (closepiastri) {
  closepiastri.addEventListener("click", fecharMenupiastri);
}

if (overlaypiastri) {
  overlaypiastri.addEventListener("click", fecharMenupiastri);
}

linksMenupiastri.forEach(link => {
  link.addEventListener("click", fecharMenupiastri);
});

(function scrollLinkspiastri() {

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

document.addEventListener("DOMContentLoaded", () => {

  const piastriBanner = document.querySelector(".piastri-banner-bg");

  if (piastriBanner) {

    piastriBanner.addEventListener("mousemove", (e) => {

      const rect = piastriBanner.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      piastriBanner.style.setProperty("--mouse-x", x + "px");
      piastriBanner.style.setProperty("--mouse-y", y + "px");

    });

  }

});



const piastriData=[

{

first:"LANDO",

last:"NORRIS",

img:"lando/head.png",

years:"2023 — 2025",

stats:{

quali:[34,42],

races:[57,68],

podiums:[18,31],

wins:[8,11],

pole:[7,10],

points:[799,994]

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
"piastriYears"
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
"piastriQualiLeft"
),

data.stats.quali[0]

)

animateNumber(

document.getElementById(
"piastriQualiRight"
),

data.stats.quali[1]

)



animateNumber(

document.getElementById(
"piastriRaceLeft"
),

data.stats.races[0]

)

animateNumber(

document.getElementById(
"piastriRaceRight"
),

data.stats.races[1]

)



animateNumber(

document.getElementById(
"piastriPodLeft"
),

data.stats.podiums[0]

)

animateNumber(

document.getElementById(
"piastriPodRight"
),

data.stats.podiums[1]

)



animateNumber(

document.getElementById(
"piastriWinLeft"
),

data.stats.wins[0]

)

animateNumber(

document.getElementById(
"piastriWinRight"
),

data.stats.wins[1]

)



animateNumber(

document.getElementById(
"piastriPoleLeft"
),

data.stats.pole[0]

)

animateNumber(

document.getElementById(
"piastriPoleRight"
),

data.stats.pole[1]

)



animateNumber(

document.getElementById(
"piastriPointsLeft"
),

data.stats.points[0]

)

animateNumber(

document.getElementById(
"piastriPointsRight"
),

data.stats.points[1]

)



setTimeout(()=>{



setBar(

"piastriBarQualiLeft",

data.stats.quali[0],

maxQuali

)

setBar(

"piastriBarQualiRight",

data.stats.quali[1],

maxQuali

)



setBar(

"piastriBarRaceLeft",

data.stats.races[0],

maxRace

)

setBar(

"piastriBarRaceRight",

data.stats.races[1],

maxRace

)



setBar(

"piastriBarPodLeft",

data.stats.podiums[0],

maxPod

)

setBar(

"piastriBarPodRight",

data.stats.podiums[1],

maxPod

)



setBar(

"piastriBarWinLeft",

data.stats.wins[0],

maxWin

)

setBar(

"piastriBarWinRight",

data.stats.wins[1],

maxWin

)



setBar(

"piastriBarPoleLeft",

data.stats.pole[0],

maxPole

)

setBar(

"piastriBarPoleRight",

data.stats.pole[1],

maxPole

)



setBar(

"piastriBarPointsLeft",

data.stats.points[0],

maxPoints

)

setBar(

"piastriBarPointsRight",

data.stats.points[1],

maxPoints

)



},100)

}





function render(
index
){

const d=
piastriData[
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
".piastri-tab"
)

.forEach(

btn=>

btn.classList.remove(
"active"
)

)



document
.querySelector(

`.piastri-tab[data-id="${index}"]`

)

.classList.add(
"active"
)

}





document
.querySelectorAll(
".piastri-tab"
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
".piastri-arrow.left"
)

.onclick=()=>{

current--



if(
current<0
)

current=

piastriData
.length-1



render(
current
)

}



document
.querySelector(
".piastri-arrow.right"
)

.onclick=()=>{

current++



if(

current>=
piastriData.length

)

current=0



render(
current
)

}



render(0)